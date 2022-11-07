---
layout: base.njk
title: NHS login user journeys
---

All of the NHS login user journeys start with the NHS login button on your website or app. These journeys cannot be changed or customised.

<div class="nhsuk-action-link">
  <a class="nhsuk-action-link__link" href="/nhslogin/user-journeys/#p0">
    <svg class="nhsuk-icon nhsuk-icon__arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="36" height="36">
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"></path>
    </svg>
    <span class="nhsuk-action-link__text">Low level verification (P0)</span>
  </a>
</div>


<div class="nhsuk-action-link">
  <a class="nhsuk-action-link__link" href="/nhslogin/user-journeys/#p5">
    <svg class="nhsuk-icon nhsuk-icon__arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="36" height="36">
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"></path>
    </svg>
    <span class="nhsuk-action-link__text">Medium level verification (P5)</span>
  </a>
</div>


<div class="nhsuk-action-link">
  <a class="nhsuk-action-link__link" href="/nhslogin/user-journeys/#p9">
    <svg class="nhsuk-icon nhsuk-icon__arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="36" height="36">
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"></path>
    </svg>
    <span class="nhsuk-action-link__text">High level verification (P9)</span>
  </a>
</div>

---

<h2 id="p0">Low level verification (P0)</h2>

Only the user’s email address and phone number are required to register for a service. Users can log in with an email address and password, with or without the need for an OTP.

<div class="design-example">
  <a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Journey_P0.svg" class="design-example__pop-out" target="_blank">Open the P0 user journey in new window</a>
    <div class="code-embed">
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Journey_P0.png" alt="Diagram showing the P0 user journey">
  </div>
<div class="code-snippet">
          <ul class="app-tabs" role="tablist">
              <li class="app-tabs__item app-tabs__item--current" role="presentation" data-index="ex-1">
                <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                Provided to Partner Service
                </a>
              </li>
              <li class="app-tabs__item" role="presentation" data-index="ex-2">
                <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  Not provided to Partner Service
                </a>
              </li>
          </ul>
        <div class="app-tabs__container js-tabs__container" id="default-example" role="tabpanel">
              <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-1">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  What the Partner Service gets
                </a>
              </div>
            <div class="code-snippet__preformatted" data-index="ex-1">
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
              <ul>
              <li>User verified email & phone number - one time passcode (OTP) sent to phone</li>
              </div>
            </div>
              <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-2">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  What is not provided
                </a>
              </div>
            <div class="code-snippet__preformatted js-hidden" data-index="ex-2">
                <div class="code-snippet__macro">
                </div>
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
              <ul>
              <li>User identity not fully verified</li>
                <li>No NHS number </li>
                <li>No checks with their NHS Personal Demographics Service (PDS) record, (held on Spine)</li>
                <li>No GP surgery code (ODS code)</li>
                <li>No GP surgery online registration information (linkage key) - which allows access to medical records</li>
                </ul>
              </div>
            </div>
        </div>
  </div>
</div>

<h3>What users can do at P0</h3>

<ul>
<li>Record non-medical data outside the patient record, e.g. book appointments (not able to view or manage appointments – which may give out information).</li>
<li>Be registered in an online setting, where treatment does not require high level identity assurance or access to / adding to existing medical record.</li>
<li>Enquire about non-medical data outside the patient record and access non-tailored online NHS services and content.</li>
<li>Add / Enquire about medical data which is to be held in a separate patient record, e.g. recording and enquiry of STI / sexual health information, treatment and prescribing outside the main NHS patient record.</li>
<li>Add / Enquire about non-prescription medication to be held in a separate patient record, e.g. recording of non-prescription drugs or advice / guidance.</li>
</ul>




---

<h2 id="p5">Medium level verification (P5)</h2>

Users can contact their GP or receive notifications via email or SMS. Users can’t access medical records or personal information, nor should the user transfer sensitive or personal information. The Partner Service can’t disclose sensitive info or medical record data.

This level of verification is just a claim identity. If a Partner Service wishes to use and rely on the user’s NHS number they need to request a high-level verification (P9).

<div class="design-example">
  <a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Journey_P5.png" class="design-example__pop-out" target="_blank">Open the P5 user journey in new window</a>
    <div class="code-embed">
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Journey_P5.png" alt="Diagram showing the P5 user journey">
  </div>
