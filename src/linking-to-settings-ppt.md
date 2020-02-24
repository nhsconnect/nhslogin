---
layout: base.njk
title: Linking to “Manage NHS login Settings” Page (Version 1.0)
---
## Introduction

**NHS login currently allows users to:**
-  change their email address
- change their password
- change their mobile phone number
- delete their NHS login

## Technical Details

NHS login supports the parameter asserted_login_identity as part of the OIDC flow. This allows the user to seamlessly access the “Manage NHS login Settings” functionality from the partner service without the need for re-authentication. 
***
1. asserted_login_identity will be a querystring parameter 
2. parameter content is a signed jwt
3. the asserted_login_identity token is a one-time token(TTL 60 sec)
***
Refer to the **NHS login Interface Specification – Federation** document for technical details. In the context of document :
- RP1 is partner service 
- RP2 is NHS login


## Technical Details - Parameter : asserted_login_identity

|asserted_login_identity|

