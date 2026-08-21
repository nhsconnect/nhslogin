---
layout: base.njk
title: Sharing a user's NHS login information with your service
---

<!--
  DRAFT FOR FEEDBACK

  This version deliberately uses standard headings and the existing NHS expander
  pattern. It does not use the card layout currently on the published page.

  Decisions still to confirm:
  1. If a service has both a guest process and alternative authentication, which
     route should take priority?
  2. Does the Wayfinder content apply to e-RS as well as participating PEPs?
  3. Confirm the final, signed-off user journey image before publishing.
-->

<p>For users to access your service, they need to agree to share their NHS login information with you. NHS login can only pass an ID token or authorisation code containing their information to your service with their consent.</p>

<p>If a user chooses to continue without sharing their NHS login information, NHS login returns them to your service without an ID token or authorisation code. What your service shows next depends on what the user can do next.</p>

---

<h2 id="journey">The user journey</h2>

<p>The diagram shows what happens when NHS login asks a user to share their information with your service.</p>

<a href="/nhslogin/images/Guidance-user-journey-no-consent.png" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">
  Open the user journey flow in a new window
</a>

<div class="code-embed">
  <img class="nhsuk-image__img" src="/nhslogin/images/Guidance-user-journey-no-consent.png" alt="Diagram showing the user journey when a user agrees or does not agree to share their NHS login information with a service">
</div>

<p>We ask users to agree to share their NHS login information with your service when they:</p>

<ul>
  <li>register a new level of verification</li>
  <li>sign in to your service using NHS login for the first time</li>
  <li>need to share information your service has not previously requested</li>
</ul>

<h3>What a user sees in NHS login</h3>

<p>The consent screen lets the user agree to share their information or choose <strong>I do not agree to share this information</strong>. If they do not agree, the confirmation screen lets them go back and agree, or continue to your service without sharing their information.</p>

<!--
  Add the approved consent and no-consent confirmation screen examples here when
  the final assets are available. Keep these examples outside any expander.
-->

<h2 id="after-no-consent">What happens after a user chooses to continue without sharing their information</h2>

<p>NHS login returns the user to your service without an ID token or authorisation code. Choose the route that applies to your service.</p>

<h3 id="guest-process">Offer a guest process</h3>

<p>Use this route if a user can continue without NHS login information.</p>

<p>A guest process can include a guest or unregistered journey, such as an online consultation or a GP-registration journey. If your service offers a guest process, do not show a no-consent error screen. Let the user continue through the guest process when they return from NHS login.</p>

<h3 id="alternative-authentication">Offer another authentication method</h3>

<p>Use this route if the user cannot continue as a guest, but your service offers another way to authenticate them.</p>

<p>Show a tailored screen that gives the user a clear choice to go back and use NHS login or use your service's authentication method. This is a separate route from a guest process.</p>

<details class="nhsuk-details nhsuk-expander--no-outline">
  <summary class="nhsuk-details__summary">
    <span class="nhsuk-details__summary-text">View alternative authentication example and HTML</span>
  </summary>
  <div class="nhsuk-details__text">
    <h4>Content guidance</h4>
    <ul class="nhsuk-inside-box-text" style="max-width:none;">
      <li>Replace <code>[Service name]</code> and the sign-in link text.</li>
      <li>Use <strong>authentication</strong>, not verification, for the partner's alternative route.</li>
      <li>Your service owns the journey after the user chooses its authentication method.</li>
      <li>NHS login does not pass an ID token or authorisation code on this route.</li>
    </ul>

    <div class="design-example">
      <div class="code-snippet">
        <div class="code-snippet__preformatted">
          <pre><code>&lt;h1&gt;Choose how you want to continue&lt;/h1&gt;
&lt;p&gt;You chose not to share your NHS login information with [Service name].&lt;/p&gt;
&lt;p&gt;To continue, you can go back and use NHS login or sign in to [Service name].&lt;/p&gt;
&lt;p&gt;&lt;a href="[NHS login return URL]"&gt;Go back and use NHS login&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href="[service authentication URL]"&gt;Sign in to [Service name]&lt;/a&gt;&lt;/p&gt;</code></pre>
        </div>
      </div>
    </div>
  </div>
</details>

<h3 id="standard-error-screen">Standard no-consent error screen</h3>

<p>Use this route if your service has neither a guest process nor another authentication method, and is not opened through the Wayfinder appointment journey.</p>

<p>Tell the user that their NHS login information was not passed to your service. Replace <code>[Service name]</code> with the name of your service and add useful next-step information, such as a support email address or phone number.</p>

<!--
  Insert the approved partner-owned standard no-consent screen example here.
  Keep the preview outside the expander.
-->