<div class="code-snippet">
          <ul class="app-tabs" role="tablist">
              <li class="app-tabs__item app-tabs__item--current" role="presentation" data-index="ex-1">
                <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                Provided to Partner Service
                </a>
              </li>
              <li class="app-tabs__item" role="presentation" data-index="ex-2">
                <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  Not provided to Partner Service
                </a>
              </li>
          </ul>
        <div class="app-tabs__container js-tabs__container" id="default-example" role="tabpanel">
              <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-1">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  What the Partner Service gets
                </a>
              </div>
            <div class="code-snippet__preformatted" data-index="ex-1">
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
              <ul>
              <li>User verified email and phone number</li>
                <li>User verified their; date of birth, NHS number, full name – this information has been checked with their NHS Personal Demographics Service (PDS) record (held on Spine)</li>
                <li>User verified the area code of their postcode – this information has been checked with and ‘fuzzy matched’ to their NHS Personal Demographics Service (PDS) record (held on Spine)</li>
                <li>GP surgery code (ODS code)</li>
                </ul>
              </div>
            </div>
              <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-2">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  What is not provided
                </a>
              </div>
            <div class="code-snippet__preformatted js-hidden" data-index="ex-2">
                <div class="code-snippet__macro">
                </div>
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
              <ul>
              <li>User identity not fully verified</li>
                <li>No GP surgery online registration information (linkage key) – which allows access to medical records</li>
                </ul>
              </div>
            </div>
        </div>
  </div>
</div>

<h3>What users can do at P5</h3>

In addition to what users can do with low level verification (P0), users can also:
<ul>
<li>Record (no read capability) non-medical data into record, e.g. record data-sharing opt-out preference or record preferred pharmacy (further controls will be needed around collection of controlled medications)</li>
</ul>

---

<h2 id="p9">High level verification (P9)</h2>

There are three ways in which a user can acquire high level verification (P9). The user cases and what the Partner Service gets are the same but the user journey is different.

High level verification is needed when personal, confidential or sensitive information is being communicated either to or from the user. It is also required when the user can access their medical records e.g. GP record via a 3rd party – such as Co-op Health app, NHS App or TPP Airmid.

IDVM is only available to P5 users who are registered for POL at their GP and their phone number matches the one against their GP record.

<div class="design-example">
    <a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Journey_P9_IDVM.png" class="design-example__pop-out" target="_blank">Open the P9 IDVM journey in new window</a>
    <div class="code-embed">
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Journey_P9_IDVM.png" alt="Diagram showing the P9 IDVM user journey">
  <a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Journey_P9_PYI.png" class="design-example__pop-out" target="_blank">Open the P9 PYI journey in new window</a>
    <div class="code-embed">
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Journey_P9_PYI.png" alt="Diagram showing the P9 PYI user journey">
  </div>
    <a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Journey_P9_POL.png" class="design-example__pop-out" target="_blank">Open the P9 POL journey in new window</a>
    <div class="code-embed">
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Journey_P9_POL.png" alt="Diagram showing the P9 POL user journey">
  </div>
  </div>
<div class="code-snippet">
          <ul class="app-tabs" role="tablist">
              <li class="app-tabs__item app-tabs__item--current" role="presentation" data-index="ex-1">
                <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                Provided to Partner Service
                </a>
              </li>
          </ul>
        <div class="app-tabs__container js-tabs__container" id="default-example" role="tabpanel">
              <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-1">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  What the Partner Service gets
                </a>
              </div>
            <div class="code-snippet__preformatted" data-index="ex-1">
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
              <ul>
                <li>User verified their email and phone number</li>
                <li>User ID fully authenticated</li>
                <li>User also verified their; date of birth, NHS number, full name and postcode – this information has been checked with their NHS Personal Demographics Service (PDS) record (held on Spine)</li>
                <li>GP surgery code (ODS code)</li>
                <li>GP surgery online information (linkage key) – which allows access to medical records</li>
                </ul>
              </div>
            </div>
        </div>
  </div>
</div>

<h3>What users can do at P9</h3>

In addition to what users can do with low level verification (P5), users can also:
<ul>
<li>Enquire against official record, e.g. read medical record, view NHS number, order repeat prescriptions, view SCR or detailed record, manage / view appointments, view tailored online NHS services and online content.</li>
<li>Record medical data into private healthcare consultation record.</li>
<li>Enable delegated access for another validated individual.</li>
<li>Register for online account where treatment requires high level identity assurance or access to / adding to existing medical record.</li>
<li>Record new phone number or new address online.</li>
<li>Register patient to a new GP through a purely online mechanism.</li>
</ul> 

---

Download the <a href="https://digital.nhs.uk/services/nhs-login/nhs-login-for-partners-and-developers/nhs-login-integration-toolkit/discovery#nhs-login-user-journey-visuals-presentation" target="_blank">NHS login User Journey Visuals presentation</a>.

