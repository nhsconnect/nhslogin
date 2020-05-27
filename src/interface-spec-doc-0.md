---
layout: base.njk
title: External Interface Specification 
---

| **Document filename**       | **NHS login Interface Specification - Federation** |
| --------------------------- | -------------------------------------------------- | 
| **Directorate / Programme** | NHS login Programme                                |
| **Document reference**      | CID-IS-F                                           |
| **Information asset owner** | Melissa Ruscoe                                     |
| **Author**                  | Matthew Brown                                      |
| **Version**                 | V1.9                                               |
| **Version issue date**      | 15 May 2020                                        |


[Download the EIS as a word document](https://github.com/nhsconnect/nhslogin/blob/master/NHS%20login%20-%20Interface%20Specification%20-%20Federation%20v1.9.docx?raw=true).


---

## Contents

<dl>
<dt><b>1</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#introduction">Introduction</a></dt>
<dd><b>1.1</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#purpose-of-document">Purpose of Document</a></dd>
<dd><b>1.2</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#audience">Audience</a></dd>
<dd><b>1.3</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#definitions">Definitions</a></dd>
</dl>

<dl>
<dt><b>2</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#specficiation-status">Specification status</a></dt>
<dd><b>2.1</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#scope-constraint">Scope / Constraints</a></dd>
<dd><b>2.2</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#changes-in-this-version">Changes in this version</a></dd>
</dl>

<dl>
<dt><b>3</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#messages-overview">Messages overview</a></dt>
<dd><b>3.1</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#authorization-code-flow">Authorization code flow</a></dd>
<dd><b>3.2</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#public-and-confidential-clients">Public and confidential cients</a></dd>
<dd><b>3.3</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#endpoints">Endpoints</a></dd>
<dd><b>3.4</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#authorize-endpoint">Authorize endpoint</a></dd>
<dd><b>3.5</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#token-endpoint">Token endpoint</a></dd>
<dd><b>3.6</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#userinfo-endpoint">UserInfo endpoint</a></dd>
</dl>

<dl>
<dt><b>4</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#tokens">Tokens</a></dt>
<dd><b>4.1</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#jwt-header">JWT header</a></dd>
<dd><b>4.2</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#id-token-payload">ID token payload</a></dd>
<dd><b>4.3</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#access-token-payload">Access token payload</a></dd>
<dd><b>4.4</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#jose-signing">JOSE signing</a></dd>
</dl>

<dl>
<dt><b>5</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#data-view">Data view</a></dt>
<dd><b>5.1</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#vectors-of-trust">Vectors of trust</a></dd>
</dl>

<dl>
<dt><b>6</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#password-less-authentication-using-fido-uaf">Password-less authentication using FIDO UAF</a></dt>
<dd><b>6.1</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#overview">Overview</a></dd>
<dd><b>6.2</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#fido-uaf-registration-flow">FIDO UAF registration flow</a></dd>
<dd><b>6.3</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#fido-uaf-authentication-flow">FIDO UAF authentication flow</a></dd>
<dd><b>6.4</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#fido-uaf-deregistration-flow">FIDO UAF deregistration flow</a></dd>
<dd><b>6.5</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#platform-restrictions">Platform restrictions</a></dd>
</dl>

<dl>
<dt><b>7</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#partner-services-and-security">Partner services and security</a></dt>
<dd><b>7.1</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#partner-service-registration">Partner service registration</a></dd>
<dd><b>7.2</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#partner-service-authentication">Partner service authentication</a></dd>
<dd><b>7.3</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#client-redirects">Client redirects</a></dd>
</dl>

<dl>
<dt><b>8</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc2#references">References</a></dt>
</dl>

<dl>
<dt><b>9</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc-test#document-management">Document management</a></dt>
</dl>

---

## 1 Introduction

### 1.1 Purpose of document

NHS login implements OpenID Connect 1.0 OpenID Provider role to assert the identity of the End-User to a Partner Service, as well as enabling the Service to obtain basic profile information about the End-User in an interoperable manner.

This document defines the interfaces implemented by the Platform and describes the data flows supported by these interfaces.

### 1.2 Audience
The primary audiences for this document are:
- NHS login Programme team
- NHS Digital – Digital Delivery Centre
- NHS Digital – Other Delivery teams
- NHS England
- 3rd Party Suppliers integrating with the NHS Digital NHS login Platform

### 1.3 Definitions
Where used in this document set, the keywords **must**, **should** and **may** are to be interpreted as follows:
- **must**: This word, or the terms "**required**" or "**shall**", means that the definition is an absolute requirement of the specification.
- **should**: This word, or the adjective "**recommended**", means that there may exist valid reasons in particular circumstances to ignore a particular item, but the full implications MUST be understood and carefully weighed before choosing a different course.
- **may**: This word, or the adjective "**optional**”, means that an item is truly optional. One implementer may choose to include the item because a particular implementation requires it or because the implementer feels that it enhances the implementation while another implementer may omit the same item.  An implementation which does not include a particular option **must** be prepared to interoperate with another implementation which does include the option, though perhaps with reduced functionality. In the same vein an implementation which does include a particular option **must** be prepared to interoperate with another implementation which does not include the option (except, of course, for the feature the option provides).


---

## 2 Specification status

### 2.1 Scope / constraints

- This document relates to NHS login ‘Federation interface’ during Beta. Further amendments WILL be implemented prior to full rollout – this document is a draft representing intended design, but is subject to clarification.
- The NHS login Platform supports Authentication using the Authorization Code Flow only. Implicit & Hybrid Flows are not supported
- HTTP is not supported - all HTTP-based flows must be HTTPS (using TLS v1.2 or above)

### 2.2 Changes in this version
Version 1.9 of this specification includes the following changes:
- Addition of identity_proofing_level claim in the “profile” scope
- Minor clarification on conditions applicable for requesting scopes
- Updates to Verification of Identity Levels
- Updates to Requesting Vectors of Trust values
- Updates to Client Redirects
- Minor reference changes

---

## 3 Messages Overview

References: 
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), section 3.1
- [International Government Assurance Profile (iGov)](https://openid.bitbucket.io/iGov/openid-igov-profile-id1.html)
- [Vectors of trust](https://tools.ietf.org/html/draft-richer-vectors-of-trust-09)

This section describes how the NHS Digital NHS login Platform implements authentication using the OpenID Connect Authorization Code Flow.   

### 3.1 Authorization Code Flow

The Authorization Code Flow returns an Authorization Code to the Client, which can then exchange it for an ID Token and an Access Token directly. This avoids exposing any tokens to the User Agent and possibly other malicious applications with access to the User Agent.  

Using this flow also means the Platform can also authenticate the Client before exchanging the Authorization Code for an Access Token. The Authorization Code flow is suitable for Clients that can securely maintain a Client Secret between themselves and the Platform.

INSERT DIAGRAM!

The Authorization Code Flow goes through the following steps:
1.	The client prepares an Authentication Request containing the desired request parameters (see section 3.4.1)
2.	The client sends the request to the Platform – via the User Agent (browser)
3.	The Platform validates the Authentication Request (see section 3.4.2)
4.	The Platform authenticates the End-User (see section 3.4.3)
5.	The Platform obtains End-User Consent/Authorization (see section 3.4.4)
6.	The Platform sends the Authorization Code to the Client via the End User’s browser
7.	The client requests a response using the Authorization Code at the Token Endpoint (see section 3.5.1)
8.	The client receives a response that contains an ID Token and Access Token in the response body (see section 3.5.3)
9.	The client validates the ID token and retrieves the End-User’s Subject Identifier.

### 3.2 Public and Confidential Clients

Clients are classified as either Public or Confidential based on their ability to maintain the confidentiality of their credentials.

**3.2.1 Confidential Client**

The client is capable of maintaining the confidentiality of its credentials.  For example, the client is implemented on a secure server with restricted access to its credentials.

INSERT DIAGRAM

**3.2.2 Public Client**

*This section is provided for information only; public clients are not supported by NHS login.*

A Public client is incapable of maintaining the confidentiality of its credentials. For example, the client executes on a device used by the end-user, such as an installed native application or browser-based application.

INSERT DIAGRAM

Public clients using the Authorization Code flow are susceptible to authorization code interception attacks. For example, a rogue application could intercept the authorization code as it is being passed through the mobile/native operating system. To mitigate this attack, public clients follow the Proof Key for Code Exchange (PKCE) specification, which binds the Authorisation Request to the subsequent Token Request. PKCE is an extension to the regular Authorization Code flow, so the flow is the same, except that PKCE elements are included at various steps.

Public clients are also at risk of masquerading by malicious services; a malicious service could re-use the client_id of a genuine Public client and trick a user into revealing their information.

*For the above reasons Public clients are not supported by NHS login.*

### 3.3 Endpoints

| Endpoint | Description |
| -------- | ----------- |
| `/.well-known/openid-configuration` | This is the standard openid discovery address – this will maintain full addresses for the below endpoints. <br>This is consumed by a Service with a direct HTTPS call. |
| `/.well-known/jwks.json` | The Keys used by NHS login to sign tokens are available here. <br>This is consumed by a secure Service’s backend with a direct HTTPS call. |
| `/authorize` | This initiates the Authorization Code flow – the endpoint is consumed by directing a user-agent (typically a web browser) to the endpoint address, using HTTPS. <br>This is also termed the OIDC Authentication Endpoint. |
| `/token` | This is used to retrieve tokens, including ID tokens, by exchanging an authorization code. <br>This is consumed by a secure Service’s backend with a direct HTTPS call. <br>The token endpoint is also used to refresh access tokens, using a previously-issued refresh token. |
| `/userinfo` | This endpoint is used after retrieving tokens – sensitive and/or time-bound attributes are available from this endpoint. <br> This is consumed by a secure Service’s backend with a direct HTTPS call. |

### 3.4 Authorize endpoint

**3.4.1 Authentication request**

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), section 3.1.2.1
- [International Government Assurance Profile (iGov) for OpenID Connect](https://openid.bitbucket.io/iGov/openid-igov-profile-id1.html)
- [RFC7519: JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519)

The client initiates an authentication request to the NHS Digital NHS login authorize endpoint using the HTTP GET or POST methods. If using HTTP GET, then the parameters are serialised using URI query Serialisation. In the case of HTTP POST, then the parameters are serialised using Form Serialisation (HTTP Content-Type application/x-www-form-urlencoded)

Authentication Request parameters are:

| Parameter       | Req? | Value(s)                               | Description |
| --------------- | ---- | -------------------------------------- | ----------- |
| `scope`         | mand | `"openid"`                             | The openid scope value MUST be present. <br> Other scope values listed MAY be present. Scope values used that are not understood by NHS login WILL be ignored. <br> Additional scope values supported by NHS login are defined in section 3.4.1.1 |
| `response_type` | mand | `"code"`                               | OAuth 2.0 Response Type value that determines the authorization processing flow to be used, including what parameters are returned from the endpoints used. When using the Authorization Code Flow, this value MUST be “code” |
| `client_id`     | mand |                                        | Oauth 2.0 Client Identifier <br>This is a static identifier previously provided by the NHS login Partner Onboarding team |
| `redirect_uri`  | mand |                                        | Redirection URI to which the response will be sent. This URI MUST exactly match one of the Redirection URI values for the Client pre-registered at the OpenID Provider <br> When using this flow, the Redirection URI MUST NOT use the http scheme |
| `state`         | mand |                                        | Opaque value used to maintain state between the request and the callback. Typically, Cross-Site Request Forgery (CSRF, XSRF) mitigation is done by cryptographically binding the value of this parameter with a browser cookie. <br> This value will be returned to the client in the authentication response. <br> The iGov profile for OIDC specifies this parameter as Mandatory to help RPs protect against CSRF attacks. |
| `response_mode`  | n/a  |                                       | The only response_mode supported by NHS login will be the default mode (“query”), where the Authorization Response parameters are encoded in the query string which is added to the redirect_uri when redirecting back to the Client. <br> See <a href="http://openid.net/specs/oauth-v2-multiple-response-types-1_0.html" title="Oauth 2.0 Multiple Response Type Encoding Practices">Oauth 2.0 Multiple Response Type Encoding Practices</a> |
| `nonce`          | mand |                                       | String value used to associate a Client session with an ID Token, and to mitigate replay attacks. The value is passed through unmodified from the Authentication Request to the ID Token. Sufficient entropy MUST be present in the nonce values used to prevent attackers from guessing values.<br> The iGov profile for OIDC specifies this parameter as Mandatory to help RPs protect against CSRF attacks. |
| `display`        | opt  |	`“page”` <br> `“touch”`               | ASCII string value that specifies how the Platform displays the authentication and consent user interface pages to the End-User. The defined values shown “page” and “touch” are supported for NHS login beta phases, with the default value being “page”. <br>“popup” and “wap” values are not supported |
| `prompt`         | opt  | `<blank>` <br> `“none”` <br>`“login”` | Requests that the NHS login Service forces the user to sign-in, or to request that the Service does not prompt the user to sign-in (SSO) <br> `<blank>` - The Service will SSO the user if they still have a valid session, else the user will be requested to login<br> `none` – The Service will SSO the user if they still have a valid session, otherwise an error code is returned <br> `login` – The Service will request the user to login, regardless of a session already existing |
| `max_age`         | n/a |                                       | Not currently supported |
| `ui_locales`      | n/a |                                       | Not currently supported |
| `id_token_hint`   | n/a |                                       | Not currently supported |
| `login_hint`      | n/a |                                       | Not currently supported |
| `acr_values`      | n/a |                                       | Not supported – not used, superseded by vtr |
| `vtr`             | opt | See section 5.1 for values            | Vector of Trust Request – requested levels of Identity Verification and Authentication. <br> Client SHOULD request only single level of Identity Verification (values defined in section 5.1.1 -Verification of Identity Levels and Table 18) <br> Omission of vtr will result in a default value of “[“P9.Cp.Cd”,“P9.Cp.Ck”,“P9.Cm”]” being assumed. |

**NHS login extensions**

| Parameter                 | Req? | Value(s)                               | Description |
| ------------------------- | ---- | ---------------------------------- | ----------- |
| `fido_auth_response`      | opt  |                                    | Base64 URL-encoded FIDO UAF AuthResponse message generated by FIDO client on a registered device |
| `asserted_login_identity` | opt  |                                    | The purpose of this parameter is to support seamless login between two RPs (RP1 and RP2) where cookie-based SSO is not available. The content will be a signed jwt with payload containing “code” attribute with the value being that of the “jti” attribute from the ID Token issued to RP1. The jwt “iss” attribute MUST contain the client_id of RP1, the jwt MUST have an “exp” of no longer that 60 seconds, MUST have “jti” and “iat” attributes (as per RFC7519) and MUST be signed by RP1 using its client private key. RP1 passes the jwt to RP2 for RP2 to use in its authentication request.<br> A non-normative example jwt payload section is as follows<br> `{` <br> `code: “eeroifoteiwrudjdwusdu”,` <br> `iss: <br> “client1”,` <br> `jti: “reioteotijdvorijevoihroi”,` <br> `iat: 1548701645,` <br> `exp: 1548701705` <br> `}` |
| `allow_registration`    | opt  | `"false"`                            | Optional parameter which, if set to “false”, will hide links to account registration screens in the NHS login UI. If the parameter is absent to set to any value other than “false” then account registration options will be displayed to the user in the NHS login UI. |

**3.4.1.1 Scope to be requested**

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), section 5.1

Scopes can be used to request that specific sets of information be made available as Claim Values when making an Authentication Request (s3.4.1).

**OpenID Connect Standard Scopes** 

| Scope | Description |
| ----- | ----------- |
| `openid` | Mandatory value for OpenID Connect Requests |
| `profile` | This scope value requests access to the End-User’s default profile claims, which are: nhs_number, birthdate, family_name, identity_proofing_level |
| `email` | This scope value requests access to the email and email_verified claims |
| `phone` | This scope value requests access to the phone_number and phone_number_verified claims |

**NHS login extensions**

| Scope | Description |
| ----- | ----------- |
| `gp_integration_credentials` | This scope value requests access to the End-User’s gp_integration_credentials claims. <br>Note: This scope can only be requested by an IM1 enabled client. |
| `gp_registration_details` | This scope value requests access to the End-User’s gp_registration_details claims as held within the NHS Personal Demographics Service |
| `profile_extended` | This scope value requests access to the End-User’s additional demographics claims (as held within the NHS Personal Demographics Service), which are: given_name |
| `client_metadata` | This scope requests access to the End-User’s client_user_metadata claim which holds client-specific metadata for the user account. Unlike other claims, the client_user_metadata can be updated by the client – see section 3.6.3 |

INSERT DIAGRAM

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

**3.4.2	Authentication Request Validation**

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), section 3.1.2.2

