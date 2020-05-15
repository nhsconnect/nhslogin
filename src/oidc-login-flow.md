---
layout: base.njk
title: The OIDC login flow
---

 ## Overview
 The goal of the OIDC **authorisation code flow** is for the relying party (your service) to obtain an ID Token from the OIDC provider (NHS login).
 
 The ID Token contains key information, such as **sub** and identifying information about the user (claims), such as family name, date of birth, and NHS number. Further claims can be obtained via the userinfo endpoint. 
 
 The claims returned are based on the scopes specified in the original auth request - [see table 11 of the EIS](https://nhsconnect.github.io/nhslogin/interface-spec-doc/) for more information. 
 
 The ID Token also contains information about authentication mechanisms used and the level to which a user’s identity has been verified - these are called vectors of trust, [see the EIS for more information](https://nhsconnect.github.io/nhslogin/interface-spec-doc/).

 ## Initiating authorisation flow
 The first step involves the client sending a request to NHS login with the desired parameters. These include your identifying information, such as client_id, [Vectors of Trust](https://tools.ietf.org/html/rfc8485), and scopes, which will ultimately determine the available claims.

 ## Completing authorisation flow
 NHS login will return an authorisation code, which you then use to obtain the ID Token. This is done by making a request to the NHS login token endpoint. The token endpoint requires authentication via private_key_jwt [method](https://openid.net/specs/openid-connect-core-1_0.html#ClientAuthentication). The returned ID Token must be validated before it can be used within your service.

