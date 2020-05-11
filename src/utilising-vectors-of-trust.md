---
layout: base.njk
title: Utilising vectors of trust
---

## Requesting Vectors of Trust values

The client MAY request a set of acceptable VoT values with the "vtr" (vector of trust request) claim request as part of the Authentication
Request. The value of this field is an array of JSON strings, each string identifying an acceptable set of vector components.

The component values within each vector are ANDed together while the separate vectors are ORed together. For example, a list of vectors in
the form `["P9.Cp.Cd ", "P9.Ck"\]` is stating that either the full set of "P9 AND Cp AND Cd" simultaneously OR the full set of "P9 AND Ck"
simultaneously are acceptable for this transaction.

Vector request values MAY omit components, indicating that any value is acceptable for that component category, including omission of that
component in the response vector.

Omission of vtr will result in a default value of `[“P9.Cp.Cd”,“P9.Cp.Ck”,“P9.Cm”]` being assumed.

## Returned Vectors of Trust values

The vector is sent as a string within the "vot" (vector of trust) claim in the ID and Access tokens. The trustmark that applies to this vector
is sent as an HTTPS URL in the "vtm" (vector trust mark) claim to provide context to the vector.

For example, part of the body of an ID token claiming "Medium IDV, authenticated user via password and registered device
identifier" will look like this JSON object payload of the ID token.

```
{
   "iss": "https://auth.login.nhs.uk/",
   "vot": "P5.Cp.Cd",
   "vtm": "https://auth.login.nhs.uk/trustmark/login.nhs.uk"
}
```

The body of the token is signed using JOSE, as per the OpenID Connect specification. By putting the "vot" and "vtm" values inside the token,
the vector and its context are strongly bound to the federated credential represented by the token.

## Profiles

Vectors can be combined to create profiles.

| Vector     | Description                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| “P0.Cp”    | No Identity verification, user authenticated using password                                                                    |
| “P5.Cp.Cd” | Medium Identity verification, user authenticated using password and enrolled device (2FA)                                      |
| “P5.Cp.Ck” | Medium Identity verification, user authenticated using password and shared key within a device (2FA)                           |
| “P9.Cp.Cd” | High Identity verification, user authenticated using password and enrolled device (2FA)                                        |
| “P9.Cp.Ck” | High Identity verification, user authenticated using password and shared key within a device (2FA)                             |
| “P9.Cm”    | High Identity verification, user authenticated via asymmetric key within a device (2FA) (for example, FIDO UAF authentication) |

### Example 1 – Partner Service provides access to sensitive data

This example maps onto archetypes A1, A4, A5, A6, A7 within the standard 'DCB3051'.

The service requires High Verification and High Authentication. The service sends the following as acceptable Vectors in the ‘vtr’
parameter:

`\[“P9.Cp.Cd”,“P9.Cp.Ck”,“P9.Cm”\]`

### Example 2 – Partner Service provides access to basic data (not sensitive)

This example maps onto archetype A3 within the standard 'DCB3051'.

The service requires Medium Verification and High Authentication. The service sends the following as acceptable Vectors in
the ‘vtr’ parameter:

`\[“P5.Cp.Cd”, “P5.Cp.Ck” , “P5.Cm”, “P9.Cp.Cd”, “P9.Cp.Ck”, “P9.Cm”\]`

## Single Sign-on

If the user’s current session (if any), does not meet the requested Vectors of Trust (vtr) in the incoming request, then the user
will be required to sign-in, in order to meet the requested vectors.

Also note that Single sign-on behaviour, or to refuse SSO-behaviour, can be controlled using the `prompt` parameter on the initial authorisation
request.

## Trustmark

The Trustmark provides a list of claims that NHS login supports. This enables the client to verify which components of a trust framework NHS
login supports and hence their trustworthiness

The NHS login Trustmark is self-hosted.
