---
layout: base.njk
title: Sharing a user's NHS login information with your service
---

<p>This page explains how users consent to share their NHS login information with your service and what to do if they do not.</p>

<h2>How it works</h2>

<p>We ask users to agree to share their NHS login information with your service when:</p>

<ul>
  <li>they register a new level of verification</li>
  <li>they sign into your service using their NHS login for the first time</li>
  <li>your service has an update to the user information required</li>
</ul>

<p>Before users access your service, they will see the following screens asking if they agree to share information.</p>

<h3>Consent screen</h3>

<div class="design-example">
  <a href="/nhslogin/images/nhs-login-original-consent-screen.png" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">Open this consent screen in a new window</a>
  <div class="code-embed">
    <img class="nhsuk-image__img" src="/nhslogin/images/nhs-login-original-consent-screen.png" alt="NHS login consent screen with an I agree button and an I do not agree to share this information link">
  </div>
</div>

<h3>No-consent confirmation screen</h3>

<div class="design-example">
  <a href="/nhslogin/images/nhs-login-original-no-consent-screen.png" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">Open this no-consent confirmation screen in a new window</a>
  <div class="code-embed">
    <img class="nhsuk-image__img" src="/nhslogin/images/nhs-login-original-no-consent-screen.png" alt="NHS login no-consent confirmation screen with a choice to go back and agree or continue without sharing information">
  </div>
</div>

<p>If they agree, an ID token with their information is securely passed from NHS login to your service.</p>

<p>If they do not agree, they are redirected to your service without an ID token or authorisation code.</p>

<h2>What to do when users do not share their NHS login information</h2>

<p>Users who arrive at your service without sharing their NHS login information need clear guidance on what they can do next.</p>

<p>Follow the appropriate guidance below depending on how your system operates.</p>

<div class="nhsuk-inset-text">
  <span class="nhsuk-u-visually-hidden">Information: </span>
  <p>Users who arrive at your service without sharing their personal information are still authenticated by NHS login.</p>
</div>

<h3 id="nhs-app-or-wayfinder">If your service is accessed through the NHS App or Wayfinder</h3>

<p>If your service is opened in NHS App or Wayfinder, you need to display an error message. Which one depends on whether your service is accessed through a browser or the mobile application.</p>

<p>For any queries about how NHS App works with your service, email <a href="mailto:app.integration@nhs.net">app.integration@nhs.net</a>.</p>

<details class="nhsuk-details nhsuk-expander--no-outline">
<summary class="nhsuk-details__summary">
<span class="nhsuk-details__summary-text">Using a browser</span>
</summary>
<div class="nhsuk-details__text">
<p>You must use the content and emergency contact links shown below. Say “the service provider”, not the name of your service. Do not add other content to the screen.</p>
<h4>Example screen</h4>
<div class="design-example">
<a href="/nhslogin/example-no-consent-content-nhs-app-browser" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">Open this example in a new window</a>
<div class="code-embed">
<iframe title="NHS App or Wayfinder browser no-consent screen" src="/nhslogin/example-no-consent-content-nhs-app-browser" class="design-example-frame" scrolling="no" style="overflow:hidden;height:430px;"></iframe>
</div>
</div>
<h4>Required back-button behaviour</h4>
<p>Users should close your service tab to return to NHS App. Do not add your own back button.</p>
<p>If a user selects the browser Back button, reload the no-consent error screen where possible. If you cannot reload it, NHS login prevents the user from re-entering your service and shows its own error page. You do not need to take any further action.</p>
<h4>Styling requirements</h4>
<ul>
<li>Heading font size should be no smaller than 20px.</li>
<li>Body copy should be no smaller than 16px.</li>
<li>Make all emergency contact links operational.</li>
</ul>
<h4>HTML</h4>
<div class="code-snippet">
<ul class="app-tabs" role="tablist">
<li class="app-tabs__item app-tabs__item--current" role="presentation" data-index="browser-html"><a href="javascript:void(0);" role="tab" aria-controls="browser-no-consent-html" data-track="tab-html" aria-selected="true">HTML</a></li>
</ul>
<div class="app-tabs__container js-tabs__container" id="browser-no-consent-html" role="tabpanel">
<div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="browser-html"><a href="javascript:void(0);" role="tab" aria-controls="browser-no-consent-html" data-track="tab-html" aria-selected="true">HTML</a></div>
<div class="code-snippet__preformatted" data-index="browser-html">
<div class="app-code-snippet__macro"></div>
<div class="app-code-snippet__container">
<a class="app-link--copy" href="javascript:void(0);" aria-live="assertive">Copy code</a>
<pre><code class="hljs">&lt;h1&gt;You cannot continue without sharing your information&lt;/h1&gt;
&lt;p&gt;The service provider needs your NHS login information to match you to your record.&lt;/p&gt;
&lt;p&gt;If you need medical help, go to &lt;a href=&quot;https://111.nhs.uk/&quot;&gt;111.nhs.uk&lt;/a&gt; or call &lt;a href=&quot;tel:111&quot;&gt;111&lt;/a&gt;.&lt;/p&gt;
&lt;p&gt;Call &lt;a href=&quot;tel:999&quot;&gt;999&lt;/a&gt; if it is a life-threatening emergency.&lt;/p&gt;
&lt;p&gt;Close this tab to go back to NHS App.&lt;/p&gt;</code></pre>
</div>
</div>
</div>
</div>
</details>

