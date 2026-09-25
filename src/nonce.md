---
layout: base.njk
title: Using the nonce parameter with NHS login
---

You must include a new `nonce` value in every OpenID Connect authorisation request you send to NHS login. The [External Interface Specification (EIS)](https://nhsconnect.github.io/nhslogin/interface-spec-doc/) requires you to include it.

## What you need to do

1. Generate a new, unpredictable `nonce` value. Do not reuse it for another authentication request.
2. Store the value securely for the duration of the authentication transaction, until you have checked the ID token.
3. Send the value to the NHS login `/authorize` endpoint.
4. Check that the `nonce` claim in the returned ID token matches the value you originally sent.
5. If the `nonce` claim is missing or does not match, do not sign the user in.

Complete these steps in every NHS login journey your service supports, including separate web and mobile implementations.

## Add nonce to your authorisation request

Add the `nonce` parameter when you start the NHS login authorisation code flow. Send it to the NHS login `/authorize` endpoint with the other registered values for your service.

```text
GET [NHS-login-authorize-endpoint]?
  response_type=code&
  client_id=[your-client-id]&
  redirect_uri=[your-registered-redirect-uri]&
  scope=openid&
  state=[your-state-value]&
  nonce=[a-new-unpredictable-value]
```

NHS login returns the same value in the `nonce` claim of the ID token.

## Check the ID token

After you exchange the authorisation code for tokens, validate the ID token using your OpenID Connect library or implementation. As part of that validation, compare its `nonce` claim with the value you stored when the authentication transaction began.

If the `nonce` claim is missing or does not match the stored value, do not sign the user in. Treat the response as invalid and follow your service's usual error-handling process.

<div class="nhsuk-inset-text">
  <span class="nhsuk-u-visually-hidden">Information: </span>
  <p>Your OpenID Connect library may generate and validate a <code>nonce</code> for you. Check its configuration and make sure it sends a new <code>nonce</code> in every NHS login authorisation request.</p>
</div>

## More information and support

Read the [OIDC login flow](https://nhsconnect.github.io/nhslogin/oidc-login-flow/) for an overview of how NHS login authorisation works. The [OpenID Connect Core specification](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest) explains the `nonce` parameter in more technical detail.

Contact [NHS login developer support](https://nhsconnect.github.io/nhslogin/developer-support/) if you need help making this change.
