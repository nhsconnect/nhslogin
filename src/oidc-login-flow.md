---
layout: base.njk
title: The OIDC login flow
---

 ## Overview
 The goal of the OIDC authorisation code flow is for the relying party (your service) to obtain an ID Token from the OIDC provider (NHS login).
 
 The ID Token contains identifying information about the user (claims), such as family name, date of birth, and NHS number. Further claims can be obtained via the userinfo endpoint. 
 
 The claims returned are based on the scopes specified in the original auth request - see table 11 of the [EIS](https://github.com/nhsconnect/nhslogin/blob/master/NHS%20login%20-%20Interface%20Specification%20-%20Federation%20v1.8.docx?raw=true) for more information. 
 
 The ID Token also contains information about authentication mechanisms used and the level to which a user’s identity has been verified - these are called vectors of trust, see the EIS for [more information](https://github.com/nhsconnect/nhslogin/blob/master/NHS%20login%20-%20Interface%20Specification%20-%20Federation%20v1.8.docx?raw=true).

 ## Initiating authorisation Flow
 The first step involves the client sending a request to NHS login with the desired parameters ([example included here](https://docs.google.com/document/d/1cr5um4tjvWsFYGC-1nqf_uZsKNR1DfVSfvtcvC1XkJQ/edit#heading=h.tq8n3hgq5rl6)). These include your identifying information, such as client_id, and scopes, which will ultimately determine the returned claims.

 ## Completing authorisation Flow
 NHS login will return an authorisation code, which you then use to obtain the ID Token. This is done by making a request to the NHS login token endpoint. The token endpoint requires authentication via private_key_jwt [method](https://openid.net/specs/openid-connect-core-1_0.html#ClientAuthentication). The returned ID Token must be validated before it can be used within your service.

