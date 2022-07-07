---
layout: base.njk
title: Testing Scenarios
---

For further information regarding VoT (Vectors of Trust), Proofing Levels or user journeys, refer to the [NHS login Integration Toolkit](https://digital.nhs.uk/services/nhs-login/nhs-login-for-partners-and-developers/nhs-login-integration-toolkit/discovery).

Any test data requests to support these scenarios can be requested from NHS login via the [NHS login Developer Support Slack](https://nhs-login-support-slack-invite.herokuapp.com/).

Note: If you support more than one VoT, ensure you complete the test scenarios for each.

---

## Testing Scenarios for P0

These scenarios should be completed by all suppliers that support a proofing level of P0. 

### Generic Scenarios (Mandatory)
* Confirm access to NHS login settings page
* Test the scenario where a user chooses to not accept consent to share with NHS login and ensure a suitable message is displayed to the user from the service.
* Supplier to request scopes that are not supported by their service and ensure invalid scope error returned to the user.
* Suppliers to check that the VoT parameter in the request matches the VoT parameter in the response from NHS login.


### Registration (Mandatory)
* Supplier to confirm that they can support registration at P0 with a P0 VOT
* Where a supplier supports multiple VoTs these should all be tested.


### Login
<b>Services supporting P0 VoT (confirmation that it resolves to their service)</b>
* Login with user verified at P0 user successfully redirected to P0 service and the correct scopes are presented on consent screen
* Login with user verified at P5 user successfully redirected to P0 service and the correct scopes are presented on consent screen
* Login with user verified at P9 user successfully redirected to P0 service and the correct scopes are presented on the consent screen

### PYI (Optional and for awareness only)
* Suppliers should be aware of the PYI journey to be able to provide basic support to their users.

---

## Testing Scenarios for P5

These scenarios should be completed by all suppliers that support a proofing level of P5. 

### Generic Scenarios (Mandatory)

* Confirm access to NHS login settings page
* Test the scenario where a user chooses to not accept consent to share with NHS login and ensure a suitable message is displayed to the user from the service.
* Supplier to request scopes that are not supported by their service, invalid scope error returned to the user.
* Suppliers to check that the VOT parameter in the request matches the VOT parameter in the response from NHS login.

### Registration (Mandatory)

* Supplier to confirm that they can support registration at P5 with a P5 VOT
* Where a supplier supports multiple VOTs these should all be tested.

### Login
<b>Services supporting P5 VOT</b>

* Login with user verified at P0 user asked to uplift to P5, user then successfully redirected to P5 service, and the correct scopes are presented on consent screen
* Login with user verified at P5 user successfully redirected to P5 service and the correct scopes are presented on consent screen
* Login with user verified at P9 user successfully redirected to P5 service and the correct scopes are presented on consent screen

### PYI (Optional and for awareness only)
* Suppliers should be aware of the PYI journey to be able to provide basic support to their users.

---

## Testing Scenarios for P9

These scenarios should be completed by all suppliers that support a proofing level of P9. 

### Generic Scenarios (Mandatory)
* Confirm access to NHS login settings page
* Test the scenario where a user chooses to not accept consent to share with NHS login and ensure a suitable message is displayed to the user from the service.
* Supplier to request scopes that are not supported by their service, invalid scope error returned to the user.
* Suppliers to check that the VOT parameter in the request matches the VOT parameter in the response from NHS login.


### Registration (Mandatory)
* Supplier to confirm that they can support registration at P9 with a P9 VOT
* Where a supplier supports multiple VOTs these should all be tested.


### Login
<b>Non-IM1 Service supporting P9 VOT (Mandatory where applicable)</b>
* Login with user verified at P0 user asked to uplift to P9, user then successfully redirected to P9 Non-IM1 service, and the correct scopes are presented on consent screen
* Login with user verified at P5 user asked to uplift to P9, user then successfully redirected to P9 Non-IM1 service, and the correct scopes are presented on consent screen
* Login with user verified at P9 user successfully redirected to P9 Non-IM1 service and the correct scopes are presented on consent screen

<b>IM1 Service supporting P9 VOT (Mandatory where applicable)</b>
* Login with user verified at P0 user asked to uplift to P9, user then successfully linked to GP account and redirected to P9 IM1 service.
* Login with user verified at P5 user asked to uplift to P9, user then successfully linked to GP account and redirected to P9 IM1 service.
* Login with user verified at P9 user then successfully linked to GP account and redirected to P9 IM1 service.
* Login with a user with invalid IM1 details, confirm user is unable to access GP Online Services.


### PYI (Optional and for awareness only)
* Suppliers should be aware of the PYI journey to be able to provide basic support to their users.
 
---

### Glossary of Terms

| Syntax      | Description |
| :---        | :---        |
| VoT | Vector of Trust |
| PYI | Prove your Identity |
| POL | Patient Online |
| IM1 | Interface Mechanisms |
| P0 | Proofing level 0 |
| P5 | Proofing level 5 |
| P9 | Proofing level 9 |
| Service/s | Supplier service either a website or Mobile App |

