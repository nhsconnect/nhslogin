---
layout: base.njk
title: Scopes and claims
---

<table role="table" class="nhsuk-table-responsive">
  <caption class="nhsuk-table__caption">NHS login Authentication Context Class</caption>
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
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Scope </span>
        OpenID Connect requests: <br>
        `openid`
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Claims included </span>
        • Issuer identifier for the issuer of the response: `iss` <br><br>
        • Partner service identifier: `aud` <br><br>
        • Subject identifier for the user at the issuer: `sub`
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Low level (P0) </span>
        Yes
      </td>      
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Medium level (P5) </span>
        Yes
      </td>      
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">High level (P9) </span>
        Yes
      </td>
    </tr>
    <tr role="row" class="nhsuk-table__row">
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Scope </span>
        User's default profile: <br>
        `profile`
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Claims included </span>
 • NHS number: `nhs_number` <br><br> 
 • Surname: `family_name` <br><br> 
 • Date of birth: `birthdate` <br><br> 
 • Identity proofing level: `identity_proofing_level`
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Low level (P0) </span>
        No
      </td>      
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Medium level (P5) </span>
        Yes<span style="vertical-align:super;font-size:70%">1</span>
      </td>      
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">High level (P9) </span>
        Yes
      </td>
    </tr>
    <tr role="row" class="nhsuk-table__row">
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Scope </span>
User's basic demographics: <br>`basic_demographics`<span style="vertical-align:super;font-size:70%">2</span>
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Claims included </span>
• Surname: `family_name` <br><br> 
• Date of birth: `birthdate` <br><br> 
• Identity proofing level: `identity_proofing_level`
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Low level (P0) </span>
        No
      </td>      
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Medium level (P5) </span>
        Yes
      </td>      
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">High level (P9) </span>
        Yes
      </td>
    </tr>
    <tr role="row" class="nhsuk-table__row">
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Scope </span>
User's additional demographic information:<br> 
`profile_extended`
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Claims included </span>
• First name from PDS: `given_name`
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Low level (P0) </span>
        No
      </td>      
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Medium level (P5) </span>
        Yes
      </td>      
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">High level (P9) </span>
        Yes
      </td>
    </tr>
    <tr role="row" class="nhsuk-table__row">
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Scope </span>
Email address:<br> 
`email`
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Claims included </span>
• Email address: `email` <br><br> 
• Verified email address: `email_verified`
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Low level (P0) </span>
        Yes
      </td>      
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Medium level (P5) </span>
        Yes
      </td>      
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">High level (P9) </span>
        Yes
      </td>
    </tr>
    <tr role="row" class="nhsuk-table__row">
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Scope </span>
Phone number:<br> 
`phone`
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Claims included </span>
• Phone number: `phone_number` <br><br> 
• Verified phone number: `phone_number_verified` <br><br> 
• Phone number matched to PDS: `phone_number_pds_matched`<span style="vertical-align:super;font-size:70%">3</span>
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Low level (P0) </span>
        Yes
      </td>      
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Medium level (P5) </span>
        Yes
      </td>      
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">High level (P9) </span>
        Yes
      </td>
    </tr>
    <tr role="row" class="nhsuk-table__row">
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Scope </span>
GP registration details: <br>
`gp_registration_details`<span style="vertical-align:super;font-size:70%">4</span>
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Claims included </span>
• O.D.S code: `gp_ods_code` 
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Low level (P0) </span>
        No
      </td>      
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Medium level (P5) </span>
        Yes
      </td>      
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">High level (P9) </span>
        Yes
      </td>
    </tr>
    <tr role="row" class="nhsuk-table__row">
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Scope </span>
GP surgery information:<br> 
`gp_integration_credentials`
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Claims included </span>
• Linkage key: `gp_linkage_key` <br><br> 
• O.D.S. code: `gp_ods_code` <br><br> 
• Account ID: `gp_user_id`
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Low level (P0) </span>
        No
      </td>      
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Medium level (P5) </span>
        Yes
      </td>      
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">High level (P9) </span>
        Yes<span style="vertical-align:super;font-size:70%">5</span>
      </td>
    </tr>
    <tr role="row" class="nhsuk-table__row">
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Scope </span>
Client specific metadata for the user account:<br> 
`client_metadata`<span style="vertical-align:super;font-size:70%">6</span>
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Claims included </span>
• Client user metadata: `client_user_metadata`
      </td>
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Low level (P0) </span>
        Yes
      </td>      
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">Medium level (P5) </span>
        Yes
      </td>      
      <td role="cell" class="nhsuk-table__cell">
        <span class="nhsuk-table-responsive__heading">High level (P9) </span>
        Yes
      </td>
    </tr>
  </tbody>
</table>

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

