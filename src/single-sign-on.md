---
layout: base.njk
title: Single Sign On
---

NHS login supports Single Sign On (SSO) based on an asserted token exchange between two Relying Parties (RP1 & RP2).
- Asserted tokens are one time tokens (TTL 60 sec)
- Partner services can control which other partner services they share SSO with

NHS login supports two parameters asserted_login_identity and prompt as part of the OIDC flow which will allows for seamless login between two Relying Parties (RP1 and RP2).
 
[View our document providing guidance on Single Sign On (SSO)](https://github.com/nhsconnect/nhslogin/raw/master/NHSlogin_SSO_v1.0.pptx)