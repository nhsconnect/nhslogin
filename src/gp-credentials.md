---
layout: base.njk
title: Using NHS login to create or retrieve GP credentials
---

## Introduction

If you are an IM1 supplier, you can learn how to use NHS login to create or retrieve GP credentials. This means users do not have to go their GP practice to register for your service.

This feature needs to be used as part of NHS login authentication. **You cannot use NHS login as a one-off linkage key retrieval tool for GP credentials.**

NHS login supports a scope of `gp_integration_credentials` which will allow a relying party (RP) to retrieve the following user claims:

- Account ID
- ODS Code
- Linkage Key

These three pieces of information are required by IM1 paired services to create an IM1 token, which is then used by the RP to invoke the GP system patient facing APIs. 

The RP (service) must be IM1 enabled to allow this scope in the production environment. 

Retrieving these items of information via NHS login removes the need for the user to enter them manually. It also allows for the seamless registration of previously unregistered GP Online users, preventing the need to visit to a GP Practice.

<div class="design-example">
<a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/gp-credentials-diagram.png" class="design-example__pop-out" target="_blank">Open this diagram in new window</a>
    <div class="code-embed">
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/gp-credentials-diagram.png" alt="Diagram illustrating GP credentials request and validation">
</div>
</div>

This diagram illustrates:
1. how NHS login processes a request from an RP for `gp_integration_credentials` via the **/userinfo** endpoint
2. how NHS login validates `gp_integration_credentials` on each request and how `gp_integration_credentials` are refreshed if the information held by NHS login is invalid

---

## GP integration credentials validation

When `gp_integration_credentials` scope is requested by an RP, NHS login performs a background check of the validity of a stored IM1 token. As this check runs in the background asynchronously, it is the responsibility of the RP to also validate their IM1 token (if one exists).

If the RP determines that the claims returned from `gp_integration_credentials` scope are not valid it can request refreshed claims from NHS login by re-starting the login process.

**Optional**: the RP can utilise the `asserted_login_identity` request parameter to avoid the user needing to re-authenticate.

---

## GP integration credentials are no longer valid

The GP credentials might no longer be valid if:

1. the user has moved GP surgery
2. the GP surgery has changed GP systems
3. GP surgeries merge / divide
4. the user’s GP online access been revoked at the GP system

For example, a user's GP access may be revoked due to multiple failed login attempts. In cases 1, 2 and 3 generally the ODS code for the user changes. This will be detected by NHS login automatically via a separate background process, which validates PDS information relating to the user.

### Assumptions

- When GP credentials (linkage keys) expire or are invalidated, all the IM1 tokens generated using them are also expired or invalidated. If the RP has any process to expire or invalidate the GP credentials (linkage keys) then it should be disclosed/discussed with NHS login.
- RP should cater for a user journey which prevents the user getting into an endless “retrieve GP credential” loop if the credentials genuinely can’t be retrieved.

---

## GP systems coverage

The platforms that NHS login provides coverage for GP login credentials are: 

- EMIS: 100%
- TPP: 100%


<h2 class="nhsd-t-heading-xl" data-uipath="website.contentblock.section.title">
Guidance for EMIS systems
            </h2>
            <div data-uipath="website.contentblock.section.content">
            </div>
        </div>
    <div class="nhsd-m-expander nhsd-!t-margin-bottom-6" >
        <div class= "nhsd-a-box
                nhsd-a-box--bg-light-grey
"
        >
            <details>
                <summary class="nhsd-m-expander__heading-container" aria-label="TPP SystmOne: how to provide GP Online registration details">
                    <span class="nhsd-m-expander__icon nhsd-!t-margin-right-1">
                        <span class="nhsd-a-icon nhsd-a-icon--size-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" viewBox="0 0 16 16"  width="100%" height="100%">
                                <path d="M12,8l-6.5,7L4,13.5L9.2,8L4,2.5L5.5,1L12,8z"/>
                            </svg>
                        </span>
                    </span>
                    <span class="nhsd-m-expander__heading nhsd-t-body">
                            Handling account resets and restrictions
                    </span>
                </summary>
                <div class="nhsd-m-expander__content-container">
                    
<p class="nhsd-t-body">EMIS Web accounts can be reset, either by:</p> <ul class="nhsd-t-list nhsd-t-list--bullet">
 <li class="nhsd-t-body">the user</li>
 <li class="nhsd-t-body">the GP practice (for example, when suspicious activity is detected)</li></ul> 
 <h3 class="nhsd-t-heading-l">What do do in your application</h3> <p class="nhsd-t-body">If your POST /Session response includes:`ApplicationLinkLevel`: `Restricted`, redirect the user back to NHS login.</p>

<p class="nhsd-t-body">They will be prompted to re-authenticate, lifting the restriction on their account.</p>
</p>                </div>
            </details>
        </div>
    </div>
    <div class="nhsd-m-expander nhsd-!t-margin-bottom-6" >
        <div class= "nhsd-a-box
                nhsd-a-box--bg-light-grey
"
        >
            <details>
                <summary class="nhsd-m-expander__heading-container" aria-label="EMIS: how to provide GP Online registration details">
                    <span class="nhsd-m-expander__icon nhsd-!t-margin-right-1">
                        <span class="nhsd-a-icon nhsd-a-icon--size-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" viewBox="0 0 16 16"  width="100%" height="100%">
                                <path d="M12,8l-6.5,7L4,13.5L9.2,8L4,2.5L5.5,1L12,8z"/>
                            </svg>
                        </span>
                    </span>
                    <span class="nhsd-m-expander__heading nhsd-t-body">
                          Avoiding unnecessary calls to me/applications
                    </span>
                </summary>
                <div class="nhsd-m-expander__content-container">
<p class="nhsd-t-body">Some partners are triggering unecessary `me/applications` on every NHS login. This results in a confirmation email being sent to the user each time.</p>

<p class="nhsd-t-body">To avoid this, follow these steps:</p>

<h3 class="nhsd-t-heading-l">First login</h3>
<ol class="nhsd-t-list nhsd-t-list--number">
 <li>When a user logs in via NHS login for the first time, you'll receive a linkage key.</li>
 <li>Use this linkage key to call `me/applications` and obtain the Access Identity GUID.</li>
 <li>Store both the linkage key and the Access Identity GUID securely.</li></ol>
 <h3 class="nhsd-t-heading-l">Subsequent logins</h3>
<ol class="nhsd-t-list nhsd-t-list--number">
 <li>When a user logs in via NHS login for the first time, you'll receive a linkage key.</li>
 <li>Use this linkage key to call `me/applications` and obtain the Access Identity GUID.</li>
 <li>Store both the linkage key and the Access Identity GUID securely.</li>
</ol>

        </div>
    </div>


