---
layout: base.njk
title: 5 Data view 
---

## 5.1 Vectors of Trust

References: 
- [DCB3051 Identity Verification and Authentication Standard for Digital Health and Care Services](http://digital.nhs.uk/isce/publication/dcb3051)
- [International Government Assurance Profile (iGov)](https://openid.bitbucket.io/iGov/openid-igov-profile-id1.html)
- [RFC8485 - Vectors of Trust](https://tools.ietf.org/html/draft-richer-vectors-of-trust-09)

NHS login supports Vectors of Trust for Identification Verification and Authentication. Credential Management and Assertion Presentation are out of scope.

### 5.1.1 Verification of Identity Levels

NHS login supports the following levels of identification verification. These are based upon [DCB3051 Identity Verification and Authentication Standard for Digital Health and Care Services](https://openid.bitbucket.io/iGov/openid-igov-profile-id1.html).

| Value | Description | 
| ----- | ----------- | 
| `P0`  | No identity proofing <br> This maps to 'Verification - Low' within [DCB3051](https://openid.bitbucket.io/iGov/openid-igov-profile-id1.html) |
| `P5`  | Knowledge-based verification ONLY <br> This maps to 'Verification - Medium' within [DCB3051](https://openid.bitbucket.io/iGov/openid-igov-profile-id1.html) |
| `P9`  | Physical comparison <br> This maps to 'Verification - High' within [DCB3051](https://openid.bitbucket.io/iGov/openid-igov-profile-id1.html) | 

### 5.1.2 Authentication Credentials

NHS login supports the following types of authentication credentials.  Note that the credential component may occur more than once

| Value | Description | 
| ----- | ----------- | 
| `Cp`  | Password-based <br>The user is in possession of a secret (for example a password, PIN, etc) belonging to the legitimate account holder |
| `Cd`  | Registered Device <br>The user is in possession of a device which has previously been associated with their account – delivery/use of the device is by identifiers only |
| `Ck`  | Shared Cryptographic key within a Registered Device <br>The user is in possession of a device which has previously been associated with their account – delivery/use of the device is by a **shared** key | 
| `Cm`  | Asymmetric Cryptographic key within a Registered Device <br>The user is in possession of a device which has previously been associated with their account – delivery/use of the device is by cryptographic proof of key possession using **asymmetric** key, such as a FIDO-compliant device |

### 5.1.3	Requesting Vectors of Trust values

Vector of Trust (VoT) is a combination of - Identity Verification (defined in [section 5.1.1 - Verification of Identity Levels](https://nhsconnect.github.io/nhslogin/interface-spec-doc-5)) and Authentication (defined in [section 5.1.2 – Authentication Credentials](https://nhsconnect.github.io/nhslogin/interface-spec-doc-5)) levels.

The client **MAY** request a set of acceptable VoT values with the `vtr` (vector of trust request) claim request as part of the Authentication Request. The value of this field is an array of JSON strings, each string identifying an acceptable set of vector components. The component values within each vector are **AND**ed together while the separate vectors are **OR**ed together.  For example, a list of vectors in the form `["P9.Cp.Cd ", "P9.Ck"]` is stating that either the full set of "P9 **AND** Cp **AND** Cd" simultaneously **OR** the full set of "P9 **AND** Ck" simultaneously are acceptable for this transaction.

The requested set of VoT, **SHOULD** only contain one value for Identity Verification component, combined with one or more values of the Authentication component.

Client **SHOULD** only request the lowest level of acceptable Identity Verification, within the VoT set. Vector request values **MAY** omit components, indicating that any value is acceptable for that component category, including omission of that component in the response vector.

### 5.1.4	Returning Vectors of Trust values

The vector is sent as a string within the `vot` (vector of trust) claim in the ID and Access tokens. The trustmark that applies to this vector **SHALL** be sent as an HTTPS URL in the `vtm` (vector trust mark) claim to provide context to the vector.

For example, part of the body of an ID token claiming "Medium Assurance Identity, authenticated user via password and registered device identifier" could look like this JSON object payload of the ID token.

``` html
{
…
…
  "iss": " https://auth.login.nhs.uk/",
  "vot": "P5.Cp.Cd",
  "vtm": https://auth.login.nhs.uk/trustmark/login.nhs.uk
…
…
}
```

The body of the token is signed using JOSE, as per the OpenID Connect specification. By putting the "vot" and "vtm" values inside the token, the vector and its context are strongly bound to the federated credential represented by the token.

### 5.1.5 Trustmark

References
- [RFC8485 - Vectors of Trust](https://tools.ietf.org/html/draft-richer-vectors-of-trust-09), section 5

The Trustmark provides a list of claims that NHS login supports. This enables the client to verify which components of a trust framework NHS login supports and hence their trustworthiness.

The NHS login Trustmark will be self-hosted.

The following is a non-normative example a Trustmark based on [section 5.1.3 - Requesting Vectors of Trust values](https://nhsconnect.github.io/nhslogin/interface-spec-doc-5) and [section 5.1.4 - Returning Vectors of Trust values](https://nhsconnect.github.io/nhslogin/interface-spec-doc-5) above:

``` html
{
  "idp": "https://auth.login.nhs.uk/",
  "trustmark_provider": "https://auth.login.nhs.uk/",
  "P": ["P0", "P3", "P5", "P6", "P7", "P9"],
  "C": ["Cp", "Cd", "Ck", "Cm"]
}
```

### 5.1.6	Profiles

Aligning the above to the standard [DCB3051 Identity Verification and Authentication Standard for Digital Health and Care Services](http://digital.nhs.uk/isce/publication/dcb3051) brings a standard set of vectors supported by the NHS login Service, described in the table below.

| Vector       | Description |
| ------------ | ----------- |
| `“P0.Cp”`    | Low Identity verification, <br>user authenticated using password |
| `“P0.Cp.Cd”` | Low Identity verification, <br>user authenticated using password <br>and enrolled device (2FA) |
| `“P0.Cp.Ck”` | Low Identity verification, <br>user authenticated using password <br>and shared key within a device (2FA) | 
| `“P5.Cp.Cd”` | Medium Identity verification, <br>user authenticated using password <br>and enrolled device (2FA) |
| `“P5.Cp.Ck”` | Medium Identity verification, <br>user authenticated using password <br>and shared key within a device (2FA) |
| `“P5.Cm”`    | Medium Identity verification, <br>user authenticated via asymmetric <br>key within a device (2FA) (for example, <br>FIDO UAF authentication) |
| `“P9.Cp.Cd”` | High Identity verification, <br>user authenticated using password <br>and enrolled device (2FA) |
| `“P9.Cp.Ck”` | High Identity verification, <br>user authenticated using password <br>and shared key within a device (2FA) |
| `“P9.Cm”`    | High Identity verification, <br>user authenticated via asymmetric <br>key within a device (2FA) (for example, <br>FIDO UAF authentication) |


**5.1.6.1	Example 1 – Partner Service provides access to sensitive data**

This example maps onto archetypes A1, A4, A5, A6, A7 within the standard [DCB3051 Identity Verification and Authentication Standard for Digital Health and Care Services](http://digital.nhs.uk/isce/publication/dcb3051).

The service requires High Verification and High Authentication. The service sends the following as acceptable Vectors in the `vtr` parameter:

`“[“P9.Cp.Cd”,“P9.Cp.Ck”,“P9.Cm”]”`

**5.1.6.2	Example 2 – Partner Service provides access to basic data (not sensitive)**

This example maps onto archetype A3 within the standard [DCB3051 Identity Verification and Authentication Standard for Digital Health and Care Services](http://digital.nhs.uk/isce/publication/dcb3051). 

The service requires Medium Verification and High Authentication, with SSO allowed. The service sends the following as acceptable Vectors in the `vtr` parameter:

`“[“P5.Cp.Cd”, “P5.Cp.Ck”,“P5.Cm”]”`

**5.1.6.3	Example 3 – Partner Service provides access to both basic data (not sensitive) and sensitive data**

This example maps onto a service offering multiple features, of which some require basic user data, and some require sensitive user data.

Service requests NHS login for Medium Verification (P5) and High Authentication for a user. The service sends the following as acceptable Vectors in the `vtr` parameter:

`“[“P5.Cp.Cd”,“P5.Cp.Ck”,“P5.Cm”]”`

Successfully authenticated user can either be P5 or P9 in terms of identity verification.

For a P9 user (high identity verification) the service can offer all the functionalities, as the user meets service requirements of High Verification and High Authentication.
 
For a P5 user (medium identity verification) the service offers basic features at the user’s initial login as the user meets service requirements of Medium Verification and High Authentication only.

When a P5 user, attempts to access other features supported by sensitive data then the service requires High Verification and High Authentication, with SSO allowed. The service sends the following as acceptable Vectors in the `vtr` parameter:

`“[“P9.Cp.Cd”,“P9.Cp.Ck”,“P9.Cm”]”`

**5.1.6.4	The user is prompted to undertake a verification step-up journey to take the user verification level from Medium to High.Single Sign-on**

If the user’s current sign-on session (if any), does not meet the requested Vectors of Trust (`vtr`) in the incoming request, then the user will be required to sign-in, in order to meet the requested vectors.

Also note that Single sign-on behaviour, or to refuse SSO-behaviour, can be controlled using the `prompt` parameter on the initial authorisation request – see [section 3.4.1 - INSERT NAME](https://nhsconnect.github.io/nhslogin/interface-spec-doc-3).