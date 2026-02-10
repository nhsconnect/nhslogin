---
layout: base.njk
title: Session management
---

NHS login does not support user session management and user logout functionality. Both are partner responsibilities.

However, we follows standards set by the National Institute of Standards and Technology (NIST).

Therefore, connected services that use NHS login as an Identity Provider (IdP) and Authentication Service must align to the following NIST standards.

[NIST SP 800-63C-4 Digital Identity Guidelines: Federation and Assertions](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63C-4.pdf) is used to provide guidance around the NHS login use and operation of OpenID Connect (OIDC), with further detail within the NHS login External Interface Specification.

[NIST SP 800-63B Digital Identity Guidelines: Authentication and Lifecycle Management](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63B.pdf) is used to define the Authentication Assurance levels which support the operation of NHS login. Where authentication solutions are used alongside NHS login, they should also meet an AAL level of 2.

---

## Session Management and Refresh Tokens

### Definitions
 - Standalone web application - a partner's own independently accessed web application, intended for consumption by users via any web browser (regardless of device type)
 - standalone mobile application - a partner's own independently accessed mobile application, intended for installation and consumption by users on a mobile phone or tablet device
 - user-to-app authentication - a biometric or PIN prompt that validates repeat-access to a mobile application after a full authentication journey has been completed on initial access to the app. <br><br>Note: this is distinct from the action taken by the user to unlock their device. Although the application may use the same operating system-level mechanism to implement a biometrics or a PIN, this is an additional check after the user has unlocked the device

<hr>

### Guidance
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
