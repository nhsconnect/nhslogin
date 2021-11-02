---
layout: base.njk
title: NHS login user journeys
---

All of the NHS login user journeys start with the NHS login button on your website or app. These journeys cannot be changed or customised.


## Low level verification (P0)

Only the user’s email address and phone number are required to register for a service. Users can log in with an email address and password, with or without the need for an OTP.

![diagram](https://github.com/nhsconnect/nhslogin/raw/main/src/images/IDVMDiagram.svg "Diagram showing the P0 user journey")

**What the Partner Service gets**

- User verified email & phone number - one time passcode (OTP) sent to phone

**What is not provided**

- User identity not fully verified
- No NHS number 
- No checks with their NHS Personal Demographics Service (PDS) record, (held on Spine)
- No GP surgery code (ODS code)
- No GP surgery online registration information (linkage key) - which allows access to medical records

**What users can do**

- Record non-medical data outside the patient record, e.g. book appointments (not able to view or manage appointments – which may give out information).
- Be registered in an online setting, where treatment does not require high level identity assurance or access to / adding to existing medical record.
- Enquire about non-medical data outside the patient record and access non-tailored online NHS services and content.
- Add / Enquire about medical data which is to be held in a separate patient record, e.g. recording and enquiry of STI / sexual health information, treatment and prescribing outside the main NHS patient record.
- Add / Enquire about non-prescription medication to be held in a separate patient record, e.g. recording of non-prescription drugs or advice / guidance.

---

## Medium level verification (P5)

Users can contact their GP or receive notifications via email or SMS. Users can’t access medical records or personal information, nor should the user transfer sensitive or personal information. The Partner Service can’t disclose sensitive info or medical record data.

This level of verification is just a claim identity. If a Partner Service wishes to use and rely on the user’s NHS number they need to request a high-level verification (P9).

![diagram](https://github.com/nhsconnect/nhslogin/raw/main/src/images/UserJourney_P5.svg "Diagram showing the P5 user journey")

**What the Partner Service gets**

- User verified email and phone number
- User verified their; date of birth, NHS number, full name – this information has been checked with their NHS Personal Demographics Service (PDS) record (held on Spine)
- User verified the area code of their postcode – this information has been checked with and ‘fuzzy matched’ to their NHS Personal Demographics Service (PDS) record (held on Spine)
- GP surgery code (ODS code)

**What is not provided** 

- User identity not fully verified
- No GP surgery online registration information (linkage key) – which allows access to medical records

**What users can do**

In addition to what users can do with low level verification (P0), users can also:
- Record (no read capability) non-medical data into record, e.g. record data-sharing opt-out preference or record preferred pharmacy (further controls will be needed around collection of controlled medications).

---

## High level verification (P9)

There are two ways in which a user can acquire high level verification (P9). The user cases and what the Partner Service gets are the same but the user journey is different.

High level verification is needed when personal, confidential or sensitive information is being communicated either to or from the user. It is also required when the user can access their medical records e.g. GP record via a 3rd party – such as Co-op Health app, NHS App or TPP Airmid.


### Prove Your Identity (PYI)

![diagram](https://github.com/nhsconnect/nhslogin/raw/main/src/images/UserJourney_P9PYI.svg "Diagram showing the P9 PYI user journey") 

 ### Patient Online (POL)

![diagram](https://github.com/nhsconnect/nhslogin/raw/main/src/images/UserJourney_P9POL.svg "Diagram showing the P9 POL user journey") 

**What the Partner Service gets**

- User verified their email and phone number 
- User ID fully authenticated
- User also verified their; date of birth, NHS number, full name and postcode – this information has been checked with their NHS Personal Demographics Service (PDS) record (held on Spine)
- GP surgery code (ODS code)
- GP surgery online information (linkage key) – which allows access to medical records

**What users can do**

In addition to what users can do with medium level verification (P5), users can also: 
- Enquire against official record, e.g. read medical record, view NHS number, order repeat prescriptions, view SCR or detailed record, manage / view appointments, view tailored online NHS services and online content.
- Record medical data into private healthcare consultation record.
- Enable delegated access for another validated individual.
- Register for online account where treatment requires high level identity assurance or access to / adding to existing medical record.
- Record new phone number or new address online.
- Register patient to a new GP through a purely online mechanism.

---

## Step-up from mid-level (P5) to high-level verification (P9)

Here, the user has a mid-level (P5) verification but wants to uplift to a high (P9) level to access additional services or functionality. In this journey the user does NOT need to verify their demographic information as this has already been completed.
A person needs to prove their identity to have it fully verified and checked with the record on PDS.

![diagram](https://github.com/nhsconnect/nhslogin/raw/main/src/images/UserJourney_P5UpliftP9.svg "Diagram showing the P5 to P9 uplift user journey") 

---

## IDVM (P9)

IDVM is a P9 proofing method (an alternative to PYI and POL).
Available to services with P5 authentication level, and it is only applicable to P5 users who are registered for POL at their GP. If their phone number matches the one against their GP record, then we can uplift them to P9.

![diagram](https://github.com/nhsconnect/nhslogin/raw/main/src/images/UserJourney_P9IDVM.svg "Diagram showing the IDVM uplift user journey") 

---

Download the [NHS login User Journey Visuals presentation](https://digital.nhs.uk/services/nhs-login/nhs-login-for-partners-and-developers/nhs-login-integration-toolkit/discovery#download-the-nhs-login-user-journey-visuals-presentation).