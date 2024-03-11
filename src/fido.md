---
layout: base.njk
title: Biometric FIDO Authentication
---


<p class="nhsuk-body">NHS login offers both FIDO1 and FIDO2 (passkeys).

Passkeys are a secure method of authentication, allowing users to access NHS services by using biometrics, PIN, or security keys.

The main advantage of FIDO2 is that it enables FIDO credentials to roam across multiple devices. This allows users to register once and authenticate seamlessly on different devices. In contrast, FIDO1 is typically tied to a single device.

### FIDO2 on WebView apps

WebViews do not support FIDO2 passkeys. If a mobile app uses WebViews instead of the native app, users will not be able to add a passkey or use their existing passkeys to log in.

Further information on this issue and other ways an app browser can support passkeys:

<ul>
<li><a href="https://www.corbado.com/blog/native-app-passkeys">Native App Passkeys: Native vs. WebView Implementation</a></li>
<li><a href="https://help.duo.com/s/article/8433?language=en_US">Guide to iOS and Android WebAuthn Support for Native Applications</a></li> 
</ul>

If your app does not support FIDO2 and you want to implement FIDO1, find out how we currently use FIDO on our <a href="/nhslogin/interface-spec-doc/">NHS login Interface Specification</a>.
