---
layout: base.njk
title: Technical Conformance
---

During onboarding you will be provided with access to an Integration Environment to test a production-like setup.

 ## IM1 Suppliers
 
IM1 suppliers have the option to test the GP Online and online identity verification journey in the Integration Environment.

- NHS login provide a set of patient records that exist on the Spine Integration Environment which IM1 suppliers can use
- IM1 suppliers should create new records in their local GP system based on the patient details provided by NHS login
- IM1 suppliers should then create linkage key, account ID and ODS code details against the records created in the local GP system. These details should then be shared with NHS login
- IM1 suppliers should also create new NHS login accounts by registering with an email and password
- NHS login will update the linkage key, account ID, ODS code and IM1 token in the Integration Environment
- IM1 suppliers should then be able to login successfully and proceed through either the GP Online or the online identity verification journey
- Once submitted suppliers should notify NHS login to approve the requests
- IM1 suppliers should be able to login successfully and be redirect to the supplier's service with patient record which exists in the local GP system

 ## Non-IM1 Suppliers

Non-IM1 suppliers can choose to use the basic patient records provided to proceed through the online identity verification journey. Non-IM1 suppliers now also have the abiliy to test the GP online journey.

- NHS login provide a set of patient records that exist in the Integration Environment, the details include linkage Key, account ID and ODS code
- Non-IM1 suppliers can create new NHS login accounts and proceed through the GP Online Journey by providing valid details from the Integration Environment
- NHS login accounts verified against the Integration Environment are successfully redirected to the supplier's service

 ## Testing FIDO UAF flow
 Please get in touch if you would like to add FIDO UAF (TouchID etc.) to your app. You can find FIDO clients for iOS and Android [here](https://github.com/nhsconnect?utf8=%E2%9C%93&q=fido&type=&language=).

