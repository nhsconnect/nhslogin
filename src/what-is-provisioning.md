---
layout: base.njk
title: What is account provisioning?
---

Account provisioning enables GP practices to set up an NHS login on behalf of a patient.

Instead of patients registering and verifying their identity themselves, authorised staff can create a [high-level verified account (known as P9)](https://nhsconnect.github.io/nhslogin/user-journeys/#p9) for them.

This makes it easier for patients to access digital health services and reduces the need for support.

<hr>

<h2>Requirements</h2>

For the process to work, the GP practice must:

* have a registered and authorised ODS code  
* use a GP system that supports provisioning (currently EMIS and TPP are integrated)

The patient must:  
* have an active [PDS record](https://digital.nhs.uk/services/personal-demographics-service) with NHS number, phone number, and other demographics  
* not already have a P9-level NHS login account  
* have a mobile number that matches their PDS record 

<hr>

<h2>How it works</h2>

There are two parts to the account provisioning process:


<h3>1. Healthcare professional flow</h3>

Healthcare staff use the Provisioning API to start the process. Here's what happens:

1. The GP system authenticates using an access token  
2. The patient’s demographic details and the organisation’s ODS code are submitted  
3. The system checks eligibility and validates the patient’s details against the Personal Demographics Service (PDS)  
4. A response is returned with either a provisioning ID or an error  
5. An email is sent to the patient with instructions to complete their account setup  

</br>

<h3>Visual diagram: Healthcare professional flow</h3>


<div class="design-example">
  <a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Provisioning-journey-one.png" class="design-example__pop-out" target="_blank">Open the Healthcare Professional Flow in a new window</a>
    <div class="code-embed">
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Provisioning-journey-one.png" alt="Diagram showing the healthcare professional journey flow">
  </div>

<hr>


<h3>2. Patient claiming flow</h3>

Once the patient receives the email, they follow a short journey to activate their account:

1. The patient selects the link in the email  
2. They receive a one-time passcode (OTP) and enter it  
3. Their details are checked again against PDS  
4. If everything matches, the account is created or upgraded to P9 level  
5. The patient sets a password  
6. They can now use NHS login to access services  

</br>

<h3>Visual diagram: Patient claiming flow</h3>


<div class="design-example">
  <a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Provisioning-journey-two.png" class="design-example__pop-out" target="_blank">Open the Patient Claiming Flow in a new window</a>
    <div class="code-embed">
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Provisioning-journey-two.png" alt="Diagram showing the patient claiming journey flow">
  </div>

<hr>


### Developer documentation

For technical details about how the Provisioning API works, see the [Provision Account External Interface Specification](https://nhsconnect.github.io/nhslogin/provision-account-external-interface/).
