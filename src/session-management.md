---
layout: base.njk
title: Session management
---

NHS login does not support user session management or logout functionality. Your service is responsible for managing the user’s session once they are signed in.

## Standards
You must follow the following NIST Digital Identity Guidelines when implementing session management:

- [NIST SP 800-63B Authentication & Authenticator Management](https://pages.nist.gov/800-63-4/sp800-63b.html) - covers session timeouts and re-authentication
- [NIST SP 800-63C Federation and Assertions](https://pages.nist.gov/800-63-4/sp800-63c.html) - covers how sessions work between services

Any additional authentication used alongside NHS login must meet **Authentication Assurance Level 2 (AAL2)**.

For implementation details, see the [NHS login Identity Federation External Interface Specification](https://nhsconnect.github.io/nhslogin/interface-spec-doc/).

---

## Session management and refresh tokens
You should manage sessions using access tokens and refresh tokens as part of the OpenID Connect (OIDC) flow.

### Definitions
 - Standalone web application - a partner's own independently accessed web application, intended for consumption by users via any web browser (regardless of device type)
 - Standalone mobile application - a partner's own independently accessed mobile application, intended for installation and consumption by users on a mobile phone or tablet device
 - user-to-app authentication - a biometric or PIN prompt that validates repeat-access to a mobile application after a full authentication journey has been completed on initial access to the app. <br><br>Note: this is distinct from the action taken by the user to unlock their device. Although the application may use the same operating system-level mechanism to implement a biometrics or a PIN, this is an additional check after the user has unlocked the device

 <br> 
 **A) For standalone web applications, and standalone mobile applications that do not implement user-to-app authentication:**
<br>

The user must complete a full authentication journey:
- after 30 minutes of inactivity within the application
- after 12 hours of continuous usage

The application must automatically redirect the user to the authentication journey at the end of each period, without user interaction.

**B) For mobile applications that implement user-to-app authentication:**

The user must complete a full authentication journey:
- the first time they access the application
- at least every 30 days thereafter

If user-to-app authentication is optional, the application must comply with the requirements outlined in A) until the user configures it.

In addition, the application must carry out a user-to-app authentication check:
- after 5 minutes of inactivity within the application. The application must make this prompt automatically without user interaction
- on reopening the application if it has been in the background for more than 1 minute
- on reopening the application if it has been closed (regardless of elapsed time)
