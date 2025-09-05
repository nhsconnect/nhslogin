---
layout: base.njk
title: Test data
---

## Sandpit environment

You will be provided with a set of test data, including NHS login email addresses and passwords. Both users have a static One Time Password (OTP). This allows you to successfully complete a login and redirect back to your service.

You may create new users in the Sandpit to understand the ID verification journey. As there is no link to the Personal Demographic Service (PDS) in the Sandpit, you are unable to use newly created users to complete a full end-to-end journey.

## Integration environment

You will be provided with a standard set of Spine Demographics Records. These can be used to create new users and successfully complete ID verification, including validation against PDS. This allows you to complete the full end-to-end journey of NHS login and successfully redirect back to your service. 

You should contact us if you need ID verification to be approved or if you require bespoke test data, like clinical data.

If your service uses the NHS Digital IM1 interface to access patient facing services, we can also provide predefined test data for successful connection to GP middleware. You can ask for specific GP linkage details to be used during testing.

## Live production environment

We can provide you with an existing test user in live to enable smoke testing. The user will have already been verified and therefore will allow a successful redirect back to your service. This does not include any clinical data.


## Supplier test data requests 

We’ve built a tool to handle all test data requests from suppliers. It reads a spreadsheet containing account details that need to be uplifted to either P5 or P9. Below is a breakdown of each required field in the spreadsheet, with guidance on how to populate them correctly.

---

### Required Fields

### Email Address
- Must be the email used to create the test account in the target environment.

### First / Middle / Last Name
- Provide realistic names. Ideally, they should match a valid PDS record in the Spine Integration Environment.
- Middle name is optional.

### Date of Birth
- Format must be either `DD/MM/YYYY` or `YYYY-MM-DD`.
- Preferably matches a valid PDS record.

### Phone Number
- Must be a valid UK number starting with `+44` or `07`.

### Phone Number PDS Matched
- Set to `true` if you want the phone number to be treated as matched to PDS.
- This is used for testing Identity Verification via Mobile (IDVM).

> If the user is registered for GP online services and their NHS login mobile number matches the one held by their GP, their account setup can be fast-tracked—no need for ID re-checking.

### NHS Number
- Must be a valid 10-digit number that passes the checksum.
- Ideally matches a valid PDS record.
- Use [Data Gorilla](https://data-gorilla.uk/en/healthcare/nhs-number/) to validate the number.

### Disable OTP
- Set to `true` to skip sending a real OTP and use the static test OTP `190696`.
- Set to `false` to send a real OTP to the registered mobile number.

### Disable PDS Trace
- Set to `true` to prevent NHS login from automatically syncing user data with PDS during login.
- This avoids test data being overwritten and preserves GP IM1 details.

### GP ODS Code
- Provide a valid GP ODS Code, ideally one that matches a PDS record.

---

### GP IM1 Details (Optional)

Only needed if you're testing IM1 integration and syncing with a GP system.  
More info: [GP Credentials Guide](https://nhsconnect.github.io/nhslogin/gp-credentials/)

If left blank, default values will be used.

- GP Account ID – Ideally generated from a test GP system  
- GP Connection Token – Ideally generated from a test GP system  
- GP Linkage Key – Ideally generated from a test GP system  
- Manually Confirmed – Must be set to `true`. We can’t process requests unless the NHS login account (email, password, and confirmation) is already created.

---

### Before You Submit

- Ensure the account is created with a valid email.
- Confirm that the OTP has been sent and verified via email.

---

### Feedback

Send any feedback or issues to: [support.nhslogin@nhs.net](mailto:support.nhslogin@nhs.net)

## Spreadsheet

Download the official supplier test data request spreadsheet to submit your data.
