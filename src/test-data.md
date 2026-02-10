---
layout: base.njk
title: Test data
---

## Sandpit test data

You can use these Sandpit test accounts to sign in and explore the NHS login journey.

These accounts use dummy details and a static one-time password (OTP), so you can test the journey without creating your own users.

Download the test accounts:

- [Sandpit test data spreadsheet (Excel)](https://github.com/nhsconnect/nhslogin/blob/main/assets/test-data/sandpit-test-data.xlsx?raw=true)

You can create new users in the Sandpit to explore the identity verification screens. However, the Sandpit is not connected to the Personal Demographics Service (PDS), so newly created users cannot complete a full end-to-end journey.

---

## Integration test data

You can use these Integration test accounts to complete the full end-to-end NHS login journey, including validation against the Personal Demographics Service (PDS).

Download the test accounts:

- [Integration test data spreadsheet (Excel)](https://github.com/nhsconnect/nhslogin/blob/main/assets/test-data/integration-test-data.xlsx?raw=true)

If your service uses the NHS Digital IM1 interface to access patient-facing services, we can also provide predefined test data for a successful connection to GP middleware. You can ask for specific GP linkage details to be used during testing.

---

## Live production environment

We can provide you with an existing test user in live to enable smoke testing. The user will have already been verified and therefore will allow a successful redirect back to your service. This does not include any clinical data.

---

## Supplier test data requests

We’ve built a tool to handle test data requests from suppliers.

It uses a spreadsheet to request test data for accounts that need uplifting to identity proofing levels P5 or P9.

Download the request template:

- [Supplier test data request spreadsheet (Excel)](https://github.com/nhsconnect/nhslogin/blob/main/Supplier-test-data-requests.xlsx?raw=true)

Use this spreadsheet to provide the required test data. The sections below explain how to complete each field correctly.

## Required fields

**Email address**  
Must be the email address used to create the test account in the target environment.

**First, middle and last name**  
Provide realistic names. Ideally, these should match a valid Personal Demographics Service (PDS) record in the Spine Integration Environment.  
The middle name is optional.

**Date of birth**  
Must be in one of the following formats:
- DD/MM/YYYY  
- YYYY-MM-DD  

Ideally, this should match a valid PDS record.

**Phone number**  
Must be a valid UK phone number starting with `+44` or `07`.

**Phone number PDS matched**  
Set to `true` if you want the phone number to be treated as matched to PDS. This is used for testing Identity Verification via Mobile (IDVM).

If the user is registered for GP online services and their NHS login mobile number matches the one held by their GP, their account setup can be fast-tracked and no additional identity checks are required.

**NHS number**  
Must be a valid 10-digit NHS number that passes the checksum.  
Ideally, this should match a valid PDS record. You can use Data Gorilla to validate the number.

**Disable OTP**  
Set to `true` to skip sending a real one-time password (OTP) and use the static test OTP `190696`.  
Set to `false` to send a real OTP to the registered mobile number.

**Disable PDS trace**  
Set to `true` to prevent NHS login from automatically syncing user data with PDS during login.

This avoids test data being overwritten and helps preserve GP IM1 details during testing.

**GP ODS code**  
Provide a valid GP ODS code. Ideally, this should match a PDS record.

**Manually confirmed**  
Must be set to `true`.

We cannot process requests unless the NHS login account has already been created, including email, password and confirmation.

## GP IM1 details (optional)

Only complete this section if you are testing IM1 integration and syncing with a GP system.

If left blank, default values will be used.

**GP account ID**  
Ideally generated from a test GP system.

**GP connection token**  
Ideally generated from a test GP system.

**GP linkage key**  
Ideally generated from a test GP system.

## Before you submit

Before submitting the spreadsheet:

- ensure the NHS login account has been created with a valid email address  
- confirm the OTP has been sent and verified  

Send any feedback or issues to: [support.nhslogin@nhs.net](mailto:support.nhslogin@nhs.net)


