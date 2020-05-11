---
layout: base.njk
title: Introduction to vectors of trust
---

Vectors of Trust [(VoT RFC 8485)](https://tools.ietf.org/html/rfc8485) allows your service to request the appropriate authentication and identity verification of the user, determined by the transaction(s) the user is undertaking in your service.

Your service should include a vector value in the query string as part of the initialisation of the OIDC flow. 

## Authentication Credentials

NHS login supports the following types of authentication credentials. Note that the credential component may occur more than once.

<div class="nhsuk-table-responsive">
  <table class="nhsuk-table">
    <caption class="nhsuk-table__caption">NHS login Authentication Context Class</caption>
    <thead class="nhsuk-table__head">
      <tr class="nhsuk-table__row">
        <th class="nhsuk-table__header" scope="col">Authentication type</th>
        <th class="nhsuk-table__header" scope="col">Basic description</th>
      </tr>
    </thead>
    <tbody class="nhsuk-table__body">
      <tr class="nhsuk-table__row">
        <td class="nhsuk-table__cell">Cp - Username and password</td>
        <td class="nhsuk-table__cell ">The user is asked to provide a username (email address) and password.</td>
      </tr>
      <tr class="nhsuk-table__row">
        <td class="nhsuk-table__cell">Cd - Registered device</td>
        <td class="nhsuk-table__cell "><p>The user is in possession of a device which has previously been associated with their account.</p><p>This can be either via OTP SMS or a remembered browser.</p></td>
      </tr>
      <tr class="nhsuk-table__row">
        <td class="nhsuk-table__cell">Ck - Shared cryptographic key within a registered device</td>
        <td class="nhsuk-table__cell "><p>The user is in possession of a device which has previously been associated with their account – delivery/use of the device is by a shared key.</p><p>N.B. This is yet to be implemented, but is anticipated to be MFA app registration.</p></td>
      </tr>
      <tr class="nhsuk-table__row">
        <td class="nhsuk-table__cell">Cm - Asymmetric Cryptographic key within a registered device</td>
        <td class="nhsuk-table__cell "><p>The user is in possession of a device which has previously been associated with their account – delivery/use of the device is by cryptographic proof of key possession using asymmetric key, such as a FIDO-compliant device</p></td>
      </tr>
    </tbody>
  </table>
</div>


## Identity Proofing Levels

The NHS login supports the following levels of identification verification. These are based upon [DCB3051 Identity Verification and
Authentication Standard for Digital Health and Care Services](https://digital.nhs.uk/data-and-information/information-standards/information-standards-and-data-collections-including-extractions/publications-and-notifications/standards-and-collections/dcb3051-identity-verification-and-authentication-standard-for-digital-health-and-care-services)


<div class="nhsuk-table-responsive">
  <table class="nhsuk-table">
    <caption class="nhsuk-table__caption">Levels of identification verification</caption>
    <thead class="nhsuk-table__head">
      <tr class="nhsuk-table__row">
        <th class="nhsuk-table__header" scope="col">Proofing level</th>
        <th class="nhsuk-table__header" scope="col">Basic description</th>
      </tr>
    </thead>
    <tbody class="nhsuk-table__body">
      <tr class="nhsuk-table__row">
        <td class="nhsuk-table__cell">P0 - Low identity proofing</td>
        <td class="nhsuk-table__cell ">A user has verified ownership of an email address and mobile phone number</td>
      </tr>
      <tr class="nhsuk-table__row">
        <td class="nhsuk-table__cell">P5 - Knowledge-based verification</td>
        <td class="nhsuk-table__cell "><p>The user has provided some information that has been checked to correspond to a record on <a href="https://digital.nhs.uk/services/demographics">PDS</a>
                <p>This maps to ‘Verification – Medium’ within DCB3051</p></td>
      </tr>
      <tr class="nhsuk-table__row">
        <td class="nhsuk-table__cell">P9 - Physical comparison</td>
        <td class="nhsuk-table__cell "><p>The user has completed an online or offline identity verification process where physical comparison between the photographic identity and the person asserting their identity has occurred.
<p>This maps to ‘Verification – High’ within DCB3051</p></td>
      </tr>
    </tbody>
  </table>
</div>
