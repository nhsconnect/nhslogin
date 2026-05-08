---
layout: base.njk
title: Seting up NHS Login as an identity provider in AWS Cognito
---

## OIDC Flow with examples
   1. Request to AWS Cognito to generate a redirect to NHS Login authorisation
   2. User authenticates with NHS Login
   3. User is redirected to an amazon cognito endpoint, which exchanges an auth-code parameter with NHS Login and retrieves user details for populating the amazon cognito claims
   4. User is redirected to a URL of your choice, with a `?code=<GUID>` URL parameter
   5. This code can be exchanged for credentials (An accessToken, idToken and optionally a refreshToken) from cognito and authenticated user sessions can be setup the same way as your existing cognito integration (hopefully) e.g. the accessToken could be stored as an https-only, secure, cookie.

## Configure AWS
   1. Create lambda
      1. Choose `Author from scratch`
      2. Name the lambda and remember / record this name
      3. Choose `Nodejs 16.x`
      4. Click `Create function`
   2. Create secret
      1. Choose `Other` type of secret
      2. Select the `Plain text` tab
      3. Delete the whole JSON object and replace with ascii armoured private key, plain text, no JSON
         ![example screenshot of redacted ascii armoured private key](nhslogin/images/secrets_manager.png)
   3. Config IAM
      1. Find the role that was created for your new lambda - it should be named similar to lambda name in step `1.2` suffixed with `role-<uid>`
      2. Update the policy for this role or add new permission to allow "secretsmanager:GetSecretValue" permission for the secret created in step `2`
   4. Add code to lambda
      1. Make a copy of the example code in [example-source](https://github.com/nhsconnect/nhslogin/tree/main/src/example-code/aws-cogntio-token-endpoint-decorator/) and replace the secret name in `index.js` and the region in `secretsManager.js`
      2. Modify `manual-upload.sh` with the lambda name from step `1.2` and execute (assumes that the `aws` command line is installed and credentials provided in the standard environment variables) alternatively, manually zip the contents of this folder, after running `yarn install --production` (including the node_modules folder) and upload to the lambda create in step `1`
   5. Create an API Gateway endpoint to trigger the lambda created in step `1`
      1. It should be an HTTP endpoint.
      2. It should have an Integration setup to point at your lambda created in step `1`
      ![screenshot](nhslogin/images/api-gateway-1.png)
   6. Modify or create a user pool (Steps to create a user pool are not covered here) and select the `Sign-In experience` configuration tab
      1. Add an identity provider to within the Federated Identity provider sign-in second
      2. Setup as per 
         ![screenshot](nhslogin/images/cognito_1.png)
         ![screenshot](nhslogin/images/cognito_2.png)
         ![screenshot](nhslogin/images/cognito_3.png)
      3. Select the `App integration` configuration tab and find the `App clients and analytics` section then either create or modify an app client (If you have an existing authentication system with access/id tokens retrieved via an existing app client, you should ideally modify that one, this way, the credentials that are returned by the OAuth2/OIDC flow will be interchangeable with your existing credentials)
      4. Configure a custom domain for the Hosted-UI/OAuth2 process e.g. `https://my-madeup-domain-dev.auth.eu-west-2.amazoncognito.com`
      5. Edit the  `Hosted UI` configuration section
         1. Under `Allowed callback URLs` add the URL of the endpoint of your own service which will recieve the OIDC auth code and exchange for tokens. For example this might be `https://myapplication.com/nhs-login-exchange/` 
         2. Under `Identity providers` choose the identity provider created in step `6.2`
         3. Under `OAuth 2.0 grant types` choose `Authorization code grant` 
         4. Under `OpenID Connect scopes` chose at least `Email` `OpenId` and `Profile`
         5. Configure any custom scopes you need (for example of you use resource servers)
      6. At this point clicking `View Hosted UI` will either launch a new tab directly to the NHS Login sandpit or launch a UI which has a button which redirects the user to the NHS Login.
      7. After completing the authentication flow the redirect should take the user back to the endpoint defined in step `6.5.1` whereupon the code can be sent to the token endpoint of the custom domain, that was set up in step `6.4` e.g. `https://my-madeup-domain-dev.auth.eu-west-2.amazoncognito.com/oauth2/token`
        
          I've found that when doing this the accessToken, idToken and refreshToken returned are not in the same format as those retrieved by doing an InitiateAuth command using the Java SDK.  However if the token has a refreshToken, the exchange of that token via the regular means, yields a token in the "correct" format complete with any claims that have been setup.