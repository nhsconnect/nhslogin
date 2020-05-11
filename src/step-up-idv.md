---
layout: base.njk
title: Step-up verification
---

Services can make use of multiple levels of identity verification to minimises sign-up friction.

## Recommended approach

The following example is intended to help services achieve the highest conversion rate with NHS login.

### Services paired with GP systems via IM1

The OIDC flow is initiated with:

- vtr: “P5.Cp.Cd”, “P5.Cp.Ck”
- scopes: "openid, profile, email, phone, gp_integration_credentials"

Users registering for the first time with NHS login (or previously registered to P0 level) will be retuned to your service once they have completed medium-level IDV (P5). The claims relating to `gp_integration_credentials` will not be available as the user hasn't completed high-level IDV (P9).

Existing NHS login users that have completed high-level IDV will be retuned to your service upon successful login, with all requested claims available.

Users who have completed medium-level IDV can be returned to NHS login at an appropriate point in your service to complete high-level IDV.

N.B. Utilising the parameters `asserted_login_identity` and `prompt` your service can further improve the user experience by bypassing authentication for users with an existing session.

A second OIDC flow is initiated with:

- vtr: “P9.Cp.Cd”, “P9.Cp.Ck”
- scopes: "openid, profile, email, phone, gp_integration_credentials"

The user will be asked to complete high-level IDV and, if successful, your service will now be able to retrieve the claims relating to `gp_integration_credentials`.
