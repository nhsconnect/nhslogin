---
layout: base.njk
title: Compare NHS login environments
---

Compare and understand the differences and transitions between our 4 different environments.

---



<div id="mock" class="design-example">

<h2>Mock environment</h2>
<p>We have developed a lightweight <a href="https://oidc.mock.signin.nhs.uk/client" target="_blank">mock environment</a> that is a representation of our OIDC endpoints. The mock is entirely self-service and requires no registration.</p>

<div class="code-snippet">
          <ul class="app-tabs" role="tablist">
              <li class="app-tabs__item app-tabs__item--current" role="presentation" data-index="ex-1">
                <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                Purpose
                </a>
              </li>
              <li class="app-tabs__item" role="presentation" data-index="ex-2">
                <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                Requirements
                </a>
              </li>
            <li class="app-tabs__item" role="presentation" data-index="ex-3">
                <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                Restrictions
                </a>
              </li>
          </ul>
        <div class="app-tabs__container js-tabs__container" id="default-example" role="tabpanel">
              <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-1">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  Purpose
                </a>
              </div>
            <div class="code-snippet__preformatted" data-index="ex-1">
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
              <ul>
              <li>Explore the NHS login service and complete a proof of concept</li>
              </div>
            </div>
              <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-2">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                Requirements
                </a>
              </div>
            <div class="code-snippet__preformatted js-hidden" data-index="ex-2">
                <div class="code-snippet__macro">
                </div>
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
              <ul>
              <li>ClientID and registered public key</li>
                </ul>
              </div>
            </div>
            <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-3">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  Restrictions
                </a>
              </div>
            <div class="code-snippet__preformatted js-hidden" data-index="ex-3">
                <div class="code-snippet__macro">
                </div>
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
              <ul>
              <li>Only a simple mock environment</li>
                </ul>
              </div>
            </div>
        </div>
  </div>
</div>

---

<div id="sandpit" class="design-example">

<h2>Sandpit environment</h2>
<p>Before you apply, you should build a proof of concept and explore the end-to-end journey in our sandpit environment. This will help you learn how to integrate with NHS login, and understand where it will fit within your service.</p>
<p>You should not be performing non-functional testing (NFT) or penetration testing in the sandpit environment.</p>

<div class="code-snippet">
          <ul class="app-tabs" role="tablist">
              <li class="app-tabs__item app-tabs__item--current" role="presentation" data-index="ex-1">
                <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                Purpose
                </a>
              </li>
              <li class="app-tabs__item" role="presentation" data-index="ex-2">
                <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                Requirements
                </a>
              </li>
            <li class="app-tabs__item" role="presentation" data-index="ex-3">
                <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                Restrictions
                </a>
              </li>
          </ul>
        <div class="app-tabs__container js-tabs__container" id="default-example" role="tabpanel">
              <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-1">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  Purpose
                </a>
              </div>
            <div class="code-snippet__preformatted" data-index="ex-1">
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
              <ul>
              <li>Designed to reflect the NHS login External Interface Specification (EIS)</li>
              <li>Get to grips with the technology you will use when integrating with NHS login</li>
              </div>
            </div>
              <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-2">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  Requirements
                </a>
              </div>
            <div class="code-snippet__preformatted js-hidden" data-index="ex-2">
                <div class="code-snippet__macro">
                </div>
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
              <ul>
              <li>None</li>
                </ul>
              </div>
            </div>
            <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-3">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  Restrictions
                </a>
              </div>
            <div class="code-snippet__preformatted js-hidden" data-index="ex-3">
                <div class="code-snippet__macro">
                </div>
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
              <ul>
              <li>No integration to other NHS digital APIs (once deployed). For example, spine, GP middleware or automated ID verification service.You can explore manual ID verification but cannot complete a full journey.</li>
              <li>You can complete a login using the prepared NHS login email and password, and redirect back to your service.</li>
              <li>No load testing</li> 
              <li>Do not use real ID</li>
                </ul>
              </div>
            </div>
        </div>
  </div>
