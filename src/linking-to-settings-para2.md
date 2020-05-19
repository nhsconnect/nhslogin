---
layout: base.njk
title: NHS login user settings
---

## Managing NHS login

NHS login provides capability for users to change their NHS login settings online, helping to reduce support overheads. 

### NHS login currently allows users to:
- change their email address
- change their password
- change their mobile phone number
- delete their NHS login

To help users do this, NHS login needs you to create a link from your service to the [NHS login settings page](https://settings.login.nhs.uk). 

---
 
## Technical details

Please refer to [NHS login Interface Specification - Federated document](/nhslogin/interface-spec-doc/), for most up-to-date technical details.

NHS login supports the parameter `asserted_login_identity` as part of the OIDC flow. This allows the user to seamlessly access the “Manage NHS login Settings” functionality from the partner service without the need for re-authentication. 

1. `asserted_login_identity` will be a querystring parameter 
2. parameter content is a signed `jwt`
3. the `asserted_login_identity` token is a one-time token (TTL 60 sec)

Refer to the [NHS login Interface Specification – Federation document](https://nhsconnect.github.io/nhslogin/interface-spec-doc/) for technical details. In the context of document :
- RP1 is partner service 
- RP2 is NHS login

### parameter: asserted_login_identity

The purpose of this parameter is to support seamless login between two RPs (RP1 and RP2) where cookie-based SSO is not available. 

The content will be a signed jwt with payload containing `code` attribute with the value being that of the `jti` attribute from the ID Token issued to RP1. The `jwt “iss"` attribute **must** contain the client_id of RP1, the jwt **must** have an `“exp”` of no longer that 60 seconds, **must** have `“jti”` and `“iat”` attributes (as per RFC7519) and **must** be signed by RP1 using its client private key. RP1 passes the `jwt` to RP2 for RP2 to use in its authentication request.

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

## Settings flow

![diagram](https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/SettingsDiagram_smaller.png "NHS login settings flow diagram")

---

## Settings page link details

**Production:** 

`https://settings.login.nhs.uk?asserted_login_identity=ewrffw...wfw`

**Other environments:** 

`https://settings/<ENV>.login.nhs.uk?asserted_login_identity=ewrffw...wfw`

