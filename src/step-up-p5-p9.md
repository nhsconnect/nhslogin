---
layout: base.njk
title: Medium (P5) to High (P9) Step-up Verification Journey 
---

## Introduction - Medium Level of Verification (P5)

NHS login supports multiple levels of identity verification (low, medium and high).
These are based upon [DCB3051 Identity Verification and Authentication Standard for Digital Health and Care Services](http://digital.nhs.uk/isce/publication/dcb3051).

In the medium level (P5) identity verification journey, the user is expected to provide only basic identity related information. User can provide either (NHS number & date of birth) or (full name, date of birth & postcode). The user details are matched against PDS (Personal Demographic Service) to confirm the user’s identity to medium level. 

This functionality minimises sign-up friction often experienced by partners offering non-sensitive data, based services to users. 

NHS login offers partners functionality to initiate, Medium level (P5) to High level (P9) Identity step-up verification journey, if required.

---

## Partner Service provides users access to both basic data (not sensitive) and sensitive data

A service offering multiple features to a user, of which some require basic user data, and some require sensitive user data.

Service requests NHS login for Medium Verification (P5) and High Authentication for a user. Successfully authenticated user can  either be P5 or P9 in terms of identity verification. 

For a P9 user (high identity verification) the service can offer all the functionalities, as the user meets service requirements of High Verification and High Authentication 
 
For a P5 user (medium identity verification) the service offers basic features at the user’s initial login as the user meets service requirements of Medium Verification and High Authentication only. 
 
When a P5 user, attempts to access other features supported by sensitive data then the service requires High Verification and High Authentication.

Service prompts the user to undertake a NHS login verification step-up journey to take the user verification level from Medium to High.

---
## Technical Details 

Note: Please refer to NHS login [external interface specification](https://nhsconnect.github.io/nhslogin/interface-spec-doc/), for most up-to-date technical details.

### identity_proofing_level

`identity_proofing_level` claim describes the maximum identity verification level the user has achieved. 

The claim is included in both the ID Token and userinfo when requesting `profile` scope.

It enable relying parties requesting P5 (medium level of identity verification) to determine if other claims returned have been validated to P9 level, or merely “claimed” by a (P5) user. 

This also enables relying parties to initiate Medium level (P5) to High level (P9) Identity step-up verification journey. 

### Vector of Trust (VoT)

A service will request a set of VoT, which SHOULD only contain one value for Identity Verification component, combined with one or more values of the Authentication component.

Service SHOULD only request the lowest level of acceptable Identity Verification, within the VoT set.

**Service requesting Medium level identity verification (P5)**
Example of acceptable Vectors in the ‘vtr’ parameter:  
`[“P5.Cp.Cd”, “P5.Cp.Ck”,“P5.Cm”]`

**Step-up from Medium (P5) to High (P9) level  identity verification**
Example of acceptable Vectors in the ‘vtr’ parameter:  
`[“P9.Cp.Cd”, “P9.Cp.Ck”,“P9.Cm”]`

### Requested Scopes and Claims returned

When a partner service requests Medium level identity verification (P5) in the ‘vtr’ parameter, successfully authenticated user can either be P5 or P9. 

For P9 (high level) user, all claims corresponding to requested scopes will be populated according to the rules described in [external interface specification](https://nhsconnect.github.io/nhslogin/interface-spec-doc/). 

However for P5 (medium level) user, *not* all claims corresponding to requested scopes will be populated, as the user has not been verified to the sufficient level of identity required for them.

### Single Sign-On

NHS login supports two parameters asserted_login_identity and prompt as part of the OIDC flow which allows the user to seamlessly access, Medium level (P5) to High level (P9) Identity step-up verification journey from the partner service without the need for re-authentication. 

1. `asserted_login_identity` will be a querystring parameter 
2. parameter content is a signed jwt
3. the `asserted_login_identity` token is a one-time token (TTL 60 sec)

Refer to the NHS login Interface Specification – Federation document for technical details. In the context of document : RP1 is partner service, RP2 is NHS login.



### Flow diagram 

![P5 - P9 Step up verification flow](nhslogin/images/P5-P9Step-upflow.png "P5 - P9 Step up verification flow")

