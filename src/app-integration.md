---
layout: base.njk
title: Using NHS login in a mobile app
---

App-based NHS login Relying Parties should avoid the use of `WebViews`.

## Why is this important?

If an app utilises a plain old WebView for NHS login the following issues occur:

### Password managers don’t work

Password managers only work when the domain can be identified by the OS. In a WebView the OS cannot detect this and therefore will not offer pre-fill with password managers

### Passkeys don’t work
This is the same reason password managers don't – the browser can't trust/see the domain that is being used in an embedded window

### Embedded views are insecure
Google prevented services using their Identity Provider (Google Sign In) using this approach in Sept 2021: https://developers.googleblog.com/2021/06/upcoming-security-changes-to-googles-oauth-2.0-authorization-endpoint.html

### Cookies are not persisted
This results in the user having to accept cookies every time and can prevent "remember my device" feature working

## Developer support

Apple and Google provide guidance on the usage of external authorisation services that you should follow:

- Custom Tabs on Android ([developer guide](https://developer.chrome.com/docs/android/custom-tabs))
  - [AppAuth for Android](https://openid.github.io/AppAuth-Android/) can also be used
- ASWebAuthenticationSession on iOS ([developer guide](https://developer.apple.com/documentation/authenticationservices/authenticating-a-user-through-a-web-service))
  - [AppAuth for iOS](https://openid.github.io/AppAuth-iOS/) can also be used
