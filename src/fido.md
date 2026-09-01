---
layout: base.njk
title: Biometric sign-in and passkeys
---

<p>NHS login can offer users ways to sign in without entering their password. These are managed by NHS login.</p>

<h2>What partners need to do</h2>

<div class="nhsuk-inset-text">
  <span class="nhsuk-u-visually-hidden">Information: </span>
  <p>Continue to use your standard NHS login OpenID Connect integration. You do not need to make technical changes to that integration to support FIDO2. FIDO1 is not available as a new partner integration.</p>
</div>

<h2>Biometric sign-in (FIDO1)</h2>

<p>NHS login supports biometric sign-in as part of the NHS login journey. This is sometimes referred to as FIDO1. It is not a separate integration for partner services.</p>

<p>Users may authenticate on their device using biometrics, such as face or fingerprint recognition.</p>

<p>Your service does not receive the user's biometric data.</p>

<p>FIDO1 is not available as a new partner integration. If your service already has a FIDO1 integration, <a href="/nhslogin/developer-support/">get support with your NHS login integration</a> before making changes.</p>

<h2>Passkeys</h2>

<p>NHS login also supports passkeys. Passkeys are based on FIDO2.</p>

<p>A user may unlock a passkey on their device using biometrics, a device PIN or a security key.</p>

<p>If your service has a native mobile app, supporting passkeys can require technical changes in that app. <a href="/nhslogin/developer-support/">Get support with your NHS login integration</a> if you need guidance.</p>

<h3>FIDO2 in WebView apps</h3>

<p>WebViews do not support FIDO2 passkeys. If your native mobile app uses a WebView, users cannot add or use passkeys in that WebView. This affects the passkey experience in the app; it does not change your standard NHS login OpenID Connect integration.</p>

<p>If you need guidance on passkeys in a native mobile app, <a href="/nhslogin/developer-support/">get support with your NHS login integration</a>.</p>

<details class="nhsuk-details">
  <summary class="nhsuk-details__summary">
    <span class="nhsuk-details__summary-text">How FIDO, biometrics and passkeys relate</span>
  </summary>
  <div class="nhsuk-details__text">
    <p>FIDO is a family of authentication standards. Biometrics are one way for a user to unlock or approve use of a credential on their device.</p>
    <p>A user may instead use a device PIN or a security key. NHS login and your service do not receive the user's biometric data.</p>
    <p>Passkeys use FIDO2. FIDO1 is an earlier FIDO approach that is not available as a new partner integration.</p>
  </div>
</details>

<p>To understand what users see when they set up and use a passkey, see the <a href="https://help.login.nhs.uk/manage/passkeys">NHS login Help Centre passkey guidance</a>.</p>

<h2>Developer support</h2>

<p>If you are unsure whether your service has an existing FIDO1 integration, <a href="/nhslogin/developer-support/">get support with your NHS login integration</a>.</p>
