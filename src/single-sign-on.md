---
layout: base.njk
title: Single Sign On
---

NHS login supports Single Sign On (SSO) based on an asserted token exchange between two Relying Parties (RP1 & RP2).
- Asserted tokens are one time tokens (TTL 60 sec)
- Partner services can control which other partner services they share SSO with

NHS login supports two parameters asserted_login_identity and prompt as part of the OIDC flow which will allows for seamless login between two Relying Parties (RP1 and RP2).

---

## Technical details

Please refer to [NHS login Interface Specification - Federated document](/nhslogin/interface-spec-doc/), for most up-to-date technical details.

### parameter: prompt

**Req?** opt 

Requests that the NHS login Service forces the user to sign-in, or to request that the Service does not prompt the user to sign-in (SSO).
 
| **Value** | **Description**                               |
| -------------|---------------------------------------------- |        
| `<blank>`    | The service will SSO the user if they still have a valid session, <br> else the user will be requested to log in. |
| `"none"`     | The Service will SSO the user if they still have a valid session, <br> otherwise an error code is returned |
| `"login"`    | The Service will request the user to log in, regardless of a session <br> already existing. |

### parameter: asserted_login_identity

**Req?** opt 

The purpose of this parameter is to support seamless login between two RPs (RP1 and RP2) where cookie-based SSO is not available. 

The content will be a signed `jwt` with payload containing `“code”` attribute with the value being that of the `jti` attribute from the ID Token issued to RP1. The `jwt “iss”` attribute **must** contain the client_id of RP1, the `jwt` **must** have an `“exp”` of no longer that 60 seconds, **must** have `“jti”` and `“iat”` attributes (as per RFC7519) and **must** be signed by RP1 using its client private key. RP1 passes the `jwt` to RP2 for RP2 to use in its authentication request.

A non-normative example jwt payload section is as follows:
``` html
{
  code: “eeroifoteiwrudjdwusdu”,
  iss: “client1”,
  jti: “reioteotijdvorijevoihroi”,
  iat: 1548701645,
  exp: 1548701705
}
```

---

## SSO flow

### Step 1: login to RP1

User requests RP1 login - OIDC flow - Authorisation code flow

![diagram](https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/Step1.png "Step 1: login to RP1 diagram")

### Step 2: SSO from RP1 to RP2

User transitions from RP1 to RP2 - Single Sign On - Asserted token flow

![diagram](https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/Step2.png "Step 2: SSO from RP1 to RP2 diagram")

### SSO sequence diagram

![diagram](https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/SequenceDiagram.png "SSO sequence diagram")