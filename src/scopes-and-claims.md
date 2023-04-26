---
layout: base.njk
title: Scopes and claims
---

<nav class="nhsuk-contents-list" role="navigation" aria-label="Available scopes">
  <h2>Available scopes</h2>
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


<h3 id="openid">OpenID Connect requests</h3>

<code>openid</code><span style="vertical-align:super;font-size:70%">1</span>

<dl class="nhsuk-summary-list">

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
        Claims included
    </dt>
    <dt class="nhsuk-summary-list__value">
        Issuer identifier for the issuer of the response:
    </dt>
    <dd class="nhsuk-summary-list__value">
        <code>iss</code>
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
    </dt>
    <dt class="nhsuk-summary-list__value">
        Partner service identifier:
    </dt>
    <dd class="nhsuk-summary-list__value">
        <code>aud</code>
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
    </dt>
    <dt class="nhsuk-summary-list__value">
        Subject identifier for the user at the issuer:
    </dt>
    <dd class="nhsuk-summary-list__value">
         <code>sub</code>
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Low level (P0)
    </dt>
        <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      Yes
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Medium level (P5)
    </dt>
            <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      Yes
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      High level (P9)
    </dt>
            <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      Yes
    </dd>
  </div>

</dl>

1. The OpenID scope is a mandatory requirement for all partners.


<hr class="nhsuk-section-break nhsuk-section-break--l">



<h3 id="profile">User's default profile</h3>

<code>profile</code>

<dl class="nhsuk-summary-list">

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
        Claims included
    </dt>
    <dt class="nhsuk-summary-list__value">
        NHS number:
    </dt>
    <dd class="nhsuk-summary-list__value">
        <code>nhs_number</code>
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
    </dt>
    <dt class="nhsuk-summary-list__value">
        Last name:
    </dt>
    <dd class="nhsuk-summary-list__value">
        <code>family_name</code>
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
    </dt>
    <dt class="nhsuk-summary-list__value">
        Date of birth:
    </dt>
    <dd class="nhsuk-summary-list__value">
         <code>birthdate</code>
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
    </dt>
    <dt class="nhsuk-summary-list__value">
        Identity proofing level:
    </dt>
    <dd class="nhsuk-summary-list__value">
         <code>identity_proofing_level</code>
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Low level (P0)
    </dt>
        <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      No
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Medium level (P5)
    </dt>
            <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      Yes<span style="vertical-align:super;font-size:70%">2</span>
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      High level (P9)
    </dt>
            <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      No
    </dd>
  </div>

</dl>

2. NHS number is part of a user’s claimed identity. The user must not be given or presented with the NHS number which has been traced by NHS login. NHS login must have a clear understanding of the use case of the NHS number, and will confirm that the use of this is within the tolerance level of the NHS login service.


<hr class="nhsuk-section-break nhsuk-section-break--l">

<h3 id="basic_demographics">User's basic demographics</h3>

<code>basic_demographics</code><span style="vertical-align:super;font-size:70%">3</span>

<dl class="nhsuk-summary-list">

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
            Claims included
    </dt>
    <dt class="nhsuk-summary-list__value">
        Last name:
    </dt>
    <dd class="nhsuk-summary-list__value">
        <code>family_name</code>
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
    </dt>
    <dt class="nhsuk-summary-list__value">
        Date of birth:
    </dt>
    <dd class="nhsuk-summary-list__value">
         <code>birthdate</code>
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
    </dt>
    <dt class="nhsuk-summary-list__value">
        Identity proofing level:
    </dt>
    <dd class="nhsuk-summary-list__value">
         <code>identity_proofing_level</code>
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Low level (P0)
    </dt>
        <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      No
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Medium level (P5)
    </dt>
            <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      Yes
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      High level (P9)
    </dt>
            <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      Yes
    </dd>
  </div>

</dl>

3. User basic demographics and default profile scopes are mutually exclusive. Both cannot be requested together.

<hr class="nhsuk-section-break nhsuk-section-break--l">


<h3 id="profile_extended">User's additional demographic information</h3>

<code>profile_extended</code>

<dl class="nhsuk-summary-list">

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
        Claims included:
    </dt>
    <dt class="nhsuk-summary-list__value">
        First name from PDS:
    </dt>
    <dd class="nhsuk-summary-list__value">
        <code>given_name</code>
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Low level (P0)
    </dt>
        <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      No
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Medium level (P5)
    </dt>
            <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      Yes
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      High level (P9)
    </dt>
            <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      Yes
    </dd>
  </div>

</dl>



<hr class="nhsuk-section-break nhsuk-section-break--l">


<h3 id="email">Email address</h3>

<code>email</code>

<dl class="nhsuk-summary-list">

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
        Claims included:
    </dt>
    <dt class="nhsuk-summary-list__value">
        Email address:
    </dt>
    <dd class="nhsuk-summary-list__value">
        <code>email</code>
    </dd>
  </div>

