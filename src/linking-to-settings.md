---
layout: base.njk
title: NHS login user settings
---

## Managing NHS login

NHS login provides capability for users to change their NHS login account settings online, help reducing calls into partner service support desks. To help users do this NHS login needs partner services to create a link from their service to the NHS login settings page. Users will need to be logged into the partner service to use this link.

### NHS login currently allows users to:
- change their email address
- change their password
- change their mobile phone number
- delete their NHS login

To help users do this, NHS login needs you to create a link from your service to the NHS login settings page:

![diagram](nhslogin/images/example_settings_smallest.png)

---

## Technical details

NHS login supports the parameter `asserted_login_identity` as part of the OIDC flow. This allows the user to seamlessly access the “Manage NHS login Settings” functionality from the partner service without the need for re-authentication. 

1. `asserted_login_identity` will be a querystring parameter 
2. parameter content is a signed `jwt`
3. the `asserted_login_identity` token is a one-time token (TTL 60 sec)

Refer to the [NHS login Interface Specification – Federation](https://nhsconnect.github.io/nhslogin/interface-spec-doc/) for technical details. In the context of document :
- RP1 is partner service 
- RP2 is NHS login

### User settings flow

![diagram](https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/SettingsDiagram_smaller.png "NHS login settings flow diagram")

---

## User settings page links

**Production:** 

`https://settings.login.nhs.uk?asserted_login_identity=ewrffw...wfw`

**Other environments:** 

`https://settings.<ENV>.signin.nhs.uk?asserted_login_identity=ewrffw...wfw`

e.g. `https://settings.sandpit.signin.nhs.uk?asserted_login_identity=ewrffw...wfw`


