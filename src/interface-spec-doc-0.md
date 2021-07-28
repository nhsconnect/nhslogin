---
layout: base.njk
title: EIS Contents
---

## Contents

<dl>
<dt><b>1</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc-1">Introduction</a></dt>
<dd><b>1.1</b> Purpose of Document</dd>
<dd><b>1.2</b> Audience</dd>
<dd><b>1.3</b> Definitions</dd>
</dl>
<dl>
<dt><b>2</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc-2">Specification status</a></dt>
<dd><b>2.1</b> Scope / Constraints</dd>
<dd><b>2.2</b> Changes in this version</dd>
</dl>
<dl>
<dt><b>3</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc-3">Messages overview</a></dt>
<dd><b>3.1</b> Authorization code flow</dd>
<dd><b>3.2</b> Public and confidential cients</dd>
<dd><b>3.3</b> Endpoints</dd>
<dd><b>3.4</b> Authorize endpoint</dd>
<dd><b>3.5</b> Token endpoint</dd>
<dd><b>3.6</b> UserInfo endpoint</dd>
</dl>
<dl>
<dt><b>4</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc-4">Tokens</a></dt>
<dd><b>4.1</b> JWT header</dd>
<dd><b>4.2</b> ID token payload</dd>
<dd><b>4.3</b> Access token payload</dd>
<dd><b>4.4</b> JOSE signing</dd>
</dl>
<dl>
<dt><b>5</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc-5">Data view</a></dt>
<dd><b>5.1</b> Vectors of trust</dd>
</dl>
<dl>
<dt><b>6</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc-6">Password-less authentication using FIDO UAF</a></dt>
<dd><b>6.1</b> Overview</a></dd>
<dd><b>6.2</b> FIDO UAF registration flow</a></dd>
<dd><b>6.3</b> FIDO UAF authentication flow</a></dd>
<dd><b>6.4</b> FIDO UAF deregistration flow</a></dd>
<dd><b>6.5</b> Platform restrictions</a></dd>
</dl>
<dl>


**7** [Partner services and security](https://nhsconnect.github.io/nhslogin/interface-spec-doc-7)
7.1 Partner service registration
7.2 Partner service authentication
7.3 Client redirects
**8** [References](https://nhsconnect.github.io/nhslogin/interface-spec-doc-8)
**9** [Document management](https://nhsconnect.github.io/nhslogin/interface-spec-doc-9)



NHS login implements OpenID Connect 1.0 OpenID Provider role to assert the identity of the end user to a partner service, as well as enabling the service to obtain basic profile information about the end user in an interoperable manner.

This document defines the interfaces implemented by the Platform and describes the data flows supported by these interfaces.

[Download the EIS as a word document](https://github.com/nhsconnect/nhslogin/blob/main/NHS%20login%20-%20Interface%20Specification%20-%20Federation.docx?raw=true).

N.B. We are currently in the process of moving the content from the Word document to this site.
