---
layout: base.njk
title: Scopes and Claims
---

| Scope | Claims included | Low level (P0) | Medium level (P5) | High level (P9) |
| ----- | --------------- | -------------- | ----------------- | --------------- |
| OpenID Connect requests: <br>`openid` | • Issuer identifier for the issuer of the response: `iss` <br><br>• Partner service identifier: `aud` <br><br>• Subject identifier for the user at the issuer: `sub` | Yes | Yes | Yes|
| User's default profile: <br>`profile` | • NHS number: `nhs_number` <br><br> • Surname: `family_name` <br><br> • Date of birth: `birthdate` <br><br> • Identity proofing level: `identity_proofing_level` | No | Yes¹ | Yes |
| User's additional demographic information:<br> `profile_extended` | • First name from PDS: `given_name` | No | Yes | Yes |
| Email address:<br> `email` | • Email address: `email` <br><br> • Verified email address: `email_verified` | Yes | Yes | Yes |
| Phone number:<br> `phone` | • Phone number: `phone` <br><br> • Verified phone number: `phone_number_verified` | Yes | Yes | Yes² |
| GP surgery information:<br> `gp_integration_credentials` | • Linkage key: `gp_linkage_key` <br><br> • O.D.S. code: `gp_ods_code` <br><br> • Account ID: `gp_user_id` | No | No | Yes | 
| GP registration details: <br>`gp_registration_details` | • O.D.S code: `gp_ods_code` | No | Yes | Yes |
| Client specific metadata for the user account:<br> `client_metadata` | • Client user metadata: `client_user_metadata` | Yes | Yes | Yes |

### Note:

Scopes and Claims perform differently for partners depending on their levels of user identity verification and their uplift journeys between the levels of verification. Contact the NHS login onboarding team for more information. 

<dl><dt>1. NHS number is part of a user's claimed identity</dt>
<dt>2. Available only to IM1 enabled partners</dt></dl>
