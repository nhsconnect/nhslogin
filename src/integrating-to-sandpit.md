---
layout: base.njk
title: How do I integrate to the sandpit?
---

We’ll need to setup your service on NHS login sandpit. Please provide the below information to engage.nhslogin@nhs.net

 Required information:

A friendly name of your service e.g. what the public know you as

Your redirect_uri that we’ll return traffic to

Your public key for validating signed JWTs - see below for guidance on generating this


 We aim to process these requests within 24 hours.

 You will need to add an OIDC Relying Party library to your service. OpenID certified examples can be found [here](https://openid.net/developers/certified).

 We have provided links to a couple of example repos at the bottom of this file. We aim to add more client examples over the coming months. If you have one to add, please raise an issue or PR.

 Depending on the library you pick you’ll either need:

the [configuration endpoint](https://auth.sandpit.signin.nhs.uk/.well-known/openid-configuration).

or the specific endpoints, which can be found at the configuration endpoint


 ## Testing the login flow in the Sandpit

 Before testing the registration flow you should ensure a login flow can be completed. This involves all of the interaction points, such as the token and userinfo endpoints.

  There are a number of users already configured that you can use to test the login flow. We'll send you the test pack when we configure your client.

 ## Testing the registration process

We currently have two methods to complete registration:


Existing GP Online details
Online ID check with video selfie


 We do not support testing of GP Online method in the sandpit, but you can test the online ID checking process.

 When registering a new user you will need to provide a unique email address (using the + trick in emails can help if you want to test a number of times). You can reuse your mobile number for multiple users.

 Do not use any other personal information when completing registration. This includes NHS number and ID photo - take a picture of anything you like, within reason!

 We don’t tend to approve new registrations in this environment. If you need us to do this please get in touch via slack - see below for joining info.

