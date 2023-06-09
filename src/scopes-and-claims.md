---
layout: base.njk
title: Scopes and claims
---

<nav class="nhsuk-contents-list" role="navigation" aria-label="Available scopes">
  <h2>Available scopes and claims</h2>

  <p>Claims are not automatically provided to the partner service. All claims will need to be requested and then approved by NHS login.</p>

  <p>The partner service should make a request to the UserInfo endpoint to obtain any of the claims for the user.</p>

  <ol class="nhsuk-contents-list__list">
    <li class="nhsuk-contents-list__item">
      <a class="nhsuk-contents-list__link" href="/nhslogin/scopes-and-claims#openid">OpenID Connect requests</a>
    </li>
    <li class="nhsuk-contents-list__item">
      <a class="nhsuk-contents-list__link" href="/nhslogin/scopes-and-claims#profile">User's default profile</a>
    </li>
    <li class="nhsuk-contents-list__item">
      <a class="nhsuk-contents-list__link" href="/nhslogin/scopes-and-claims#basic_demographics">User's basic demographics</a>
    </li>
    <li class="nhsuk-contents-list__item">
      <a class="nhsuk-contents-list__link" href="/nhslogin/scopes-and-claims#profile_extended">User's additional demographic information</a>
    </li>
    <li class="nhsuk-contents-list__item">
      <a class="nhsuk-contents-list__link" href="/nhslogin/scopes-and-claims#email">Email address</a>
    </li>
    <li class="nhsuk-contents-list__item">
      <a class="nhsuk-contents-list__link" href="/nhslogin/scopes-and-claims#phone">Phone number</a>
    </li>
    <li class="nhsuk-contents-list__item">
      <a class="nhsuk-contents-list__link" href="/nhslogin/scopes-and-claims#gp_registration_details">GP registration details</a>
    </li>
    <li class="nhsuk-contents-list__item">
      <a class="nhsuk-contents-list__link" href="/nhslogin/scopes-and-claims#gp_integration_credentials">GP surgery information</a>
    </li>
    <li class="nhsuk-contents-list__item">
      <a class="nhsuk-contents-list__link" href="/nhslogin/scopes-and-claims#client_metadata">Client specific metadata for the user account</a>
    </li>
  </ol>
</nav>

<hr>

<table class="nhsuk-table">
  <caption class="nhsuk-table__caption">Table of scopes and claims</caption>
  <thead role="rowgroup" class="nhsuk-table__head">
    <tr role="row">
      <th role="columnheader" class="" scope="col">
        Scope
      </th>
      <th role="columnheader" class="" scope="col">
        Claims included
      </th>
      <th role="columnheader" class="" scope="col">
        Low level (P0)
      </th>
      <th role="columnheader" class="" scope="col">
        Medium level (P5)
      </th>
      <th role="columnheader" class="" scope="col">
        High level (P9)
      </th>
    </tr>
  </thead>
  <tbody class="nhsuk-table__body">
    <tr role="row" class="nhsuk-table__row">
      <td class="nhsuk-table__cell" id="openid">OpenID Connect requests: <code>openid</code><span style="vertical-align:super;font-size:70%">1</span></td>
      <td class="nhsuk-table__cell ">• Issuer identifier for the issuer of the response: <code>iss</code><br>
      • Partner service identifier: <code>aud</code><br>
      • Subject identifier for the user at the issuer: <code>sub</code></td>
      <td class="nhsuk-table__cell ">Yes</td>
      <td class="nhsuk-table__cell ">Yes</td>
      <td class="nhsuk-table__cell ">Yes</td>
    </tr>
        <tr role="row" class="nhsuk-table__row">
      <td class="nhsuk-table__cell" id="profile">User's default profile: <code>profile</code>
</td>
      <td class="nhsuk-table__cell ">• NHS number: <code>nhs_number</code><br>
      • Surname: <code>family_name</code><br>
      • Date of birth: <code>birthdate</code><br>
      • Identity proofing level: <code>identity_proofing_level</code></td>
      <td class="nhsuk-table__cell ">No</td>
      <td class="nhsuk-table__cell ">Yes<span style="vertical-align:super;font-size:70%">2</span></td>
      <td class="nhsuk-table__cell ">Yes</td>
    </tr>
        <tr role="row" class="nhsuk-table__row">
      <td class="nhsuk-table__cell" id="basic_demographics">User's basic demographics: <code>basic_demographics</code><span style="vertical-align:super;font-size:70%">3</span>
      <td class="nhsuk-table__cell ">• Surname: <code>family_name</code><br>