The Authentication Request is authenticated as described in [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), s3.1.2.2

Additional validations are:
- the submitted redirect URI is an exact match of the one of the redirection URI values registered for the client 

**3.4.3	Authorisation Server Authenticates the End-User**

Outside the scope of this spec

**3.4.4	Authorisation Server obtains End-User Consent / Authorisation**

Outside the scope of this spec

**3.4.5	Authentication Response**

**3.4.5.1	Successful response**

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), s3.1.2.5
- [RFC6749 - The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749), s4.1.2

The Authentication Response returns the parameters listed in Table 3 by adding them as query parameters to the redirect_uri specified in the Authentication Request.

| Parameter                 | Req? | Description |
| ------------------------- | ---- | ----------- |
| `code` | mand | The authorization code generated by the NHS login Platform. <br> The authorization code SHALL expire shortly after it is issued to mitigate the risk of leaks. A maximum authorization code lifetime of 10 minutes is RECOMMENDED. <br>The client MUST NOT use the authorization code more than once. If an authorization code is used more than once, the NHS login Platform WILL deny the request. <br>The authorization code is bound to the client identifier and redirection URI. |
| `state` | mand | if the "state" parameter was present in the client authorization request, then it SHALL be the exact value received from the client, otherwise not included |

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


| Parameter                 | Req? | Description |
| ------------------------- | ---- | ----------- |
| `error` | mand | Error code, see Table 5 for permitted values |
| `error_description` | opt | Human-readable ASCII encoded text description of the error |
| `error_uri` | opt | URI of a web page that includes additional information about the error |
| `state` | cond | OAuth 2.0 state value. REQUIRED if the Authorization Request included the state parameter. Set to the value received from the Client. |

**OAuth 2.0 error codes** 

