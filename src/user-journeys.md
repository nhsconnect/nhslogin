---
layout: base.njk
title: NHS login user journeys
---

All of the NHS login user journeys start with the NHS login button on your website or app. These journeys cannot be changed or customised.

<nav class="nhsuk-contents-list" role="navigation" aria-label="Pages in this guide">
  <h2 class="nhsuk-u-visually-hidden">Contents</h2>
  <ol class="nhsuk-contents-list__list">
    <li class="nhsuk-contents-list__item">
      <a class="nhsuk-contents-list__link" href="/nhslogin/user-journeys/#p0">Low level verification (P0)</a>
    </li>
    <li class="nhsuk-contents-list__item">
      <a class="nhsuk-contents-list__link" href="/nhslogin/user-journeys/#p5">Medium level verification (P5)</a>
    </li>
    <li class="nhsuk-contents-list__item">
      <a class="nhsuk-contents-list__link" href="/nhslogin/user-journeys/#p9">High level verification (P9)</a>
    </li>
  </ol>
</nav>

---

<h2 id="p0">Low level verification (P0)</h2>

Only the user’s email address and phone number are required to register for a service. Users can log in with an email address and password, with or without the need for an OTP (one time password).

<div class="design-example">
  <a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Journey_P0.png" class="design-example__pop-out" target="_blank">Open the P0 user journey in a new window</a>
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
                  Provided to Partner Service
                </a>
              </div>
            <div class="code-snippet__preformatted" data-index="ex-1">
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
              <ul>
              <li>User verified email & phone number</li>
              </ul>
              Claims are not automatically provided to the partner service. Some claims will need to be requested and then approved by NHS login. <a href="/nhslogin/scopes-and-claims/">View scopes and claims for more information</a>.
              </div>
            </div>
              <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-2">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  Not provided to Partner Service
                </a>
              </div>
            <div class="code-snippet__preformatted js-hidden" data-index="ex-2">
                <div class="code-snippet__macro">
                </div>
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
              <ul>
              <li>User identity not verified</li>
                <li>No NHS number</li>
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

To gain a medium level verification, the user must first complete a low level verification (P0) journey. 

Users can’t access medical records or personal information, nor should the user transfer sensitive or personal information. The Partner Service can’t disclose sensitive information or medical record data.

This level of verification is just a claimed identity. If a Partner Service wishes to use and rely on the user’s NHS number they need to request a high-level verification (P9).


<div class="design-example">
  <a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Journey_P5.png" class="design-example__pop-out" target="_blank">Open the P5 user journey in a new window</a>
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
                  Provided to Partner Service
                </a>
              </div>
            <div class="code-snippet__preformatted" data-index="ex-1">
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
              <ul>
              <li>User verified email and phone number</li>
              <li>User verified date of birth, NHS number, first name and last name – this information has been checked with their NHS Personal Demographics Service (PDS) record (held on Spine)</li>
              <li>User verified the area code of their postcode – this information has been checked with and ‘fuzzy matched’ to their NHS Personal Demographics Service (PDS) record (held on Spine)</li>
              <li>GP surgery code (ODS code)</li>
                </ul>
                              Claims are not automatically provided to the partner service. Some claims will need to be requested and then approved by NHS login. <a href="/nhslogin/scopes-and-claims/">View scopes and claims for more information</a>.
              </div>
            </div>
              <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-2">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  Not provided to Partner Service
                </a>
              </div>
            <div class="code-snippet__preformatted js-hidden" data-index="ex-2">
                <div class="code-snippet__macro">
                </div>
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
              <ul>
              <li>User identity based only on claimed credentials</li>
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
<li>Submit an online consultation to their GP</li>
<li>Record medical data to submit to their GP or consultant - such as blood pressure readings</li>
<li>Contact their GP or receive notifications via email or SMS</li>

</ul>

---

<h2 id="p9">High level verification (P9)</h2>

To gain a high level verification, the user must first complete a low and medium level verification (P0 & P5) journey. 

There are three ways in which a user can acquire high level verification (P9). The use cases and what the Partner Service gets are the same but the user journey is different.

High level verification (P9) is needed when personal, confidential or sensitive information is being communicated either to or from the user. It is also required when the user can access their medical records e.g. GP record via a 3rd party – such as Co-op Health app, NHS App or TPP Airmid.

Identity verification via mobile (IDVM) is only available to medium level verified (P5) users who are registered for Patient Online (POL) at their GP and their phone number matches the one against their GP record.


<div class="design-example">
    <a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Journey_P9_IDVM.png" class="design-example__pop-out" target="_blank">Open the P9 IDVM journey in a new window</a>
    <div class="code-embed">
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Journey_P9_IDVM.png" alt="Diagram showing the P9 IDVM user journey">
  <a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Journey_P9_PYI.png" class="design-example__pop-out" target="_blank">Open the P9 PYI journey in a new window</a>
    <div class="code-embed">
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Journey_P9_PYI.png" alt="Diagram showing the P9 PYI user journey">
  </div>
    <a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Journey_P9_POL.png" class="design-example__pop-out" target="_blank">Open the P9 POL journey in a new window</a>
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
                  Provided to Partner Service
                </a>
              </div>
            <div class="code-snippet__preformatted" data-index="ex-1">
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
              <ul>
                <li>User ID fully authenticated</li>
                <li>User verified email and phone number</li>
                <li>User verified date of birth, NHS number, first name, last name and postcode – this information has been checked with their NHS Personal Demographics Service (PDS) record (held on Spine)</li>
                <li>GP surgery code (ODS code)</li>
                <li>GP surgery online information (linkage key) – which allows access to medical records</li>
                </ul>
                              Claims are not automatically provided to the partner service. Some claims will need to be requested and then approved by NHS login. <a href="/nhslogin/scopes-and-claims/">View scopes and claims for more information</a>.
              </div>
            </div>
        </div>
  </div>
</div>

<h3>What users can do at P9</h3>

In addition to what users can do with medium level verification (P5), users can also:
<ul>
<li>Enquire against official record, e.g. read medical record, view NHS number, order repeat prescriptions, view SCR or detailed record, manage / view appointments, view tailored online NHS services and online content</li>
<li>Record medical data into private healthcare consultation record</li>
<li>Enable delegated access for another validated individual</li>
<li>Register for online account where treatment requires high level identity assurance or access to / adding to existing medical record</li>
<li>Record new phone number or new email address online</li>
<li>Submit a request to register at a new GP surgery</li>

</ul> 

---

Download the <a href="https://digital.nhs.uk/services/nhs-login/nhs-login-for-partners-and-developers/nhs-login-integration-toolkit/discovery#nhs-login-user-journey-visuals-presentation" target="_blank">NHS login User Journey Visuals presentation</a>.