</div>

---


<div id="test" class="design-example">

<h2>Test integration environment</h2>
<p>When you are ready to test, you will move from the sandpit environment to the integration environment, where you will complete some end-to-end testing. You should not be performing non-functional testing (NFT) or penetration testing in the integration environment.</p>

<div class="code-snippet">
          <ul class="app-tabs" role="tablist">
              <li class="app-tabs__item app-tabs__item--current" role="presentation" data-index="ex-1">
                <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                Purpose
                </a>
              </li>
              <li class="app-tabs__item" role="presentation" data-index="ex-2">
                <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                Requirements
                </a>
              </li>
            <li class="app-tabs__item" role="presentation" data-index="ex-3">
                <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                Restrictions
                </a>
              </li>
          </ul>
        <div class="app-tabs__container js-tabs__container" id="default-example" role="tabpanel">
              <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-1">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  Purpose
                </a>
              </div>
            <div class="code-snippet__preformatted" data-index="ex-1">
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
              <ul>
              <li>Complete technical conformance testing to go live and support regression testing against NHS login releases</li>
              <li>Get your conformance report needed for the Supplier Conformance Assessment List (SCAL)</li>
              </div>
            </div>
              <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-2">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  Requirements
                </a>
              </div>
            <div class="code-snippet__preformatted js-hidden" data-index="ex-2">
                <div class="code-snippet__macro">
                </div>
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
              <ul>
              <li>Integration in the sandpit complete</li>
              <li>ODS Code and Data Security and Protection Toolkit (DSPT) covering scope of service</li>
                </ul>
              </div>
            </div>
            <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-3">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  Restrictions
                </a>
              </div>
            <div class="code-snippet__preformatted js-hidden" data-index="ex-3">
                <div class="code-snippet__macro">
                </div>
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
              <ul>
              <li>Integration available to third party services including Spine (connected to INT), GP middleware with the manual ID verification and Patient Online verification</li>
              <li>Manual ID verification can be completed in full.</li>
              <li>Test pack of pre-configured NHS numbers and custom test data available.</li>
              <li>No load testing</li> 
              <li>Do not use real ID</li>
                </ul>
              </div>
            </div>
        </div>
  </div>
</div>

---


<div id="live" class="design-example">

<h2>Live production environment</h2>
<p>Once approved by the Partner Integration Board (PIB) to go live, you will then transition from the integration environment to the live production environment.</p>

<div class="code-snippet">
          <ul class="app-tabs" role="tablist">
              <li class="app-tabs__item app-tabs__item--current" role="presentation" data-index="ex-1">
                <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                Purpose
                </a>
              </li>
              <li class="app-tabs__item" role="presentation" data-index="ex-2">
                <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                Requirements
                </a>
              </li>
            <li class="app-tabs__item" role="presentation" data-index="ex-3">
                <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                Restrictions
                </a>
              </li>
          </ul>
        <div class="app-tabs__container js-tabs__container" id="default-example" role="tabpanel">
              <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-1">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  Purpose
                </a>
              </div>
            <div class="code-snippet__preformatted" data-index="ex-1">
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
              <ul>
              <li>Live environment</li>
              </div>
            </div>
              <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-2">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  Requirements
                </a>
              </div>
            <div class="code-snippet__preformatted js-hidden" data-index="ex-2">
                <div class="code-snippet__macro">
                </div>
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
              <ul>
              <li>You have completed your readiness activity and signed an agreement</li>
                </ul>
              </div>
            </div>
            <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-3">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  Restrictions
                </a>
              </div>
            <div class="code-snippet__preformatted js-hidden" data-index="ex-3">
                <div class="code-snippet__macro">
                </div>
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
              <ul>
              <li>A test user can be provided to complete smoke testing</li>
              <li>No load testing</li> 
                </ul>
              </div>
            </div>
        </div>
  </div>
</div>




