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

- EMIS Web: 100%
- TPP: 100%

**Note:** NHS login is working with Medicus to enable a way Medicus practices can provision an account. We expect this to be live in late 2025.

<hr>
        <div class="nhsuk-grid-row">
            <div class="nhsuk-grid-column-full width">
               <div class="nhsuk-card">
                    <div class="nhsuk-card__content">
                        <div class="nhsuk-grid-row">
                            <div class="nhsuk-grid-column-full width">
                                <h2>Additional guidance from EMIS Web</h2>
                                <hr>
                            </div>
                        </div>
                       <details class="nhsuk-details nhsuk-expander--no-outline">
                            <summary class="nhsuk-details__summary">
                                <span class="nhsuk-details__summary-text">
                                    Handling account resets and restrictions
                                </span>
                            </summary>
                            <div class="nhsuk-details__text">
                                <div class="nhsuk-grid-row">
                                    <div class="nhsuk-grid-column-full width">
                                        <p>EMIS Web accounts can be reset, either by:</p>
                                        <ul>
                                          <li>the user</li>
                                          <li>the GP practice (for example, when suspicious activity is detected)</li>
                                        </ul>
                                        <p>After a reset, the account enters a “Restricted” state until the user re-authenticates via NHS login.</p>  
                                        <h3>What to do in your application</h3>
                                        If your <code style="background-color: #f8f8f8; color: #d14; padding: 2px 4px; border-radius: 3px; font-family: 'frutiger', monospace'; font-size: 1em;"> POST /Session</code> response includes: <code style="background-color: #f8f8f8; color: #d14; padding: 2px 4px; border-radius: 3px; font-family: 'frutiger', monospace'; font-size: 1em;">"ApplicationLinkLevel": "Restricted"</code>, redirect the user back to NHS login.<br><br>
                                        They will be prompted to re-authenticate, lifting the restriction on their account.
                                        <hr>
                                    </div>
                                </div>
                            </div>
                        </details>
                        <details class="nhsuk-details nhsuk-expander--no-outline">
                            <summary class="nhsuk-details__summary">
                                <span class="nhsuk-details__summary-text">
                                    Avoiding unnecessary calls to me/applications
                                </span>
                            </summary>
                            <div class="nhsuk-details__text">
                                <div class="nhsuk-grid-row">
                                    <div class="nhsuk-grid-column-full width">
                                        <p>Some partners are triggering unnecessary <code style="background-color: #f8f8f8; color: #d14; padding: 2px 4px; border-radius: 3px; font-family: 'frutiger', monospace'; font-size: 1em;"> me/applications</code> on every NHS login. This results in a confirmation email being sent to the user each time.<br><br>To avoid this, follow these steps:</p>
                                        <h3>Initial login</h3>
                                        <ol>
                                            <li>When a user logs in via NHS login for the first time, you'll receive a linkage key.</li>
                                            <li>Use this linkage key to call <code style="background-color: #f8f8f8; color: #d14; padding: 2px 4px; border-radius: 3px; font-family: 'frutiger', monospace'; font-size: 1em;"> me/applications</code> and obtain the Access Identity GUID.</li>
                                            <li>Store both the linkage key and the Access Identity GUID securely.</li>
                                        </ol>
                                        <h3>Subsequent logins</h3>
                                        <ol>
                                            <li>Compare the returned linkage key with the one you've stored.</li>
                                            <li>If it's the same: use the stored GUID to establish the user session.</li>
                                            <li>If it's different: use the new linkage key to retrieve a fresh GUID via <code style="background-color: #f8f8f8; color: #d14; padding: 2px 4px; border-radius: 3px; font-family: 'frutiger', monospace'; font-size: 1em;"> me/applications</code>, then update your stored values.</li>
                                        </ol>
                                    </div>
                                </div>  
                            </div>
                            </details>
                            <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-full">
              <a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/EMIS-error-handling-IM1-token-flow.png" class="design-example__pop-out" target="_blank">Open this example in new window</a>
              <div class="code-embed">
              <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/EMIS-error-handling-IM1-token-flow.png" alt="Flow diagram of error handling within EMIS Web">
        </div>
      </div>
    </div>
    </div>
    </div>



      

      




































