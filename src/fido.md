---
layout: base.njk
title: Passkeys and biometric sign-in
---

<p>This page explains how NHS login uses passkeys and biometric sign-in, and what this means for partner integrations.</p>

<p>For most partners, no change is needed.</p>

<div class="nhsuk-inset-text">
  <span class="nhsuk-u-visually-hidden">Information: </span>
  <p>Continue to use your standard NHS login OpenID Connect integration. You do not need to make technical changes to that integration to support FIDO2 passkeys.</p>
</div>

<h2>Passkeys (FIDO2)</h2>

<p>NHS login supports passkeys. Passkeys are based on FIDO2.</p>

<p>A user may unlock a passkey on their device using biometrics, a device PIN or a security key.</p>

<p>NHS login manages the user's biometric or passkey credential as part of the sign-in journey. Your service does not receive the user's biometric data.</p>

<p>If your service has a native mobile app, supporting passkeys can require technical changes in that app.</p>

<h3>FIDO2 in WebView apps</h3>

<p>WebViews do not support FIDO2 passkeys. If your native mobile app uses a WebView, users cannot add or use passkeys in that WebView. This affects the passkey experience in the app; it does not change your standard NHS login OpenID Connect integration.</p>

<p>To understand what users see when they set up and use a passkey, see the <a href="https://help.login.nhs.uk/manage/passkeys">NHS login Help Centre passkey guidance</a>.</p>

<h2>Biometric sign-in (FIDO1)</h2>

<p>NHS login supports biometric sign-in, sometimes referred to as FIDO1. This is currently only used by the NHS App. 

<p>FIDO1 is not available for new partner integrations</p>

<h2>Developer support</h2>

<p>If you need help with biometric sign-in or passkeys, <a href="/nhslogin/developer-support/">contact NHS login developer support</a>.</p>
