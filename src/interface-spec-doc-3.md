---
layout: base.njk
title: 3 Messages Overview 
---

References: 
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), section 3.1
- [International Government Assurance Profile (iGov)](https://openid.bitbucket.io/iGov/openid-igov-profile-id1.html)
- [Vectors of Trust](https://tools.ietf.org/html/draft-richer-vectors-of-trust-09)

This section describes how the NHS Digital NHS login Platform implements authentication using the OpenID Connect Authorization Code Flow.   

---

## 3.1 Authorization Code Flow

The Authorization Code Flow returns an Authorization Code to the Client, which can then exchange it for an ID Token and an Access Token directly. This avoids exposing any tokens to the User Agent and possibly other malicious applications with access to the User Agent.  

Using this flow also means the Platform can also authenticate the Client before exchanging the Authorization Code for an Access Token. The Authorization Code flow is suitable for Clients that can securely maintain a Client Secret between themselves and the Platform.

<dl><dt>Figure 1: Authorization Code Flow</dt></dl>

![diagram](nhslogin/images/EIS-Figure1.png)

The Authorization Code Flow goes through the following steps:
1.	The client prepares an Authentication Request containing the desired request parameters (see [3.4.1 Authentication request](https://nhsconnect.github.io/nhslogin/interface-spec-doc-3/))
2.	The client sends the request to the Platform – via the User Agent (browser)
3.	The Platform validates the Authentication Request (see [3.4.2 Authentication Request Validation](https://nhsconnect.github.io/nhslogin/interface-spec-doc-3/))
4.	The Platform authenticates the End-User (see [3.4.3 Authorisation Server Authenticates the End-User](https://nhsconnect.github.io/nhslogin/interface-spec-doc-3/))
5.	The Platform obtains End-User Consent / Authorization (see [3.4.4 Authorisation Server obtains End-User Consent / Authorization](https://nhsconnect.github.io/nhslogin/interface-spec-doc-3/))
6.	The Platform sends the Authorization Code to the Client via the End User’s browser
7.	The client requests a response using the Authorization Code at the Token Endpoint (see [3.5.1 Token Request](https://nhsconnect.github.io/nhslogin/interface-spec-doc-3/))
8.	The client receives a response that contains an ID Token and Access Token in the response body (see [3.5.3 Token Response](https://nhsconnect.github.io/nhslogin/interface-spec-doc-3/))
9.	The client validates the ID token and retrieves the End-User’s Subject Identifier.

---

## 3.2 Public and Confidential Clients

Clients are classified as either Public or Confidential based on their ability to maintain the confidentiality of their credentials.

### 3.2.1 Confidential Client

The client is capable of maintaining the confidentiality of its credentials.  For example, the client is implemented on a secure server with restricted access to its credentials.

<dl><dt>Figure 2: Confidential Client</dt></dl>

![diagram](nhslogin/images/EIS-Figure2.png)

### 3.2.2 Public Client

*This section is provided for information only; public clients are not supported by NHS login.*

A Public client is incapable of maintaining the confidentiality of its credentials. For example, the client executes on a device used by the end-user, such as an installed native application or browser-based application.

<dl><dt>Figure 3: Public Client</dt></dl>

![diagram](nhslogin/images/EIS-Figure3.png)

Public clients using the Authorization Code flow are susceptible to authorization code interception attacks. For example, a rogue application could intercept the authorization code as it is being passed through the mobile/native operating system. To mitigate this attack, public clients follow the Proof Key for Code Exchange (PKCE) specification, which binds the Authorisation Request to the subsequent Token Request. PKCE is an extension to the regular Authorization Code flow, so the flow is the same, except that PKCE elements are included at various steps.

Public clients are also at risk of masquerading by malicious services; a malicious service could re-use the `client_id` of a genuine Public client and trick a user into revealing their information.

*For the above reasons Public clients are not supported by NHS login.*

---

## 3.3 Endpoints

| Endpoint | Description |
| -------- | ----------- |
| `/.well-known/openid-configuration` | This is the standard openid discovery address – this will maintain full addresses for the below endpoints. <br>This is consumed by a Service with a direct HTTPS call. |
| `/.well-known/jwks.json` | The Keys used by NHS login to sign tokens are available here. <br>This is consumed by a secure Service’s backend with a direct HTTPS call. |
| `/authorize` | This initiates the Authorization Code flow – the endpoint is consumed by directing a user-agent (typically a web browser) to the endpoint address, using HTTPS. <br>This is also termed the OIDC Authentication Endpoint. |
| `/token` | This is used to retrieve tokens, including ID tokens, by exchanging an authorization code. <br>This is consumed by a secure Service’s backend with a direct HTTPS call. <br>The token endpoint is also used to refresh access tokens, using a previously-issued refresh token. |
| `/userinfo` | This endpoint is used after retrieving tokens – sensitive and/or time-bound attributes are available from this endpoint. <br> This is consumed by a secure Service’s backend with a direct HTTPS call. |

---

## 3.4 Authorize endpoint

### 3.4.1 Authentication request

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), section 3.1.2.1
- [International Government Assurance Profile (iGov) for OpenID Connect](https://openid.bitbucket.io/iGov/openid-igov-profile-id1.html)
- [RFC7519: JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519)

The client initiates an authentication request to the NHS Digital NHS login authorize endpoint using the HTTP GET or POST methods. If using HTTP GET, then the parameters are serialised using URI query Serialisation. In the case of HTTP POST, then the parameters are serialised using Form Serialisation (HTTP Content-Type application/x-www-form-urlencoded)

Authentication Request parameters are:

<dl><dt>Table 1.1: Authentication Request Parameters</dt></dl>

| Parameter       | Req? | Value(s)                               | Description |
| --------------- | ---- | -------------------------------------- | ----------- |
| `scope`         | mand | `openid`                             | The openid scope value **MUST** be present. <br> Other scope values listed **MAY** be present. Scope values used that are not understood by NHS login WILL be ignored. <br> Additional scope values supported by NHS login are defined in [3.4.1.1 Scope to be requested](https://nhsconnect.github.io/nhslogin/interface-spec-doc-3/). |
| `response_type` | mand | `code`                               | OAuth 2.0 Response Type value that determines the authorization processing flow to be used, including what parameters are returned from the endpoints used. When using the Authorization Code Flow, this value **MUST** be `code`. |
| `client_id`     | mand |                                        | Oauth 2.0 Client Identifier <br>This is a static identifier previously provided by the NHS login Partner Onboarding team. |
| `redirect_uri`  | mand |                                        | Redirection URI to which the response will be sent. This URI **MUST** exactly match one of the Redirection URI values for the Client pre-registered at the OpenID Provider <br> When using this flow, the Redirection URI **MUST NOT** use the http scheme. |
| `state`         | mand |                                        | Opaque value used to maintain state between the request and the callback. Typically, Cross-Site Request Forgery (CSRF, XSRF) mitigation is done by cryptographically binding the value of this parameter with a browser cookie. <br> This value will be returned to the client in the authentication response. <br> The iGov profile for OIDC specifies this parameter as Mandatory to help RPs protect against CSRF attacks. |
| `response_mode`  | n/a  |                                       | The only `response_mode` supported by NHS login will be the default mode (`query`), where the Authorization Response parameters are encoded in the query string which is added to the `redirect_uri` when redirecting back to the Client. <br> See [Oauth 2.0 Multiple Response Type Encoding Practices](http://openid.net/specs/oauth-v2-multiple-response-types-1_0.html). |
| `nonce`          | mand |                                       | String value used to associate a Client session with an ID Token, and to mitigate replay attacks. The value is passed through unmodified from the Authentication Request to the ID Token. Sufficient entropy **MUST** be present in the nonce values used to prevent attackers from guessing values. <br>The iGov profile for OIDC specifies this parameter as Mandatory to help RPs protect against CSRF attacks. |
| `display`        | opt  |	`page` <br> `touch`               | ASCII string value that specifies how the Platform displays the authentication and consent user interface pages to the End-User. The defined values shown `page` and `touch` are supported for NHS login beta phases, with the default value being `page`. <br>`popup` and `wap` values are not supported |
| `prompt`         | opt  | `<blank>` <br> `none` <br>`login` | Requests that the NHS login Service forces the user to sign-in, or to request that the Service does not prompt the user to sign-in (SSO) <br> `<blank>` - The Service will SSO the user if they still have a valid session, else the user will be requested to login<br> `none` – The Service will SSO the user if they still have a valid session, otherwise an error code is returned <br> `login` – The Service will request the user to login, regardless of a session already existing |
| `max_age`         | n/a |                                       | Not currently supported |
| `ui_locales`      | n/a |                                       | Not currently supported |
| `id_token_hint`   | n/a |                                       | Not currently supported |
| `login_hint`      | n/a |                                       | Not currently supported |
| `acr_values`      | n/a |                                       | Not supported – not used, superseded by `vtr` |
| `vtr`             | opt | See [5.1 Vectors of Trust](https://nhsconnect.github.io/nhslogin/interface-spec-doc-5/) for values.            | Vector of Trust Request – requested levels of Identity Verification and Authentication. <br> Client **SHOULD** request only single level of Identity Verification (values defined in [5.1.1 Verification of Identity Levels](https://nhsconnect.github.io/nhslogin/interface-spec-doc-5/) and Table 18) <br> Omission of `vtr` will result in a default value of `“[“P9.Cp.Cd”,“P9.Cp.Ck”,“P9.Cm”]”` being assumed. |

<dl><dt>Table 1.2: Authentication Request Parameters, NHS login extensions</dt></dl>

| Parameter                 | Req? | Value(s)                               | Description |
| ------------------------- | ---- | ---------------------------------- | ----------- |
| `fido_auth_response`      | opt  |                                    | Base64 URL-encoded FIDO UAF AuthResponse message generated by FIDO client on a registered device. |
| `asserted_login_identity` | opt  |                                    | The purpose of this parameter is to support seamless login between two RPs (RP1 and RP2) where cookie-based SSO is not available. The content will be a signed jwt with payload containing `code` attribute with the value being that of the `jti` attribute from the ID Token issued to RP1. The jwt `iss` attribute **MUST** contain the `client_id` of RP1, the jwt **MUST** have an `exp` of no longer that 60 seconds, **MUST** have `jti` and `iat` attributes (as per [RFC7519](https://tools.ietf.org/html/rfc7519)) and **MUST** be signed by RP1 using its client private key. RP1 passes the jwt to RP2 for RP2 to use in its authentication request.<br> A non-normative example jwt payload section is as follows<br> `{` <br> `code: “eeroifoteiwrudjdwusdu”,` <br> `iss: <br> “client1”,` <br> `jti: “reioteotijdvorijevoihroi”,` <br> `iat: 1548701645,` <br> `exp: 1548701705` <br> `}` |
| `allow_registration`    | opt  | `false`                            | Optional parameter which, if set to `false`, will hide links to account registration screens in the NHS login UI. If the parameter is absent to set to any value other than `false` then account registration options will be displayed to the user in the NHS login UI. |

**3.4.1.1 Scope to be requested**

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), section 5.1

Scopes can be used to request that specific sets of information be made available as Claim Values when making an [Authentication Request](https://nhsconnect.github.io/nhslogin/interface-spec-doc-3/) (3.4.1).

<dl><dt>Table 2.1: Scope Values, OpenID Connect standard scopes</dt></dl>

| Scope | Description |
| ----- | ----------- |
| `openid` | Mandatory value for OpenID Connect Requests |
| `profile` | This scope value requests access to the End-User’s <br>default profile claims, which are: `nhs_number`,<br> `birthdate`, `family_name`, `identity_proofing_level` |
| `email` | This scope value requests access to the<br> `email` and `email_verified` claims |
| `phone` | This scope value requests access to the <br>`phone_number` and `phone_number_verified` claims |

<dl><dt>Table 2.2: Scope Values, NHS login extensions</dt></dl>

| Scope | Description |
| ----- | ----------- |
| `gp_integration_credentials` | This scope value requests access to the End-User’s <br>`gp_integration_credentials` claims. <br>This scope can only be requested by an IM1 enabled client. |
| `gp_registration_details` | This scope value requests access to the End-User’s <br>`gp_registration_details` claims as held within<br> the NHS Personal Demographics Service |
| `profile_extended` | This scope value requests access to the End-User’s <br>additional demographics claims (as held within <br>the NHS Personal Demographics Service), which are:<br> `given_name` |
| `client_metadata` | This scope requests access to the End-User’s<br> `client_user_metadata` claim which holds <br>client-specific metadata for the user account. <br>Unlike other claims, the `client_user_metadata` <br>can be updated by the client – see [3.6.3 UserInfo Update Request](https://nhsconnect.github.io/nhslogin/interface-spec-doc-3/) |

<dl><dt>Non-Normative Example</dt></dl>

![diagram](nhslogin/images/EIS-Non-normative.png)

An HTTP 302 redirect response by the Client triggers the User Agent (browser) to make an Authentication Request to the Authorization Endpoint (with line wraps within values for display purposes only):

``` html
HTTP/1.1 302 Found
  Location: https://auth.login.nhs.uk/authorize?
    response_type=code
    &scope=openid%20profile%20email
    &client_id=s6BhdRkqt3
    &state=af0ifjsldkj
    &redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb
    &vtr=%5B%E2%80%9CP9.Cp.Cd%E2%80%9D%5D
```

The User Agent sends the following request to the Platform in response to the HTTP 302 redirect response by the Client (with line wraps within values for display purposes only):

``` html
  GET /authorize?
    response_type=code
    &scope=openid%20profile%20email
    &client_id=s6BhdRkqt3
    &state=af0ifjsldkj
    &redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb
    &vtr=%5B%E2%80%9CP9.Cp.Cd%E2%80%9D%5D
 HTTP/1.1
  Host: https://auth.login.nhs.uk
```

### 3.4.2	Authentication Request Validation

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), section 3.1.2.2

The Authentication Request is authenticated as described in [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), section 3.1.2.2

Additional validations are:
- the submitted redirect URI is an exact match of the one of the redirection URI values registered for the client 

### 3.4.3	Authorisation Server Authenticates the End-User

Outside the scope of this spec

### 3.4.4	Authorisation Server obtains End-User Consent / Authorization

Outside the scope of this spec

### 3.4.5	Authentication Response

**3.4.5.1	Successful response**

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), s3.1.2.5
- [RFC6749 - The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749), s4.1.2

The Authentication Response returns the parameters listed in Table 3 by adding them as query parameters to the `redirect_uri` specified in the Authentication Request.

<dl><dt>Table 3: Authentication Successful Response</dt></dl>

| Parameter                 | Req? | Description |
| ------------------------- | ---- | ----------- |
| `code` | mand | The authorization code generated by the NHS login Platform. <br> The authorization code **SHALL** expire shortly after it is issued to mitigate the risk of leaks. A maximum authorization code lifetime of 10 minutes is **RECOMMENDED**. <br>The client **MUST NOT** use the authorization code more than once. If an authorization code is used more than once, the NHS login Platform WILL deny the request. <br>The authorization code is bound to the client identifier and redirection URI. |
| `state` | mand | if the `state` parameter was present in the client authorization request, then it **SHALL** be the exact value received from the client, otherwise not included. |

A non-normative example follows:

``` html
HTTP/1.1 302 Found
Location: https://client.example.org/cb?
    code=SplxlOBeZQQYbYS6WxSbIA
    &state=af0ifjsldkj
```

**3.4.5.2	Error Response**

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), s3.1.2.6
- [RFC6749 - The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749), s4.1.2.1

If the authentication request is denied or fails, the authorisation server informs the client using the parameters defined in Table 4. Unless the Redirection URI is invalid, the Authorisation Server returns the client to the Redirection URI specified in the Authentication Request with the error and state parameters. Other parameters should not be returned

<dl><dt>Table 4: Authentication Error Response</dt></dl>

| Parameter                 | Req? | Description |
| ------------------------- | ---- | ----------- |
| `error` | mand | Error code, see Table 5 for permitted values |
| `error_description` | opt | Human-readable ASCII encoded text description of the error |
| `error_uri` | opt | URI of a web page that includes additional information about the error. |
| `state` | cond | OAuth 2.0 state value. REQUIRED if the Authorization Request included the state parameter. <br>Set to the value received from the Client. |

<dl><dt>Table 5.1: Error Codes for Authentication Error Response, OAuth 2.0 error codes</dt></dl>

| Code | Description |
| ---- | ----------- |
| `invalid_request` | The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed. |
| `unauthorized_client` | The client is not authorized to request an authorization code using this method. |
| `access_denied` | The resource owner or Platform denied the request. |
| `unsupported_response_type` | The Platform does not support obtaining an authorization code using this method. |
| `invalid_scope` | The requested scope is invalid, unknown, or malformed. |
| `server_error` | The Platform encountered an unexpected condition that prevented it from fulfilling the request. <br>(This error code is needed because a 500 Internal Server Error HTTP status code cannot be returned to the client via an HTTP redirect.) |
| `temporarily_unavailable` | The Platform is currently unable to handle the request due to a temporary overloading or maintenance of the server. <br>(This error code is needed because a 503  Service Unavailable HTTP status code cannot be returned to the client via an HTTP redirect.) |

<dl><dt>Table 5.2: Error Codes for Authentication Error Response, OpenID Connect Error Codes (in addition to the above)</dt></dl>

| Code                   | Description |
| ---------------------- | ----------- |
| `interaction_required` | The Platform requires End-User interaction of some form to proceed. <br>This error **MAY** be returned when the prompt parameter value in the Authentication Request is none, but the Authentication Request cannot be completed without displaying a user interface for End-User interaction.  |
| `login_required` | The Platform requires End-User authentication. <br>This error **MAY** be returned when the prompt parameter value in the Authentication Request is none, but the Authentication Request cannot be completed without displaying a user interface for End-User authentication.  |
| `account_selection_required` | The End-User is REQUIRED to select a session at the Platform. <br>The End-User **MAY** be authenticated at the Platform with different associated accounts, but the End-User did not select a session. This error **MAY** be returned when the prompt parameter value in the Authentication Request is none, but the Authentication Request cannot be completed without displaying a user interface to prompt for a session to use. |
| `consent_required` | The Platform requires End-User consent. <br>This error **MAY** be returned when the prompt parameter value in the Authentication Request is none, but the Authentication Request cannot be completed without displaying a user interface for End-User consent. |
| `invalid_request_uri` | The `request_uri` in the Authorization Request returns an error or contains invalid data. |
| `invalid_request_object` | The request parameter contains an invalid Request Object. |
| `request_not_supported` | The OP does not support use of the `request` parameter.  |
| `request_uri_not_supported` | The OP does not support use of the `request_uri` parameter.  |
| `registration_not_supported` | The OP does not support use of the `registration` parameter.  |

A non-normative example follows:
``` html 
HTTP/1.1 302 Found
Location: https://client.example.org/cb?
    error=invalid_request
    &error_description=Unsupported%20response_type%20value
    &state=af0ifjsldkj
```

---

## 3.5 Token Endpoint

### 3.5.1 Token Request 

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), s3.1.3.1 & s12
- [International Government Assurance Profile (iGov) for OpenID Connect](https://openid.bitbucket.io/iGov/openid-igov-profile-id1.html)
- [RFC6749 - The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749), s4.1.3 & s6

A Token request is used to obtain an Access Token and an ID Token. The Partner Service (client) sends a Token Request to the Token Endpoint to obtain a Token Response.

Confidential Clients **MUST** authenticate to the Token Endpoint using the authentication method registered for its `client_id` (see [7.2.1 Partner Service Authentication](https://nhsconnect.github.io/nhslogin/interface-spec-doc-7/)).

The Client sends the parameters to the Token Endpoint using the HTTP POST method and the Form Serialization(HTTP Content-Type application/x-www-form-urlencoded) – the request must be sent using TLS v1.2 or above.

<dl><dt>Table 6: Token Request Parameters</dt></dl>

| Parameter | Req? | Description |
| --------- | ---- | ----------- |
| `grant_type` | mand | Value **MUST** be set to `authorization_code` OR `refresh_token`. |
| `code` | cond | The authorization code previously received from the Platform. <br>**MUST** be present when `grant_type` is `authorization_code`. |
| `redirect_uri` | cond | Required when `grant_type` is `authorization_code` – **MUST** match the `redirect_uri` parameter that was included in the authorization request. |
| `client_id` | cond | Optional for Confidential Clients. |
| `client_assertion_type` | mand | Mandatory for Confidential Clients. <br> `urn:ietf:params:oauth:client-assertion-type:jwt-bearer` |
| `client_assertion` | mand | Mandatory for Confidential Clients. <br> A signed JWT presented for Client Authentication, as per [https://tools.ietf.org/html/rfc7523](https://tools.ietf.org/html/rfc7523) <br>(Note the `iss` and `sub` claim **MUST** equal the `client_id` and the `aud` **MUST** contain the token endpoint URL) <br>The assertion **MUST** be signed using the private key of the client, agreed during onboarding. |
| `refresh_token` | cond | The refresh token previously issued to the client. **MUST** be present when `grant_type` is `refresh_token`. |
| `scope` | opt | Only applicable for `grant_type` of `refresh_token`. The scope of the access request. <br>The requested scope **MUST NOT** include any scope not originally granted by the originating `authorization_code` grant. <br>If omitted is treated as equal to the scope originally granted by the `authorization_code` grant. |


A non-normative example follows:

``` html
POST /token HTTP/1.1
Host: auth.login.nhs.uk
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code
    &code=SplxlOBeZQQYbYS6WxSbIA
    &redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb
    &client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer
    &client_assertion=PHNhbWxwOl ... ZT
```

### 3.5.2	Token Request Validation

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), s3.1.3.2
- [RFC6749 - The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749), s6

The Token Request is validated as described in the [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), section 3.1.3.2 (for `grant_type` `authorization_code`) or as described in [The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749) (for `grant_type` `refresh_token`). The `client_assertion` is validated as per [https://tools.ietf.org/html/rfc7523](https://tools.ietf.org/html/rfc7523) for Client Authentication for all requests.

### 3.5.3	Token Response

**3.5.3.1	Successful Response**

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), section 3.1.3.3 & s12.2
- [RFC6749 - The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749), s4.1.4 & s6

After receiving and validating a valid and authorised Token request from the client, the Token Endpoint returns a response which includes an ID Token and an Access Token. The response uses the “application/json” media type.

<dl><dt>Table 7: Token Response, HTTP headers & values</dt></dl>

| Header name | Value |
| ----------- | ----- |
| Cache-Control | no-store |
| Pragma | no-cache |

<dl><dt>Table 8: Token Response</dt></dl>


| Parameter | Req? | Description |
| --------- | ---- | ----------- |
| `access_token` | mand | Signed JWT which encodes the Access Token, see [4.1 JWT Header](https://nhsconnect.github.io/nhslogin/interface-spec-doc-4/) and [4.3 Access Token Payload](https://nhsconnect.github.io/nhslogin/interface-spec-doc-4/). |
| `token_type` | mand | Must be value `bearer`. |
| `refresh_token` | opt | The refresh token which can be used to obtain new access tokens as described in [3.5.1 Token Request](https://nhsconnect.github.io/nhslogin/interface-spec-doc-3/). |
| `expires_in` | opt | Recommended. <br> The lifetime in seconds of the access token.  If omitted, the Platform **SHOULD** provide the expiration time via other means or document the default value. |
| `scope` | cond | OPTIONAL, if identical to the scope requested by the client; <br>otherwise, REQUIRED. |
| `id_token` | cond | Signed JWT which encodes the ID Token – see [4.1 JWT Header](https://nhsconnect.github.io/nhslogin/interface-spec-doc-4/) and [4.2 ID Token Payload](https://nhsconnect.github.io/nhslogin/interface-spec-doc-4/). Only issued for `grant_type` `authorization_code` |

A non-normative example follows:

``` html 
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: no-store
Pragma: no-cache

{
 "access_token": "SlAV32hkKG",
 "refresh_token": "dS4tfWD",
 "token_type": "Bearer",
 "expires_in": 3600,
 "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlOWdkazcifQ.ewogImlzc
   yI6ICJodHRwOi8vc2VydmVyLmV4YW1wbGUuY29tIiwKICJzdWIiOiAiMjQ4Mjg5
   NzYxMDAxIiwKICJhdWQiOiAiczZCaGRSa3F0MyIsCiAibm9uY2UiOiAibi0wUzZ
   fV3pBMk1qIiwKICJleHAiOiAxMzExMjgxOTcwLAogImlhdCI6IDEzMTEyODA5Nz
   AKfQ.ggW8hZ1EuVLuxNuuIJKX_V8a_OMXzR0EHR9R6jgdqrOOF4daGU96Sr_P6q
   Jp6IcmD3HP99Obi1PRs-cwh3LO-p146waJ8IhehcwL7F09JdijmBqkvPeB2T9CJ
   NqeGpe-gccMg4vfKjkM8FcGvnzZUN4_KSP0aAp1tOJ1zZwgjxqGByKHiOtX7Tpd
   QyHE5lcMiKPXfEIQILVq0pc_E2DzL7emopWoaoZTF_m0_N0YzFC6g6EJbOEoRoS
   K5hoDalrcvRYLSrQAZZKflyuVCyixEoV9GfNQC3_osjzw2PAithfubEEBLuVVk4
   XUVrWOLrLl0nx7RkKU8NXNHq-rvKMzqg"
}
```

**3.5.3.2	Error Response**

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), s3.1.3.4
- [RFC6749 - The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749), s5.2

If the Token Request is invalid or unauthorized, the Platform constructs the error response. The parameters of the Token Error Response are defined as in Section 5.2 of [OAuth 2.0 RFC6749](https://tools.ietf.org/html/rfc6749). The HTTP response body uses the application/json media type with HTTP response code of 400.

The following is a non-normative example Token Error Response:

``` html 
HTTP/1.1 400 Bad Request
Content-Type: application/json
Cache-Control: no-store
Pragma: no-cache

{
 "error": "invalid_request"
}
```

<dl><dt>Table 9: Token Error Response</dt></dl>

| Parameter           | Req? | Description |
| ------------------- | ---- | ----------- |
| `error`             | mand | Error code. |
| `error_description` | opt  | Human-readable ASCII encoded text description of the error. |
| `error_uri`         | opt  | URI of a web page that includes additional information about the error. |

<dl><dt>Table 10: Error Codes for Token Error Response, OAuth 2.0 error codes</dt></dl> 

| Code                     | Description |
| ------------------------ | ----------- |
| `invalid_request` | The request is missing a required parameter, includes an unsupported parameter value (other than grant type), repeats a parameter, includes multiple credentials, utilizes more than one mechanism for authenticating the client, or is otherwise malformed. |
| `invalid_client` | Client authentication failed (e.g., unknown client, no client authentication included, or unsupported authentication method).   |
| `invalid_grant` | The provided authorization grant (e.g., authorization code, resource owner credentials) or refresh token is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client. |
| `unauthorized_client` | The authenticated client is not authorized to use this authorization grant type. |
| `unsupported_grant_type` | The authorization grant type is not supported by the Platform. |
| `invalid_scope` | The requested scope is invalid, unknown, malformed, or exceeds the scope granted by the resource owner. |

---

## 3.6 UserInfo endpoint

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), s5.3

The UserInfo Endpoint is an OAuth 2.0 Protected Resource that returns Claims about the authenticated End-User. To obtain the requested Claims about the End-User, the Client makes a request to the UserInfo Endpoint using an Access Token obtained through OpenID Connect Authentication. These Claims are represented by a JSON object that contains a collection of name and value pairs for the Claims.

### 3.6.1	UserInfo Request

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), s5.3.1
- [RFC6750: OAuth 2.0 Bearer Token Usage](https://tools.ietf.org/html/rfc6750), s2

The Client sends the UserInfo Request using either HTTP GET (recommended) or HTTP POST.

The Access Token obtained from an OpenID Connect Authentication Request MUST be sent as a Bearer Token using the Authorization header field, per Section 2 of [OAuth 2.0 Bearer Token Usage](https://tools.ietf.org/html/rfc6750).

The following is a non-normative example of a UserInfo Request:

``` html
GET /userinfo HTTP/1.1
Host: auth.login.nhs.uk
Authorization: Bearer SlAV32hkKG
```


### 3.6.3 UserInfo Response

**3.6.2.1 Successful Response**

Reference:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), s5.3.2

The UserInfo Claims **SHALL** be returned as the members of a JSON object.  If a Claim is not returned, then that Claim Name **SHALL** be omitted from the JSON object representing the Claims; it **SHALL NOT** be present with a null or empty string value.

Claims will ONLY be returned when a user has consented to the information being released to the client.

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), section 5.1

The NHS login Service supports standard and additional claims as follows:

<dl><dt>Table 11.1: NHS login Supported Claims, OpenID Connect Standard Claims</dt></dl> 

| Claim | Supported | Description |
| ----- | --------- | ----------- |
| `iss` | Y         | Issuer Identifier for the Issuer of the response. |
| `aud` | Y         | The Partner Service identifier. |
| `sub` | Y         | Subject - Identifier for the End-User at the Issuer. |
| `family_name` | Y | Surname(s) or last name(s) of the End-User. |
| `given_name` | Y  | First name(s) of the End-User <br> This information will only be returned where the user's identity has been verified AND the `profile_extended` scope is requested. |
| `email` | Y       | End-User's preferred e-mail address. <br>Present if the `email` scope was present in the request. |
| `email_verified` | Y | True if the End-User's e-mail address has been verified; otherwise false. <br> Present if the `email` scope was present in the request. |
| `phone_number` | Y | End-User's preferred phone number. <br> Present if the `phone_number` scope was present in the request. |
| `phone_number_verified` | Y | True if the End-User's phone number has been verified; otherwise false. <br>Present if the `phone_number` scope was present in the request. |
| `birthdate` | Y | End-User's date of birth in ISO8601‑2004 format: YYYY-MM-DD. |

<dl><dt>Table 11.2: NHS login Supported Claims, NHS login Additional Claims</dt></dl>

| Claim | Supported | Description |
| ----- | --------- | ----------- |
| `nhs_number` | Y | A string containing the End User’s NHS Number – this is a 10 digit string. |
| `gp_integration_credentials` | Y | A json object containing the end user’s GP integration credentials. <br> These will only be returned where the user’s identity has been verified AND the `gp_integration_credentials` scope is requested.<br> `{` <br> `gp_user_id: “32498239048-3248734”,` <br> `gp_linkage_key: “dfje2rkjdfkjdfm”,` <br> `gp_ods_code: “A12344”` <br> `} ` |
| `gp_registration_details` | Y | A json object containing information on the End-User’s registered General Practice as held in NHS Personal Demographics Service. <br>This information will only be returned where the user’s identity has been verified AND the `gp_registration_details` scope is requested.<br> `{` <br> `gp_ods_code: “A12344”` <br> `}` |
| `client_user_metadata` | Y | A string containing either a randomly-generated (by NHS login) number which has been encrypted using PKCS1_OAEP cipher with the RP’s public key and then base64URL encoded or a value set by the RP. The value contained in this claim is opaque to NHS login and RP may optionally update this value – see [3.6.3 User Info Update Request](https://nhsconnect.github.io/nhslogin/interface-spec-doc-3/) <br>If no value is held for the RP then this claim is not returned. |
| `identity_proofing_level` | Y | A string containing the End User’s identity proofing level. It will contain one of the values defined in [5.1.1 Verification of Identity Levels](https://nhsconnect.github.io/nhslogin/interface-spec-doc-5/) and Table 18 – e.g. “P0”, “P9” |

The sub Claim in the UserInfo Response **MUST** be verified to exactly match the sub Claim in the ID Token; if they do not match, the UserInfo Response values **MUST NOT** be used.

The UserInfo response **MAY** contain other Claims. Any Claims used that are not understood **MUST** be ignored by the RP.

Upon receipt of the UserInfo Request, the UserInfo Endpoint SHALL return the JSON Serialization of the UserInfo Response in the HTTP response. The content-type of the HTTP response SHALL be “application/json; the response body SHALL be encoded using UTF-8.

The UserInfo Response will not be signed and/or encrypted.

The following is a non-normative example of a UserInfo Response:

``` html
  HTTP/1.1 200 OK
  Content-Type: application/json

  {
   “iss”: “https://login.nhs.uk”,
   “sub”: “24400320-234545-234241-111”,
   “aud”: “s6BhdRkqt3”,
   “email”: “janedoe@example.com”,
   “email_verified”: true,
   “phone_number”: “01234567891”,
   “phone_number_verified”: true,
   “nhs_number”: “8527685222”,
   “birthdate”: 2001-12-30,
   “family_name”: “Doe”,
   “identity_proofing_level”: “P9”,
   “gp_integration_credentials”: {
    gp_user_id: “32498239048-3248734”,
    gp_linkage_key: “dfje2rkjdfkjdfm”,
    gp_ods_code: “A12344”
    },
   “client_user_metadata”: “U2e3rsdjwd…==”
  }
```

**3.6.2.2 Error Response**

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), s5.3.3
- [RFC6750: OAuth 2.0 Bearer Token Usage](https://tools.ietf.org/html/rfc6750), s3

When an error condition occurs, the UserInfo Endpoint returns an Error Response which will include JSON keys as defined in Table 12. As defined in the [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), errors relating to Bearer Token Usage are returned using the HTTP “WWW-Authenticate” response header field as per Section 3 of [OAuth 2.0 Bearer Token Usage](https://tools.ietf.org/html/rfc6750). Errors not related to Bearer Token Usage omit the “WWW-Authenticate” response header field and return error details in the response body.

<dl><dt>Table 12: UserInfo Error Response</dt></dl>

| JSON Key            | Req? | Description |
| ------------------- | ---- | ----------- |
| `error`             | mand | Error code, see Table 13 for permitted values |
| `error_description` | opt  | Human-readable ASCII encoded text description of the error |

<dl><dt>Table 12: Error Codes for UserInfo Error Response, Oauth 2.0 error codes</dt></dl>

| Code                 | Description |
| -------------------- | ----------- |
| `invalid_request`    | The request is missing a required parameter, includes an unsupported parameter or parameter value, repeats the same parameter, uses more than one method for including an access token, or is otherwise malformed. The resource server **SHOULD** respond with the HTTP 400 (Bad Request) status code. |
| `invalid_token`      | The access token provided is expired, revoked, malformed, or invalid for other reasons. The resource **SHOULD** respond with the HTTP 401 (Unauthorized) status code. The client **MAY** request a new access token and retry the protected resource request. |
| `insufficient_scope` | The request requires higher privileges than provided by the access token. The resource server **SHOULD** respond with the HTTP 403 (Forbidden) status code and **MAY** include the `scope` attribute with the scope necessary to access the protected resource. |

The following is a non-normative example of a UserInfo Error Response relating to Bearer Token Usage:

``` html
  HTTP/1.1 401 Unauthorized
  WWW-Authenticate: error=”invalid_token”,
    error_description=”The access token expired”
```

The following is a non-normative example of a UserInfo Error Response not relating to Bearer Token Usage:

``` html
  HTTP/1.1 400 Bad Request
  Content-Type: application/json

  {
     “error”: “invalid_request”,
     “error_description”: ”Invalid parameter content”
  }
```

### 3.6.3 UserInfo Update Request

NHS login extends the OpenID Connect Specification and allows a client to request the update of the `client_user_metadata` claim via HTTP PATCH.

The Access Token obtained from an OpenID Connect Authentication Request **MUST** be sent as a Bearer Token using the Authorization header field, per Section 2 of [OAuth 2.0 Bearer Token Usage](https://tools.ietf.org/html/rfc6750).

The Client sends the parameters to the UserInfo Endpoint using the HTTP PATCH method and a Content-Type of ‘application/json’ – the request must be sent using TLS v1.2 or above.

<dl><dt>Table 14: UserInfo Update Request Parameters</dt></dl>


| JSON key               | Req? | Description |
| ---------------------- | ---- | ----------- |
| `client_user_metadata` | opt  | New value for the `client_user_metadata` claim. The maximum length is 1024 characters. Setting the value to an empty string (i.e. `client_user_metadata=`) will result in NHS login clearing the value. Setting the value to `auto` will result in NHS login re-generating a new value as described in Table 11. |

As the `client_user_metadata` value is opaque to NHS login no specific validation will be undertaken other than to ensure a maximum length of 1024 characters.

The following is a non-normative example of a UserInfo Update Request:

``` html
PATCH /userinfo HTTP/1.1
Host: auth.login.nhs.uk
Authorization: Bearer SlAV32hkKG
Content-Type: application/json

{‘client_user_metadata’: ‘ZT&PHNhbWxwOl ... ZT’}
``` 

### 3.6.4	UserInfo Update Response

A successful UserInfo Update Response will be an HTTP 204 response with no response body. Error responses will be as described in [3.6.2.2 Error Response](https://nhsconnect.github.io/nhslogin/interface-spec-doc-3/).

