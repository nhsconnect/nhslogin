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
| Phone number:<br> `phone` | • Phone number: `phone` <br><br> • Verified phone number: `phone_number_verified` | Yes | Yes | Yes |
| GP registration details: <br>`gp_registration_details` | • O.D.S code: `gp_ods_code` | No | Yes | Yes |
| GP surgery information:<br> `gp_integration_credentials` | • Linkage key: `gp_linkage_key` <br><br> • O.D.S. code: `gp_ods_code` <br><br> • Account ID: `gp_user_id` | No | No | Yes² | 
| Client specific metadata for the user account:<br> `client_metadata`³ | • Client user metadata: `client_user_metadata` | Yes | Yes | Yes |

<dl>
<dt>1. NHS number is part of a user’s claimed identity. The user must not be given or presented with the NHS number which has been traced by NHS login. NHS login must have a clear understanding of the use case of the NHS number, and will confirm that the use of this is within the tolerance level of the NHS login service.</dt>
<dt>2. Available only to IM1 enabled partners and protected by high level of authentication.</dt>
<dt>3. This is a bespoke scope which should only be selected once agreed by NHS login.</dt>
<dl>

### Note:

A user's gender or sex are not available as claims for NHS login.

Scopes and claims perform differently for partners supporting multiple levels of user identity verification and [step-up journeys](https://nhsconnect.github.io/nhslogin/step-up-p5-p9/) between the different levels of verification. Contact the NHS login onboarding team for more information.

Please refer to the [external interface specification](https://nhsconnect.github.io/nhslogin/interface-spec-doc/) Section 3.4.1.1  and Section 3.6.2.1 for further technical details.