| Code | Description |
| ---- | ----------- |
| `invalid_request` | The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed. |
| `unauthorized_client` | The client is not authorized to request an authorization code using this method |
| `access_denied` | The resource owner or Platform denied the request |
| `unsupported_response_type` | The Platform does not support obtaining an authorization code using this method |
| `invalid_scope` | The requested scope is invalid, unknown, or malformed |
| `server_error` | The Platform encountered an unexpected condition that prevented it from fulfilling the request. (This error code is needed because a 500 Internal Server Error HTTP status code cannot be returned to the client via an HTTP redirect.) |
| `temporarily_unavailable` | The Platform is currently unable to handle the request due to a temporary overloading or maintenance of the server.  (This error code is needed because a 503  Service Unavailable HTTP status code cannot be returned to the client via an HTTP redirect.) |

**OpenID Connect Error Codes (in addition to the above)**

| Code                   | Description |
| ---------------------- | ----------- |
| `interaction_required` | The Platform requires End-User interaction of some form to proceed. This error MAY be returned when the prompt parameter value in the Authentication Request is none, but the Authentication Request cannot be completed without displaying a user interface for End-User interaction.  |
| `login_required` | The Platform requires End-User authentication. This error MAY be returned when the prompt parameter value in the Authentication Request is none, but the Authentication Request cannot be completed without displaying a user interface for End-User authentication.  |
| `account_selection_required` | The End-User is REQUIRED to select a session at the Platform. The End-User MAY be authenticated at the Platform with different associated accounts, but the End-User did not select a session. This error MAY be returned when the prompt parameter value in the Authentication Request is none, but the Authentication Request cannot be completed without displaying a user interface to prompt for a session to use |
| `consent_required` | The Platform requires End-User consent. This error MAY be returned when the prompt parameter value in the Authentication Request is none, but the Authentication Request cannot be completed without displaying a user interface for End-User consent |
| `invalid_request_uri` | The request_uri in the Authorization Request returns an error or contains invalid data |
| `invalid_request_object` | The request parameter contains an invalid Request Object |
| `request_not_supported` | The OP does not support use of the request parameter  |
| `request_uri_not_supported` | The OP does not support use of the request_uri parameter  |
| `registration_not_supported` | The OP does not support use of the registration parameter  |

A non-normative example follows:
``` html 
HTTP/1.1 302 Found
Location: https://client.example.org/cb?
    error=invalid_request
    &error_description=Unsupported%20response_type%20value
    &state=af0ifjsldkj
```

### 3.5	Token Endpoint

**3.5.1	Token Request**

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), s3.1.3.1 & s12
- [International Government Assurance Profile (iGov) for OpenID Connect](https://openid.bitbucket.io/iGov/openid-igov-profile-id1.html)
- [RFC6749 - The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749), s4.1.3 & s6

A Token request is used to obtain an Access Token and an ID Token. The Partner Service (client) sends a Token Request to the Token Endpoint to obtain a Token Response.

Confidential Clients MUST authenticate to the Token Endpoint using the authentication method registered for its client_id (see section 7.2.1).

The Client sends the parameters to the Token Endpoint using the HTTP POST method and the Form Serialization(HTTP Content-Type application/x-www-form-urlencoded) – the request must be sent using TLS v1.2 or above.

| Parameter | Req? | Description |
| --------- | ---- | ----------- |
| `grant_type` | mand | Value MUST be set to "authorization_code" OR “refresh_token” |
| `code` | cond | The authorization code previously received from the Platform. MUST be present when grant_type is “authorization_code” |
| `redirect_uri` | cond | Required when grant_type is “authorization_code” – MUST match the "redirect_uri" parameter that was included in the authorization request. |
| `client_id` | cond | Optional for Confidential Clients |
| `client_assertion_type` | mand | Mandatory for Confidential Clients <br> “urn:ietf:params:oauth:client-assertion-type:jwt-bearer” |
| `client_assertion` | mand | Mandatory for Confidential Clients <br> A signed JWT presented for Client Authentication, as per [https://tools.ietf.org/html/rfc7523](https://tools.ietf.org/html/rfc7523) <br>(Note the “iss” and “sub” claim MUST equal the client_id and the “aud” MUST contain the token endpoint URL) <br>The assertion MUST be signed using the private key of the client, agreed during onboarding |
| `refresh_token` | cond | The refresh token previously issued to the client. MUST be present when grant_type is “refresh_token” |
| `scope` | opt | Only applicable for grant_type of “refresh_token”. The scope of the access request. The requested scope MUST NOT include any scope not originally granted by the originating “authorization_code” grant. If omitted is treated as equal to the scope originally granted by the “authorization_code” grant. |


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

**3.5.2	Token Request Validation**

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), s3.1.3.2
- [RFC6749 - The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749), s6

The Token Request is validated as described in the OpenID Connect Core Specification [1], section 3.1.3.2 (for grant_type “authorization_code”) or as described in The OAuth 2.0 Authorization Framework [6] (for grant_type “refresh_token”). The client_assertion is validated as per [https://tools.ietf.org/html/rfc7523](https://tools.ietf.org/html/rfc7523) for Client Authentication for all requests.

**3.5.3	Token Response**

**3.5.3.1	Successful Response**

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), section 3.1.3.3 & s12.2
- [RFC6749 - The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749), s4.1.4 & s6

After receiving and validating a valid and authorised Token request from the client, the Token Endpoint returns a response which includes an ID Token and an Access Token. The response uses the “application/json” media type.

| Header name | Value |
| ----------- | ----- |
| Cache-Control | no-store |
| Pragma | no-cache |

| Parameter | Req? | Description |
| --------- | ---- | ----------- |
| `access_token` | mand | Signed JWT which encodes the Access Token, see sections 4.1 and 4.3 |
| `token_type` | mand | Must be value “bearer” |
| `refresh_token` | opt | The refresh token which can be used to obtain new access tokens as described in section 3.5.1 |
| `expires_in` | opt | Recommended. <br> The lifetime in seconds of the access token.  If omitted, the Platform SHOULD provide the expiration time via other means or document the default value |
| `scope` | cond | OPTIONAL, if identical to the scope requested by the client; <br>otherwise, REQUIRED |
| `id_token` | cond | Signed JWT which encodes the ID Token – see sections 4.1 and 4.2. Only issued for grant_type “authorization_code” |

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

If the Token Request is invalid or unauthorized, the Platform constructs the error response. The parameters of the Token Error Response are defined as in Section 5.2 of OAuth 2.0 [RFC6749]. The HTTP response body uses the application/json media type with HTTP response code of 400.

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

| Parameter           | Req? | Description |
| ------------------- | ---- | ----------- |
| `error`             | mand | Error code |
| `error_description` | opt  | Human-readable ASCII encoded text description of the error |
| `error_uri`         | opt  | URI of a web page that includes additional information about the error |

**OAuth 2.0 error codes** 

| Code                     | Description |
| ------------------------ | ----------- |
| `invalid_request` | The request is missing a required parameter, includes an unsupported parameter value (other than grant type), repeats a parameter, includes multiple credentials, utilizes more than one mechanism for authenticating the client, or is otherwise malformed. |
| `invalid_client` | Client authentication failed (e.g., unknown client, no client authentication included, or unsupported authentication method).   |
| `invalid_grant` | The provided authorization grant (e.g., authorization code, resource owner credentials) or refresh token is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client. |
| `unauthorized_client` | The authenticated client is not authorized to use this authorization grant type. |
| `unsupported_grant_type` | The authorization grant type is not supported by the Platform. |
| `invalid_scope` | The requested scope is invalid, unknown, malformed, or exceeds the scope granted by the resource owner |

### 3.6 UserInfo endpoint

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), s5.3

The UserInfo Endpoint is an OAuth 2.0 Protected Resource that returns Claims about the authenticated End-User. To obtain the requested Claims about the End-User, the Client makes a request to the UserInfo Endpoint using an Access Token obtained through OpenID Connect Authentication. These Claims are represented by a JSON object that contains a collection of name and value pairs for the Claims.

**3.6.1	UserInfo Request**

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), s5.3.1
- [RFC6750: OAuth 2.0 Bearer Token Usage](https://tools.ietf.org/html/rfc6750), s2

The Client sends the UserInfo Request using either HTTP GET (recommended) or HTTP POST.

The Access Token obtained from an OpenID Connect Authentication Request MUST be sent as a Bearer Token using the Authorization header field, per Section 2 of OAuth 2.0 Bearer Token Usage.

The following is a non-normative example of a UserInfo Request:

``` html
GET /userinfo HTTP/1.1
Host: auth.login.nhs.uk
Authorization: Bearer SlAV32hkKG
```

**3.6.2	UserInfo Response**

**3.6.2.1	Successful Response**

Reference:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), s5.3.2

The UserInfo Claims SHALL be returned as the members of a JSON object.  If a Claim is not returned, then that Claim Name SHALL be omitted from the JSON object representing the Claims; it SHALL NOT be present with a null or empty string value.

Claims will ONLY be returned when a user has consented to the information being released to the client.

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), section 5.1

The NHS login Service supports standard and additional claims as follows:

**OpenID Connect Standard Claims**

| Claim | Supported | Description |
| ----- | --------- | ----------- |
| `iss` | Y         | Issuer Identifier for the Issuer of the response |
| `aud` | Y         | The Partner Service identifier |
| `sub` | Y         | Subject - Identifier for the End-User at the Issuer |
| `family_name` | Y | Surname(s) or last name(s) of the End-User |
| `given_name` | Y  | First name(s) of the End-User <br> This information will only be returned where the user's identity has been verified AND the profile_extended scope is requested |
| `email` | Y       | End-User's preferred e-mail address <br> Present if the email scope was present in the request |
| `email_verified` | Y | True if the End-User's e-mail address has been verified; otherwise false <br> Present if the email scope was present in the request |
| `phone_number` | Y | End-User's preferred phone number <br> Present if the phone scope was present in the request |
| `phone_number_verified` | Y | True if the End-User's phone number has been verified; otherwise false <br> Present if the phone scope was present in the request |
| `birthdate` | Y | End-User's date of birth in ISO8601‑2004 format: YYYY-MM-DD |

