---
layout: base.njk
title: Session management
---

The NHS login platform does not support user session management and user logout functionality.  Both are partner responsibilities.

However, NHS login follows standards set by the National Institute of Standards and Technology (NIST).

Therefore, connected services that use NHS login as an Identity Provider (IdP) and Authentication Service must align to the following NIST standards.
 
 [NIST 800- 63C Digital Identity Guidelines: Federation and Assertions (nist.gov)](https://gbr01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fnvlpubs.nist.gov%2Fnistpubs%2FSpecialPublications%2FNIST.SP.800-63c.pdf&data=05%7C01%7Cbrendan.plant1%40nhs.net%7C331c3500f34d492d3ff808dad120bb8d%7C37c354b285b047f5b22207b48d774ee3%7C0%7C0%7C638052235748476884%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=YrDvEUd%2FAdQcHwRpprfmxMBgjxb06Eau2v0D4gIK2zc%3D&reserved=0) is used to provide guidance around the NHS login use of and operation of OIDC, with further detail within the NHS login External Interface Specification.
 
 [NIST 800-63B Digital Identity Guidelines: Authentication and Lifecycle Management (nist.gov)](https://gbr01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fnvlpubs.nist.gov%2Fnistpubs%2FSpecialPublications%2FNIST.SP.800-63b.pdf&data=05%7C01%7Cbrendan.plant1%40nhs.net%7C331c3500f34d492d3ff808dad120bb8d%7C37c354b285b047f5b22207b48d774ee3%7C0%7C0%7C638052235748476884%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=geXgNSYNrg9LvpDcD8%2BA%2F5tqwDQQTXDkPmixdrexW%2Fc%3D&reserved=0) is used to define the Authentication Assurance levels which support the operation of NHS login.  Where Authentication Solutions are used alongside NHS login, they should also meet an AAL level of 2.
 
 NIST 80063B also refers to the requirement for reauthentication of the AAL2 service, and a mandatory statement that the session must be terminated when either of the periods below are reached:
 - at least once per 12 hours during an extended usage session, regardless of user activity
 - reauthentication of the subscriber to be repeated following any period of inactivity lasting 30 minutes or longer.