<details class="nhsuk-details nhsuk-expander--no-outline">
<summary class="nhsuk-details__summary">
<span class="nhsuk-details__summary-text">Using the NHS App mobile application</span>
</summary>
<div class="nhsuk-details__text">
<p>You must use the content and emergency contact links shown below. Say “the service provider”, not the name of your service. Do not add other content to the screen.</p>
<h4>Example screen</h4>
<div class="design-example">
<a href="/nhslogin/example-no-consent-content-wayfinder" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">Open this example in a new window</a>
<div class="code-embed">
<iframe title="NHS App mobile no-consent screen" src="/nhslogin/example-no-consent-content-wayfinder" class="design-example-frame" scrolling="no" style="overflow:hidden;height:430px;"></iframe>
</div>
</div>
<h4>Native back-navigation behaviour</h4>
<p>A user can return to the previous point in their journey in NHS App using the native back link.</p>
<h4>Styling requirements</h4>
<ul>
<li>Heading font size should be no smaller than 20px.</li>
<li>Body copy should be no smaller than 16px.</li>
<li>Make all emergency contact links operational.</li>
</ul>
<h4>HTML</h4>
<div class="code-snippet">
<ul class="app-tabs" role="tablist">
<li class="app-tabs__item app-tabs__item--current" role="presentation" data-index="mobile-html"><a href="javascript:void(0);" role="tab" aria-controls="mobile-no-consent-html" data-track="tab-html" aria-selected="true">HTML</a></li>
</ul>
<div class="app-tabs__container js-tabs__container" id="mobile-no-consent-html" role="tabpanel">
<div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="mobile-html"><a href="javascript:void(0);" role="tab" aria-controls="mobile-no-consent-html" data-track="tab-html" aria-selected="true">HTML</a></div>
<div class="code-snippet__preformatted" data-index="mobile-html">
<div class="app-code-snippet__macro"></div>
<div class="app-code-snippet__container">
<a class="app-link--copy" href="javascript:void(0);" aria-live="assertive">Copy code</a>
<pre><code class="hljs">&lt;h1&gt;You cannot continue without sharing your information&lt;/h1&gt;
&lt;p&gt;The service provider needs your NHS login information to match you to your record.&lt;/p&gt;
&lt;p&gt;If you need medical help, go to &lt;a href=&quot;https://111.nhs.uk/&quot;&gt;111.nhs.uk&lt;/a&gt; or call &lt;a href=&quot;tel:111&quot;&gt;111&lt;/a&gt; or your GP.&lt;/p&gt;
&lt;p&gt;Call &lt;a href=&quot;tel:999&quot;&gt;999&lt;/a&gt; if it is a life-threatening emergency.&lt;/p&gt;</code></pre>
</div>
</div>
</div>
</div>
</details>

<h3 id="guest-process">If you offer a guest process</h3>

<p>A guest process allows users to access your service without sharing any NHS login information. For example, the NHS Find a GP service enables you to look for a GP surgery, either using your NHS login details or as a guest user.</p>

<p>If you offer a guest route, you do not need to show an error screen. Instead, make sure the user can see a guest option on your landing screen once they arrive from NHS login.</p>

<h3 id="alternative-authentication">If you provide an alternative authentication method</h3>

<p>If your service offers a way for users to authenticate other than NHS login, you must show a screen that:</p>

<ul>
  <li>allows the user to go back to NHS login and opt to share their information</li>
  <li>provides a link or CTA to your alternative authentication method</li>
</ul>

<h4>Example of a partner-controlled alternative authentication screen</h4>
<div class="design-example">
  <a href="/nhslogin/example-no-consent-content-alternative" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">Open this example in a new window</a>
  <div class="code-embed">
    <iframe title="Alternative authentication no-consent screen" src="/nhslogin/example-no-consent-content-alternative" class="design-example-frame" scrolling="no" style="overflow:hidden;height:340px;"></iframe>
  </div>
