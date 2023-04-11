---
layout: base.njk
title: Introduction to Vectors of Trust
---

Vectors of Trust [(VoT RFC 8485)](https://tools.ietf.org/html/rfc8485) allows you to request the appropriate levels of authentication and identity verification required for users to gain access to your service. This will be determined by the transactions the user performs in your service.

Your service should include a vector value in the query string as part of the initialisation of the OIDC flow. 

---

## Authentication credentials

NHS login supports the following types of authentication credentials. Note that the credential component may occur more than once.

<table role="table" class="nhsuk-table-responsive">
  <caption class="nhsuk-table__caption">NHS login Authentication Context Class</caption>
  <thead role="rowgroup" class="nhsuk-table__head">
    <tr role="row">
      <th role="columnheader" class="" scope="col">
        <a href="https://digital.nhs.uk/data-and-information/information-standards/information-standards-and-data-collections-including-extractions/publications-and-notifications/standards-and-collections/dcb3051-identity-verification-and-authentication-standard-for-digital-health-and-care-services">DCB3501</a> Ref
      </th>
      <th role="columnheader" class="" scope="col">
        Authentication type
      </th>
      <th role="columnheader" class="" scope="col">
        Basic description
      </th>
    </tr>
  </thead>
  <tbody class="nhsuk-table__body">
    <tr role="row" class="nhsuk-table__row">
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading"><a href="https://digital.nhs.uk/data-and-information/information-standards/information-standards-and-data-collections-including-extractions/publications-and-notifications/standards-and-collections/dcb3051-identity-verification-and-authentication-standard-for-digital-health-and-care-services">DCB3501</a> Ref </span>Low
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Authentication type </span>Cp - Email address and password
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Basic description </span>The user is asked to provide their email address and a password.
      </td>
    </tr>
    <tr role="row" class="nhsuk-table__row">
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading"><a href="https://digital.nhs.uk/data-and-information/information-standards/information-standards-and-data-collections-including-extractions/publications-and-notifications/standards-and-collections/dcb3051-identity-verification-and-authentication-standard-for-digital-health-and-care-services">DCB3501</a> Ref </span>Low
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Authentication type </span>Cd - Registered device
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Basic description </span>The user is in possession of a device that has been associated with their NHS login. The association can be made with a One Time Password (OTP) text message, or a remembered browser.
      </td>
    </tr>
    <tr role="row" class="nhsuk-table__row">
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading"><a href="https://digital.nhs.uk/data-and-information/information-standards/information-standards-and-data-collections-including-extractions/publications-and-notifications/standards-and-collections/dcb3051-identity-verification-and-authentication-standard-for-digital-health-and-care-services">DCB3501</a> Ref </span>High
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Authentication type </span>Ck - Shared cryptographic key within a registered device
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Basic description </span>The user is in posession of a device that has been associated with their NHS login. The delivery or use of the device is shared by a key.<br>
        <em>This is yet to be implemented.</em>
      </td>
    </tr>
    <tr role="row" class="nhsuk-table__row">
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading"><a href="https://digital.nhs.uk/data-and-information/information-standards/information-standards-and-data-collections-including-extractions/publications-and-notifications/standards-and-collections/dcb3051-identity-verification-and-authentication-standard-for-digital-health-and-care-services">DCB3501</a> Ref </span>High
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Authentication type </span>Cm - Asymmetric Cryptographic key within a registered device
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Basic description </span>The user is in possession of a device that has been associated with their NHS login. The delivery or use of the device is by cryptographic proof of key possession using asymmetric key, like a FIDO-compliant device.
      </td>
    </tr>
  </tbody>
</table>

---

## Identity verification levels

The NHS login supports the following levels of identification verification. These are based upon [DCB3051 Identity Verification and
Authentication Standard for Digital Health and Care Services](https://digital.nhs.uk/data-and-information/information-standards/information-standards-and-data-collections-including-extractions/publications-and-notifications/standards-and-collections/dcb3051-identity-verification-and-authentication-standard-for-digital-health-and-care-services).


<table role="table" class="nhsuk-table-responsive">
  <caption class="nhsuk-table__caption">NHS login identity verification levels</caption>
  <thead role="rowgroup" class="nhsuk-table__head">
    <tr role="row">
      <th role="columnheader" class="" scope="col">
        Proofing level
      </th>
      <th role="columnheader" class="" scope="col">
        Basic description
      </th>
    </tr>
  </thead>
  <tbody class="nhsuk-table__body">
    <tr role="row" class="nhsuk-table__row">
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Proofing level </span>Low (P0) <br>Low identity proofing
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Basic description </span>A user has verified ownership of an email address and mobile phone number.
      </td>
    </tr>
    <tr role="row" class="nhsuk-table__row">
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Proofing level </span>Medium (P5) <br>Basic identity information
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Basic description </span>The user has provided some information that has been checked to correspond to a record on <a href="https://digital.nhs.uk/services/demographics">PDS</a>.<br>This maps to ‘Verification – Medium’ within <a href="https://digital.nhs.uk/data-and-information/information-standards/information-standards-and-data-collections-including-extractions/publications-and-notifications/standards-and-collections/dcb3051-identity-verification-and-authentication-standard-for-digital-health-and-care-services">DCB3501</a>.
      </td>
    </tr>
    <tr role="row" class="nhsuk-table__row">
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Proofing level </span>High (P9) <br>Physical comparison
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Basic description </span>The user has completed an online or offline identity verification process where physical comparison between the photographic identity and the person asserting their identity has occurred.<br> This maps to ‘Verification – High’ within <a href="https://digital.nhs.uk/data-and-information/information-standards/information-standards-and-data-collections-including-extractions/publications-and-notifications/standards-and-collections/dcb3051-identity-verification-and-authentication-standard-for-digital-health-and-care-services">DCB3501</a>.
      </td>
    </tr>
  </tbody>
</table>

---

## Requesting Vectors of Trust values

The client **may** request a set of acceptable VoT values with the "vtr" (vector of trust request) claim request as part of the Authentication Request. The value of this field is an array of JSON strings, each string identifying an acceptable set of vector components.

The component values within each vector are ANDed together while the separate vectors are ORed together. For example, a list of vectors in the form `["P9.Cp.Cd ", "P9.Cm"]` is stating that either the full set of "P9 AND Cp AND Cd" simultaneously OR the full set of "P9 AND Cm" simultaneously are acceptable for this transaction.

Vector request values **may** omit components, indicating that any value is acceptable for that component category, including omission of that component in the response vector.

Omission of vtr will result in a default value of `[“P9.Cp.Cd”,“P9.Cp.Ck”,“P9.Cm”]` being assumed.

---

## Returned Vectors of Trust values

The vector is sent as a string within the "vot" (vector of trust) claim in the ID and Access tokens. The trustmark that applies to this vector is sent as an HTTPS URL in the "vtm" (vector trust mark) claim to provide context to the vector.

For example, part of the body of an ID token claiming "Medium IDV, authenticated user via password and registered device identifier" will look like this JSON object payload of the ID token.

``` html
{
   "iss": "https://auth.login.nhs.uk/",
   "vot": "P5.Cp.Cd",
   "vtm": "https://auth.login.nhs.uk/trustmark/login.nhs.uk"
}
```

The body of the token is signed using JOSE, as per the OpenID Connect specification. By putting the "vot" and "vtm" values inside the token, the vector and its context are strongly bound to the federated credential represented by the token.

---

## Profiles

A profile is defined as the combination of Vectors of Trust that you can request in the vector of trust request (VTR). The NHS login profiles available for you to select are described below.

<table role="table" class="nhsuk-table-responsive">
  <caption class="nhsuk-table__caption">NHS login identity verification levels</caption>
  <thead role="rowgroup" class="nhsuk-table__head">
    <tr role="row">
      <th role="columnheader" class="" scope="col">
        Authentication &<br> verification level
      </th>
      <th role="columnheader" class="" scope="col">
        Archetype
      </th>
      <th role="columnheader" class="" scope="col">
        Vector
      </th>
      <th role="columnheader" class="" scope="col">
        Description
      </th>
    </tr>
  </thead>
  <tbody class="nhsuk-table__body">
    <tr role="row" class="nhsuk-table__row">
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Authentication & verification level </span>Low : Low
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Archetype </span>A8 and A11
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Vector </span>“P0.Cp”
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Description </span>No identity verification, user authenticated using password
      </td>
    </tr>
        <tr role="row" class="nhsuk-table__row">
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Authentication & verification level </span>Medium : High
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Archetype </span>A3
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Vector </span>“P5.Cp.Cd”
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Description </span>Medium identity verification, user authenticated using password and enrolled device (2FA)
      </td>
    </tr>
        <tr role="row" class="nhsuk-table__row">
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Authentication & verification level </span>Low : Low
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Medium : High </span>A3
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Vector </span>“P5.Cp.Ck”
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Description </span>Medium identity verification, user authenticated using password and shared key within a device (2FA)
      </td>
    </tr>
        <tr role="row" class="nhsuk-table__row">
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Authentication & verification level </span>High : High
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Archetype </span>A1, A4, A5, A6, and A7
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Vector </span>“P9.Cp.Cd”
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Description </span>High identity verification, user authenticated using password and enrolled device (2FA)
      </td>
    </tr>
        <tr role="row" class="nhsuk-table__row">
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Authentication & verification level </span>High : High
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Archetype </span>A1, A4, A5, A6, and A7
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Vector </span>“P9.Cp.Ck”
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Description </span>High identity verification, user authenticated using password and shared key within a device (2FA)
      </td>
    </tr>
        <tr role="row" class="nhsuk-table__row">
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Authentication & verification level </span>High : High
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Archetype </span>A1, A4, A5, A6, and A7
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Vector </span>“P9.Cm”
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Description </span>High identity verification, user authenticated via asymmetric key within a device (2FA) (for example, FIDO UAF authentication)
      </td>
    </tr>
  </tbody>
</table>

<p>
<br>
NHS login offers a level of identity verification. NHS login does not support archetypes A2 and A9 (no identity verification / low authentication). If your features map to A2 and A9 contact us to ask for guidance via <a href="mailto:engage.nhslogin@nhs.net">engage.nhslogin@nhs.net</a>.
</p>

### Example 1: Partner service provides access to sensitive data

This example maps onto archetypes A1, A4, A5, A6, A7 within the standard 'DCB3051'. The service requires high verification and high authentication. 

The service sends the following as acceptable Vectors in the ‘vtr’ parameter:

`[“P9.Cp.Cd”,“P9.Cp.Ck”,“P9.Cm”]`

### Example 2: Partner service provides access to basic data (not sensitive)

This example maps onto archetype A3 within the standard 'DCB3051'. The service requires medium verification and high authentication. 

The service sends the following as acceptable Vectors in the ‘vtr’ parameter:

`[“P5.Cp.Cd”,“P5.Cp.Ck”,“P5.Cm”]`

### Example 3: Partner service provides access to both basic data and sensitive data

This example maps onto a service offering multiple features, of which some require basic user data, and some require sensitive user data. The service requires medium verification and high authentication.

The service sends the following as acceptable Vectors in the ‘vtr’ parameter:

`[“P5.Cp.Cd”,“P5.Cp.Ck”,“P5.Cm”,“P9.Cp.Cd”,“P9.Cp.Ck”,“P9.Cm”]`

A successfully authenticated user can be either medium or high level in terms of identity verification.

The service can offer all functionalities to a user that meets the service requirements of high verification and high authentication. The service can only offer basic features to users with medium level verification at their initial login, as they meet the service requirements of medium verification and high authentication only.

When a user with medium level verification attempts to access other features supported by sensitive data, the service then requires high verification and high authentication (with Single Sign On allowed).

The service sends the following as acceptable Vectors in the ‘vtr’ parameter:

`[“P9.Cp.Cd”,“P9.Cp.Ck”,“P9.Cm”]` 

The user is prompted to undertake a verification step-up journey to take the user verification level from medium to high.

---

## Single sign-on (SSO)

If the user’s current session (if any) does not meet the requested Vectors of Trust (vtr) in the incoming request, then the user will be required to sign-in, to meet the requested vectors.

Also note that SSO behaviour, or to refuse SSO behaviour, can be controlled using the `prompt` parameter on the initial authorisation request.

---

## Trust mark

The trust mark provides a list of claims that NHS login supports. This enables the client to verify which components of a trust framework NHS login supports and hence their trustworthiness.

The NHS login trust mark is self-hosted.



