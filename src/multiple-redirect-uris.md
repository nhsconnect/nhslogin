---
layout: base.njk
title: Multiple redirect URIs
---

We advise partners who have a need for more than 10 (multiple) redirect URIs to use a “state” parameter to populate an identifier. This will help to identify different redirections.

As per the [EIS documentation](https://nhsconnect.github.io/nhslogin/interface-spec-doc/) “state” is an opaque value used to maintain state between the request and the call back.

The value in the “state” parameter will be returned to the partner as-it-is in the authentication response.

NHS login can only support up to 10 re-direct URIs. If you need over 10, you need to implement the "state" parameter and, based on the value returned, add redirects accordingly. This keeps the partner service loosely coupled with NHS login and allows partners to effectively manage operational changes.