• Date of birth: <code>birthdate</code><br>
• Identity proofing level: <code>identity_proofing_level</code></td>
      <td class="nhsuk-table__cell ">No</td>
      <td class="nhsuk-table__cell ">Yes</td>
      <td class="nhsuk-table__cell ">Yes</td>
    </tr>
        <tr role="row" class="nhsuk-table__row">
      <td class="nhsuk-table__cell" id="profile_extended">User's additional demographic information: <code id>profile_extended</code></td>
      <td class="nhsuk-table__cell ">• First name from PDS: <code>given_name</code></td>
      <td class="nhsuk-table__cell ">No</td>
      <td class="nhsuk-table__cell ">Yes</td>
      <td class="nhsuk-table__cell ">Yes</td>
    </tr>
        <tr role="row" class="nhsuk-table__row">
      <td class="nhsuk-table__cell" id="email">Email address: <code>email</code></td>
      <td class="nhsuk-table__cell ">• Email address: <code>email</code><br>
• Verified email address: <code>email_verified</code></td>
      <td class="nhsuk-table__cell ">Yes</td>
      <td class="nhsuk-table__cell ">Yes</td>
      <td class="nhsuk-table__cell ">Yes</td>
    </tr>
        <tr role="row" class="nhsuk-table__row">
      <td class="nhsuk-table__cell" id="phone">Phone number: <code>phone</code></td>
      <td class="nhsuk-table__cell ">• Phone number: <code>phone_number</code><br>
• Verified phone number: <code>phone_number_verified</code><br>
• Phone number matched to PDS: <code>phone_number_pds_matched</code><span style="vertical-align:super;font-size:70%">4</span></td>
      <td class="nhsuk-table__cell ">Yes</td>
      <td class="nhsuk-table__cell ">Yes</td>
      <td class="nhsuk-table__cell ">Yes</td>
    </tr>
        <tr role="row" class="nhsuk-table__row">
      <td class="nhsuk-table__cell" id="gp_registration_details">GP registration details: <code>gp_registration_details</code><span style="vertical-align:super;font-size:70%">5</span></td>
      <td class="nhsuk-table__cell ">• ODS code: <code>gp_ods_code</code></td>
      <td class="nhsuk-table__cell ">No</td>
      <td class="nhsuk-table__cell ">Yes</td>
      <td class="nhsuk-table__cell ">Yes</td>
    </tr>
        <tr role="row" class="nhsuk-table__row">
      <td class="nhsuk-table__cell" id="gp_integration_credentials">GP surgery information: <code>gp_integration_credentials</code></td>
      <td class="nhsuk-table__cell ">• Linkage key: <code>gp_linkage_key</code><br>
• ODS code: <code>gp_ods_code</code><br>
• Account ID: <code>gp_user_id</code></td>
      <td class="nhsuk-table__cell ">No</td>
      <td class="nhsuk-table__cell ">Yes</td>
      <td class="nhsuk-table__cell ">Yes<span style="vertical-align:super;font-size:70%">6</span></td>
    </tr>
        <tr role="row" class="nhsuk-table__row">
      <td class="nhsuk-table__cell" id="client_metadata">Client specific metadata for the user account: <code>client_metadata</code><span style="vertical-align:super;font-size:70%">7</span></td>
      <td class="nhsuk-table__cell ">• Client user metadata: <code>client_user_metadata</code></td>
      <td class="nhsuk-table__cell ">Yes</td>
      <td class="nhsuk-table__cell ">Yes</td>
      <td class="nhsuk-table__cell ">Yes</td>
    </tr>
  </tbody>
</table>


</dl>



<hr class="nhsuk-section-break nhsuk-section-break--l">

### Notes:


1. The OpenID scope is a mandatory requirement for all partners.
2. NHS number is part of a user’s claimed identity. The user must not be given or presented with the NHS number which has been traced by NHS login. NHS login must have a clear understanding of the use case of the NHS number, and will confirm that the use of this is within the tolerance level of the NHS login service.
3. User basic demographics and default profile scopes are mutually exclusive. Both cannot be requested together.
4. This claim  will be `true` if the phone used for 2FA matches a contact number on PDS.
5. This scope is not required if the `gp_integration_credentials` scope is requested.
6. Available only to [NHS England IM1 enabled partners](https://digital.nhs.uk/services/gp-it-futures-systems/im1-pairing-integration) and partners connected to IM1 via an approved third party supplier. This does not include GP suppliers’ own Patient Facing Services (PFS) API. The scope is protected by a high level of authentication.
7. This is a bespoke scope which should only be selected once agreed by NHS login.

<hr>

These are not available as claims for NHS login:
 <ul>
 <li>User's gender or sex</li>
 <li>User's post code</li>
 <li>User's address</li>
</ul>


Scopes and claims perform differently for partners supporting multiple levels of user identity verification and [step-up journeys](https://nhsconnect.github.io/nhslogin/step-up-p5-p9/) between the different levels of verification. Contact the NHS login onboarding team for more information.

Please refer to the [external interface specification](https://nhsconnect.github.io/nhslogin/interface-spec-doc/) Section 3.4.1.1  and Section 3.6.2.1 for further technical details.

