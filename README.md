# What is NHS login?

[NHS login](https://www.nhs.uk/using-the-nhs/nhs-services/nhs-login/) is a new way for people to prove who they are online, so they can access health and care websites and apps securely and safely.

By integrating NHS login to your website or app you can offer self-service access. Users signed in via NHS login will (optionally) have their ID verified and matched to their NHS number, which your service will receive once the user has logged in.

NHS login is based on [OpenID Connect](https://openid.net/connect/faq/) (OIDC), which is an open standard. You can find out more about our implementation of OIDC by reading the [external interface specification](https://github.com/nhsconnect/nhslogin/raw/master/NHS%20login%20-%20Interface%20Specification%20-%20Federation%20v1.6.docx) (EIS).

# The OIDC login flow

## Overview

The goal of the OIDC authorization code flow is for the relying party (your service) to obtain an ID Token from the OIDC provider (NHS login). The ID Token contains identifying information about the user (claims), such as family name, date of birth, and NHS number. Further claims can be obtained via the userinfo endpoint. The claims returned are based on the scopes specified in the original auth request - see table 21 of the [EIS](https://github.com/nhsconnect/nhslogin/raw/master/NHS%20login%20-%20Interface%20Specification%20-%20Federation%20v1.6.docx) for more information. The ID Token also contains information about authentication mechanisms used and the level to which a user’s identity has been verified - these are called vectors of trust, see the EIS for [more information](https://github.com/nhsconnect/nhslogin/raw/master/NHS%20login%20-%20Interface%20Specification%20-%20Federation%20v1.6.docx).

## Initiating Authorization Flow

The first step involves the client sending a request to NHS login with the desired parameters ([example included here](https://docs.google.com/document/d/1cr5um4tjvWsFYGC-1nqf_uZsKNR1DfVSfvtcvC1XkJQ/edit#heading=h.tq8n3hgq5rl6)). These include your identifying information, such as client_id, and scopes, which will ultimately determine the returned claims.

## Completing Authorization Flow

NHS login will return an authorization code, which you then use to obtain the ID Token. This is done by making a request to the NHS login token endpoint. The token endpoint requires authentication via private_key_jwt  [method](https://openid.net/specs/openid-connect-core-1_0.html#ClientAuthentication). The returned ID Token must be validated before it can be used within your service.

# How can I test NHS login in my service?

We have a stub and a sandpit that development teams can use to familiarise themselves with NHS login.

## NHS login stub

We have developed a lightweight stub that is a representation of our OIDC endpoints. You can find out more about the stub and access it here: [https://stub.signin.nhs.uk/client](https://stub.signin.nhs.uk/client). The stub is entirely self-service and requires no registration.

## Sandpit

Our sandpit is a deployment of much of the production code, with some elements of the registration process removed e.g. matching to NHS number and checking ID documents.

# How do I integrate to the sandpit?

We’ll need to setup your service on NHS login sandpit. Please provide the below information to [engage.nhslogin@nhs.net](mailto:engage.nhslogin@nhs.net?subject=Request%20Sandpit%20Access)
 
Required information:

-   A friendly name of your service e.g. what the public know you as
    
-   Your redirect_uri that we’ll return traffic to
    
-   Your public key for validating signed JWTs - see below for guidance on generating this

  
We aim to process these requests within 24 hours.


You will need to add an OIDC Relying Party library to your service. OpenID certified examples can be found here: [https://openid.net/developers/certified/](https://openid.net/developers/certified/)

We have provided links to a couple of example repos at the bottom of this file. We aim to add more client examples over the coming months. If you have one to add, please raise an issue or PR.

Depending on the library you pick you’ll either need:

-   the configuration endpoint: [https://auth.sandpit.signin.nhs.uk/.well-known/openid-configuration](https://auth.sandpit.signin.nhs.uk/.well-known/openid-configuration)
    
-   or the specific endpoints, which can be found at the configuration endpoint

## Testing the login flow in the Sandpit
Before testing the registration flow you should ensure a login flow can be completed. This involves all of the interaction points, such as the token and userinfo endpoints.

There are a number of users already configured that you can use to test the login flow.   We'll send you the test pack when we configure your client.

## Testing the registration process
We currently have two methods to complete registration:

- Existing GP Online details
- Online ID check with video selfie

We do not support testing of GP Online method in the sandpit, but you can test the online ID checking process.

When registering a new user you will need to provide a unique email address (using the + trick in emails can help if you want to test a number of times). You can reuse your mobile number for multiple users.

Do not use any other personal information when completing registration. This includes NHS number and ID photo - take a picture of anything you like, within reason!

We don’t tend to approve new registrations in this environment. If you need us to do this please get in touch via slack - see below for joining info.

## Testing FIDO UAF flow
Please get in touch if you'd like to add FIDO UAF (TouchID etc.) to your app.

# Developer support

We have a [public slack](https://nhs-login-support-slack-invite.herokuapp.com/) where you can contact us for support.


## Guidance for generating asymmetric key pair

You will need to provide a public key when registering your service. This is required for the authentication mechanism on the token endpoint. The steps below explain how to generate that public key and corresponding private key.


Full details can be found here: [https://en.wikibooks.org/wiki/Cryptography/Generate_a_keypair_using_OpenSSL](https://en.wikibooks.org/wiki/Cryptography/Generate_a_keypair_using_OpenSSL)

  
Generate private_key.pem:

  
    openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt  
    rsa_keygen_bits:2048

  
Generate corresponding public_key.pem:

    openssl rsa -pubout -in private_key.pem -out public_key.pem

  
You should now have your key pair. Only send the contents of public_key.pem file when requesting access to a new environment.

## Guidance on adding the NHS login button to your service
The NHS login button is available as a [downloadable package](https://github.com/nhsconnect/nhslogin/raw/master/nhs-login-buttons.zip).

You must follow the [branding guidelines](http://).

# Example OIDC clients used for NHS login

- https://github.com/initialspark/nhs-login-dotnet-core-example
- https://github.com/TinyMedicalApps/NHS-Login-for-Dart-and-Flutter


