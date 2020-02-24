---
layout: base.njk
title: Technical Conformancey
---


 ## IM1 Suppliers
 
|IM1 Suppliers have the option to test either the GP online or Prove your identity journey in the Integration Environment.
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    - NHS login provide a set of patient records that exist on the Spine Integration Environment which IM1 suppliers can use                                                      |
|    - IM1 suppliers should create new records in their local GP system based on the patient details provided by NHS login                                                         |
|    - IM1 suppliers should then create linkage key, account ID and ODS code details against the records created in the local GP system. These details should then be shared with  | NHS login                                                                                                                                                                        |
|    - IM1 suppliers should also create new NHS login accounts by registering with an email and password                                                                           |
|    - NHS login will update the linkage key, account ID, ODS code and IM1 token in the NAM Stub                                                                                   |
|   - IM1 supplier should be able to login successfully and proceed through either the GP Online or Prove your identity journey.                                                   |
|    - Once submitted suppliers should notify NHS login to approve the requests                                                                                                    |
|    - IM1 supplier should be able to login successfully and be redirect to respected service with patient record which exists in the local GP system                              |


 ## Non-IM1 Suppliers

|Non-IM1 suppliers can choose to use the basic patient records provided to proceed through the Prove your identity journey. Non-IM1 suppliers now also have the abiliy to test  the GP online journey by using details from the NAM Stub.                                                                                                                     |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    - NHS login provide a set of patient records that exist in the NAM Stub, the details include Linkage Key, account ID and ODS code                                         |
|    - Non-IM1 suppliers can create new NHS login accounts and proceed through the GP Online Journey by providing valid details from the NAM Stub                              |
|    - NHS login accounts verified against the NAM Stub are successfully redirected to the respected service                                                                   |


 ## Testing FIDO UAF flow
 Please get in touch if you'd like to add FIDO UAF (TouchID etc.) to your app.