<div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
    </dt>
    <dt class="nhsuk-summary-list__value">
        Verified email address:
    </dt>
    <dd class="nhsuk-summary-list__value">
        <code>email_verified</code>
    </dd>
  </div>


  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Low level (P0)
    </dt>
        <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      Yes
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Medium level (P5)
    </dt>
            <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      Yes
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      High level (P9)
    </dt>
            <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      Yes
    </dd>
  </div>

</dl>

<hr class="nhsuk-section-break nhsuk-section-break--l">



<h3 id="phone">Phone number</h3>

<code>phone</code>

<dl class="nhsuk-summary-list">

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
        Claims included:
    </dt>
    <dt class="nhsuk-summary-list__value">
        Phone number:
    </dt>
    <dd class="nhsuk-summary-list__value">
        <code>phone_number</code>
    </dd>
  </div>

<div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
    </dt>
    <dt class="nhsuk-summary-list__value">
        Verified phone number:
    </dt>
    <dd class="nhsuk-summary-list__value">
        <code>phone_number_verified</code>
    </dd>
  </div>

<div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
    </dt>
    <dt class="nhsuk-summary-list__value">
        Phone number matched to PDS:
    </dt>
    <dd class="nhsuk-summary-list__value">
        <code>phone_number_pds_matched</code><span style="vertical-align:super;font-size:70%">4</span>
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Low level (P0)
    </dt>
        <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      Yes
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Medium level (P5)
    </dt>
            <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      Yes
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      High level (P9)
    </dt>
            <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      Yes
    </dd>
  </div>

</dl>

4. This claim  will be `true` if the phone a used for 2FA matches a contact number on PDS.


<hr class="nhsuk-section-break nhsuk-section-break--l">



<h3 id="gp_registration_details">GP registration details</h3>

<code>gp_registration_details</code><span style="vertical-align:super;font-size:70%">5</span>

<dl class="nhsuk-summary-list">

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
        Claims included:
    </dt>
    <dt class="nhsuk-summary-list__value">
        O.D.S code:
    </dt>
    <dd class="nhsuk-summary-list__value">
        <code>gp_ods_code</code>
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Low level (P0)
    </dt>
        <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      No
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Medium level (P5)
    </dt>
            <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      Yes
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      High level (P9)
    </dt>
            <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      Yes
    </dd>
  </div>

</dl>

5. This scope is not required if the `gp_integration_credentials` scope is requested.


<hr class="nhsuk-section-break nhsuk-section-break--l">


<h3 id="gp_integration_credentials">GP surgery information</h3>

<code>gp_integration_credentials</code>

<dl class="nhsuk-summary-list">

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
        Claims included:
    </dt>
    <dt class="nhsuk-summary-list__value">
        Linkage key: 
    </dt>
    <dd class="nhsuk-summary-list__value">
        <code>gp_linkage_key</code>
    </dd>
  </div>

<div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
    </dt>
    <dt class="nhsuk-summary-list__value">
        O.D.S code:
    </dt>
    <dd class="nhsuk-summary-list__value">
        <code>gp_ods_code</code>
    </dd>
  </div>

<div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
    </dt>
    <dt class="nhsuk-summary-list__value">
        Account ID:
    </dt>
    <dd class="nhsuk-summary-list__value">
        <code>gp_user_id</code>
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Low level (P0)
    </dt>
        <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      No
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Medium level (P5)
    </dt>
            <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      Yes<span style="vertical-align:super;font-size:70%">6</span>
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      High level (P9)
    </dt>
            <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      Yes
    </dd>
  </div>

</dl>

6. Available only to IM1 enabled partners and protected by high level of authentication.



<hr class="nhsuk-section-break nhsuk-section-break--l">


<h3 id="client_metadata">Client specific metadata for the user account</h3>

<code>client_metadata</code><span style="vertical-align:super;font-size:70%">7</span>

<dl class="nhsuk-summary-list">

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
        Claims included:
    </dt>
    <dt class="nhsuk-summary-list__value">
        Client user metadata:
    </dt>
    <dd class="nhsuk-summary-list__value">
        <code>client_user_metadata</code>
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Low level (P0)
    </dt>
        <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      Yes
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      Medium level (P5)
    </dt>
            <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      Yes
    </dd>
  </div>

  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">
      High level (P9)
    </dt>
            <dt class="nhsuk-summary-list__value">
        </dt>
    <dd class="nhsuk-summary-list__value">
      Yes
    </dd>
  </div>

</dl>

7. This is a bespoke scope which should only be selected once agreed by NHS login.


<hr class="nhsuk-section-break nhsuk-section-break--l">



### Note:

A user's gender or sex are not available as claims for NHS login.

Scopes and claims perform differently for partners supporting multiple levels of user identity verification and [step-up journeys](https://nhsconnect.github.io/nhslogin/step-up-p5-p9/) between the different levels of verification. Contact the NHS login onboarding team for more information.

Please refer to the [external interface specification](https://nhsconnect.github.io/nhslogin/interface-spec-doc/) Section 3.4.1.1  and Section 3.6.2.1 for further technical details.

