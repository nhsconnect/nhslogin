---
layout: base.njk
title: What is provisioning
---

# What is account provisioning?

Account provisioning enables GP practices to set up an NHS login on behalf of a patient.

Instead of patients registering and verifying their identity themselves, authorised staff can create a [high-level verified account (known as P9)](https://nhsconnect.github.io/nhslogin/user-journeys/#p9) on their behalf.

This makes it easier for patients to access digital health services and reduces the need for support.

## How it works

There are two parts to the account provisioning process:

### 1. Healthcare professional flow

Healthcare staff use the CID Provisioning API to start the process. Here's what happens:

1. The GP system authenticates using an access token  
2. The patient’s demographic details and the organisation’s ODS code are submitted  
3. The system checks eligibility and validates the patient’s details against the Personal Demographics Service (PDS)  
4. A response is returned with either a provisioning ID or an error  
5. An email is sent to the patient with instructions to complete their account setup  

**Visual diagram: Healthcare professional flow**

![Diagram showing the healthcare professional flow](https://github.com/nhsconnect/nhslogin/blob/main/src/images/Provisioning%20journey%201.png?raw=true)

### 2. Patient claiming flow

Once the patient receives the email, they follow a short journey to activate their account:

1. The patient selects the link in the email  
2. They receive a one-time passcode (OTP) and enter it  
3. Their details are checked again against PDS  
4. If everything matches, the account is created or upgraded to P9 level  
5. The patient sets a password  
6. They can now use NHS login to access services  

**Visual diagram: Patient claiming flow**

![Diagram showing the patient claiming flow](https://github.com/nhsconnect/nhslogin/blob/main/src/images/Provisioning%20journey%202.png?raw=true)

## Developer documentation

For technical details about how the CID Provisioning API works, see the [Provision Account External Interface Specification](https://nhsconnect.github.io/nhslogin/provision-account-external-interface/).
