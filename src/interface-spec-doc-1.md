---
layout: base.njk
title: 1 Introduction 
---

## 1.1 Purpose of Document

NHS login implements OpenID Connect 1.0 OpenID Provider role to assert the identity of the End-User to a Partner Service, as well as enabling the Service to obtain basic profile information about the End-User in an interoperable manner.

This document defines the interfaces implemented by the Platform and describes the data flows supported by these interfaces.

---

## 1.2 Audience
The primary audiences for this document are:
- NHS login Programme team
- NHS Digital – Digital Delivery Centre
- NHS Digital – Other Delivery teams
- NHS England
- 3rd Party Suppliers integrating with the NHS Digital NHS login Platform

---

## 1.3 Definitions
Where used in this document set, the keywords **must**, **should** and **may** are to be interpreted as follows:
- **must**: This word, or the terms "**required**" or "**shall**", means that the definition is an absolute requirement of the specification.
- **should**: This word, or the adjective "**recommended**", means that there may exist valid reasons in particular circumstances to ignore a particular item, but the full implications **must** be understood and carefully weighed before choosing a different course.
- **may**: This word, or the adjective "**optional**”, means that an item is truly **optional**. One implementer **may** choose to include the item because a particular implementation requires it or because the implementer feels that it enhances the implementation while another implementer **may** omit the same item. An implementation which does not include a particular option **must** be prepared to interoperate with another implementation which does include the option, though perhaps with reduced functionality. In the same vein an implementation which does include a particular option **must** be prepared to interoperate with another implementation which does not include the option (except, of course, for the feature the option provides).
