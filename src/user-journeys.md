---
layout: base.njk
title: User journeys
---

## Low level verification (P0)

Only the user’s email address and phone number are required to register for a service. Users can log in with an email address and password, with or without the need for an OTP.

![diagram](https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/Low-level-verification-P0.svg "insert alt text here")

**What the service gets**

- User verified email & phone number - one time passcode (OTP) sent to phone

**What is not provided**

- User identity not fully verified
- No NHS number 
- No checks with their NHS Personal Demographics Service (PDS) record, (held on Spine)
- No GP surgery code (ODS code)
- No GP surgery online registration information (linkage key - which allows access to medical records)

**What users can do**

- Record non-medical data outside the patient record, e.g. book appointments (not able to view or manage appointments – which may give out information).
- Be registered in an online setting, where treatment does not require high level identity assurance or access to / adding to existing medical record.
- Enquire about non-medical data outside the patient record and access non-tailored online NHS services and content.
- Add / Enquire about medical data which is to be held in a separate patient record, e.g. recording and enquiry of STI / sexual health information, treatment and prescribing outside the main NHS patient record.
- Add / Enquire about non-prescription medication to be held in a separate patient record, e.g. recording of non-prescription drugs or advice / guidance.

---

## Medium level verification (P5)

Users can contact their GP and receive notifications via email or SMS. They cannot access medical records or personal information. Your service cannot disclose sensitive information or medical record data.

This level of verification is just a claimed identity. If your service wishes to use and rely on the user’s NHS number, you need to request high level verification (P9).

![diagram](https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/example_overview.svg "Diagram showing how the NHS login button works")

**What the service gets**

- User verified email and phone number
- User verified full name, date of birth and NHS number – checked with their NHS Personal Demographics Service (PDS) record held on Spine 
- User verified area code of their postcode – checked with and ‘fuzzy matched’ to their PDS record held on Spine 
- GP surgery code (O.D.S. code) 

**What is not provided** 

- Fully verified user identity
- GP surgery online registration information, like a linkage key that allows access to medical records

**What users can do**

In addition to what users can do with low level verification (P0), users can also record non-medical data (no read capability). For example, users can record data-sharing opt-out preference or record preferred pharmacy (further controls will be needed around collection of controlled medications).

---

## High level verification (P9)

There are two ways in which a user can acquire high level verification. The user cases and what your service gets are the same, but the user journeys are different. 

### Prove Your Identity (PYI)

High level verification is needed when personal, confidential, or sensitive information is being communicated either to or from the user. It is also required when the user can access their medical records. For example, when a user can access their GP record through a third party service.

![diagram](https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/example_overview.svg "Diagram showing how the NHS login button works") 

**What the service gets**

- User verified email and phone number
- Fully verified and authenticated user identity
- User verified full name, date of birth, postcode, and NHS number – checked with their NHS Personal Demographics Service (PDS) record held on Spine
- GP surgery code (O.D.S. code)
- GP surgery online registration information, like a linkage key that allows access to medical records

**What users can do**

In addition to what users can do with medium level verification (P5), users can also: 
- read their medical record
- view their NHS number
- order repeat prescriptions
- manage appointments and view their Summary Care Record (SCR)
- view tailored online NHS services and online content
- record medical data into a private healthcare consultation record
- enable delegated access for another validated individual
- register for an online account where treatment requires high level identity assurance or access to an existing medical record
- record new phone numbers or addresses online
- register with a new GP surgery online
