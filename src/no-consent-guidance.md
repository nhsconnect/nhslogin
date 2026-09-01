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

<div class="design-example">
<a href="/nhslogin/images/nhs-login-consent-no-consent-flow.svg" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">Open this simplified consent and no-consent flow in a new window</a>
<div class="code-embed">
<img class="nhsuk-image__img" src="/nhslogin/images/nhs-login-consent-no-consent-flow.svg" alt="NHS login consent screen with a tick route to the partner service and a cross route through the no-consent confirmation screen to the partner service without an authorisation code">
</div>
</div>

<p>If they agree, NHS login redirects them to your service with an authorisation code. Your service exchanges this for an ID token.</p>

<p>If they do not agree, NHS login redirects them to your service without an authorisation code. NHS login does not issue an ID token.</p>

<h2>What to do when users do not share their NHS login information</h2>

<p>Users who do not agree may be redirected to your service without their NHS login information.</p>

<p>Choose the option below that applies to your service.</p>

<div class="nhsuk-inset-text">
  <span class="nhsuk-u-visually-hidden">Information: </span>
  <p>The user has authenticated with NHS login, but their NHS login information has not been passed to your service.</p>
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

<p>A guest process allows users to access your service without sharing any NHS login information.</p>

<p>If you offer a guest process, you do not need to show an error screen. Instead, make sure the user can see a guest option on your landing screen once they arrive from NHS login.</p>

<h4>Example of a guest option</h4>
<div class="design-example">
<a href="/nhslogin/example-no-consent-content-guest" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">Open this example in a new window</a>
<div class="code-embed">
<iframe title="Guest-process option example" src="/nhslogin/example-no-consent-content-guest" class="design-example-frame" scrolling="no" style="overflow:hidden;height:310px;"></iframe>
</div>
</div>

<h3 id="alternative-authentication">If you provide an alternative authentication method</h3>

<p>If your service offers another authentication method, users need a way to either use that method or go back to NHS login and agree to share their information.</p>

<details class="nhsuk-details nhsuk-expander--no-outline">
<summary class="nhsuk-details__summary">
<span class="nhsuk-details__summary-text">Guidance for an alternative authentication screen</span>
</summary>
<div class="nhsuk-details__text">
<p>The screen must:</p>
<ul>
<li>allow the user to go back to NHS login and opt to share their information</li>
<li>provide a link or button to your alternative authentication method</li>
</ul>

<h4>Example screen</h4>
<div class="design-example">
<a href="/nhslogin/example-no-consent-content-alternative" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">Open this example in a new window</a>
<div class="code-embed">
<iframe title="Alternative authentication no-consent screen" src="/nhslogin/example-no-consent-content-alternative" class="design-example-frame" scrolling="no" style="overflow:hidden;height:340px;"></iframe>
</div>
</div>
<h4>Styling requirements</h4>
<p>You can use your service font, headers, footers and styling on this screen.</p>
<h4>HTML</h4>
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

<details class="nhsuk-details nhsuk-expander--no-outline">
<summary class="nhsuk-details__summary">
<span class="nhsuk-details__summary-text">Guidance for a standard no-consent error screen</span>
</summary>
<div class="nhsuk-details__text">
<p>The example below uses MyHealth App to show how the screen can look. In the HTML, replace <code>[Service name]</code> with the name of your service. Only add content in <code>[dynamic content]</code> if it helps the user move on or correct an error.</p>

<h4>Example screen</h4>
<div class="design-example">
<a href="/nhslogin/example-no-consent-content-other" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">Open this example in a new window</a>
<div class="code-embed">
<iframe title="Standard no-consent error screen" src="/nhslogin/example-no-consent-content-other" class="design-example-frame" scrolling="no" style="overflow:hidden;height:390px;"></iframe>
</div>
</div>
<h4>Styling requirements</h4>
<p>You can use your service font, headers, footers and styling on this screen, but it must follow our styling guidelines.</p>
<p>To minimise clinical risk, make sure all anchor tags to emergency services are operational and implemented as suggested.</p>
<h4>HTML</h4>
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

<p>If you are unsure which version applies to your service, <a href="/nhslogin/developer-support/">get support with your NHS login integration</a>.</p>
