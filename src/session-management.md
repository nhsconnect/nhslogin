---
layout: base.njk
title: Session management
---

The NHS login platform does not support user session management and user logout functionality.  Both are partner responsibilities.

However, NHS login follows standards set by the National Institute of Standards and Technology (NIST).

Therefore, connected services that use NHS login as an Identity Provider (IdP) and Authentication Service must align to the following NIST standards.
 
 [NIST 800- 63C Digital Identity Guidelines: Federation and Assertions (nist.gov)](https://gbr01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fnvlpubs.nist.gov%2Fnistpubs%2FSpecialPublications%2FNIST.SP.800-63c.pdf&data=05%7C01%7Cbrendan.plant1%40nhs.net%7C331c3500f34d492d3ff808dad120bb8d%7C37c354b285b047f5b22207b48d774ee3%7C0%7C0%7C638052235748476884%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=YrDvEUd%2FAdQcHwRpprfmxMBgjxb06Eau2v0D4gIK2zc%3D&reserved=0) is used to provide guidance around the NHS login use of and operation of OIDC, with further detail within the NHS login External Interface Specification.
 
 [NIST 800-63B Digital Identity Guidelines: Authentication and Lifecycle Management (nist.gov)](https://gbr01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fnvlpubs.nist.gov%2Fnistpubs%2FSpecialPublications%2FNIST.SP.800-63b.pdf&data=05%7C01%7Cbrendan.plant1%40nhs.net%7C331c3500f34d492d3ff808dad120bb8d%7C37c354b285b047f5b22207b48d774ee3%7C0%7C0%7C638052235748476884%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=geXgNSYNrg9LvpDcD8%2BA%2F5tqwDQQTXDkPmixdrexW%2Fc%3D&reserved=0) is used to define the Authentication Assurance levels which support the operation of NHS login.  Where Authentication Solutions are used alongside NHS login, they should also meet an AAL level of 2.

 --- 

## Session Management and Refresh Tokens## 

# Definitions #
 - Standalone web application - a partner's own independently accessed web application, intended for consumption by users via any web browser (regardless of device type)
 - standalone mobile application - a partner's own independently accessed mobile application, intended for installation and consumption by users on a mobile phone or tablet device
 - user-to-app authentication - a biometric or PIN prompt that validates repeat-access to a mobile application after a full authentication journey has been completed on initial access to the app. <br><br>Note: this is distinct from the action taken by the user to unlock their device. Although the application may use the same operating system-level mechanism to implement a biometrics or a PIN, this is an additional check after the user has unlocked the device

<hr>

 # Guidance #
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
- on reopening the application if it has been in the background for more than one minute
- on reopening the application if it has been closed (regardless of elapsed time)