---
layout: base.njk
title: 6 Password-less Authentication using FIDO 
---

References:
- [FIDO Universal Authentication Framework version 1.0](https://fidoalliance.org/specifications/download/)
- [FIDO UAF Registry of Predefined Values version 1.0](https://fidoalliance.org/specs/fido-uaf-v1.0-ps-20141208/fido-uaf-reg-v1.0-ps-20141208.html)
- [FIDO UAF Authenticator Commands version 1.0](https://fidoalliance.org/specs/fido-uaf-v1.0-ps-20141208/fido-uaf-authnr-cmds-v1.0-ps-20141208.html)
- [OAuth 2.0 Bearer Token Usage](https://tools.ietf.org/html/rfc6750)

This section describes how the NHS Digital NHS login Platform implements password-less authentication using a combination of FIDO Universal Authentication Framework and the OpenID Connect Authorization Code Flow.

The NHS login Platform supports the FIDO UAF Protocol version 1.0.  

--- 

## 6.1 Overview

The objective of utilising FIDO UAF in combination with the OpenID Connect Authorization Code flow is to enable native app clients to offer an enhanced login experience to users, allowing them to utilise device-based biometric authentication (e.g. fingerprint). 

NHS login exposes four endpoints to support password-less authentication via FIDO UAF. These are:

1. **regRequest** <br>Enables a client to request a FIDO UAF Registration Request Message from the NHS login platform. The access token retrieved by the client during user authentication **must** be presented in the Authorization HTTP Header as a Bearer token as per [RFC6750: OAuth 2.0 Bearer Token Usage](https://tools.ietf.org/html/rfc6750).
2. **regResponse** <br>Enables a client to POST a FIDO UAF Registration Response Message to the NHS login platform.
3. **dereg** <br>Enables a client to POST a FIDO UAF Deregistration Request Message to the NHS login platform specifying a set of keys to delete. The NHS login platform will remove the relevant user key(s) and return a FIDO UAF Deregistration Request Message for processing by the FIDO client. The access token retrieved by the client during user authentication **must** be presented in the Authorization HTTP Header as a Bearer token as per [RFC6750: OAuth 2.0 Bearer Token Usage](https://tools.ietf.org/html/rfc6750).
4. **authRequest** <br>Enables a client to request a FIDO UAF Authentication Request Message from the NHS login platform. The client processes the FIDO UAF Authentication Request Message and creates a FIDO UAF Authentication Response Message which the client then base64 URL encodes and provides to the NHS login platform as an authentication request parameter (fido_auth_response) as described in [3.4.1 Authentication request](https://nhsconnect.github.io/nhslogin/interface-spec-doc-3).

The endpoints are published in the /.well-known/openid-configuration document, under the keys  `fido_uaf_registration_request_endpoint`,  `fido_uaf_registration_response_endpoint`, `fido_uaf_deregistration_endpoint` and `fido_uaf_authentication_request_endpoint`.

---

## 6.2 FIDO UAF registration flow

Figure 4 below is a non-normative illustration of the FIDO UAF Registration flow (taken from the [FIDO UAF Architectural Overview](https://fidoalliance.org/specifications/download/)). The process is initiated after user authentication using the standard NHS login OIDC Authorization Code Flow (as per [3.1 Authorization Code Flow](https://nhsconnect.github.io/nhslogin/interface-spec-doc-3)).

The client initiates registration by invoking the regRequest endpoint of the NHS login platform (1). The NHS login platform generates a FIDO UAF Registration Request Message and returns this to the client, which passes it to the FIDO Client on the device for processing (2). The FIDO Client interacts with the FIDO Authenticators on the user’s device (3) and creates a FIDO UAF Registration Response Message corresponding to the original FIDO UAF Registration Request Message. The FIDO Client passes this message back to the client which sends it to the regResponse endpoint of the NHS login service (4). The NHS login platform validates the details held within the FIDO UAF Registration Response Message and stores the relevant details (5). FIDO UAF registration is complete.

<dl><dt>Figure 4 - FIDO UAF Registration flow</dt></dl>

![Diagram](nhslogin/images/EIS_Figure4.png)


### 6.2.1 Registration Request endpoint

**6.2.1.1	Request Syntax**

The Client sends the request for a FIDO UAF Registration Request Message using HTTP GET.

The Access Token obtained from an OpenID Connect Authentication Request **must** be sent as a Bearer Token using the Authorization header field, per [OAuth 2.0 Bearer Token Usage](https://tools.ietf.org/html/rfc6750), s2.

The following is a non-normative example of a regRequest Request:

``` html
GET /regRequest HTTP/1.1
Host: uaf.prod.signin.nhs.uk
Authorization: Bearer SlAV…32hkKG
```

**6.2.1.2	Registration Request Validation**

The access token presented in the request is validated prior to generating a FIDO UAF Registration Response Message as per FIDO UAF Protocol Specification, s3.4.6.1.

**6.2.1.3	Registration Request Response**

The response from the Registration Request endpoint will be a FIDO UAF Registration Request Message as per FIDO UAF Protocol Specification, s3.4.1.

The following is a non-normative example of a response from the Registration Request endpoint:

<dl><dt><i>The contents have been truncated for legibility</i></dt></dl>

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

### 6.2.1 Registration Response endpoint

**6.2.2.1	Request Syntax**

The Client sends the FIDO UAF Registration Response Message (as per FIDO UAF Protocol Specification, s3.4.4) to the Registration Response endpoint using HTTP POST.

The following is a non-normative example of a regResponse Request:

<dl><dt><i>The contents have been truncated for legibility</i></dt></dl>

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

The FIDO UAF Registration Response Message is validated and processed as per FIDO UAF Protocol Specification, s3.4.6.5.

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

---

## 6.3 FIDO UAF authentication flow

Figure 5 below is a non-normative illustration of the FIDO UAF Authentication flow (taken from the [FIDO UAF Architectural Overview](https://fidoalliance.org/specifications/download/)). The process is initiated after FIDO UAF registration has been completed.

The client initiates authentication by invoking the authRequest endpoint of the NHS login platform (1). The NHS login platform generates a FIDO UAF Authentication Request Message and returns this to the client, which passes it to the FIDO Client on the device for processing (2). The FIDO Client interacts with the FIDO Authenticators on the user’s device (3) and creates a FIDO UAF Authentication Response Message corresponding to the original FIDO UAF Registration Request Message. The FIDO Client passes this message back to the client which sends it to the NHS login service as a base64-URL encoded parameter in an OpenID Connect Authentication Request(4) (see `fido_auth_response` parameter in [3.4.1 Authentication request](https://nhsconnect.github.io/nhslogin/interface-spec-doc-3)). The NHS login platform validates the FIDO UAF Authentication Response Message using the public key for the user stored in the NHS login FIDO registry (5) and if validated treats this as a successful authentication using an authentication vector of `Cm` (see [5.1.2 Authentication Credentials](https://nhsconnect.github.io/nhslogin/interface-spec-doc-5)).

<dl><dt>Figure 5 - FIDO UAF Authentication flow</dt></dl>

![Diagram](nhslogin/images/EIS_Figure5.png)

### 6.3.1 Authentication Request endpoint

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

The response from the Authentication Request endpoint will be a FIDO UAF Authentication Request Message as per FIDO UAF Protocol Specification, s3.5.2.

The following is a non-normative example of a response from the Authentication Request endpoint:

<dl><dt><i>The contents have been truncated for legibility</i></dt></dl>

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

---

## 6.4 FIDO UAF deregistration flow

Figure 6 below is a non-normative illustration of the FIDO UAF Deregistration flow (taken from the [FIDO UAF Architectural Overview](https://fidoalliance.org/specifications/download/)). The process can be initiated after FIDO UAF registration has been completed.

The client initiates authenticator deregistration by invoking the deregRequest endpoint of the NHS login platform (1). The request **must** include the Access Token obtained from an OpenID Connect Authentication Request, which **must** be sent as a Bearer Token using the Authorization header field, per [OAuth 2.0 Bearer Token Usage](https://tools.ietf.org/html/rfc6750), s2. The request can either be a list of authenticators to be deregistered (sent using HTTP POST) or a request to remove all authenticators for the user (using a HTTP GET). The NHS login platform generates a FIDO UAF Deregistration Request Message, removes the relevant authenticator records from the NHS login FIDO registry and returns the message to the client. The client passes the FIDO UAF Deregistration Request Message to the FIDO Client on the device for processing (3) and removal of authenticators from the device.

<dl><dt>Figure 6 - FIDO UAF Deregistration flow</dt></dl>

![Diagram](nhslogin/images/EIS_Figure6.png)

### 6.4.1	Deregistration Request endpoint

**6.4.1.1	Request Syntax**

The Client either sends a FIDO UAF Deregistration Request Message (as per FIDO UAF Protocol Specification, s3.6.1) to the Deregistration Request endpoint using HTTP POST or can make a HTTP GET to the endpoint with no body. 

The Access Token obtained from an OpenID Connect Authentication Request **must** be sent as a Bearer Token using the Authorization header field, per [OAuth 2.0 Bearer Token Usage](https://tools.ietf.org/html/rfc6750), s2.

The following is a non-normative example of a deregRequest HTTP POST Request:

<dl><dt><i>The contents have been truncated for legibility</i></dt></dl>

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

The FIDO UAF Registration Response Message is validated and processed as per FIDO UAF Protocol Specification, s3.4.6.5.

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

---

## 6.5 Platform Restrictions

This section details specific restrictions implemented within the NHS login FIDO processing.

### 6.5.1 Authenticator Policy Matching Criteria 

As the NHS login platform is designed for public use, restricting authenticators by device or manufacturer (i.e. via facets) is not an appropriate authenticator matching policy. Instead the platform specifies matching criteria based on User Verification Method, Authentication Algorithm, Assertion Scheme (fixed value of `UAFV1TLV`) and Key Protection.

**User Verification Methods**

The platform will accept authenticators which support Presence AND Fingerprint (1027), OR Presence AND Faceprint (1041), OR Presence AND Handprint (1281) (see [FIDO UAF Registry of Predefined Values](https://fidoalliance.org/specs/fido-uaf-v1.0-ps-20141208/fido-uaf-reg-v1.0-ps-20141208.html), s3.1)

If a FIDO UAF Registration Request Message or FIDO UAF Authentication Request Message header contains an extension with an id of `fido.uaf.uvm` then the User Verification Method utilised by the authenticator **must** be returned in the assertion, as a `TAG_EXTENSION` tag to the `TAG_UAFV1_KRD` tag (for Registration – see [FIDO UAF Authenticator Commands](https://fidoalliance.org/specs/fido-uaf-v1.0-ps-20141208/fido-uaf-authnr-cmds-v1.0-ps-20141208.html), s6.1.1.1) or `TAG_UAFV1_SIGNED_DATA` tag (for Authentication – see [FIDO UAF Authenticator Commands](https://fidoalliance.org/specs/fido-uaf-v1.0-ps-20141208/fido-uaf-authnr-cmds-v1.0-ps-20141208.html), s6.1.1.2). The data held in the `TAG_EXTENSION_ID` tag of the extension tag **must** equal `fido.uaf.uvm`, and the data held in the `TAG_EXTENSION_DATA` tag of the extension tag **must** contain the User Verification Method and the value **must** match a User Verification Method value in an accepted Matching Criteria of the relevant Request Message Policy.

**Authentication Algorithms**

The NHS login platform supports the ECDSA family of signing algorithms. Specific values supported are `UAF_ALG_SIGN_SECP256R1_ECDSA_SHA256_RAW`, `UAF_ALG_SIGN_SECP256R1_ECDSA_SHA256_DER`, `UAF_ALG_SIGN_SECP256K1_ECDSA_SHA256_RAW` or `UAF_ALG_SIGN_SECP256K1_ECDSA_SHA256_DER`. 

See [FIDO UAF Registry of Predefined Values](https://fidoalliance.org/specifications/download/) for specific details.

**Key Protection**

The NHS login platform supports on-device key protection mechanisms. Specific values supported are `KEY_PROTECTION_SOFTWARE`, `KEY_PROTECTION_HARDWARE`, `KEY_PROTECTION_TEE` or `KEY_PROTECTION_SECURE_ELEMENT`. 

See [FIDO UAF Registry of Predefined Values](https://fidoalliance.org/specifications/download/) for specific details.

### 6.5.2	Public Key Representation Formats

Clients **must** utilise either `UAF_ALG_KEY_ECC_X962_RAW` or `UAF_ALG_KEY_ECC_X962_DER` formats for the `TAG_PUB_KEY` to align with supported Authentication Algorithms.