<details class="nhsuk-details nhsuk-expander--no-outline">
  <summary class="nhsuk-details__summary">
    <span class="nhsuk-details__summary-text">View standard error-screen content and HTML</span>
  </summary>
  <div class="nhsuk-details__text">
    <h4>Content guidance</h4>
    <ul class="nhsuk-inside-box-text" style="max-width:none;">
      <li>Explain what NHS login information the service needs to match the user to their record.</li>
      <li>Add only information that will help the user continue.</li>
      <li>Keep the emergency service links operational.</li>
    </ul>

    <h4>Styling requirements</h4>
    <ul class="nhsuk-inside-box-text" style="max-width:none;">
      <li>Use a heading font size of at least 20px.</li>
      <li>Use body copy of at least 16px.</li>
      <li>Make emergency contact numbers into links.</li>
    </ul>

    <div class="design-example">
      <div class="code-snippet">
        <div class="code-snippet__preformatted">
          <pre><code>&lt;h1&gt;You cannot continue without sharing your information&lt;/h1&gt;
&lt;p&gt;[Service name] needs your NHS login information to match you to your record.&lt;/p&gt;
&lt;p&gt;[Add information that will help the user continue, such as a support email address or phone number.]&lt;/p&gt;
&lt;p&gt;If you need medical help, go to &lt;a href="https://111.nhs.uk/"&gt;111.nhs.uk&lt;/a&gt; or call &lt;a href="tel:111"&gt;111&lt;/a&gt;, or contact your GP surgery.&lt;/p&gt;
&lt;p&gt;Call &lt;a href="tel:999"&gt;999&lt;/a&gt; if it is a life-threatening emergency.&lt;/p&gt;</code></pre>
        </div>
      </div>
    </div>
  </div>
</details>

<h3 id="wayfinder">Services opened from NHS App through Wayfinder</h3>

<p>Use this route if your service is opened from a referral or appointment in NHS App through Wayfinder. This applies to participating Wayfinder integrations, such as patient engagement portals.</p>

<p>When the user chooses to continue without sharing their NHS login information, tell them that the information was not passed to your service. Use <strong>the service provider</strong>, not the name of your service.</p>

<!--
  Insert the approved partner-owned Wayfinder no-consent screen example here.
  Keep the preview outside the expander.
-->

<details class="nhsuk-details nhsuk-expander--no-outline">
  <summary class="nhsuk-details__summary">
    <span class="nhsuk-details__summary-text">View Wayfinder error-screen content</span>
  </summary>
  <div class="nhsuk-details__text">
    <div class="nhsuk-inset-text">
      <span class="nhsuk-u-visually-hidden">Information: </span>
      <p>Only use the content below. You can use your service font, header, footer and styling, but the screen must follow the styling requirements.</p>
    </div>

    <h4>Styling requirements</h4>
    <ul class="nhsuk-inside-box-text" style="max-width:none;">
      <li>Use a heading font size of at least 20px.</li>
      <li>Use body copy of at least 16px.</li>
      <li>Make emergency contact numbers into links.</li>
    </ul>

    <h4 id="wayfinder-browser">Browser</h4>
    <p>Do not add your own back button to this page. The user closes the service tab to return to NHS App. The preferred browser back action is to reload the page.</p>
    <p>If this is not possible, NHS login prevents users from entering your service again using the browser back button when they do not have the required authorisation cookies or an ID token.</p>

    <div class="design-example">
      <div class="code-snippet">
        <div class="code-snippet__preformatted">
          <pre><code>&lt;h1&gt;You cannot continue without sharing your information&lt;/h1&gt;
&lt;p&gt;The service provider needs your NHS login information to match you to your record.&lt;/p&gt;
&lt;p&gt;If you need medical help, go to &lt;a href="https://111.nhs.uk/"&gt;111.nhs.uk&lt;/a&gt; or call &lt;a href="tel:111"&gt;111&lt;/a&gt;, or contact your GP surgery.&lt;/p&gt;
&lt;p&gt;Call &lt;a href="tel:999"&gt;999&lt;/a&gt; if it is a life-threatening emergency.&lt;/p&gt;
&lt;p&gt;Close this tab to go back to NHS App.&lt;/p&gt;</code></pre>
        </div>
      </div>
    </div>

    <h4 id="wayfinder-mobile">NHS App mobile application</h4>
    <p>A user can return to the previous point in their journey in NHS App using the native back link.</p>

    <div class="design-example">
      <div class="code-snippet">
        <div class="code-snippet__preformatted">
          <pre><code>&lt;h1&gt;You cannot continue without sharing your information&lt;/h1&gt;
&lt;p&gt;The service provider needs your NHS login information to match you to your record.&lt;/p&gt;
&lt;p&gt;If you need medical help, go to &lt;a href="https://111.nhs.uk/"&gt;111.nhs.uk&lt;/a&gt; or call &lt;a href="tel:111"&gt;111&lt;/a&gt;, or contact your GP surgery.&lt;/p&gt;
&lt;p&gt;Call &lt;a href="tel:999"&gt;999&lt;/a&gt; if it is a life-threatening emergency.&lt;/p&gt;</code></pre>
        </div>
      </div>
    </div>
  </div>
</details>

<div class="nhsuk-inset-text">
  <span class="nhsuk-u-visually-hidden">Contact information: </span>
  <p>Contact the NHS login team if you are not sure which no-consent guidance applies to your service.</p>
</div>
