---
layout: base.njk
title: Adding the NHS login button to your website or app
---

<p>With many partners using NHS login, we need to make sure the NHS login button is consistent and recognisable.</p>

<p>We will have regular checks with you to make sure you are aligning to these guidelines. We will also review the placement and visibility of the NHS login button on your website or app.</p>

<div class="nhsuk-inset-text">
  <span class="nhsuk-u-visually-hidden">Information: </span>
  <p>To integrate with, or continue using NHS login on your website or app, you will need to provide evidence that you align to these guidelines.</p>
  <p>If you fail to comply and we cannot agree a solution, we may ask you to remove NHS login from your website or app.</p>
</div>

---

<h2 id="journey">User journey behind the button</h2>
<a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Guidance-userjourney.png" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">
    Open this user journey flow in new window
  </a>
  <div class="code-embed">
  <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Guidance-userjourney.png" alt="Diagram showing the flow that a user goes down from selecting the NHS button to being authorised by NHS login and back to the partner service.">
  </div>
<br>
<p>After a user enters their email, NHS login will check if they are already registered. If they are not, they will need to register.</p>

<p>If they are registered, they can enter their password. NHS login then checks which level of verification they have and matches that against the level your website or app is requesting.</p>

<p>If the user does not have the same or a higher level of verification, NHS login will help the user gain that level of verification in the same journey.</p>

<p>View <a href="/nhslogin/user-journeys">NHS login user journeys</a> for more detail.</p>

<div class="nhsuk-warning-callout">
  <h3 class="nhsuk-warning-callout__label">
    Important<span class="nhsuk-u-visually-hidden">:</span>
  </h3>
  <p>Do not tell your users what will happen after they select the NHS login button. You cannot guarantee what level of verification they may already have.</p>
  <p>NHS login may also introduce new features or change current functionality. For example, not all users will need photo ID to prove their identity to a high level.</p>
</div>

---

<h1 id="NHS-login-buttons">The NHS login button</h1>

<p>There are three different types of NHS login button. The button you use depends on the type of website or app you have.</p>

<!--
//.....................................................
//..NN......N....HH......H.....SSSSSS.....DDDDD........
//.NNNN....NNN..HHHH...HHHH...SSSSSSSS...SDDDDDDDD.....
//.NNNNN...NNN..HHHH...HHHH..SSSSSSSSSS..SDDDDDDDDDD...
//.NNNNN...NNN..HHHH...HHHH..SSSSSSSSSS..SDDDDDDDDDD...
//.NNNNNN..NNN..HHHH...HHHH.HSSS...SSSSS.SDDD...DDDDD..
//.NNNNNNN.NNN..HHHHHHHHHHH.HSSSSS.......SDDD....DDDD..
//.NNNNNNN.NNN..HHHHHHHHHHH..SSSSSSSSS...SDDD....DDDD..
//.NNN.NNNNNNN..HHHHHHHHHHH..SSSSSSSSSS..SDDD....DDDD..
//.NNN.NNNNNNN..HHHHHHHHHHH....SSSSSSSSS.SDDD....DDDD..
//.NNN..NNNNNN..HHHH...HHHH.HSSS..SSSSSS.SDDD...DDDDD..
//.NNN..NNNNNN..HHHH...HHHH.HSSS....SSSS.SDDD...DDDD...
//.NNN...NNNNN..HHHH...HHHH.HSSSSSSSSSSS.SDDDDDDDDDD...
//.NNN...NNNNN..HHHH...HHHH..SSSSSSSSSS..SDDDDDDDDD....
//.NNN....NNNN..HHHH...HHHH...SSSSSSSSS..SDDDDDDDD.....
//.............................SSSSSS..................
-->

<div class="nhsuk-card nhsuk-card" id="NHSDS">
  <div class="nhsuk-card__content">
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-two-thirds">
              <h2>
                NHS services that use the NHS Design System
              </h2>
              <p class="nhsuk-card__description">The NHS Design System uses styles, components and patterns that help to build consistent, accessible user interfaces.</p>
              <p class="nhsuk-card__description">Only NHS services that use the <a href="https://service-manual.nhs.uk/design-system" target="_blank">NHS Design System</a> can use this version of the NHS login button, such as <a href="https://www.nhs.uk/nhs-app/" target="_blank">NHS App</a>.</p>
              <hr>
              <!-- 
              <div class="nhsuk-action-link">
                <a class="nhsuk-action-link__link" href="/nhslogin/button-guidance#NHS-DS">
                  <svg class="nhsuk-icon nhsuk-icon__arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="36" height="36">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"></path>
                  </svg>
                  <span class="nhsuk-action-link__text">View NHS login button guidance for NHS services that use the NHS Design System</span>
                </a>
              </div>
              -->
      </div>
      <div class="nhsuk-grid-column-one-third">
          <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Guidance-example-button-NHSDS.png" alt="NHS login button for services that use the NHS Design System">
      </div>
      </div>
      <details class="nhsuk-details nhsuk-expander--no-outline">
        <summary class="nhsuk-details__summary">
          <span class="nhsuk-details__summary-text">
            View the guidance for NHS services that use the NHS Design System
          </span>
        </summary>
      <div class="nhsuk-details__text nhsuk-grid-row">
      <div class="nhsuk-grid-column-full width">
      <ul class="nhsuk-inside-box-text" style="max-width:none;">
        <li>This version of the NHS login button has minimal use of the term "NHS login". Instead, we would suggest using 'Continue' as the call to action.</li>
        <li>To align with the <a href="https://www.england.nhs.uk/nhsidentity/identity-guidelines/" target="_blank">NHS Identity Guidelines</a>, there should only be one NHS logo on a screen at once. Do not repeat the NHS logo on the NHS login button.</li>
        <li>To keep the NHS login brand clear, the button should be <a href="https://www.england.nhs.uk/nhsidentity/identity-guidelines/colours/" target="_blank">NHS blue</a>.</li>
        <li>When the NHS login button is on a background that is darker than 50% grey, you should use the light version of the button for legibility. Do not change the colour of the button to anything other than the original and light version.</li>
        <li>We are working with the NHS Design System to create a button that can be a reusable component within the Design System.</li>
      </ul>
      <hr>
      <h3>How to place this button on your service</h3>
 <p>The NHS login button must always be visible and up front on your service. When placing the button on your service, it can go anywhere on the screen, but you must follow these rules:</p>

 <strong>Align to the user's mental model</strong>
      <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-two-thirds">
              <a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Guidance-example-options-NHSDS.png" class="design-example__pop-out" target="_blank">Open this example in new window</a>
              <div class="code-embed">
              <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Guidance-example-options-NHSDS.png" alt="Example of NHS login button alongside other log in or register options">
        </div>
      </div>
      <div class="nhsuk-grid-column-full">
      <br>
        <p class="nhsuk-inside-box-text" style="max-width:none;">NHS login has over 40million users and so it is very likely that your users will already have an NHS login account. The easiest route for the user to sign up or log in to your service would be to use their NHS login details.</p>
        <p class="nhsuk-inside-box-text" style="max-width:none;">If you have any other native or third-party log in or register options, the NHS login button must appear as the first option, and always be as clear and visible as other options.</p>
        <p class="nhsuk-inside-box-text" style="max-width:none;">Ideally you should use linked text but if a button is necessary, the secondary button must be used.</p>
        <p class="nhsuk-inside-box-text" style="max-width:none;">If you have a <b>clear user need</b> why this isn't possible, you will need to provide proof of this. We will then review and decide if we can support this.</p>
      </div>
      </div>

 <strong>Add content around the button if needed</strong>
      <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-two-thirds">
            <a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Guidance-example-content-NHSDS.png" class="design-example__pop-out" target="_blank">Open this example in new window</a>
            <div class="code-embed">
            <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Guidance-example-content-NHSDS.png" alt="Example of content around the NHS login button">
        </div>
      </div>
      <div class="nhsuk-grid-column-full">
      <br>
        <p class="nhsuk-inside-box-text" style="max-width:none;">Sometimes it may be necessary to add content around the NHS login button to reassure a user what happens when they select it.</p>
        <p class="nhsuk-inside-box-text" style="max-width:none;">Suggested content:</p>
        <p class="nhsuk-inside-box-text" style="max-width:none;"><em>NHS login allows you to access your health and care websites and apps with one set of login details.</em></p>
        <p class="nhsuk-inside-box-text" style="max-width:none;"><em>We will check if you have an NHS login. If not, you can set one up.</em></p>
      </div>
      </div>

