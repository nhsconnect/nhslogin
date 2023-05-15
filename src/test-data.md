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

NHS login have produced a tool for all test data requests from suppliers. It uses test data added to a spreadsheet for accounts that need uplifting to either P5 or P9. The spreadsheet has guidance around the requirements for each field.

Before we can uplift them, suppliers need to create the accounts with a valid email address and the OTP code sent to the email address.

Send feedback on this process to the NHS login support mailbox – <support.nhslogin@nhs.net>

[Download the supplier test data requests spreadsheet](https://github.com/nhsconnect/nhslogin/blob/main/Supplier-test-data-requests.xlsx?raw=true)