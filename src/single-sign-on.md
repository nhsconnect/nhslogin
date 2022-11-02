---
layout: base.njk
title: Single Sign On (SSO)
---

NHS login supports Single Sign On (SSO) based on an asserted token exchange between two relying parties (RP1 & RP2).
- Asserted tokens are one time tokens (TTL 60 sec)
- Partner services can control who they share SSO with

NHS login supports two parameters `asserted_login_identity` and `prompt` as part of the OIDC flow. This allows for seamless login between two relying parties (RP1 and RP2).

---

## Technical details

Please refer to NHS login [external interface specification](https://nhsconnect.github.io/nhslogin/interface-spec-doc/) for most up-to-date technical details.

### parameter: prompt

This is an optional parameter. It requests that NHS login forces the user to sign-in, or that the service does not prompt the user to sign-in (SSO).
 
| **Value** | **Description**                               |
| -------------|---------------------------------------------- |        
| `<blank>`    | The service will SSO the user if they still have a valid session, <br> otherwise the user will be requested to log in. |
| `"none"`     | The service will SSO the user if they still have a valid session, <br> otherwise an error code is returned. |
| `"login"`    | The service will request the user to log in, regardless of a session <br> already existing. |

### parameter: asserted_login_identity

This is an optional parameter. It supports seamless login between two relying parties (RP1 and RP2) where cookie-based SSO is not available. 

The content will be a signed `jwt` with payload containing `“code”` attribute, with the value being that of the `jti` attribute from the ID Token issued to RP1. 

The `jwt` **MUST** 
- have an `“iss”` attribute that contains the `client_id` of RP1
- have an `"exp"` no longer than 60 seconds, 
- `“jti”` and `“iat”` attributes (as per RFC7519) 
- be signed by RP1 using its client private key. 

RP1 passes the `jwt` to RP2 for RP2 to use in its authentication request.

A non-normative example `jwt` payload section is as follows:

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

<div class="design-example">
<a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Step1_smaller.png" class="design-example__pop-out" target="_blank">Open this diagram in new window</a>
    <div class="code-embed">
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Step1_smaller.png" alt="Step 1: login to RP1 diagram">
</div>
</div>

### Step 2: SSO from RP1 to RP2

User transitions from RP1 to RP2 - Single Sign On - Asserted token flow

<div class="design-example">
<a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Step2_smaller.png" class="design-example__pop-out" target="_blank">Open this diagram in new window</a>
    <div class="code-embed">
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Step2_smaller.png" alt="Step 2: SSO from RP1 to RP2 diagram">
</div>
</div>

### SSO sequence diagram

<div class="design-example">
<a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/SequenceDiagram_smaller.png" class="design-example__pop-out" target="_blank">Open this diagram in new window</a>
    <div class="code-embed">
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/SequenceDiagram_smaller.png" alt="Step 2: SSO from RP1 to RP2 diagram">
</div>
</div>
