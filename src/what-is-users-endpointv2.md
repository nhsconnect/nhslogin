---
layout: base.njk
title: What is the Users Endpoint V2?
---

The Users Endpoint V2 lets approved services look up NHS login users and retrieve basic profile information in a secure and consistent way.

It replaces an older version of the endpoint and now supports more fields and can return more than one user in a single response.

---

## What the endpoint does

The endpoint lets your service:

- search for NHS login users using an NHS number, an email address, or both
- receive a standard set of user details, depending on what your service is approved to access
- understand the user’s identity proofing level
- retrieve optional GP-related details where appropriate

The endpoint is read-only.

---

## When to use it

You might use the Users Endpoint V2 to:

- match an existing record in your system to an NHS login account
- pre-fill user information during onboarding
- check a user’s proofing level before granting access to certain features
- support GP-integrated journeys that require GP linkage information

---

## What information you can receive

The information depends on the access your service has been approved for. Common examples include:

- account ID and whether the account is active
- identity proofing level
- name, date of birth and NHS number
- user email addresses, mobile or landline numbers
- GP registration details (if approved)
- GP integration credentials (if approved)

You will only receive the information covered by your approved scopes.

---

## How it works

1. Your service securely authenticates with NHS login.
2. NHS login issues a short-lived access token.
3. Your service makes a request to the Users Endpoint V2 and includes a search value (NHS number or email).
4. The endpoint returns any matching users and the information you’re approved to receive.

---

## Constraints

- read-only (GET requests only)
- HTTPS required
- searches must use NHS number, email, or both
- your service must be granted the correct scopes before use
- access tokens expire quickly for security

---

## Developer documentation

For technical details about how Users Endpoint V2 works, see the [Users Endpoint V2 Interface Specification](https://nhsconnect.github.io/nhslogin/provision-account-external-interface/).
