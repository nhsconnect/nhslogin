---
layout: base.njk
title: Scopes and Claims
---

| Scope | Claims included | Low level (P0) | Medium level (P5) | High level (P9) |
| ----- | --------------- | -------------- | ----------------- | --------------- |
| OpenID Connect requests, `openid` | • Issuer identifier for the issuer of the response: `iss` <br>• Partner service identifier: `aud` <br>• Subject identifier for the user at the issuer: `sub` | Yes | Yes | Yes|
| User's default profile, `profile` | • NHS number: `nhs_number` <br> • Surname: `family_name` <br> • Date of birth: `birthdate` <br> • Identity proofing level: `identity_proofing_level` | No | Yes¹ | Yes |
| User's additional demographic information, `profile_extended` | • First name from PDS: `given_name` | No | Yes | Yes |
| Email address, `email` | • Email address: `email` <br> • Verified email address: `email_verified` | Yes | Yes | Yes |
| Phone number, `phone` | • Phone number: `phone` <br> • Verified phone number: `phone_number_verified` | Yes | Yes | Yes² |
| GP surgery information, `gp_integration_credentials` | • Linkage key: `gp_linkage_key` <br> • O.D.S. code: `gp_ods_code` <br> • Account ID: `gp_user_id` | No | No | Yes | 
| GP registration details, `gp_registration_details` | • O.D.S code: `gp_ods_code` | No | Yes | Yes |
| Client specific metadata for the user account, `client_metadata` | • Client user metadata: `client_user_metadata` | Yes | Yes | Yes |

### Note:

Scopes and Claims perform differently for partners depending on their levels of user identity verification and their uplift journeys between the levels of verification. Contact the NHS login onboarding team for more information. 

<dl><dt>1. NHS number is part of a user's claimed identity</dt>
<dt>2. Available only to IM1 enabled partners</dt></dl>

---

Option 2:


| Scope | Claims included | Low level (P0) | Medium level (P5) | High level (P9) |
| ----- | --------------- | -------------- | ----------------- | --------------- |
| OpenID Connect requests (openid)| Issuer identifier for the issuer of the response (iss) <br> Partner service identifier (aud) <br> Subject identifier for the user at the issuer (sub) | Yes | Yes | Yes|
| User's default profile (profile) | NHS number (nhs_number) <br> Surname (family_name) <br> Date of birth (birthdate) <br> Identity proofing level (identity_proofing_level) | No | Yes (NHS number is part of a user's claimed identity) | Yes |
| User's additional demographic information (profile_extended) | First name from PDS (given_name) | No | Yes | Yes |
| Email address (email) | Email address (email) <br> Verified email address (email_verified) | Yes | Yes | Yes |
| Phone number (phone) | Phone number (phone) <br> Verified phone number (phone_number_verified) | Yes | Yes | Yes (Available only to IM1 enabled partners) |
| GP surgery information (gp_integration_credentials) | Linkage key (gp_linkage_key) <br> O.D.S. code (gp_ods_code) <br> Account I.D. (gp_user_id) | No | No | Yes | 
| GP registration details (gp_registration_details) | O.D.S code (gp_ods_code) | No | Yes | Yes |
| Client specific metadata for the user account (client_metadata) | Client user metadata (client_user_metadata) | Yes | Yes | Yes |

### Note:

Scopes and Claims perform differently for partners depending on their levels of user identity verification and their uplift journeys between the levels of verification. Contact the NHS login onboarding team for more information.