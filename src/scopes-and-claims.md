---
layout: base.njk
title: Scopes and Claims
---

| Scope | Claims included | Low level (P0) | Medium level (P5) | High level (P9) |
| ----- | --------------- | -------------- | ----------------- | --------------- |
| OpenID Connect requests: <br>`openid` | • Issuer identifier for the issuer of the response: `iss` <br><br>• Partner service identifier: `aud` <br><br>• Subject identifier for the user at the issuer: `sub` | Yes | Yes | Yes|
| User's default profile: <br>`profile` | • NHS number: `nhs_number` <br><br> • Surname: `family_name` <br><br> • Date of birth: `birthdate` <br><br> • Identity proofing level: `identity_proofing_level` | No | Yes<span style="vertical-align:super;font-size:70%">1</span> | Yes |
| User's basic demographics: <br>`basic_demographics`<span style="vertical-align:super;font-size:70%">2</span> | • Surname: `family_name` <br><br> • Date of birth: `birthdate` <br><br> • Identity proofing level: `identity_proofing_level` | No | Yes | Yes |
| User's additional demographic information:<br> `profile_extended` | • First name from PDS: `given_name` | No | Yes | Yes |
| Email address:<br> `email` | • Email address: `email` <br><br> • Verified email address: `email_verified` | Yes | Yes | Yes |
| Phone number:<br> `phone` | • Phone number: `phone_number` <br><br> • Verified phone number: `phone_number_verified` <br><br> • Phone number matched to PDS: `phone_number_pds_matched`<span style="vertical-align:super;font-size:70%">3</span> | Yes | Yes | Yes |
| GP registration details: <br>`gp_registration_details`<span style="vertical-align:super;font-size:70%">4</span> | • O.D.S code: `gp_ods_code` | No | Yes | Yes |
| GP surgery information:<br> `gp_integration_credentials` | • Linkage key: `gp_linkage_key` <br><br> • O.D.S. code: `gp_ods_code` <br><br> • Account ID: `gp_user_id` | No | No | Yes<span style="vertical-align:super;font-size:70%">5</span> | 
| Client specific metadata for the user account:<br> `client_metadata`<span style="vertical-align:super;font-size:70%">6</span> | • Client user metadata: `client_user_metadata` | Yes | Yes | Yes |

1. NHS number is part of a user’s claimed identity. The user must not be given or presented with the NHS number which has been traced by NHS login. NHS login must have a clear understanding of the use case of the NHS number, and will confirm that the use of this is within the tolerance level of the NHS login service.
2. User basic demographics and default profile scopes are mutually exclusive. Both cannot be requested together.
3. This claim  will be `true` if the phone a used for 2FA matches a contact number on PDS.
4. This scope is not required if the `gp_integration_credentials` scope is requested.
5. Available only to IM1 enabled partners and protected by high level of authentication.
6. This is a bespoke scope which should only be selected once agreed by NHS login.

### Note:

A user's gender or sex are not available as claims for NHS login.

Scopes and claims perform differently for partners supporting multiple levels of user identity verification and [step-up journeys](https://nhsconnect.github.io/nhslogin/step-up-p5-p9/) between the different levels of verification. Contact the NHS login onboarding team for more information.

Please refer to the [external interface specification](https://nhsconnect.github.io/nhslogin/interface-spec-doc/) Section 3.4.1.1  and Section 3.6.2.1 for further technical details.

