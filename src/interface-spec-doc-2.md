---
layout: base.njk
title: 2 Specification status 
---

## 2.1 Scope / constraints

- This document relates to NHS login ‘Federation interface’ during Beta. Further amendments WILL be implemented prior to full rollout – this document is a draft representing intended design, but is subject to clarification.
- The NHS login Platform supports Authentication using the Authorization Code Flow only. Implicit & Hybrid Flows are not supported
- HTTP is not supported - all HTTP-based flows must be HTTPS (using TLS v1.2 or above)

---

## 2.2 Changes in this version
Version 1.9 of this specification includes the following changes:
- Addition of `identity_proofing_level` claim in the `profile` scope
- Minor clarification on conditions applicable for requesting scopes
- Updates to Verification of Identity Levels
- Updates to Requesting Vectors of Trust values
- Updates to Client Redirects
- Minor reference changes