**NHS login Additional Claims**
| Claim | Supported | Description |
| ----- | --------- | ----------- |
| `nhs_number` | Y | A string containing the End User’s NHS Number – this is a 10 digit string |
| `gp_integration_credentials` | Y | A json object containing the end user’s GP integration credentials <br> These will only be returned where the user’s identity has been verified AND the gp_integration_credentials scope is requested<br> `{` <br> `gp_user_id: “32498239048-3248734”,` <br> `gp_linkage_key: “dfje2rkjdfkjdfm”,` <br> `gp_ods_code: “A12344”` <br> `} ` |
| `gp_registration_details` | Y | A json object containing information on the End-User’s registered General Practice as held in NHS Personal Demographics Service. <br>This information will only be returned where the user’s identity has been verified AND the gp_registration_details scope is requested <br> `{` <br> `gp_ods_code: “A12344”` <br> `}` |
| `client_user_metadata` | Y | A string containing either a randomly-generated (by NHS login) number which has been encrypted using PKCS1_OAEP cipher with the RP’s public key and then base64URL encoded or a value set by the RP. The value contained in this claim is opaque to NHS login and RP may optionally update this value – see section 3.6.3 <br>If no value is held for the RP then this claim is not returned |
| `identity_proofing_level` | Y | A string containing the End User’s identity proofing level. It will contain one of the values defined in section 5.1.1 -Verification of Identity Levels and Table 18 – e.g. “P0”, “P9” |

The sub Claim in the UserInfo Response MUST be verified to exactly match the sub Claim in the ID Token; if they do not match, the UserInfo Response values MUST NOT be used.

The UserInfo response MAY contain other Claims. Any Claims used that are not understood MUST be ignored by the RP.

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

When an error condition occurs, the UserInfo Endpoint returns an Error Response which will include JSON keys as defined in Table 12. As defined in the OpenID Connect Core Specification, errors relating to Bearer Token Usage are returned using the HTTP “WWW-Authenticate” response header field as per Section 3 of OAuth 2.0 Bearer Token Usage. Errors not related to Bearer Token Usage omit the “WWW-Authenticate” response header field and return error details in the response body.

| JSON Key            | Req? | Description |
| ------------------- | ---- | ----------- |
| `error`             | mand | Error code, see Table 13 for permitted values |
| `error_description` | opt  | Human-readable ASCII encoded text description of the error |

| Oauth 2.0 error code | Description |
| -------------------- | ----------- |
| `invalid_request`    | The request is missing a required parameter, includes an unsupported parameter or parameter value, repeats the same parameter, uses more than one method for including an access token, or is otherwise malformed.  The resource server SHOULD respond with the HTTP 400 (Bad Request) status code. |
| `invalid_token`      | The access token provided is expired, revoked, malformed, or invalid for other reasons.  The resource SHOULD respond with the HTTP 401 (Unauthorized) status code.  The client MAY request a new access token and retry the protected resource request. |
| `insufficient_scope` | The request requires higher privileges than provided by the access token.  The resource server SHOULD respond with the HTTP 403 (Forbidden) status code and MAY include the “scope” attribute with the scope necessary to access the protected resource |

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

**3.6.3 UserInfo Update Request**

NHS login extends the OpenID Connect Specification and allows a client to request the update of the client_user_metadata claim via HTTP PATCH.

The Access Token obtained from an OpenID Connect Authentication Request MUST be sent as a Bearer Token using the Authorization header field, per Section 2 of OAuth 2.0 Bearer Token Usage.

The Client sends the parameters to the UserInfo Endpoint using the HTTP PATCH method and a Content-Type of ‘application/json’ – the request must be sent using TLS v1.2 or above.

| JSON key               | Req? | Description |
| ---------------------- | ---- | ----------- |
| `client_user_metadata` | opt  | New value for the client_user_metadata claim. The maximum length is 1024 characters. Setting the value to an empty string (i.e. client_user_metadata=) will result in NHS login clearing the value. Setting the value to “auto” will result in NHS login re-generating a new value as described in Table 11. |

As the client_user_metadata value is opaque to NHS login no specific validation will be undertaken other than to ensure a maximum length of 1024 characters.

The following is a non-normative example of a UserInfo Update Request:

``` html
PATCH /userinfo HTTP/1.1
Host: auth.login.nhs.uk
Authorization: Bearer SlAV32hkKG
Content-Type: application/json

{‘client_user_metadata’: ‘ZT&PHNhbWxwOl ... ZT’}
``` 

**3.6.4	UserInfo Update Response**

A successful UserInfo Update Response will be an HTTP 204 response with no response body. Error responses will be as described in section 3.6.2.2

---

## 4 Tokens

An ID Token is a security token that contains Claims about the Authentication of an End-User by the Platform, when using a Client and potentially other requested Claims. The Access Token is a credential that can be used by an application to access an API – initially the UserInfo endpoint.

The NHS login Platform uses signed JSON Web Tokens (JWTs) for ID Tokens and Access Tokens.

### 4.1	JWT Header

References:
- [RFC7519 – JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519)
- [RFC7515 – JSON Web Signature (JWS)](https://tools.ietf.org/html/rfc7515)

The JWT header will contain the following claims:

| Claim | Req? | Name | Description |
| ----- | ---- | ---- | ----------- |
| `alg` | mand | Algorithm used for signing the JWT | “RS512” – RSASSA-PKCS1-v1_5 with the SHA-512 hash algorithm |
| `typ` | mand | Type | "JWT" |
| `jku` | n/a  | JWK Set URL | Not supported, keys are communicated outside the JWT, see [RFC7519 – JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519), s2 |
| `jwk` | n/a  | JSON Web Key | Not supported, keys are communicated outside the JWT, see [RFC7519 – JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519), s2 |
| `x5u` | n/a  | X.509 URL | Not supported, keys are communicated outside the JWT, see [RFC7519 – JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519), s2 |
| `x5c` | n/a  | X.509 Certificate Chain | Not supported, keys are communicated outside the JWT, see [RFC7519 – JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519), s2 |

The JWT header MAY contain other Claims. Any Claims used that are not understood MUST be ignored by the RP.


### 4.2 ID Token Payload

References: 
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html)

The following Claims are used within the ID Token for all Oauth 2.0 flows used by OpenID Connect:

| Claim - standard | Req? | Name | Description |
| ---------------- | ---- | ---- | ----------- |
| `iss` | mand | Issuer Identifier for the Issuer of the response | The iss value is a case sensitive URL using the https scheme that contains scheme, host, and optionally, port number and path components and no query or fragment components. |
| `sub` | mand | Subject Identifier | A locally unique and never reassigned identifier within the Issuer for the End-User, which is intended to be consumed by the Client, e.g., 24400320 or AitOawmwtWwcT0k51BayewNvutrJUqsvl6qs7A4 <br> It SHALL NOT exceed 255 ASCII characters in length. <br> The sub value is a case sensitive string |
| `aud` | mand | Audience(s) that this ID Token is intended for | It SHALL contain the Oauth 2.0 client_id of the Partner Services as an audience value. It MAY also contain identifiers for other audiences. In the general case, the aud value is an array of case sensitive strings. In the common special case when there is one audience, the aud value SHALL be a single case sensitive string | 
| `exp` | mand | Expiration time on or after which the ID Token MUST NOT be accepted for processing | The processing of this parameter requires that the current date/time MUST be before the expiration date/time listed in the value. Implementers MAY provide for some small leeway, usually no more than a few minutes, to account for clock skew. Its value is a JSON number representing the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the date/time. See [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) for details regarding date/times in general and UTC in particular | 
| `iat` | mand | Time at which the JWT was issued | Its value is a JSON number representing the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the date/time. See [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) for details regarding date/times in general and UTC in particular |
| `jti` | mand | JWT unique identifier | Value is unique to each token created by the issuer | 
| `auth_time` | cond | Time when the End-User authentication occurred | Its value is a JSON number representing the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the date/time. <br> When a max_age request is made or when auth_time is requested as an Essential Claim, then this Claim is REQUIRED; otherwise, its inclusion is OPTIONAL. (The auth_time Claim semantically corresponds to the OpenID 2.0 PAPE [10] auth_time response parameter.) |
| `nonce` | cond | String value used to associate a Client session with an ID Token, and to mitigate replay attacks | The value is passed through unmodified from the Authentication Request to the ID Token. <br> If present in the ID Token, Clients MUST verify that the nonce Claim Value is equal to the value of the nonce parameter sent in the Authentication Request. <br> If present in the Authentication Request, the Platform MUST include a nonce Claim in the ID Token with the Claim Value being the nonce value sent in the Authentication Request. <br>The Platform will perform no other processing on nonce values used. <br> The nonce value is a case sensitive string |
| `acr` | n/a  | Authentication Context Class Reference | Not supported - superseded by vot |
| `amr` | n/a  | Authentication Methods References | Not currently supported |
| `azp` | n/a  | Authorized party – the party to which the ID Token was issued | Not currently supported |
| `vot` | mand | Vectors of Trust | The level to which the user’s identity has been verified. <br>See s5.1 for values |
| `vtm` | mand | Vector Trust Mark | https URI of the vtm claim <br>See s5.1.5 |
| `family_name` | cond | Family Name | Surname(s) or last name(s) of the End-User |
| `birthdate` | cond | Birthdate | If the user’s date of birth is available, it is returned in ISO8601‑2004 format, YYYY-MM-DD |