<hr>

<h3>The NHS login button</h3>
<div class="design-example">
  <a href="/nhslogin/example-NHSDS" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">
    Open this example in new window
  </a>
  <div class="code-embed">
  <iframe title="default" src="/nhslogin/example-NHSDS?fullpage=undefined&amp;blankpage=undefined" class="design-example-frame" id="iFrameResizer0" scrolling="no" style="overflow: hidden; height: 156px;"></iframe>
  </div>
<div class="code-snippet">
          <ul class="app-tabs" role="tablist">
              <li class="app-tabs__item app-tabs__item--current" role="presentation" data-index="ex-1">
                <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  HTML
                </a>
              </li>
              <li class="app-tabs__item" role="presentation" data-index="ex-2">
                <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  CSS
                </a>
              </li>
          </ul>
        <div class="app-tabs__container js-tabs__container" id="default-example" role="tabpanel">
              <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-1">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  HTML
                </a>
              </div>
            <div class="code-snippet__preformatted" data-index="ex-1">
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
                <a class="app-link--copy" href="javascript:void(0);" aria-live="assertive">Copy code</a>
                <pre><code class=""><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nhslogin-button"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span>&gt;</span>
  Continue
<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
              </div>
              <a class="app-link--close" href="javascript:void(0);" aria-live="assertive">
                Close
              </a>
            </div>
              <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-2">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  CSS
                </a>
              </div>
            <div class="code-snippet__preformatted js-hidden" data-index="ex-2">
                <div class="code-snippet__macro">
                </div>
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
                              <a class="app-link--copy" href="javascript:void(0);" aria-live="assertive">Copy code</a>
              <pre><code class=""><span class="hljs-tag">.</span><span class="hljs-tag">nhslogin-button </span><span class="hljs-tag">{</span>
      font-weight: <span class="hljs-string">400</span>;
      font-size: <span class="hljs-string">16px</span>;
      font-size: <span class="hljs-string">1rem</span>;
      line-height:<span class="hljs-string"> 1.5</span>;
      margin-bottom: <span class="hljs-string">28px</span>;
      -webkit-appearance: <span class="hljs-string">none</span>;
      appearance: <span class="hljs-string">none</span>;
      background-color: <span class="hljs-string">#005eb8</span>;
      border: <span class="hljs-string">2px solid transparent</span>;
      border-radius: <span class="hljs-string">4px</span>;
      box-shadow: <span class="hljs-string">0 4px 0 #003087</span>;
      box-sizing: <span class="hljs-string">border-box</span>;
      color: <span class="hljs-string">#fff</span>;
      cursor: <span class="hljs-string">pointer</span>;
      display: <span class="hljs-string">inline-block</span>;
      font-weight: <span class="hljs-string">600</span>;
      margin-top: <span class="hljs-string">0</span>;
      padding: <span class="hljs-string">12px 16px</span>;
      position: <span class="hljs-string">relative</span>;
      text-align: <span class="hljs-string">center</span>;
      vertical-align: <span class="hljs-string">top</span>;
      width: <span class="hljs-string">auto</span>;
    <span class="hljs-tag">}
    @media </span><span class="hljs-attr">(min-width:</span> <span class="hljs-string">40.0625em</span>) <span class="hljs-tag">{
        .nhslogin-button {</span>
        font-size: <span class="hljs-string">19px</span>;
        font-size: <span class="hljs-string">1.1875rem</span>;
        line-height: <span class="hljs-string">1.47368</span>;
      <span class="hljs-tag">}
    }
    @media</span> print <span class="hljs-tag">{
      .nhslogin-button {</span>
        font-size: <span class="hljs-string">14pt</span>;
        line-height: <span class="hljs-string">1.15</span>;
      <span class="hljs-tag">}
    }
    @media </span>(min-width: <span class="hljs-string">40.0625em</span>) <span class="hljs-tag">{
      .nhslogin-button {</span>
        margin-bottom: <span class="hljs-string">36px</span>;
      <span class="hljs-tag">}
    }
    @media </span>(max-width: <span class="hljs-string">40.0525em</span>) <span class="hljs-tag">{
      .nhslogin-button {</span>
        padding: <span class="hljs-string">8px 16px</span>;
      <span class="hljs-tag">}
    }
    .nhslogin-button</span>:link,
    <span class="hljs-tag">.nhslogin-button</span>:visited,
    <span class="hljs-tag">.nhslogin-button</span>:active,
    <span class="hljs-tag">.nhslogin-button</span>:hover <span class="hljs-tag">{</span>
      color: <span class="hljs-string">#fff</span>;
      text-decoration: <span class="hljs-string">none</span>;
    <span class="hljs-tag">}
    .nhslogin-button</span>::-moz-focus-inner <span class="hljs-tag">{</span>
      border: <span class="hljs-string">0</span>;
      padding: <span class="hljs-string">0</span>;
    <span class="hljs-tag">}
    .nhslogin-button</span>:hover {
      background-color: <span class="hljs-string">#1e569b</span>;
    <span class="hljs-tag">}
    .nhslogin-button</span>:focus <span class="hljs-tag">{</span>
      background: <span class="hljs-string">#ffeb3b</span>;
      box-shadow: <span class="hljs-string">0 4px 0 #003087</span>;
      color: <span class="hljs-string">#003087</span>;
      outline: <span class="hljs-string">none</span>;
    <span class="hljs-tag">}
    .nhslogin-button</span>:active <span class="hljs-tag">{</span>
      background: <span class="hljs-string">#1e569b</span>;
      box-shadow: <span class="hljs-string">none</span>;
      color: <span class="hljs-string">#fff</span>;
      top: <span class="hljs-string">4px</span>;
    <span class="hljs-tag">}
    .nhslogin-button</span>::before <span class="hljs-tag">{</span>
      background: <span class="hljs-string">transparent</span>;
      bottom: <span class="hljs-string">-6px</span>;
      content: <span class="hljs-string">""</span>;
      display: <span class="hljs-string">block</span>;
      left: <span class="hljs-string">-2px</span>;
      position: <span class="hljs-string">absolute</span>;
      right: <span class="hljs-string">-2px</span>;
      top: <span class="hljs-string">-2px</span>;
    <span class="hljs-tag">}
    .nhslogin-button</span>:active::before <span class="hljs-tag">{</span>
      top: <span class="hljs-string">-6px</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse {</span>
      background-color: <span class="hljs-string">#fff</span>;
      box-shadow: <span class="hljs-string">0 4px 0 #003087</span>;
      color: <span class="hljs-string">#005eb8</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse</span>:hover <span class="hljs-tag">{</span>
      background-color: <span class="hljs-string">#f2f2f2</span>;
      color: <span class="hljs-string">#005eb8</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse</span>:focus <span class="hljs-tag">{</span>
      background: <span class="hljs-string">#ffeb3b</span>;
      box-shadow: <span class="hljs-string">0 4px 0 #003087</span>;
      color: <span class="hljs-string">#003087</span>;
      outline: <span class="hljs-string">4px solid transparent</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse</span>:active <span class="hljs-tag">{</span>
      background: <span class="hljs-string">#f2f2f2</span>;
      box-shadow: <span class="hljs-string">none</span>;
      color: <span class="hljs-string">#005eb8</span>;
      top: <span class="hljs-string">4px</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse</span>:link <span class="hljs-tag">{</span>
      color: <span class="hljs-string">#005eb8</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse.nhsuk-button--disabled {</span>
      background-color: <span class="hljs-string">#fff</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse.nhsuk-button--disabled</span>:focus <span class="hljs-tag">{</span>
      background-color: <span class="hljs-string">#fff</span>;
    <span class="hljs-tag">}
    .nhslogin-button--disabled,
    .nhslogin-button[disabled="disabled"],
    .nhslogin-button[disabled] {</span>
      background-color: <span class="hljs-string">#005eb8</span>;
      opacity: <span class="hljs-string">0.5</span>;
      pointer-events: <span class="hljs-string">none</span>;
    <span class="hljs-tag">}
    .nhslogin-button--disabled</span>:hover,
    <span class="hljs-tag">.nhslogin-button[disabled="disabled"]</span>:hover,
    <span class="hljs-tag">.nhslogin-button[disabled]</span>:hover <span class="hljs-tag">{</span>
      background-color: <span class="hljs-string">#005eb8</span>;
      cursor: <span class="hljs-string">default</span>;
    <span class="hljs-tag">}
    .nhslogin-button--disabled</span>:focus,
    <span class="hljs-tag">.nhslogin-button[disabled="disabled"]</span>:focus,
    <span class="hljs-tag">.nhslogin-button[disabled]</span>:focus <span class="hljs-tag">{</span>
      background-color: <span class="hljs-string">#005eb8</span>;
      outline: <span class="hljs-string">none</span>;
    <span class="hljs-tag">}
    .nhslogin-button--disabled</span>:active,
    <span class="hljs-tag">.nhslogin-button[disabled="disabled"]</span>:active,
    <span class="hljs-tag">.nhslogin-button[disabled]</span>:active <span class="hljs-tag">{</span>
      box-shadow: <span class="hljs-string">0 4px 0 #003087</span>;
      top: <span class="hljs-string">0</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse[disabled="disabled"],
    .nhslogin-button--reverse[disabled] {</span>
      background-color: <span class="hljs-string">#fff</span>;
      opacity: <span class="hljs-string">0.5</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse[disabled="disabled"]</span>:hover,
    <span class="hljs-tag">.nhslogin-button--reverse[disabled]</span>:hover <span class="hljs-tag">{</span>
      background-color: <span class="hljs-string">#fff</span>;
      cursor: <span class="hljs-string">default</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse[disabled="disabled"]</span>:focus,
    <span class="hljs-tag">.nhslogin-button--reverse[disabled]</span>:focus <span class="hljs-tag">{</span>
      outline: <span class="hljs-string">none</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse[disabled="disabled"]</span>:active,
    <span class="hljs-tag">.nhslogin-button--reverse[disabled]</span>:active <span class="hljs-tag">{</span>
      box-shadow: <span class="hljs-string">0 4px 0 #003087</span>;
      top: <span class="hljs-string">0</span>;
    <span class="hljs-tag">}
    .ie8 .nhslogin-button</span>:focus <span class="hljs-tag">{</span>
      outline: <span class="hljs-string">1px dotted #003087</span>;
    <span class="hljs-tag">}</span>
    </code></pre>
              </div>
              <a class="app-link--close" href="javascript:void(0);" aria-live="assertive">
                Close
              </a>
            </div>
        </div>
  </div>
</div>

<p><a href="https://github.com/nhsconnect/nhslogin/tree/main/src/buttons/NHS-Design-System" target="_blank">Download the NHS login button package for services that use the NHS Design System</a>.</p>
</div>
</div>
</div>
</div>
      
      
      
      
      
      
      
<!-- 
//........................................
//..NN......N....HH......H.....SSSSSS.....
//.NNNN....NNN..HHHH...HHHH...SSSSSSSS....
//.NNNNN...NNN..HHHH...HHHH..SSSSSSSSSS...
//.NNNNN...NNN..HHHH...HHHH..SSSSSSSSSS...
//.NNNNNN..NNN..HHHH...HHHH.HSSS...SSSSS..
//.NNNNNNN.NNN..HHHHHHHHHHH.HSSSSS........
//.NNNNNNN.NNN..HHHHHHHHHHH..SSSSSSSSS....
//.NNN.NNNNNNN..HHHHHHHHHHH..SSSSSSSSSS...
//.NNN.NNNNNNN..HHHHHHHHHHH....SSSSSSSSS..
//.NNN..NNNNNN..HHHH...HHHH.HSSS..SSSSSS..
//.NNN..NNNNNN..HHHH...HHHH.HSSS....SSSS..
//.NNN...NNNNN..HHHH...HHHH.HSSSSSSSSSSS..
//.NNN...NNNNN..HHHH...HHHH..SSSSSSSSSS...
//.NNN....NNNN..HHHH...HHHH...SSSSSSSSS...
//.............................SSSSSS.....
//........................................
-->


<div class="nhsuk-card nhsuk-card" id="NHS">
  <div class="nhsuk-card__content">
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-two-thirds">
              <h2>
                Websites or apps that use the NHS logo
              </h2>
              <p class="nhsuk-card__description">Use this version of the NHS login button if your website or app has the NHS logo visible to users <strong>on the same screen as the NHS login button</strong>, such as <a href="https://heypharmacist.co.uk/" target="_blank">Hey Pharmacist</a>.</p>
              <p class="nhsuk-card__description">If your website or app uses the NHS logo, but it is not <strong>on the same screen as the NHS login button</strong>, you will need to use <a href="/nhslogin/button-guidance#other">the NHS login button version for websites or apps that do not use NHS logo</a>.</p>
              <hr>
            </div>
      <div class="nhsuk-grid-column-one-third">
          <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Guidance-example-button-NHS.png" alt="NHS login button for websites or apps that use the NHS logo">
      </div>
      </div>
      <details class="nhsuk-details nhsuk-expander--no-outline">
        <summary class="nhsuk-details__summary">
          <span class="nhsuk-details__summary-text">
            View NHS login button guidance for websites or apps that use the NHS logo
          </span>
        </summary>
      <div class="nhsuk-details__text nhsuk-grid-row">
      <div class="nhsuk-grid-column-full width">
      <ul class="nhsuk-inside-box-text" style="max-width:none;">
        <li>To align with the <a href="https://www.england.nhs.uk/nhsidentity/identity-guidelines/" target="_blank">NHS Identity Guidelines</a>, there should only be one NHS logo on a screen at once. Do not repeat the logo on the NHS login button.</li>
        <li>The call to action on this button should always be <b>Continue to NHS login</b>.</li>
        <li>To keep the NHS login brand clear, the button should be <a href="https://www.england.nhs.uk/nhsidentity/identity-guidelines/colours/" target="_blank">NHS blue</a>.</li>
        <li>When the NHS login button is on a background that is darker than 50% grey, you should use the light version of the button for legibility. Do not change the colour of the button to anything other than the original and light version.</li>
      </ul>
      <hr>
      <h3>How to place this button on your website or app</h3>
 <p>The NHS login button must always be visible and up front on your website or app. When placing the button on your website or app, it can go anywhere on the screen, but you must follow these rules:</p>

 <strong>Align to the user's mental model</strong>
      <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-two-thirds">
              <a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Guidance-example-options-NHS.png" class="design-example__pop-out" target="_blank">Open this example in new window</a>
              <div class="code-embed">
              <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Guidance-example-options-NHS.png" alt="Example of NHS login button alongside other log in or register options">
        </div>
      </div>
      <div class="nhsuk-grid-column-full">
      <br>
        <p class="nhsuk-inside-box-text" style="max-width:none;">NHS login has over 40million users and so it is very likely that your users will already have an NHS login account. The easiest route for the user to sign up or log in to your website or app would be to use their NHS login details.</p>
        <p class="nhsuk-inside-box-text" style="max-width:none;">If you have any other native or third-party log in or register options, the NHS login button must appear as the first option, and always be as clear and visible as other options.</p>
        <p class="nhsuk-inside-box-text" style="max-width:none;">If you have a <b>clear user need</b> why this isn't possible, you will need to provide proof of this. We will then review and decide if we can support this.</p>
      </div>
      </div>


 <strong>Add content around the button if needed</strong>
      <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-two-thirds">
            <a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Guidance-example-content-NHS.png" class="design-example__pop-out" target="_blank">Open this example in new window</a>
            <div class="code-embed">
            <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Guidance-example-content-NHS.png" alt="Example of content around the NHS login button">
        </div>
      </div>
      <div class="nhsuk-grid-column-full">
      <br>
        <p class="nhsuk-inside-box-text" style="max-width:none;">Sometimes it may be necessary to add content around the NHS login button to reassure a user what happens when they select it.</p>
        <p class="nhsuk-inside-box-text" style="max-width:none;">Suggested content:</p>
        <p class="nhsuk-inside-box-text" style="max-width:none;"><em>NHS login allows you to access your health and care websites and apps with one set of login details.</em></p>
        <p class="nhsuk-inside-box-text" style="max-width:none;"><em>We will check if you have an NHS login. If not, you can set one up.</em></p>
      </div>
      </div>


 <strong>Avoid placing the button on the same screen as any other forms</strong>
      <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-two-thirds">
            <a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Guidance-example-forms-NHS.png" class="design-example__pop-out" target="_blank">Open this example in new window</a>
            <div class="code-embed">
            <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Guidance-example-forms-NHS.png" alt="Example showing what to do if there is a clear user need to have a display on the same screen as the NHS login button">
        </div>
      </div>
      <div class="nhsuk-grid-column-full">
      <br>
        <p class="nhsuk-inside-box-text" style="max-width:none;">The button directs users to the NHS login service that allows users to log in or register. Putting the NHS login button alongside any other entry fields confuses the users, and makes it not clear what their call to action is.</p>
        <p class="nhsuk-inside-box-text" style="max-width:none;">The example shows what to do if there is a <strong>clear user need</strong> to display a form on the same screen as the NHS login button. You should place NHS login at the top and then create a clear distinction between the NHS login button and your form.</p>
      </div>
      </div>



 <strong>Button sizing and padding</strong>
      <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-two-thirds">
            <a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Guidance-example-resizing-NHS.png" class="design-example__pop-out" target="_blank">Open this example in new window</a>
            <div class="code-embed">
            <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Guidance-example-resizing-NHS.png" alt="Example showing the NHS login button sizing and padding">
        </div>
      </div>
      <div class="nhsuk-grid-column-full">
      <br>
        <p class="nhsuk-inside-box-text" style="max-width:none;">You can scale the button as needed for different devices and screen sizes, but you must keep the aspect ratio the same so that the button is not stretched. When scaling the button, you must ensure that the writing is still clear and readable.</p>
        <p class="nhsuk-inside-box-text" style="max-width:none;">The padding around the NHS login button should always be equal to at least half of its height.</p>
        <p class="nhsuk-inside-box-text" style="max-width:none;">If the width of the button needs to change:</p>
        <ul class="nhsuk-inside-box-text">
        <li>the padding to the left and right of the button content should be at least 16dp, and equal on both sides</li>
        <li>the padding above and below the button content should always be 14dp</li>
        <li>the shadow below the button should always be 14dp</li>
        </ul>
      </div>
      </div>

<hr>

<h3>The NHS login button</h3>
 <div class="design-example">
  <a href="/nhslogin/example-NHS" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">
    Open this example in new window
  </a>
  <div class="code-embed">
  <iframe title="default" src="/nhslogin/example-NHS?fullpage=undefined&amp;blankpage=undefined" class="design-example-frame" id="iFrameResizer0" scrolling="no" style="overflow: hidden; height: 156px;"></iframe>
  </div>
<div class="code-snippet">
          <ul class="app-tabs" role="tablist">
              <li class="app-tabs__item app-tabs__item--current" role="presentation" data-index="ex-1">
                <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  HTML
                </a>
              </li>
              <li class="app-tabs__item" role="presentation" data-index="ex-2">
                <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  CSS
                </a>
              </li>
          </ul>
        <div class="app-tabs__container js-tabs__container" id="default-example" role="tabpanel">
              <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-1">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  HTML
                </a>
              </div>
            <div class="code-snippet__preformatted" data-index="ex-1">
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
                <a class="app-link--copy" href="javascript:void(0);" aria-live="assertive">Copy code</a>
                <pre><code class=""><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nhslogin-button"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span>&gt;</span>
  Continue to NHS login
<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
</code></pre>
              </div>
              <a class="app-link--close" href="javascript:void(0);" aria-live="assertive">
                Close
              </a>
            </div>
              <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-2">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  CSS
                </a>
              </div>
            <div class="code-snippet__preformatted js-hidden" data-index="ex-2">
                <div class="code-snippet__macro">
                </div>
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
                              <a class="app-link--copy" href="javascript:void(0);" aria-live="assertive">Copy code</a>
              <pre><code class=""><span class="hljs-tag">.</span><span class="hljs-tag">nhslogin-button </span><span class="hljs-tag">{</span>
      font-weight: <span class="hljs-string">400</span>;
      font-size: <span class="hljs-string">16px</span>;
      font-size: <span class="hljs-string">1rem</span>;
      line-height:<span class="hljs-string"> 1.5</span>;
      margin-bottom: <span class="hljs-string">28px</span>;
      -webkit-appearance: <span class="hljs-string">none</span>;
      appearance: <span class="hljs-string">none</span>;
      background-color: <span class="hljs-string">#005eb8</span>;
      border: <span class="hljs-string">2px solid transparent</span>;
      border-radius: <span class="hljs-string">4px</span>;
      box-shadow: <span class="hljs-string">0 4px 0 #003087</span>;
      box-sizing: <span class="hljs-string">border-box</span>;
      color: <span class="hljs-string">#fff</span>;
      cursor: <span class="hljs-string">pointer</span>;
      display: <span class="hljs-string">inline-block</span>;
      font-weight: <span class="hljs-string">600</span>;
      margin-top: <span class="hljs-string">0</span>;
      padding: <span class="hljs-string">12px 16px</span>;
      position: <span class="hljs-string">relative</span>;
      text-align: <span class="hljs-string">center</span>;
      vertical-align: <span class="hljs-string">top</span>;
      width: <span class="hljs-string">auto</span>;
    <span class="hljs-tag">}
    @media </span><span class="hljs-attr">(min-width:</span> <span class="hljs-string">40.0625em</span>) <span class="hljs-tag">{
        .nhslogin-button {</span>
        font-size: <span class="hljs-string">19px</span>;
        font-size: <span class="hljs-string">1.1875rem</span>;
        line-height: <span class="hljs-string">1.47368</span>;
      <span class="hljs-tag">}
    }
    @media</span> print <span class="hljs-tag">{
      .nhslogin-button {</span>
        font-size: <span class="hljs-string">14pt</span>;
        line-height: <span class="hljs-string">1.15</span>;
      <span class="hljs-tag">}
    }
    @media </span>(min-width: <span class="hljs-string">40.0625em</span>) <span class="hljs-tag">{
      .nhslogin-button {</span>
        margin-bottom: <span class="hljs-string">36px</span>;
      <span class="hljs-tag">}
    }
    @media </span>(max-width: <span class="hljs-string">40.0525em</span>) <span class="hljs-tag">{
      .nhslogin-button {</span>
        padding: <span class="hljs-string">8px 16px</span>;
      <span class="hljs-tag">}
    }
    .nhslogin-button</span>:link,
    <span class="hljs-tag">.nhslogin-button</span>:visited,
    <span class="hljs-tag">.nhslogin-button</span>:active,
    <span class="hljs-tag">.nhslogin-button</span>:hover <span class="hljs-tag">{</span>
      color: <span class="hljs-string">#fff</span>;
      text-decoration: <span class="hljs-string">none</span>;
    <span class="hljs-tag">}
    .nhslogin-button</span>::-moz-focus-inner <span class="hljs-tag">{</span>
      border: <span class="hljs-string">0</span>;
      padding: <span class="hljs-string">0</span>;
    <span class="hljs-tag">}
    .nhslogin-button</span>:hover {
      background-color: <span class="hljs-string">#1e569b</span>;
    <span class="hljs-tag">}
    .nhslogin-button</span>:focus <span class="hljs-tag">{</span>
      background: <span class="hljs-string">#ffeb3b</span>;
      box-shadow: <span class="hljs-string">0 4px 0 #003087</span>;
      color: <span class="hljs-string">#003087</span>;
      outline: <span class="hljs-string">none</span>;
    <span class="hljs-tag">}
    .nhslogin-button</span>:active <span class="hljs-tag">{</span>
      background: <span class="hljs-string">#1e569b</span>;
      box-shadow: <span class="hljs-string">none</span>;
      color: <span class="hljs-string">#fff</span>;
      top: <span class="hljs-string">4px</span>;
    <span class="hljs-tag">}
    .nhslogin-button</span>::before <span class="hljs-tag">{</span>
      background: <span class="hljs-string">transparent</span>;
      bottom: <span class="hljs-string">-6px</span>;
      content: <span class="hljs-string">""</span>;
      display: <span class="hljs-string">block</span>;
      left: <span class="hljs-string">-2px</span>;
      position: <span class="hljs-string">absolute</span>;
      right: <span class="hljs-string">-2px</span>;
      top: <span class="hljs-string">-2px</span>;
    <span class="hljs-tag">}
    .nhslogin-button</span>:active::before <span class="hljs-tag">{</span>
      top: <span class="hljs-string">-6px</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse {</span>
      background-color: <span class="hljs-string">#fff</span>;
      box-shadow: <span class="hljs-string">0 4px 0 #003087</span>;
      color: <span class="hljs-string">#005eb8</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse</span>:hover <span class="hljs-tag">{</span>
      background-color: <span class="hljs-string">#f2f2f2</span>;
      color: <span class="hljs-string">#005eb8</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse</span>:focus <span class="hljs-tag">{</span>
      background: <span class="hljs-string">#ffeb3b</span>;
      box-shadow: <span class="hljs-string">0 4px 0 #003087</span>;
      color: <span class="hljs-string">#003087</span>;
      outline: <span class="hljs-string">4px solid transparent</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse</span>:active <span class="hljs-tag">{</span>
      background: <span class="hljs-string">#f2f2f2</span>;
      box-shadow: <span class="hljs-string">none</span>;
      color: <span class="hljs-string">#005eb8</span>;
      top: <span class="hljs-string">4px</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse</span>:link <span class="hljs-tag">{</span>
      color: <span class="hljs-string">#005eb8</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse.nhsuk-button--disabled {</span>
      background-color: <span class="hljs-string">#fff</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse.nhsuk-button--disabled</span>:focus <span class="hljs-tag">{</span>
      background-color: <span class="hljs-string">#fff</span>;
    <span class="hljs-tag">}
    .nhslogin-button--disabled,
    .nhslogin-button[disabled="disabled"],
    .nhslogin-button[disabled] {</span>
      background-color: <span class="hljs-string">#005eb8</span>;
      opacity: <span class="hljs-string">0.5</span>;
      pointer-events: <span class="hljs-string">none</span>;
    <span class="hljs-tag">}
    .nhslogin-button--disabled</span>:hover,
    <span class="hljs-tag">.nhslogin-button[disabled="disabled"]</span>:hover,
    <span class="hljs-tag">.nhslogin-button[disabled]</span>:hover <span class="hljs-tag">{</span>
      background-color: <span class="hljs-string">#005eb8</span>;
      cursor: <span class="hljs-string">default</span>;
    <span class="hljs-tag">}
    .nhslogin-button--disabled</span>:focus,
    <span class="hljs-tag">.nhslogin-button[disabled="disabled"]</span>:focus,
    <span class="hljs-tag">.nhslogin-button[disabled]</span>:focus <span class="hljs-tag">{</span>
      background-color: <span class="hljs-string">#005eb8</span>;
      outline: <span class="hljs-string">none</span>;
    <span class="hljs-tag">}
    .nhslogin-button--disabled</span>:active,
    <span class="hljs-tag">.nhslogin-button[disabled="disabled"]</span>:active,
    <span class="hljs-tag">.nhslogin-button[disabled]</span>:active <span class="hljs-tag">{</span>
      box-shadow: <span class="hljs-string">0 4px 0 #003087</span>;
      top: <span class="hljs-string">0</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse[disabled="disabled"],
    .nhslogin-button--reverse[disabled] {</span>
      background-color: <span class="hljs-string">#fff</span>;
      opacity: <span class="hljs-string">0.5</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse[disabled="disabled"]</span>:hover,
    <span class="hljs-tag">.nhslogin-button--reverse[disabled]</span>:hover <span class="hljs-tag">{</span>
      background-color: <span class="hljs-string">#fff</span>;
      cursor: <span class="hljs-string">default</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse[disabled="disabled"]</span>:focus,
    <span class="hljs-tag">.nhslogin-button--reverse[disabled]</span>:focus <span class="hljs-tag">{</span>
      outline: <span class="hljs-string">none</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse[disabled="disabled"]</span>:active,
    <span class="hljs-tag">.nhslogin-button--reverse[disabled]</span>:active <span class="hljs-tag">{</span>
      box-shadow: <span class="hljs-string">0 4px 0 #003087</span>;
      top: <span class="hljs-string">0</span>;
    <span class="hljs-tag">}
    .ie8 .nhslogin-button</span>:focus <span class="hljs-tag">{</span>
      outline: <span class="hljs-string">1px dotted #003087</span>;
    <span class="hljs-tag">}</span>
    </code></pre>
              </div>
              <a class="app-link--close" href="javascript:void(0);" aria-live="assertive">
                Close
              </a>
            </div>
        </div>
  </div>
</div>

<p><a href="https://github.com/nhsconnect/nhslogin/tree/main/src/buttons/NHS" target="_blank">Download the NHS login button package for websites or apps that use NHS branding</a>.</p>
</div>
</div>
</div>
</div>







<!-- 
//..................................................................
//.....OOOOOO.....TTTTTTTTT...HH......H....EEEEEEEEE...RRRRR........
//....OOOOOOOOO..OTTTTTTTTTT.HHHH...HHHH..EEEEEEEEEEE.RRRRRRRRRR....
//...OOOOOOOOOO..OTTTTTTTTTT.HHHH...HHHH..EEEEEEEEEEE.RRRRRRRRRRR...
//..OOOOOOOOOOOO.OTTTTTTTTTT.HHHH...HHHH..EEEEEEEEEEE.RRRRRRRRRRR...
//..OOOO....OOOO.....TTTT....HHHH...HHHH..EEEE........RRRR...RRRRR..
//..OOOO....OOOOO....TTTT....HHHHHHHHHHH..EEEEEEEEEE..RRRR...RRRRR..
//.OOOO......OOOO....TTTT....HHHHHHHHHHH..EEEEEEEEEE..RRRRRRRRRRR...
//.OOOO......OOOO....TTTT....HHHHHHHHHHH..EEEEEEEEEE..RRRRRRRRRRR...
//.OOOO......OOOO....TTTT....HHHHHHHHHHH..EEEEEEEEEE..RRRRRRRRRRR...
//..OOOO....OOOOO....TTTT....HHHH...HHHH..EEEE........RRRR..RRRRR...
//..OOOO....OOOO.....TTTT....HHHH...HHHH..EEEE........RRRR...RRRR...
//..OOOOOOOOOOOO.....TTTT....HHHH...HHHH..EEEEEEEEEEE.RRRR...RRRR...
//...OOOOOOOOOO......TTTT....HHHH...HHHH..EEEEEEEEEEE.RRRR...RRRR...
//....OOOOOOOOO......TTTT....HHHH...HHHH..EEEEEEEEEEE.RRRR...RRRRR..
//.....OOOOOO.......................................................
//..................................................................
-->



<div class="nhsuk-card nhsuk-card" id="other">
  <div class="nhsuk-card__content">
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-two-thirds">
              <h2>
                Websites or apps that do not use the NHS logo
              </h2>
              <p class="nhsuk-card__description">Use this version if your website or app does not have the NHS logo <b>on the same screen</b> as the NHS login button, such as <a href="https://www.eredbook.org.uk/" target="_blank">eRedbook</a>.</p>
              <p class="nhsuk-card__description">This applies even if your website or app:</p>
              <ul>
                <li>is part of or partnered with the NHS,</li>
                <li>uses the NHS logo or NHS branding in any documentation,</li>
                <li>uses the NHS logo on any other screen except the one in which you place the NHS login button.</li>
              </ul>
              <hr>
            </div>
      <div class="nhsuk-grid-column-one-third">
          <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Guidance-example-button-other.png" alt="NHS login button for websites or apps that do not use the NHS logo">
      </div>
      </div>
      <details class="nhsuk-details nhsuk-expander--no-outline">
        <summary class="nhsuk-details__summary">
          <span class="nhsuk-details__summary-text">
            View NHS login button guidance for websites or apps that do not use the NHS logo
          </span>
        </summary>
      <div class="nhsuk-details__text nhsuk-grid-row">
      <div class="nhsuk-grid-column-full width">
      <ul class="nhsuk-inside-box-text" style="max-width:none;">
          <li>To keep the NHS login brand recognisable to users, this button should have the NHS logo and use the call to acton <b>Continue to NHS login</b>.</li>
          <li>To keep the NHS login brand clear, the button should be <a href="https://www.england.nhs.uk/nhsidentity/identity-guidelines/colours/" target="_blank">NHS blue</a>.</li>
          <li>When the NHS login button is on a background that is darker than 50% grey, you should use the light version of the button for legibility. Do not change the colour of the button to anything other than the original and light version.</li>
          <li>If your website or app has it's own branding that you would like to align the NHS login button to, you will need to request a change. We will then review this and decide if we can allow any of your requested changes to the NHS login button. For example, if your website or app uses buttons with straight corners, you might want also want straight corners on the NHS login button. You should contact us as soon as possible if you want to make any changes to the NHS login button. <strong>You should not change anything on the button without our approval</strong>.</li>
      </ul>
      <hr>
      <h3>How to place this button on your website or app</h3>
 <p>The NHS login button must always be visible and up front on your website or app. When placing the button on your website or app, it can go anywhere on the screen, but you must follow these rules:</p>

 <strong>Align to the user's mental model</strong>
      <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-two-thirds">
              <a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Guidance-example-options-other.png" class="design-example__pop-out" target="_blank">Open this example in new window</a>
              <div class="code-embed">
              <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Guidance-example-options-other.png" alt="Example of NHS login button alongside other log in or register options">
        </div>
      </div>
      <div class="nhsuk-grid-column-full">
      <br>
        <p class="nhsuk-inside-box-text" style="max-width:none;">NHS login has over 40million users and so it is very likely that your users will already have an NHS login account. The easiest route for the user to sign up or log in to your website or app would be to use their NHS login details.</p>
        <p class="nhsuk-inside-box-text" style="max-width:none;">If you have any other native or third-party log in or register options, the NHS login button must appear as the first option, and always be as clear and visible as other options.</p>
        <p class="nhsuk-inside-box-text" style="max-width:none;">If you have a <b>clear user need</b> why this isn't possible, you will need to provide proof of this. We will then review and decide if we can support this.</p>
      </div>
      </div>

 <strong>Add content around the button if needed</strong>
      <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-two-thirds">
            <a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Guidance-example-content-other.png" class="design-example__pop-out" target="_blank">Open this example in new window</a>
            <div class="code-embed">
            <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Guidance-example-content-other.png" alt="Example of content around the NHS login button">
        </div>
      </div>
      <div class="nhsuk-grid-column-full">
      <br>
        <p class="nhsuk-inside-box-text" style="max-width:none;">Sometimes it may be necessary to add content around the NHS login button to reassure a user what happens when they select it.</p>
        <p class="nhsuk-inside-box-text" style="max-width:none;">Suggested content:</p>
        <p class="nhsuk-inside-box-text" style="max-width:none;"><em>NHS login allows you to access your health and care websites and apps with one set of login details.</em></p>
        <p class="nhsuk-inside-box-text" style="max-width:none;"><em>We will check if you have an NHS login. If not, you can set one up.</em></p>
      </div>
      </div>


 <strong>Avoid placing the button on the same screen as any other forms</strong>
      <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-two-thirds">
            <a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Guidance-example-forms-other.png" class="design-example__pop-out" target="_blank">Open this example in new window</a>
            <div class="code-embed">
            <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Guidance-example-forms-other.png" alt="Example showing what to do if there is a clear user need to have a display on the same screen as the NHS login button">
        </div>
      </div>
      <div class="nhsuk-grid-column-full">
      <br>
        <p class="nhsuk-inside-box-text" style="max-width:none;">The button directs users to the NHS login service that allows users to log in or register. Putting the NHS login button alongside any other entry fields confuses the users, and makes it not clear what their call to action is.</p>
        <p class="nhsuk-inside-box-text" style="max-width:none;">The example shows what to do if there is a <strong>clear user need</strong> to display a form on the same screen as the NHS login button. You should place NHS login at the top and then create a clear distinction between the NHS login button and your form.</p>
      </div>
      </div>


 <strong>Button sizing and padding</strong>
      <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-two-thirds">
            <a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/Guidance-example-resizing-other.png" class="design-example__pop-out" target="_blank">Open this example in new window</a>
            <div class="code-embed">
            <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Guidance-example-resizing-other.png" alt="Example showing the NHS login button sizing and padding">
        </div>
      </div>
      <div class="nhsuk-grid-column-full">
      <br>
        <p class="nhsuk-inside-box-text" style="max-width:none;">You can scale the button as needed for different devices and screen sizes, but you must keep the aspect ratio the same so that the NHS logo is not stretched. When scaling the button, you must ensure that the writing is still clear and readable.</p>
        <p class="nhsuk-inside-box-text" style="max-width:none;">The padding around the NHS login button should always be equal to at least half of its height.</p>
        <p class="nhsuk-inside-box-text" style="max-width:none;">If the width of the button needs to change:</p>
        <ul class="nhsuk-inside-box-text">
        <li>there should always be 16dp between the NHS logo and the text on the button</li>
        <li>the padding to the left and right of the button content should be at least 16dp, and equal on both sides</li>
        <li>the padding above and below the button content should always be 14dp</li>
        <li>the shadow below the button should always be 14dp</li>
        </ul>
      </div>
      </div>

<hr>

<h3>The NHS login button</h3>
<div class="design-example">
  <a href="/nhslogin/example-other" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">
    Open this example in new window
  </a>
  <div class="code-embed">
  <iframe title="default" src="/nhslogin/example-other?fullpage=undefined&amp;blankpage=undefined" class="design-example-frame" id="iFrameResizer0" scrolling="no" style="overflow: hidden; height: 156px;"></iframe>
  </div>
<div class="code-snippet">
          <ul class="app-tabs" role="tablist">
              <li class="app-tabs__item app-tabs__item--current" role="presentation" data-index="ex-1">
                <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  HTML
                </a>
              </li>
              <li class="app-tabs__item" role="presentation" data-index="ex-2">
                <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  CSS
                </a>
              </li>
          </ul>
        <div class="app-tabs__container js-tabs__container" id="default-example" role="tabpanel">
              <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-1">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  HTML
                </a>
              </div>
            <div class="code-snippet__preformatted" data-index="ex-1">
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
                <a class="app-link--copy" href="javascript:void(0);" aria-live="assertive">Copy code</a>
          <pre><code class=""><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nhslogin-button nhslogin-button-logo"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"button-logo"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">svg</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nhsuk-logo"</span> <span class="hljs-attr">xmlns</span>=<span class="hljs-string">"http://www.w3.org/2000/svg"</span> <span class="hljs-attr">viewBox</span>=<span class="hljs-string">"0 0 40 16"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"27"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"67"</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">path</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nhsuk-logo__background"</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">"#fff"</span> <span class="hljs-attr">d</span>=<span class="hljs-string">"M0 0h40v16H0z"</span> <span class="hljs-tag">&lt;/<span class="hljs-name">path</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">path</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nhsuk-logo__text"</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">"#005eb8"</span> <span class="hljs-attr">d</span>=<span class="hljs-string">"M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"</span> <span class="hljs-tag">&lt;/<span class="hljs-name">path</span>&gt;</span> 
    <span class="hljs-tag">&lt;/<span class="hljs-name">svg</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  Continue to NHS login
<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
        </div>
              <a class="app-link--close" href="javascript:void(0);" aria-live="assertive">
                Close
              </a>
            </div>
              <div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="ex-2">
                <a href="" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                  CSS
                </a>
              </div>
            <div class="code-snippet__preformatted js-hidden" data-index="ex-2">
                <div class="code-snippet__macro">
                </div>
              <div class="app-code-snippet__macro"></div>
              <div class="app-code-snippet__container">
                              <a class="app-link--copy" href="javascript:void(0);" aria-live="assertive">Copy code</a>
              <pre><code class=""><span class="hljs-tag">.</span><span class="hljs-tag">nhslogin-button </span><span class="hljs-tag">{</span>
      font-weight: <span class="hljs-string">400</span>;
      font-size: <span class="hljs-string">16px</span>;
      font-size: <span class="hljs-string">1rem</span>;
      line-height:<span class="hljs-string"> 1.5</span>;
      margin-bottom: <span class="hljs-string">28px</span>;
      -webkit-appearance: <span class="hljs-string">none</span>;
      appearance: <span class="hljs-string">none</span>;
      background-color: <span class="hljs-string">#005eb8</span>;
      border: <span class="hljs-string">2px solid transparent</span>;
      border-radius: <span class="hljs-string">4px</span>;
      box-shadow: <span class="hljs-string">0 4px 0 #003087</span>;
      box-sizing: <span class="hljs-string">border-box</span>;
      color: <span class="hljs-string">#fff</span>;
      cursor: <span class="hljs-string">pointer</span>;
      display: <span class="hljs-string">inline-block</span>;
      font-weight: <span class="hljs-string">600</span>;
      margin-top: <span class="hljs-string">0</span>;
      padding: <span class="hljs-string">12px 16px</span>;
      position: <span class="hljs-string">relative</span>;
      text-align: <span class="hljs-string">center</span>;
      vertical-align: <span class="hljs-string">top</span>;
      width: <span class="hljs-string">auto</span>;
    <span class="hljs-tag">}
    @media </span><span class="hljs-attr">(min-width:</span> <span class="hljs-string">40.0625em</span>) <span class="hljs-tag">{
        .nhslogin-button {</span>
        font-size: <span class="hljs-string">19px</span>;
        font-size: <span class="hljs-string">1.1875rem</span>;
        line-height: <span class="hljs-string">1.47368</span>;
      <span class="hljs-tag">}
    }
    @media</span> print <span class="hljs-tag">{
      .nhslogin-button {</span>
        font-size: <span class="hljs-string">14pt</span>;
        line-height: <span class="hljs-string">1.15</span>;
      <span class="hljs-tag">}
    }
    @media </span>(min-width: <span class="hljs-string">40.0625em</span>) <span class="hljs-tag">{
      .nhslogin-button {</span>
        margin-bottom: <span class="hljs-string">36px</span>;
      <span class="hljs-tag">}
    }
    @media </span>(max-width: <span class="hljs-string">40.0525em</span>) <span class="hljs-tag">{
      .nhslogin-button {</span>
        padding: <span class="hljs-string">8px 16px</span>;
      <span class="hljs-tag">}
    }
    .nhslogin-button</span>:link,
    <span class="hljs-tag">.nhslogin-button</span>:visited,
    <span class="hljs-tag">.nhslogin-button</span>:active,
    <span class="hljs-tag">.nhslogin-button</span>:hover <span class="hljs-tag">{</span>
      color: <span class="hljs-string">#fff</span>;
      text-decoration: <span class="hljs-string">none</span>;
    <span class="hljs-tag">}
    .nhslogin-button</span>::-moz-focus-inner <span class="hljs-tag">{</span>
      border: <span class="hljs-string">0</span>;
      padding: <span class="hljs-string">0</span>;
    <span class="hljs-tag">}
    .nhslogin-button</span>:hover {
      background-color: <span class="hljs-string">#1e569b</span>;
    <span class="hljs-tag">}
    .nhslogin-button</span>:focus <span class="hljs-tag">{</span>
      background: <span class="hljs-string">#ffeb3b</span>;
      box-shadow: <span class="hljs-string">0 4px 0 #003087</span>;
      color: <span class="hljs-string">#003087</span>;
      outline: <span class="hljs-string">none</span>;
    <span class="hljs-tag">}
    .nhslogin-button</span>:active <span class="hljs-tag">{</span>
      background: <span class="hljs-string">#1e569b</span>;
      box-shadow: <span class="hljs-string">none</span>;
      color: <span class="hljs-string">#fff</span>;
      top: <span class="hljs-string">4px</span>;
    <span class="hljs-tag">}
    .nhslogin-button</span>::before <span class="hljs-tag">{</span>
      background: <span class="hljs-string">transparent</span>;
      bottom: <span class="hljs-string">-6px</span>;
      content: <span class="hljs-string">""</span>;
      display: <span class="hljs-string">block</span>;
      left: <span class="hljs-string">-2px</span>;
      position: <span class="hljs-string">absolute</span>;
      right: <span class="hljs-string">-2px</span>;
      top: <span class="hljs-string">-2px</span>;
    <span class="hljs-tag">}
    .nhslogin-button</span>:active::before <span class="hljs-tag">{</span>
      top: <span class="hljs-string">-6px</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse {</span>
      background-color: <span class="hljs-string">#fff</span>;
      box-shadow: <span class="hljs-string">0 4px 0 #003087</span>;
      color: <span class="hljs-string">#005eb8</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse</span>:hover <span class="hljs-tag">{</span>
      background-color: <span class="hljs-string">#f2f2f2</span>;
      color: <span class="hljs-string">#005eb8</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse</span>:focus <span class="hljs-tag">{</span>
      background: <span class="hljs-string">#ffeb3b</span>;
      box-shadow: <span class="hljs-string">0 4px 0 #003087</span>;
      color: <span class="hljs-string">#003087</span>;
      outline: <span class="hljs-string">4px solid transparent</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse</span>:active <span class="hljs-tag">{</span>
      background: <span class="hljs-string">#f2f2f2</span>;
      box-shadow: <span class="hljs-string">none</span>;
      color: <span class="hljs-string">#005eb8</span>;
      top: <span class="hljs-string">4px</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse</span>:link <span class="hljs-tag">{</span>
      color: <span class="hljs-string">#005eb8</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse.nhsuk-button--disabled {</span>
      background-color: <span class="hljs-string">#fff</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse.nhsuk-button--disabled</span>:focus <span class="hljs-tag">{</span>
      background-color: <span class="hljs-string">#fff</span>;
    <span class="hljs-tag">}
    .nhslogin-button--disabled,
    .nhslogin-button[disabled="disabled"],
    .nhslogin-button[disabled] {</span>
      background-color: <span class="hljs-string">#005eb8</span>;
      opacity: <span class="hljs-string">0.5</span>;
      pointer-events: <span class="hljs-string">none</span>;
    <span class="hljs-tag">}
    .nhslogin-button--disabled</span>:hover,
    <span class="hljs-tag">.nhslogin-button[disabled="disabled"]</span>:hover,
    <span class="hljs-tag">.nhslogin-button[disabled]</span>:hover <span class="hljs-tag">{</span>
      background-color: <span class="hljs-string">#005eb8</span>;
      cursor: <span class="hljs-string">default</span>;
    <span class="hljs-tag">}
    .nhslogin-button--disabled</span>:focus,
    <span class="hljs-tag">.nhslogin-button[disabled="disabled"]</span>:focus,
    <span class="hljs-tag">.nhslogin-button[disabled]</span>:focus <span class="hljs-tag">{</span>
      background-color: <span class="hljs-string">#005eb8</span>;
      outline: <span class="hljs-string">none</span>;
    <span class="hljs-tag">}
    .nhslogin-button--disabled</span>:active,
    <span class="hljs-tag">.nhslogin-button[disabled="disabled"]</span>:active,
    <span class="hljs-tag">.nhslogin-button[disabled]</span>:active <span class="hljs-tag">{</span>
      box-shadow: <span class="hljs-string">0 4px 0 #003087</span>;
      top: <span class="hljs-string">0</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse[disabled="disabled"],
    .nhslogin-button--reverse[disabled] {</span>
      background-color: <span class="hljs-string">#fff</span>;
      opacity: <span class="hljs-string">0.5</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse[disabled="disabled"]</span>:hover,
    <span class="hljs-tag">.nhslogin-button--reverse[disabled]</span>:hover <span class="hljs-tag">{</span>
      background-color: <span class="hljs-string">#fff</span>;
      cursor: <span class="hljs-string">default</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse[disabled="disabled"]</span>:focus,
    <span class="hljs-tag">.nhslogin-button--reverse[disabled]</span>:focus <span class="hljs-tag">{</span>
      outline: <span class="hljs-string">none</span>;
    <span class="hljs-tag">}
    .nhslogin-button--reverse[disabled="disabled"]</span>:active,
    <span class="hljs-tag">.nhslogin-button--reverse[disabled]</span>:active <span class="hljs-tag">{</span>
      box-shadow: <span class="hljs-string">0 4px 0 #003087</span>;
      top: <span class="hljs-string">0</span>;
    <span class="hljs-tag">}
    .ie8 .nhslogin-button</span>:focus <span class="hljs-tag">{</span>
      outline: <span class="hljs-string">1px dotted #003087</span>;
    <span class="hljs-tag">}
    .nhslogin-button-logo {</span>
    display: <span class="hljs-string">flex</span>;
    align-items: <span class="hljs-string">center</span>;
    justify-content: <span class="hljs-string">center</span>;
    <span class="hljs-tag">}
    .button-logo {</span>
        padding-right: <span class="hljs-string">16px</span>;
        display: <span class="hljs-string">flex</span>;
        align-items: <span class="hljs-string">center</span>;
        justify-content: <span class="hljs-string">center</span>;
    <span class="hljs-tag">}</span>
    </code></pre>
              </div>
              <a class="app-link--close" href="javascript:void(0);" aria-live="assertive">
                Close
              </a>
            </div>
        </div>
  </div>
</div>

<p><a href="https://github.com/nhsconnect/nhslogin/tree/main/src/buttons/Other" target="_blank">Download the NHS login button package for webistes or apps that do not use the NHS logo</a>.</p>

</div>
</div>
</div>
</div>


<p>If you use the wrong version of the NHS login button on your website or app, we will ask you to change to the correct one.</p>
<p>Contact us if you are unsure which version of the NHS login is right for your website or app.</p> 

---

<h2 id="related-links">Related links</h2>

For detailed technical guidance on who can use NHS and NHS Digital identities and how and where to apply them, visit:

[NHS Identity Guidelines](https://www.england.nhs.uk/nhsidentity/identity-guidelines/ "NHS Identity Guidelines")

[NHS Digital Style Guidelines](https://digital.nhs.uk/about-nhs-digital/corporate-information-and-documents/nhs-digital-style-guidelines "NHS Digital Style Guidelines")

