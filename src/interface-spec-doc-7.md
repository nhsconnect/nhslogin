---
layout: base.njk
title: 7 Partner Services and Security 
---

## 7.1 Partner Service Registration

Currently, Partner Services will be registered and onboarded into the NHS login Platform using a standard offline process.

The following information is required is required for the offline registration process:

<dl><dt>Table 20: Client Metadata - supplied by client</dt></dl>

| Attribute     | Description |
| ------------- | ----------- |
| Redirect URIs | List of Redirection URI values used by the Client. <br>The redirect_uri parameter value used in each Authorization Request **MUST** exactly match one of these registered Redirection URI values. |
| Client Name   | Name of the Client to be presented to the End-User. |
| Public Key    | A copy of the client’s public key is supplied. The public key must be in PEM format and represent a 2048-bit RSA keypair. <br>An example use of OpenSSL to generate a RSA public/private key pair and then extract the public key is as follows: <br> `openssl genpkey -algorithm RSA -out ../keys/private_key.pem -outform PEM -aes-256-cbc -pass file:../keys/password.txt -pkeyopt rsa_keygen_bits:2048` <br> `openssl rsa -pubout -in ../keys/private_key.pem -out ../keys/public_key.pem -passin file:../keys/password.txt` |
| Scopes        | Required scopes |

On successful registration, the following information will be provided 

<dl><dt>Table 21: Client Metadata - allocated by NHS login</dt></dl>

| Attribute   | Req? | Type   | Description |
| ----------- | ---- | ------ | ----------- |
| `client_id` | mand | string | Id for the client, allocated by the NHS login service. |



---

## 7.2 Partner Service Authentication

Reference:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), section 9

### 7.2.1 Confidential Clients

Partner Services which are confidential clients will use the following authentication mechanism:

- `private_key_jwt`, as per [https://tools.ietf.org/html/rfc7523](https://tools.ietf.org/html/rfc7523)

The authentication mechanism of “none” is not supported for confidential clients.

---

## 7.3 Client Redirects

The NHS login Platform will only allow redirect URIs which have been pre-agreed during the onboarding process.

Wildcard URIs are not permitted.

HTTP URIs are NOT permitted

URIs with querystring parameters are not permitted. (The 'state' parameter described in [section 3.4](https://nhsconnect.github.io/nhslogin/interface-spec-doc-3) is designed to support conveying dynamic request content within the OIDC authentication request.)