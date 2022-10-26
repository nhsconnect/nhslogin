---
layout: base.njk
title: Compare NHS login environments
---

Compare and understand the differences and transitions between our 4 different environments. 

## Mock environment

We have developed a lightweight [mock environment](https://oidc.mock.signin.nhs.uk/client) that is a representation of our OIDC endpoints. The mock is entirely self-service and requires no registration.

| Purpose | Requirements | Restrictions |
| ------- | ---------- | ------------ |
| Designed to reflect the NHS login External Interface Specification (EIS).<br><br> Get to grips with the technology you will use when integrating with NHS login.| None. | Only a simple mock environment. |


## Sandpit environment 

Before you apply, you should build a proof of concept and explore the end-to-end journey in our sandpit environment. This will help you learn how to integrate with NHS login, and understand where it will fit within your service. 
You should not be performing non-functional testing (NFT) or penetration testing in the sandpit environment.

| Purpose | Requirements | Restrictions |
| --------- | ----------- | ------------- |
|Explore the NHS login service and complete a proof of concept. | ClientID and registered public key. | No integration to other NHS digital APIs (once deployed). For example, spine, GP middleware or automated I.D. verification service.You can explore manual I.D. verification but cannot complete a full journey.<br><br> You can complete a login using the prepared NHS login email and password, and redirect back to your service.<br><br> No load testing.<br><br> Do not use real I.D.|

## Test integration environment

When you are ready to test, you will move from the sandpit environment to the integration environment, where you will complete some end-to-end testing. You should not be performing non-functional testing (NFT) or penetration testing in the integration environment.

| Purpose | Requirements | Restrictions|
| ----- | ----- | ----- |
| Complete technical conformance testing to go live and support regression testing against NHS login releases.<br><br> Get your conformance report needed for the Supplier Conformance Assessment List (SCAL). | Integration in the sandpit complete. <br><br> ODS Code and Data Security and Protection Toolkit (DSPT) covering scope of service. | Integration available to third party services including Spine (connected to INT), GP middleware with the manual I.D. verification and Patient Online verification.<br><br>Manual I.D. verification can be completed in full.<br><br>Test pack of pre-configured NHS numbers and custom test data available.<br><br>No load testing.<br><br>Do not use real I.D.|

## Live production environment

Once approved by the Partner Integration Board (PIB) to go live, you will then transition from the integration environment to the live production environment.

|Purpose | Requirements | Restrictions |
| ----- | ---------- | --------|
| Live environment. | You have completed your readiness activity and signed an agreement. | A test user can be provided to complete smoke testing. <br><br> No load testing. | 