</div>
<details class="nhsuk-details nhsuk-expander--no-outline">
<summary class="nhsuk-details__summary">
<span class="nhsuk-details__summary-text">HTML</span>
</summary>
<div class="nhsuk-details__text">
<div class="code-snippet">
<ul class="app-tabs" role="tablist">
<li class="app-tabs__item app-tabs__item--current" role="presentation" data-index="alternative-html"><a href="javascript:void(0);" role="tab" aria-controls="alternative-no-consent-html" data-track="tab-html" aria-selected="true">HTML</a></li>
</ul>
<div class="app-tabs__container js-tabs__container" id="alternative-no-consent-html" role="tabpanel">
<div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="alternative-html"><a href="javascript:void(0);" role="tab" aria-controls="alternative-no-consent-html" data-track="tab-html" aria-selected="true">HTML</a></div>
<div class="code-snippet__preformatted" data-index="alternative-html">
<div class="app-code-snippet__macro"></div>
<div class="app-code-snippet__container">
<a class="app-link--copy" href="javascript:void(0);" aria-live="assertive">Copy code</a>
<pre><code class="hljs">&lt;h1&gt;Choose how you want to continue&lt;/h1&gt;
&lt;p&gt;You chose not to share your NHS login information with [Service name].&lt;/p&gt;
&lt;p&gt;To continue, you can go back and agree to share your information or sign in to [Service name].&lt;/p&gt;
&lt;p&gt;&lt;a href=&quot;[NHS login return URL]&quot;&gt;Go back and agree to share your information&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href=&quot;[Service authentication URL]&quot;&gt;Sign in to [Service name]&lt;/a&gt;&lt;/p&gt;</code></pre>
</div>
</div>
</div>
</div>
</div>
</details>

<h3 id="standard-no-consent">If none of the above apply</h3>

<p>Use the standard no-consent error screen if your service is not covered by the NHS App or Wayfinder guidance and has neither a guest process nor an alternative authentication method.</p>

<p>Use the name of your service in the <code>[Service name]</code> placeholder.</p>

<p>Tell the user that their NHS login information was not passed to your service. Only add your own content in the <code>[dynamic content]</code> section if it helps the user move on from the no-consent error screen or correct an error.</p>

<h4>Example of a partner-owned no-consent error screen</h4>
<div class="design-example">
  <a href="/nhslogin/example-no-consent-content-other" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">Open this example in a new window</a>
  <div class="code-embed">
    <iframe title="Standard no-consent error screen" src="/nhslogin/example-no-consent-content-other" class="design-example-frame" scrolling="no" style="overflow:hidden;height:390px;"></iframe>
  </div>
</div>
<details class="nhsuk-details nhsuk-expander--no-outline">
<summary class="nhsuk-details__summary">
<span class="nhsuk-details__summary-text">HTML</span>
</summary>
<div class="nhsuk-details__text">
<div class="code-snippet">
<ul class="app-tabs" role="tablist">
<li class="app-tabs__item app-tabs__item--current" role="presentation" data-index="standard-html"><a href="javascript:void(0);" role="tab" aria-controls="standard-no-consent-html" data-track="tab-html" aria-selected="true">HTML</a></li>
</ul>
<div class="app-tabs__container js-tabs__container" id="standard-no-consent-html" role="tabpanel">
<div class="app-tabs__item app-tabs__item--mobile" role="presentation" data-index="standard-html"><a href="javascript:void(0);" role="tab" aria-controls="standard-no-consent-html" data-track="tab-html" aria-selected="true">HTML</a></div>
<div class="code-snippet__preformatted" data-index="standard-html">
<div class="app-code-snippet__macro"></div>
<div class="app-code-snippet__container">
<a class="app-link--copy" href="javascript:void(0);" aria-live="assertive">Copy code</a>
<pre><code class="hljs">&lt;h1&gt;You cannot continue without sharing your information&lt;/h1&gt;
&lt;p&gt;[Service name] needs your NHS login information to match you to your record.&lt;/p&gt;
&lt;p&gt;[dynamic content]&lt;/p&gt;
&lt;p&gt;If you need medical help, go to &lt;a href=&quot;https://111.nhs.uk/&quot;&gt;111.nhs.uk&lt;/a&gt; or call &lt;a href=&quot;tel:111&quot;&gt;111&lt;/a&gt;.&lt;/p&gt;
&lt;p&gt;Call &lt;a href=&quot;tel:999&quot;&gt;999&lt;/a&gt; if it is a life-threatening emergency.&lt;/p&gt;</code></pre>
</div>
</div>
</div>
</div>
</div>
</details>

<p>Contact us if you are unsure which version of the no-consent error screen content guidance is right for your service.</p>