| Claim - NHS login extensions | Req? | Name                    | Description |
| ---------------------------- | ---- | ----------------------- | ----------- |
| `nhs_number`                 | cond | NHS Number              | If the user’s NHS Number is known, then it SHALL be included (subject to the profile scope being requested). Will be represented as a 10-digit string. |
| `identity_proofing_level`    | cond | Identity Proofing Level | User’s identity proofing level shall be included (subject to the profile scope being requested). It will contain one of the values defined in section 5.1.1 -Verification of Identity Levels and Table 18 – e.g. “P0”, “P9”. |

ID Tokens MAY contain other Claims. Any Claims used that are not understood MUST be ignored by the RP. 

The following is a non-normative example of the set of Claims (the JWT Claims Set) in an ID Token:

``` html
  {
   “iss”: “ https://auth.login.nhs.uk”,
   “sub”: “24400320”,
   “aud”: “s6BhdRkqt3”,
   “nonce”: “n-0S6_WzA2Mj”,
   “exp”: 1311281970,
   “iat”: 1311280970,
   “auth_time”: 1311280969,
   “vot”: “P9.Ca.Cc”,	
   “vtm”: “https://auth.login.nhs.uk/trustmark/auth.login.nhs.uk”
   “nhs_number”: “4447685222”,
   “birthdate”: “2001-12-30”,
   “family_name”: “Johnson”,
   “identity_proofing_level”: “P9”
  }
```

### 4.3 Access Token Payload

References:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html)
- [Access Tokens and Audit (JWT)](https://developer.nhs.uk/apis/spine-core/security_jwt.html)

| Claim | Req? | Name | Description |
| ----- | ---- | ---- | ----------- |
| `iss` | mand | Issuer Identifier for the Issuer of the response | The iss value is a case sensitive URL using the https scheme that contains scheme, host, and optionally, port number and path components and no query or fragment components. |
| `sub` | mand | Subject Identifier | A locally unique and never reassigned identifier within the Issuer for the End-User, which is intended to be consumed by the Client, e.g., 24400320 or AitOawmwtWwcT0k51BayewNvutrJUqsvl6qs7A4. It SHALL NOT exceed 255 ASCII characters in length. <br>The sub value is a case sensitive string |
| `aud` | mand | Audience(s) that this ID Token is intended for | It SHALL contain the Oauth 2.0 client_id of the Partner Service as an audience value. It MAY also contain identifiers for other audiences. In the general case, the aud value is an array of case sensitive strings. In the common special case when there is one audience, the aud value SHALL be a single case sensitive string |
| `exp` | mand | Expiration time on or after which the ID Token MUST NOT be accepted for processing | The processing of this parameter requires that the current date/time MUST be before the expiration date/time listed in the value. Implementers MAY provide for some small leeway, usually no more than a few minutes, to account for clock skew. Its value is a JSON number representing the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the date/time. See RFC 3339 [RFC3339] for details regarding date/times in general and UTC in particular |
| `iat` | mand | Time at which the JWT was issued | Its value is a JSON number representing the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the date/time. See RFC 3339 [RFC3339] for details regarding date/times in general and UTC in particular |
| `jti` | mand | JWT unique identifier | Value is unique to each token created by the issuer |
| `scope` | mand | Scopes that the access_token provides access to | A space-separated list of scopes for which the token is issued.  This list will be scopes requested in the authentication request (see s3.4.1) or a subset of them |
| `auth_time` | cond | Time when the End-User authentication occurred | Its value is a JSON number representing the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the date/time. <br>When a max_age request is made or when auth_time is requested as an Essential Claim, then this Claim is REQUIRED; otherwise, its inclusion is OPTIONAL. (The auth_time Claim semantically corresponds to the OpenID 2.0 PAPE [10] auth_time response parameter.) |
| `acr` | n/a | Authentication Context Class Reference | Not supported – superseded by vot |
| `vot` | mand | Vectors of Trust | The level to which the user’s identity has been verified. <br>See s5.1 for values |
| `vtm` | mand | Vector Trust Mark | https URI of the vtm claim <br>See s5.1.5 |

**NHS login extensions** 
| Claim        | Req? | Name       | Description |
| ------------ | ---- | ---------- | ----------- |
| `nhs_number` | cond | NHS Number | If the user’s NHS Number is known, then it SHALL be included (subject to the profile scope being requested). Will be represented as a 10-digit string. |

**Spine Core extensions**
| Claim        | Req? | Name       | Description |
| ------------ | ---- | ---------- | ----------- |
| `reason_for_request` | opt | The identified the purpose for which the request is being made. | Purpose for which access is being requested. Will contain “patientaccess”. See [11] | 
| `requesting_system` | opt | Identifier for the system or device making the request | This is an identifier for the deployed client system that has been authorised to make API calls. In the case of Spine-enabled clients (or those using the SSP to broker API calls), this will be a Spine Accredited System ID (ASID) <br>The naming system prefix for the ASID will be https://fhir.nhs.uk/Id/accredited-system<br> See [11] | 
| `requesting_patient` | opt | NHS Number | If this authorisation relates to a citizen, this attribute will hold the NHS Number of the citizen<br>The naming system prefix for the NHS Number will be http://fhir.nhs.net/Id/nhs-number <br>See [11] |

Access Tokens MAY contain other Claims. Any Claims used that are not understood MUST be ignored by the RP.

### 4.4 JOSE Signing

References: 
- [RFC7519 – JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519)
- [RFC7515 – JSON Web Signature (JWS)](https://tools.ietf.org/html/rfc7515)

The JWT will be signed using the RSASSA-PKCS1-v1_5 with the SHA-512 hash algorithm (“RS512”)

---

## 5 Data view

### 5.1 Vectors of Trust

References: 
- [DCB3051 Identity Verification and Authentication Standard for Digital Health and Care Services](http://digital.nhs.uk/isce/publication/dcb3051)
- [International Government Assurance Profile (iGov)](https://openid.bitbucket.io/iGov/openid-igov-profile-id1.html)
- [RFC8485 - Vectors of Trust](https://tools.ietf.org/html/draft-richer-vectors-of-trust-09)

NHS login supports Vectors of Trust for Identification Verification and Authentication.   Credential Management and Assertion Presentation are out of scope

**5.1.1 Verification of Identity Levels**

NHS login supports the following levels of identification verification. These are based upon [DCB3051 Identity Verification and Authentication Standard for Digital Health and Care Services](https://openid.bitbucket.io/iGov/openid-igov-profile-id1.html).

| Value | Description | 
| ----- | ----------- | 
| P0    | No identity proofing <br> This maps to 'Verification - Low' within DCB3051 |
| P5    | Knowledge-based verification ONLY <br> This maps to 'Verification - Medium' within DCB3015 |
| P9    | Physical comparison <br> This maps to 'Verification - High' within DCB3051 | 

**5.1.2 Authentication Credentials**

NHS login supports the following types of authentication credentials.  Note that the credential component may occur more than once

| Value | Description | 
| ----- | ----------- | 
| `Cp`  | Password-based <br>The user is in possession of a secret (for example a password, PIN, etc) belonging to the legitimate account holder |
| `Cd`  | Registered Device <br>The user is in possession of a device which has previously been associated with their account – delivery/use of the device is by identifiers only |
| `Ck`  | Shared Cryptographic key within a Registered Device <br>The user is in possession of a device which has previously been associated with their account – delivery/use of the device is by a **shared** key | 
| `Cm`  | Asymmetric Cryptographic key within a Registered Device <br>The user is in possession of a device which has previously been associated with their account – delivery/use of the device is by cryptographic proof of key possession using **asymmetric** key, such as a FIDO-compliant device |

**5.1.3	Requesting Vectors of Trust values**

Vector of Trust (VoT) is a combination of - Identity Verification (defined in section 5.1.1 -Verification of Identity Levels) and Authentication (defined in section 5.1.2 – Authentication Credentials) levels.

The client MAY request a set of acceptable VoT values with the "vtr" (vector of trust request) claim request as part of the Authentication Request. The value of this field is an array of JSON strings, each string identifying an acceptable set of vector components. The component values within each vector are ANDed together while the separate vectors are ORed together.  For example, a list of vectors in the form ‘["P9.Cp.Cd ", "P9.Ck"]’ is stating that either the full set of "P9 AND Cp AND Cd" simultaneously OR the full set of "P9 AND Ck" simultaneously are acceptable for this transaction.

The requested set of VoT, SHOULD only contain one value for Identity Verification component, combined with one or more values of the Authentication component.

Client SHOULD only request the lowest level of acceptable Identity Verification, within the VoT set. Vector request values MAY omit components, indicating that any value is acceptable for that component category, including omission of that component in the response vector.

**5.1.4	Returning Vectors of Trust values**

The vector is sent as a string within the "vot" (vector of trust) claim in the ID and Access tokens.  The trustmark that applies to this vector SHALL be sent as an HTTPS URL in the "vtm" (vector trust mark) claim to provide context to the vector.

For example, part of the body of an ID token claiming "Medium Assurance Identity, authenticated user via password and registered device identifier" could look like this JSON object payload of the ID token.

``` html
{
…
…
  "iss": " https://auth.login.nhs.uk/",
  "vot": "P5.Cp.Cd",
  "vtm": https://auth.login.nhs.uk/trustmark/login.nhs.uk
…
…
}
```

The body of the token is signed using JOSE, as per the OpenID Connect specification. By putting the "vot" and "vtm" values inside the token, the vector and its context are strongly bound to the federated credential represented by the token.

**5.1.5	Trustmark**

References
- [RFC8485 - Vectors of Trust](https://tools.ietf.org/html/draft-richer-vectors-of-trust-09), section 5

The Trustmark provides a list of claims that NHS login supports. This enables the client to verify which components of a trust framework NHS login supports and hence their trustworthiness.

The NHS login Trustmark will be self-hosted.

The following is a non-normative example a Trustmark based on s5.1.3 and 5.1.4 above:

``` html
{
  "idp": "https://auth.login.nhs.uk/",
  "trustmark_provider": "https://auth.login.nhs.uk/",
  "P": ["P0", "P3", "P5", "P6", "P7", "P9"],
  "C": ["Cp", "Cd", "Ck", "Cm"]
}
```

**5.1.6	Profiles**

Aligning the above to the standard [DCB3051 Identity Verification and Authentication Standard for Digital Health and Care Services](http://digital.nhs.uk/isce/publication/dcb3051) brings a standard set of vectors supported by the NHS login Service, described in the table below.

| Vector       | Description |
| ------------ | ----------- |
| `“P0.Cp”`    | Low Identity verification, user authenticated using password |
| `“P0.Cp.Cd”` | Low Identity verification, user authenticated using password and enrolled device (2FA) |
| `“P0.Cp.Ck”` | Low Identity verification, user authenticated using password and shared key within a device (2FA) | 
| `“P5.Cp.Cd”` | Medium Identity verification, user authenticated using password and enrolled device (2FA) |
| `“P5.Cp.Ck”` | Medium Identity verification, user authenticated using password and shared key within a device (2FA) |
| `“P5.Cm”`    | Medium Identity verification, user authenticated via asymmetric key within a device (2FA) (for example, FIDO UAF authentication) |
| `“P9.Cp.Cd”` | High Identity verification, user authenticated using password and enrolled device (2FA) |
| `“P9.Cp.Ck”` | High Identity verification, user authenticated using password and shared key within a device (2FA) |
| `“P9.Cm”`    | High Identity verification, user authenticated via asymmetric key within a device (2FA) (for example, FIDO UAF authentication) |


**5.1.6.1	Example 1 – Partner Service provides access to sensitive data**

This example maps onto archetypes A1, A4, A5, A6, A7 within the standard ‘DCB3051 Identity Verification and Authentication Standard for Digital Health and Care Services’ [12] 

The service requires High Verification and High Authentication. The service sends the following as acceptable Vectors in the ‘vtr’ parameter:

`“[“P9.Cp.Cd”,“P9.Cp.Ck”,“P9.Cm”]”`

**5.1.6.2	Example 2 – Partner Service provides access to basic data (not sensitive)**

This example maps onto archetype A3 within the standard ‘DCB3051 Identity Verification and Authentication Standard for Digital Health and Care Services’ [12] 

The service requires Medium Verification and High Authentication, with SSO allowed. The service sends the following as acceptable Vectors in the ‘vtr’ parameter:

`“[“P5.Cp.Cd”, “P5.Cp.Ck”,“P5.Cm”]”`

**5.1.6.3	Example 3 – Partner Service provides access to both basic data (not sensitive) and sensitive data**

This example maps onto a service offering multiple features, of which some require basic user data, and some require sensitive user data.

Service requests NHS login for Medium Verification (P5) and High Authentication for a user. The service sends the following as acceptable Vectors in the ‘vtr’ parameter:

`“[“P5.Cp.Cd”,“P5.Cp.Ck”,“P5.Cm”]”`

Successfully authenticated user can either be P5 or P9 in terms of identity verification.

For a P9 user (high identity verification) the service can offer all the functionalities, as the user meets service requirements of High Verification and High Authentication
 
For a P5 user (medium identity verification) the service offers basic features at the user’s initial login as the user meets service requirements of Medium Verification and High Authentication only.

When a P5 user, attempts to access other features supported by sensitive data then the service requires High Verification and High Authentication, with SSO allowed. The service sends the following as acceptable Vectors in the ‘vtr’ parameter:

`“[“P9.Cp.Cd”,“P9.Cp.Ck”,“P9.Cm”]”`

**5.1.6.4	The user is prompted to undertake a verification step-up journey to take the user verification level from Medium to High.Single Sign-on**

If the user’s current sign-on session (if any), does not meet the requested Vectors of Trust (vtr) in the incoming request, then the user will be required to sign-in, in order to meet the requested vectors.

Also note that Single sign-on behaviour, or to refuse SSO-behaviour, can be controlled using the ‘prompt’ parameter on the initial authorisation request – see section 3.4.1.

---

## 6 Password-less Authentication using FIDO

References:
- [FIDO Universal Authentication Framework version 1.0](https://fidoalliance.org/specifications/download/)
- [FIDO UAF Registry of Predefined Values version 1.0](https://fidoalliance.org/specs/fido-uaf-v1.0-ps-20141208/fido-uaf-reg-v1.0-ps-20141208.html)
- [FIDO UAF Authenticator Commands version 1.0](https://fidoalliance.org/specs/fido-uaf-v1.0-ps-20141208/fido-uaf-authnr-cmds-v1.0-ps-20141208.html)
- [OAuth 2.0 Bearer Token Usage](https://tools.ietf.org/html/rfc6750)

This section describes how the NHS Digital NHS login Platform implements password-less authentication using a combination of FIDO Universal Authentication Framework and the OpenID Connect Authorization Code Flow.

The NHS login Platform supports the FIDO UAF Protocol version 1.0.  

### 6.1 Overview

The objective of utilising FIDO UAF in combination with the OpenID Connect Authorization Code flow is to enable native app clients to offer an enhanced login experience to users, allowing them to utilise device-based biometric authentication (e.g. fingerprint). 

NHS login exposes four endpoints to support password-less authentication via FIDO UAF. These are :

- regRequest – enables a client to request a FIDO UAF Registration Request Message from the NHS login platform. The access token retrieved by the client during user authentication MUST be presented in the Authorization HTTP Header as a Bearer token as per RFC6750
- regResponse – enables a client to POST a FIDO UAF Registration Response Message to the NHS login platform.
- dereg – enables a client to POST a FIDO UAF Deregistration Request Message to the NHS login platform specifying a set of keys to delete. The NHS login platform will remove the relevant user key(s) and return a FIDO UAF Deregistration Request Message for processing by the FIDO client. The access token retrieved by the client during user authentication MUST be presented in the Authorization HTTP Header as a Bearer token as per RFC6750
- authRequest –  enables a client to request a FIDO UAF Authentication Request Message from the NHS login platform. The client processes the FIDO UAF Authentication Request Message and creates a FIDO UAF Authentication Response Message which the client then base64 URL encodes and provides to the NHS login platform as an authentication request parameter (fido_auth_response) as described in section 3.4.1

The endpoints are published in the /.well-known/openid-configuration document, under the keys  "fido_uaf_registration_request_endpoint",  "fido_uaf_registration_response_endpoint", "fido_uaf_deregistration_endpoint" and "fido_uaf_authentication_request_endpoint"

### 6.2 FIDO UAF registration flow

Figure 4 below is a non-normative illustration of the FIDO UAF Registration flow (taken from the FIDO UAF Architectural Overview document [15]). The process is initiated after user authentication using the standard NHS login OIDC Authorization Code Flow (as per section 3.1 of this specification).

The client initiates registration by invoking the regRequest endpoint of the NHS login platform (1). The NHS login platform generates a FIDO UAF Registration Request Message and returns this to the client, which passes it to the FIDO Client on the device for processing (2). The FIDO Client interacts with the FIDO Authenticators on the user’s device (3) and creates a FIDO UAF Registration Response Message corresponding to the original FIDO UAF Registration Request Message. The FIDO Client passes this message back to the client which sends it to the regResponse endpoint of the NHS login service (4). The NHS login platform validates the details held within the FIDO UAF Registration Response Message and stores the relevant details (5). FIDO UAF registration is complete.

INSERT DIAGRAM

**6.2.1	Registration Request endpoint**

**6.2.1.1	Request Syntax**

The Client sends the request for a FIDO UAF Registration Request Message using HTTP GET.

The Access Token obtained from an OpenID Connect Authentication Request MUST be sent as a Bearer Token using the Authorization header field, per Section 2 of OAuth 2.0 Bearer Token Usage.

The following is a non-normative example of a regRequest Request:

``` html
GET /regRequest HTTP/1.1
Host: uaf.prod.signin.nhs.uk
Authorization: Bearer SlAV…32hkKG
```

**6.2.1.2	Registration Request Validation**

The access token presented in the request is validated prior to generating a FIDO UAF Registration Response Message as per section 3.4.6.1 of the FIDO UAF Protocol Specification.

**6.2.1.3	Registration Request Response**

The response from the Registration Request endpoint will be a FIDO UAF Registration Request Message as per section 3.4.1 of the FIDO UAF Protocol Specification.

The following is a non-normative example of a response from the Registration Request endpoint:

*The contents have been truncated for legibility*

``` html
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: no-store
Pragma: no-cache

[{"header": {"upv": {"major": 1,"minor": 0},
"op": "Reg",
"appID": "https://uaf-test-1.noknoktest.com:8443/SampleApp/uaf/facets",
"serverData": "Ijycj…VbOnvg", "exts":[{"id":"fido.uaf.uvm", "data":"", "fail_if_unknown":true}]},
"challenge": "H9iW9yA9aAXF_lelQoi_DhUk514Ad8Tqv0zCnCqKDpo",
"username": "apa",
"policy": {"accepted": [[{
"userVerification": 512,
"keyProtection": 1,
"tcDisplay": 1,
"authenticationAlgorithms": [1],
"assertionSchemes": ["UAFV1TLV"]
}],
…
…],
"disallowed": [{"userVerification": 512,
"keyProtection": 16,
"assertionSchemes": ["UAFV1TLV"]},
…
…]}}]
```

**6.2.2	Registration Response endpoint**

**6.2.2.1	Request Syntax**

The Client sends the FIDO UAF Registration Response Message (as per section 3.4.4 of the FIDO UAF Protocol Specification) to the Registration Response endpoint using HTTP POST.

The following is a non-normative example of a regResponse Request:

*The contents have been truncated for legibility*

``` html
POST /regResponse HTTP/1.1
Host: uaf.prod.signin.nhs.uk
Content-Type: application/json

[{"assertions": [{"assertion": "AT7uAgM…cSNmQ",
"assertionScheme": "UAFV1TLV"
}],
"fcParams": "eyJhcH…hcHAifQ",
"header": {"appID": "https://uaf-test-1.noknoktest.com:8443/SampleApp/uaf/facets",
"op": "Reg",
"serverData": "IjycjPZ…WVbOnvg",
"upv": {"major": 1,
"minor": 0}, "exts":[{"id":"fido.uaf.uvm", "data":"", "fail_if_unknown":true}]}}]
```

**6.2.2.2	Registration Response Request Validation**

The FIDO UAF Registration Response Message is validated and processed as per section 3.4.6.5 of the FIDO UAF Protocol Specification.

**6.2.2.3	Registration Response Response**

The response from the Registration Response endpoint will be a list of Registration records stored within the NHS login platform.

The following is a non-normative example of a successful response from the Registration Response endpoint:

``` html
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: no-store
Pragma: no-cache

[{
  "attestDataToSign": "Az6…pSDg==",
  "attestSignature": "4PZZ…Rw==",
  "attestVerifiedStatus": "VALID",
  "authenticator": {
    "AAID": "107968223",
    "deviceId": null,
    "KeyID": "ODY4MjIz",
    "status": null,
    "username": "8f7…2a4"
  },
  "authenticator_string": "107968223#ODY4MjIz",
  "AuthenticatorVersion": "0.0",
  "PublicKey": "MFkw…pSDg==",
  "status": "SUCCESS",
  "timeStamp": "1547727594654",
  "username": "8f7…72a4"
}]
```

### 6.3	FIDO UAF authentication flow

Figure 5 below is a non-normative illustration of the FIDO UAF Authentication flow (taken from the FIDO UAF Architectural Overview document [15]). The process is initiated after FIDO UAF registration has been completed.

The client initiates authentication by invoking the authRequest endpoint of the NHS login platform (1). The NHS login platform generates a FIDO UAF Authentication Request Message and returns this to the client, which passes it to the FIDO Client on the device for processing (2). The FIDO Client interacts with the FIDO Authenticators on the user’s device (3) and creates a FIDO UAF Authentication Response Message corresponding to the original FIDO UAF Registration Request Message. The FIDO Client passes this message back to the client which sends it to the NHS login service as a base64-URL encoded parameter in an OpenID Connect Authentication Request(4) (see fido_auth_response parameter in section 3.4.1 of this document). The NHS login platform validates the FIDO UAF Authentication Response Message using the public key for the user stored in the NHS login FIDO registry (5) and if validated treats this as a successful authentication using an authentication vector of “Cm” (see section 5.1.2 of this document).

INSERT DIAGRAM

**6.3.1	Authentication Request endpoint**

**6.3.1.1	Request Syntax**

The Client sends the request for a FIDO UAF Authentication Request Message using HTTP GET.

The following is a non-normative example of an authRequest Request:

``` html
GET /authRequest HTTP/1.1
Host: uaf.prod.signin.nhs.uk
```

**6.3.1.2	Authentication Request Validation**

No specific validation of the request is performed

**6.3.1.3	Authentication Request Response**

The response from the Authentication Request endpoint will be a FIDO UAF Authentication Request Message as per section 3.5.2 of the FIDO UAF Protocol Specification.

The following is a non-normative  example of a response from the Authentication Request endpoint:

*The contents have been truncated for legibility*

``` html
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: no-store
Pragma: no-cache

[{"header": {"upv": {"major": 1,"minor": 0},
"op": "Reg",
"appID": "https://uaf-test-1.noknoktest.com:8443/SampleApp/uaf/facets",
"serverData": "Ijycj…VbOnvg", "exts":[{"id":"fido.uaf.uvm", "data":"", "fail_if_unknown":true}]},
"challenge": "H9iW9yA9aAXF_lelQoi_DhUk514Ad8Tqv0zCnCqKDpo",
"username": "apa",
"policy": {"accepted": [[{
"userVerification": 512,
"keyProtection": 1,
"tcDisplay": 1,
"authenticationAlgorithms": [1],
"assertionSchemes": ["UAFV1TLV"]
}],
…
…],
"disallowed": [{"userVerification": 512,
"keyProtection": 16,
"assertionSchemes": ["UAFV1TLV"]},
…
…]}}]
```

### 6.4	FIDO UAF deregistration flow

Figure 6 below is a non-normative illustration of the FIDO UAF Deregistration flow (taken from the FIDO UAF Architectural Overview document [15]). The process can be initiated after FIDO UAF registration has been completed.

The client initiates authenticator deregistration by invoking the deregRequest endpoint of the NHS login platform (1). The request MUST include the Access Token obtained from an OpenID Connect Authentication Request, which MUST be sent as a Bearer Token using the Authorization header field, per Section 2 of OAuth 2.0 Bearer Token Usage.  The request can either be a list of authenticators to be deregistered (sent using HTTP POST) or a request to remove all authenticators for the user (using a HTTP GET). The NHS login platform generates a FIDO UAF Deregistration Request Message, removes the relevant authenticator records from the NHS login FIDO registry and returns the message to the client. The client passes the FIDO UAF Deregistration Request Message to the FIDO Client on the device for processing (3) and removal of authenticators from the device.

INSERT DIAGRAM

**6.4.1	Deregistration Request endpoint**

**6.4.1.1	Request Syntax**

The Client either sends a FIDO UAF Deregistration Request Message (as per section 3.6.1 of the FIDO UAF Protocol Specification) to the Deregistration Request endpoint using HTTP POST or can make a HTTP GET to the endpoint with no body. 

The Access Token obtained from an OpenID Connect Authentication Request MUST be sent as a Bearer Token using the Authorization header field, per Section 2 of OAuth 2.0 Bearer Token Usage.

The following is a non-normative  example of a deregRequest HTTP POST Request:

*The contents have been truncated for legibility*

``` html
POST /deregRequest HTTP/1.1
Host: uaf.prod.signin.nhs.uk
Content-Type: application/json
Authorization: Bearer SlAV3…2hkKG

[{"header": {"appID": "https://uaf-test-1.noknoktest.com:8443/SampleApp/uaf/facets",
"op": "Reg",
"serverData": "IjycjPZ…WVbOnvg",
"upv": {"major": 1,
"minor": 0}, "exts":[{"id":"fido.uaf.uvm", "data":"", "fail_if_unknown":true}]}, "authenticators": [{"aaid": "ABCD#ABCD", "keyID": "ZMC…JfNg"}]}]
```

The following is a non-normative example of a deregRequest HTTP GET Request:

``` html
GET /deregRequest HTTP/1.1
Host: uaf.prod.signin.nhs.uk
Authorization: Bearer SlAV3…2hkKG
```

**6.4.1.2	Deregistration Request Request Validation**

The access token is validated, and the NHS login user account details are retrieved.

For HTTP POST processing, each authenticator provided in the message is removed from the NHS login FIDO registry once it has been validated as relating to the NHS login user account. 

For HTTP GET processing, each authenticator stored in the NHS login FIDO registry is identified for the NHS login user account and subsequently removed.

The FIDO UAF Registration Response Message is validated and processed as per section 3.4.6.5 of the FIDO UAF Protocol Specification.

**6.4.1.3	Deregistration Request Response**

The response from the Deregistration Request endpoint will be a FIDO UAF Deregistration Request Message listing the authenticator records removed from the NHS login FIDO registry.

The following is a non-normative example of a successful response from the Deregistration Request endpoint:

``` html
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: no-store
Pragma: no-cache

[{"header": {"appID": "https://uaf-test-1.noknoktest.com:8443/SampleApp/uaf/facets",
"op": "Reg",
"serverData": "IjycjPZ…WVbOnvg",
"upv": {"major": 1, "minor": 0}}, 
"authenticators": [{"aaid": "ABCD#ABCD", "keyID": "ZMC…JfNg"}]}]
```

### 6.5	Platform Restrictions

This section details specific restrictions implemented within the NHS login FIDO processing.

**6.5.1	Authenticator Policy Matching Criteria**

As the NHS login platform is designed for public use, restricting authenticators by device or manufacturer (i.e. via facets) is not an appropriate authenticator matching policy. Instead the platform specifies matching criteria based on User Verification Method, Authentication Algorithm, Assertion Scheme (fixed value of “UAFV1TLV”) and Key Protection.

**User Verification Methods**

The platform will accept authenticators which support Presence AND Fingerprint (1027), OR Presence AND Faceprint (1041), OR Presence AND Handprint (1281) (see FIDO UAF Registry of Predefined Values [16], section 3.1)

If a FIDO UAF Registration Request Message or FIDO UAF Authentication Request Message header contains an extension with an id of “fido.uaf.uvm” then the User Verification Method utilised by the authenticator MUST be returned in the assertion, as a TAG_EXTENSION tag to the TAG_UAFV1_KRD tag (for Registration – see FIDO UAF Authenticator Commands [17] section 6.1.1.1) or TAG_UAFV1_SIGNED_DATA tag (for Authentication – see FIDO UAF Authenticator Commands [17] section 6.1.1.2). The data held in the TAG_EXTENSION_ID tag of the extension tag MUST equal “fido.uaf.uvm”, and the data held in the TAG_EXTENSION_DATA tag  of the extension tag MUST contain the User Verification Method and the value MUST match a User Verification Method value in an accepted Matching Criteria of the relevant Request Message Policy.

**Authentication Algorithms**

The NHS login platform supports the ECDSA family of signing algorithms. Specific values supported are UAF_ALG_SIGN_SECP256R1_ECDSA_SHA256_RAW, UAF_ALG_SIGN_SECP256R1_ECDSA_SHA256_DER, UAF_ALG_SIGN_SECP256K1_ECDSA_SHA256_RAW or UAF_ALG_SIGN_SECP256K1_ECDSA_SHA256_DER. See FIDO UAF Registry of Predefined Values [15] for specific details.

**Key Protection**

The NHS login platform supports on-device key protection mechanisms. Specific values supported are KEY_PROTECTION_SOFTWARE, KEY_PROTECTION_HARDWARE, KEY_PROTECTION_TEE or KEY_PROTECTION_SECURE_ELEMENT. See FIDO UAF Registry of Predefined Values [15] for specific details.

**6.5.2	Public Key Representation Formats**

Clients MUST utilise either UAF_ALG_KEY_ECC_X962_RAW or UAF_ALG_KEY_ECC_X962_DER formats for the TAG_PUB_KEY to align with supported Authentication Algorithms.

---

## 7 Partner Services and Security

### 7.1	Partner Service Registration

Currently, Partner Services will be registered and onboarded into the NHS login Platform using a standard offline process.

The following information is required is required for the offline registration process:

| Attribute     | Description |
| ------------- | ----------- |
| Redirect URIs | List of Redirection URI values used by the Client. <br>The redirect_uri parameter value used in each Authorization Request MUST exactly match one of these registered Redirection URI values |
| Client Name   | Name of the Client to be presented to the End-User |
| Public Key    | A copy of the client’s public key is supplied. The public key must be in PEM format and represent a 2048-bit RSA keypair*. |
| Scopes        | Required scopes |

On successful registration, the following information will be provided 

| Attribute   | Req? | Type   | Description |
| ----------- | ---- | ------ | ----------- |
| `client_id` | mand | string | Id for the client, allocated by the NHS login service |

**An example use of OpenSSL to generate a RSA public/private key pair and then extract the public key is as follows:*

``` html 
openssl genpkey -algorithm RSA -out ../keys/private_key.pem -outform PEM -aes-256-cbc -pass file:../keys/password.txt -pkeyopt rsa_keygen_bits:2048
openssl rsa -pubout -in ../keys/private_key.pem -out ../keys/public_key.pem -passin file:../keys/password.txt
```

### 7.2 Partner Service Authentication

Reference:
- [OpenID Connect Core Specification](https://openid.net/specs/openid-connect-core-1_0.html), section 9

**7.2.1 Confidential Clients**

Partner Services which are confidential clients will use the following authentication mechanism:

- private_key_jwt, as per https://tools.ietf.org/html/rfc7523

The authentication mechanism of “none” is not supported for confidential clients

### 7.3	Client Redirects

The NHS login Platform will only allow redirect URIs which have been pre-agreed during the onboarding process.

Wildcard URIs are not permitted.

HTTP URIs are NOT permitted

URIs with querystring parameters are not permitted. (The 'state' parameter described in section 3.4 is designed to support conveying dynamic request content within the OIDC authentication request.)

---

## 8 References

- OpenID Foundation, [OpenID Connect Core 1.0 incorporating errata set 1](https://openid.net/specs/openid-connect-core-1_0.html)
- OpenID Connect Foundation, [International Government Assurance Profile (iGov) for OpenID Connect 1.0](https://openid.bitbucket.io/iGov/openid-igov-profile-id1.html)
- Internet Engineering Task Force (IETF), [RFC8485:Vectors of Trust](https://tools.ietf.org/html/rfc8485)
- Internet Engineering Task Force (IETF), [RFC7519: JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519)
- OpenID Foundation, [OAuth 2.0 Multiple Response Type Encoding Practices](http://openid.net/specs/oauth-v2-multiple-response-types-1_0.html)
- Internet Engineering Task Force (IETF), [RFC6749 - The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749)
- Internet Engineering Task Force (IETF), [RFC6750: OAuth 2.0 Bearer Token Usage](https://tools.ietf.org/html/rfc6750)
- Internet Engineering Task Force (IETF), [RFC7515 - JSON Web Signature (JWS)](https://tools.ietf.org/html/rfc7515)
- Internet Engineering Task Force (IETF), [RFC3339 - Date and Time on the Internet: Timestamps](https://www.ietf.org/rfc/rfc3339.txt)
- OpenID Foundation, [OpenID Provider Authentication Policy Extension 1.0](http://openid.net/specs/openid-provider-authentication-policy-extension-1_0.html)
- NHS Digital, [Access Tokens and Audit (JWT)](https://developer.nhs.uk/apis/spine-core/security_jwt.html)
- NHS Digital, [DCB3051 Identity Verification and Authentication Standard for Digital Health and Care Services](http://digital.nhs.uk/isce/publication/dcb3051)
- Cabinet Office, [GPG44 - Authentication credentials for online government services](https://www.gov.uk/government/publications/authentication-credentials-for-online-government-services)
- Cabinet Office, [GPG45 - Identity proofing and verification of an individual](https://www.gov.uk/government/publications/identity-proofing-and-verification-of-an-individual)
- FIDO Alliance, [FIDO Universal Authentication Framework](https://fidoalliance.org/specifications/download/)
- FIDO Alliance, [FIDO UAF Registry of Predefined Values](https://fidoalliance.org/specs/fido-uaf-v1.0-ps-20141208/fido-uaf-reg-v1.0-ps-20141208.html)
- FIDO Alliance, [FIDO UAF Authenticator Commands](https://fidoalliance.org/specs/fido-uaf-v1.0-ps-20141208/fido-uaf-authnr-cmds-v1.0-ps-20141208.html)
- OpenID Foundation, [Enhancing OAuth Security for Mobile Applications with PKCE](http://openid.net/2015/05/26/enhancing-oauth-security-for-mobile-applications-with-pkse/)
- NHS Digital, [DCB3051 Identity Verification and Authentication Standard for Digital Health and Care Services](http://digital.nhs.uk/isce/publication/dcb3051)

---

## 9 Document Management

**Revision History**

| **Version** | **Date**      | **Summary of Changes**                             |
| ----------- | ------------- | -------------------------------------------------- |
| V1.0 Draft  | 30 April 2018 | First draft for review                             |
| V1.1 Draft  | 16 July 2018  | Second draft                                       |
| V1.2 Draft  | 30 July 2018  | Draft following comments                           |
| V1.3 Draft  | 23 Aug 2018   | Draft for informal external comments               |
| V1.4 Draft  | 06 Nov 2018   | Draft for external supplier comments               |
| V1.4i       | 19 Mar 2019   | Updated following comments <br> Issued for approval for Public Beta |
| V1.5        | 01 Apr 2019   | Include refresh token                              |
| V1.6        | 07 May 2019   | Include FIDO UAF details                           |
| V1.7        | 21 Oct 2019   | Minor clarifications on supported scope and claims |
| V1.8        | 19 Nov 2019   | Include client_metadata scope                      |
| V1.9        | 15 May 2020   | Include identity_proofing_level claim <br> Change to section 5.1.1, 5.1.3 & 7.3 |


**Reviewed by:**

| **Name** | **Title / Responsibility**    | **Date**      | **Version** |
| ----------------- | ----------------------------- | ------------- | ----------- |
| Matthew Brown     | Lead Technical Architect      | 15 May 2020   | V1.9        |
| Priyanka Mittal   | NHS login Technical Architect | 15 May 2020   | V1.9        |

**Approved by:**

| **Name**       | **Title / Responsibility** | **Date**    | **Version** |
| -------------- | -------------------------- | ----------- | ----------- |
| Melissa Ruscoe | Programme Head             | 15 May 2020 | V1.9        |
| Darren Hutton  | Product Owner              | 15 May 2020 | V1.9        |

**Document Control:**

The controlled copy of this document is maintained in the NHS Digital corporate network. Any copies of this document held outside of that area, in whatever format (e.g. paper, email attachment), are considered to have passed out of control and should be checked for currency and validity.