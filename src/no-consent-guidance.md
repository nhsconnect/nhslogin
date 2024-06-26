---
layout: base.njk
title: Sharing a user's NHS login information with your service
---

<p>For users to access your service they need to agree to share their NHS login information with you. An ID token or authorisation code, containing the user information, must be passed from NHS login to your service. This can only happen with the user's consent.</p>
<p>If a user does not agree to share their NHS login information, your service should display a clear message telling them they can either continue their journey or cannot use your service.</p>

---

<h2 id="journey">User journey asking users to share their NHS login information</h2>
<a href="/nhslogin/images/Guidance-user-journey-no-consent.png" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">
    Open this user journey flow in new window
  </a>
  <div class="code-embed">
  <img class="nhsuk-image__img" src="/nhslogin/images/Guidance-user-journey-no-consent.png" alt="Diagram showing the flow that a user goes down when they do not agree to share their NHS login information with your service">
  </div>
<br>
<p>We ask users to agree to share their NHS login information with your service when:</p>
<ul>
  <li>they register a new level of verification</li>
  <li>they sign into your service using their NHS login for the first time</li>
  <li>your service has an update to the user information required</li>
</ul>

<h3>Consent flow</h3>

<p>When a user agrees to share their NHS login information, they can continue to your website or app and use the service they need.</p>
<p>Their consent allows the ID token with their information to be securely passed from NHS login to your service.</p>

<h3>No-consent flow</h3>

<p>If a user does not agree to share their NHS login information, they can go back from the confirmation screen to amend their decision. They can then continue to your service.</p>
<p>If the user still does not agree to share their NHS login information, they are redirected to your service without passing an ID token or authorisation code.</p>
<p>Their information is not passed to your service, and you need to display a 'no-consent error screen'.</p>
<p>How the user is able to continue to your website or app depends on how you handle them. For example, you may have a guest process or alternative authentication journey.</p>


<p>The suggested content on the no-consent error screen differs, depending on the category of service that you belong to:</p>
<ul>
  <li><a href="nhslogin/no-consent-guidance/#nhsapp">services that use NHS App</li>
  <li><a href="nhslogin/no-consent-guidance/#alternative">services that have alternative user verification processes</a></li>
  <li><a href="nhslogin/no-consent-guidance/#other">all other services</a></li>
</ul>

<div class="nhsuk-inset-text">
  <span class="nhsuk-u-visually-hidden">Information: </span>
  <p>Although the no-consent error screen is the responsibility of your service, the solution does not need a complex implementation and only needs tailored content to adjust user expectations.</p>
</div>

---

<h1 id="NHS-login-buttons">Guidance for no-consent error screen content</h1>

<p>There are three different types of implementation of the no-consent error screen. The guidance most suitable for you will depend on what type of service you are.</p>

<!--
//.....................................................................................
//......AAA.......PPPPP.......PPPPP............WW....WWW....WW.....AAA....AA......YYY..
//.....AAAAA.....PPPPPPPPPP..PPPPPPPPPP.......-WWW..WWWWW..WWWW...AAAAA..AAAYY...YYYY..
//.....AAAAA.....PPPPPPPPPP..PPPPPPPPPP.......-WWW..WWWWW..WWWW...AAAAA..AAAYY...YYYY..
//....AAAAAAA....PPPPPPPPPPP.PPPPPPPPPPP......-WWW..WWWWW..WWWW..AAAAAAA..AAYYY.YYYYY..
//....AAAAAAA....PPPP...PPPP.PPPP...PPPP.......WWWW.WWWWW.WWWW...AAAAAAA...AYYY.YYYY...
//....AAAAAAA....PPPP...PPPP.PPPP...PPPP.......WWWWWWWWWWWWWWW...AAAAAAA...AYYYYYYYY...
//...AAAAAAAAA...PPPPPPPPPPP.PPPPPPPPPPP.......WWWWWWWWWWWWWWW..AAAAAAAAA...YYYYYYY....
//...AAAA.AAAA...PPPPPPPPPPP.PPPPPPPPPPPP-----.WWWWWWWWWWWWWWW..AAAA.AAAA...YYYYYY.....
//...AAAAAAAAAA..PPPPPPPPPP..PPPPPPPPPP.P-----..WWWWWW.WWWWWW...AAAAAAAAAA...YYYYY.....
//..AAAAAAAAAAA..PPPPPPPPP...PPPPPPPPP..P-----..WWWWWW.WWWWWW..AAAAAAAAAAA...YYYY......
//..AAAAAAAAAAA..PPPP........PPPP.......P-----..WWWWWW.WWWWWW..AAAAAAAAAAA...YYYY......
//..AAAAAAAAAAAA.PPPP........PPPP................WWWWW.WWWWW...AAAAAAAAAAAA..YYYY......
//.AAAAA....AAAA.PPPP........PPPP................WWWW...WWWW..WAAAA....AAAA..YYYY......
//.AAAA.....AAAA.PPPP........PPPP................WWWW...WWWW..WAAA.....AAAA..YYYY......
//.....................................................................................
NHS App and Wayfinder
-->

<div class="nhsuk-card nhsuk-card" id="NHSDS">
  <div class="nhsuk-card__content">
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-two-thirds">
              <h2 id="nhsapp">
                Services that use NHS App
              </h2>
              <p class="nhsuk-card__description">Use this version of the no-consent error screen content guidance if your website or app uses NHS App or Wayfinder in either the browser or the mobile application.</p>
              <a href="/nhslogin/images/Guidance-example-no-consent-nhs-app.png" target="_blank" rel="noopener noreferrer">
          Open this example in new window
        </a>
              <hr>
      </div>
      <div class="nhsuk-grid-column-one-third">
          <img class="nhsuk-image__img" src="/nhslogin/images/Guidance-example-no-consent-nhs-app.png" alt="Examples of the mobile app and browser 'no-consent error screen' content for services that use NHS App">
      </div>
      </div>
      <details class="nhsuk-details nhsuk-expander--no-outline">
        <summary class="nhsuk-details__summary">
          <span class="nhsuk-details__summary-text">
            View the no-consent error screen content guidance for services that use NHS App
          </span>
        </summary>
      <div class="nhsuk-details__text nhsuk-grid-row">
      <div class="nhsuk-grid-column-full width">
      <ul class="nhsuk-inside-box-text" style="max-width:none;">
        <li>This version of the no-consent error screen refers to your service as 'The service provider'. 
This should remain unchanged. Do not use the name of your service as it may not make sense to the user in their journey.</li>
        <li>To align with other services that use NHS App, only use the content provided and do not change it.</li>
        <li>To minimise clinical risk, make sure all anchor tags to emergency services are operational and implemented as suggested.</li>
        <li>You can use your service font, headers, footers and styling on this screen, but it must follow our styling guidelines.</li>
      </ul>
      <hr>
      <h3>How to display content for the no-consent error screen</h3>
      <p>Here are two examples of the NHS App no-consent error screen. You can copy the content and code by selecting the HTML tab below each diagram.</p>
      <p>You will need to apply your own CSS to the code. You should not add any other content to this screen.</p>
      <p>The version of copy your service will use depends on whether your service:</p>
       <ul>
        <li><a href="nhslogin/no-consent-guidance/#browser">uses NHS App in the browser</a></li>
        <li><a href="nhslogin/no-consent-guidance/#mobile">uses NHS App in the mobile application</a></li>
       </ul>
       <h4 id="browser">Services that use NHS App in the broswer</h4>
      <div class="design-example">
        <a href="/nhslogin/example-no-consent-content-nhs-app-browser" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">
          Open this example in new window
        </a>
        <div class="code-embed">
        <iframe title="default" src="/nhslogin/example-no-consent-content-nhs-app-browser" class="design-example-frame" id="iFrameResizer0" scrolling="no" style="overflow: hidden; height: 156px;"></iframe>
        </div>
      <div class="code-snippet">
                <ul class="app-tabs" role="tablist">
                    <li class="app-tabs__item app-tabs__item--current" role="presentation" data-index="ex-1">
                      <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                        HTML
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
                      <pre><code class=""><span class="hljs-tag">&lt;h1&gt;</span>You cannot continue without sharing your information <span class="hljs-tag">&lt;/h1&gt;</span>
<span class="hljs-tag">&lt;p&gt;</span>The service provider needs your NHS login information to verify your identity.<span class="hljs-tag">&lt;/p&gt;</span>
<span class="hljs-tag">&lt;p&gt;</span>If you need medical help, go to <span class="hljs-tag">&lt;a <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://111.nhs.uk/&quot;</span>&gt;</span>111.nhs.uk<span class="hljs-tag">&lt;/a&gt;</span> or call<span class="hljs-tag">&lt;a <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;tel:111</span><span class="hljs-string">&quot;</span>&gt;</span>111<span class="hljs-tag">&lt;/a&gt;</span> or your GP.<span class="hljs-tag">&lt;/p&gt;</span>
<span class="hljs-tag">&lt;p&gt;</span>Call <span class="hljs-tag">&lt;a <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;tel:999</span><span class="hljs-string">&quot;</span>&gt;</span>999<span class="hljs-tag">&lt;/a&gt;</span> if it's a life-threatening emergency.<span class="hljs-tag">&lt;/p&gt;</span> 
<span class="hljs-tag">&lt;p&gt;</span>Close this tab to go back to NHS App.<span class="hljs-tag">&lt;/p&gt;</span>
                      </code></pre>
                    </div>
                    <a class="app-link--close" href="javascript:void(0);" aria-live="assertive">
                      Close
                    </a>
                  </div>
            </div>
        </div>
</div>

<strong>Behaviour of the back button in the browser</strong>
<p>Current guidance instructs the user to close your service's no-consent error screen tab to return to the NHS App in the browser.
</p>
<p>Do not add your own back button to this page.</p>
 <p>When a user selects the back button in the browser, the preferred action for your service's no-consent error screen is to reload. In a service where this is not possible, NHS login has implemented a technical solution to prevent users from entering the service again by means of the back button in the browser.</p>
 
 <p>This solution means that if users go back using the browser back button and do not have either NHS authorisation cookies, or an ID token in place, they will be directed to an error screen within NHS login.</p>

   <a href="/nhslogin/images/no-consent-guard-login-error-screen.png" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">
      Open this example of the NHS login internal error screen in new window
    </a>
    <div class="code-embed">
    <img class="nhsuk-image__img" src="/nhslogin/images/no-consent-guard-login-error-screen.png" alt="Diagram showing the internal NHS login error screen shown to a user who does not have NHS authorisation cookies or an ID token in place">
    </div>
  
  <p style="margin-top: 24px">This error screen will be the responsibility of NHS login and no additional steps need to be taken by your service.</p>
 
<h4 id="mobile">Services that use NHS App in the mobile application</h4>

<div class="design-example">
        <a href="/nhslogin/example-no-consent-content-wayfinder" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">
          Open this example in new window
        </a>
        <div class="code-embed">
        <iframe title="default" src="/nhslogin/example-no-consent-content-wayfinder" class="design-example-frame" id="iFrameResizer3" scrolling="no" style="overflow: hidden; height: 156px;"></iframe>
        </div>
      <div class="code-snippet">
                <ul class="app-tabs" role="tablist">
                    <li class="app-tabs__item app-tabs__item--current" role="presentation" data-index="ex-1">
                      <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                        HTML
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
                      <pre><code class=""><span class="hljs-tag">&lt;h1&gt;</span>You cannot continue without sharing your information <span class="hljs-tag">&lt;/h1&gt;</span>
<span class="hljs-tag">&lt;p&gt;</span>The service provider needs your NHS login information to verify your identity.<span class="hljs-tag">&lt;/p&gt;</span>
<span class="hljs-tag">&lt;p&gt;</span>If you need medical help, go to <span class="hljs-tag">&lt;a <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://111.nhs.uk/&quot;</span>&gt;</span>111.nhs.uk<span class="hljs-tag">&lt;/a&gt;</span> or call<span class="hljs-tag">&lt;a <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;tel:111</span><span class="hljs-string">&quot;</span>&gt;</span>111<span class="hljs-tag">&lt;/a&gt;</span> or your GP.<span class="hljs-tag">&lt;/p&gt;</span>
<span class="hljs-tag">&lt;p&gt;</span>Call <span class="hljs-tag">&lt;a <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;tel:999</span><span class="hljs-string">&quot;</span>&gt;</span>999<span class="hljs-tag">&lt;/a&gt;</span> if it's a life-threatening emergency.<span class="hljs-tag">&lt;/p&gt;</span> 
                      </code></pre>
                    </div>
                    <a class="app-link--close" href="javascript:void(0);" aria-live="assertive">
                      Close
                    </a>
                  </div>
            </div>
        </div>
</div>

<strong>Behaviour of the back navigation in the NHS App (mobile application only)</strong>
 <p>A user can return to previous point in their journey in the NHS App by using the native back link. </p>
 <!-- <p>At present, the point in the NHS App journey to which the user is taken is the appointment screen, regardless of where the user entered the journey from.</p> -->

<strong>Styling guidelines</strong>
  <ul>
          <li style="max-width:none;">heading font size should be no smaller than 20px.</li>
          <li style="max-width:none;">body copy should be no smaller than 16px.</li>
          <li style="max-width:none;">hyperlink emergency contact numbers as advised.</li>
  </ul>

<div class="nhsuk-inset-text">
  <span class="nhsuk-u-visually-hidden">Contact information: </span>
  <p>For any queries about how NHS App will work with your service, email <a href="mailto:app.integration@nhs.net">app.integration@nhs.net</a>.</p>
</div>

</div>
</div>
</div>
</div>
      
      
      
      
      
      
      
<!-- 
//..........................................................................................................................................
//......AAA.......LL......LTTTTTTTTT...EEEEEEEE....RRRRR........NN......N.......AAA....AATTTTTTTT..TI..II.......VV..VEEEEEEEE....SSSSSS.....
//.....AAAAA.....LLLL....LLTTTTTTTTTT.EEEEEEEEEE..RRRRRRRRRR..RNNNN...NNNN.....AAAAA..AAATTTTTTTTTTTIIIIIV....VVVVVVVEEEEEEEEE..ESSSSSSS....
//.....AAAAA.....LLLL....LLTTTTTTTTTT.EEEEEEEEEE..RRRRRRRRRRR.RNNNNN..NNNN.....AAAAA..AAATTTTTTTTTTTIIIIIVV...VVVV.VVEEEEEEEEE.EESSSSSSSS...
//....AAAAAAA....LLLL....LLTTTTTTTTTT.EEEEEEEEEE..RRRRRRRRRRR.RNNNNN..NNNN....AAAAAAA.AAATTTTTTTTTTTII.IIVV...VVVV.VVEEEEEEEEE.EESSSSSSSSS..
//....AAAAAAA....LLLL........TTTT.....EEE.........RRR....RRRR.RNNNNNN.NNNN....AAAAAAA.....TTTT....TTII.IIVV..VVVVV.VVEE........EESS...SSSS..
//....AAAAAAA....LLLL........TTTT.....EEEEEEEEEE..RRR....RRRR.RNNNNNN.NNNN...AAAAAAAA.....TTTT....TTII.IIVVV.VVVV..VVEEEEEEEE..EESSSS.......
//...AAAAAAAAA...LLLL........TTTT.....EEEEEEEEEE..RRRRRRRRRRR.RNNNNNNNNNNN...AAAAAAAAA....TTTT....TTII..IVVV.VVVV..VVEEEEEEEE..EESSSSSSS....
//...AAAA.AAAA...LLLL........TTTT.....EEEEEEEEEE..RRRRRRRRRR..RNNNNNNNNNNN...AAAA.AAAA....TTTT....TTII..IVVV.VVVV..VVEEEEEEEE..EESSSSSSSS...
//...AAAAAAAAAA..LLLL........TTTT.....EEEEEEEEEE..RRRRRRRRRRR.RNNN.NNNNNNN..AAAAAAAAAA....TTTT....TTII..IVVVVVVV...VVEEEEEEEE....SSSSSSSSS..
//..AAAAAAAAAAA..LLLL........TTTT.....EEE.........RRR..RRRRRR.RNNN.NNNNNNN..AAAAAAAAAAA...TTTT....TTII...VVVVVVV...VVEE.......EEES...SSSSS..
//..AAAAAAAAAAA..LLLL........TTTT.....EEE.........RRR....RRRR.RNNN..NNNNNN..AAAAAAAAAAA...TTTT....TTII...VVVVVVV...VVEE.......EEESS...SSSS..
//..AAAAAAAAAAAA.LLLLLLLLLL..TTTT.....EEEEEEEEEEE.RRR....RRRR.RNNN...NNNNN.NAAAAAAAAAAA...TTTT....TTII...VVVVVV....VVEEEEEEEEE.EESSSSSSSSS..
//.AAAAA....AAAA.LLLLLLLLLL..TTTT.....EEEEEEEEEEE.RRR....RRRR.RNNN...NNNNN.NAAA....AAAAA..TTTT....TTII....VVVVV....VVEEEEEEEEE.EESSSSSSSSS..
//.AAAA.....AAAA.LLLLLLLLLL..TTTT.....EEEEEEEEEEE.RRR....RRRRRRNNN....NNNN.NAAA.....AAAA..TTTT....TTII....VVVV.....VVEEEEEEEEE..ESSSSSSSS...
//................................................................................................................................SSSSS.....
//..........................................................................................................................................
-->


<div class="nhsuk-card nhsuk-card" id="NHS">
  <div class="nhsuk-card__content">
    <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-full">
                <h2 id="alternative">
                  Services that have alternative user verification processes
                </h2>
                <p class="nhsuk-card__description">Use this version of the no-consent error screen content guidance if your website or app can get user information for verification in an alternative way, such as 111 online.</p>
        </div>
    </div>
    <hr>
        <details class="nhsuk-details nhsuk-expander--no-outline">
          <summary class="nhsuk-details__summary">
            <span class="nhsuk-details__summary-text">
              View the no-consent error screen content guidance for services that have alternative user verification processes
            </span>
          </summary>
          <div class="nhsuk-details__text nhsuk-grid-row">
            <div class="nhsuk-grid-column-full width">
              <h3>What is an alternative user verification process?</h3>
              <p>This is when users can log in as a guest using their own details without the need for passing an ID token.</p>
              <p>If this is possible in your service, you do not need to display the no-consent error screen.</p>
              <p>Instead, the user will move directly to the guest process.</p>
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
              <h2 id="other">
                All other services
              </h2>
              <p class="nhsuk-card__description">Use this version of the no-consent error screen content guidance if the previous options did not describe your service.</p>
              <a href="/nhslogin/images/Guidance-example-other.png" target="_blank" rel="noopener noreferrer">
          Open this example in new window
        </a>
              <hr>
      </div>
      <div class="nhsuk-grid-column-one-third">
          <img class="nhsuk-image__img" src="/nhslogin/images/Guidance-example-other.png" alt=" Example of the no-consent error screen content for all other services">
      </div>
      </div>
      <details class="nhsuk-details nhsuk-expander--no-outline">
        <summary class="nhsuk-details__summary">
          <span class="nhsuk-details__summary-text">
            View the no-consent error screen content guidance for all other services
          </span>
        </summary>
      <div class="nhsuk-details__text nhsuk-grid-row">
      <div class="nhsuk-grid-column-full width">
      <ul class="nhsuk-inside-box-text" style="max-width:none;">
        <li>In this version we recommend that you insert the name of your service in the [Service name] placeholder.</li>
        <li>The "dynamic content" placeholder text indicates variable text where you may insert your own copy.</li>
        <li>To minimise clinical risk, make sure all anchor tags to emergency services are operational and implemented as suggested.</li>
         <li>You can use your service font, headers, footers and styling on this screen, but it must follow our styling guidelines.</li>
      </ul>
      <hr>
      <h3>How to display content for the no-consent error screen</h3>
      <p>Here is an example of the no-consent error screen. You can copy the content and code by selecting the HTML tab below this diagram.</p>
      <p>You will need to apply your own CSS to the code.</p>
      <div class="design-example">
        <a href="/nhslogin/example-no-consent-content-other" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">
          Open this example in new window
        </a>
        <div class="code-embed">
        <iframe title="default" src="/nhslogin/example-no-consent-content-other" class="design-example-frame" id="iFrameResizer1" scrolling="no" style="overflow: hidden; height: 156px;"></iframe>
        </div>
      <div class="code-snippet">
                <ul class="app-tabs" role="tablist">
                    <li class="app-tabs__item app-tabs__item--current" role="presentation" data-index="ex-1">
                      <a href="javascript:void(0);" role="tab" aria-controls="default-example" data-track="tab-html" aria-selected="true">
                        HTML
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
                      <pre><code class=""><span class="hljs-tag">&lt;h1&gt;</span>You cannot continue without sharing your information <span class="hljs-tag">&lt;/h1&gt;</span>
<span class="hljs-tag">&lt;p&gt;</span>[Service name] needs your NHS login information to verify your identity.<span class="hljs-tag">&lt;/p&gt;</span>
<span class="hljs-tag">&lt;p&gt;</span>Dynamic content.<span class="hljs-tag">&lt;/p&gt;</span>
<span class="hljs-tag">&lt;p&gt;</span>If you need medical help, go to <span class="hljs-tag">&lt;a <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://111.nhs.uk/&quot;</span>&gt;</span>111.nhs.uk<span class="hljs-tag">&lt;/a&gt;</span> or call<span class="hljs-tag">&lt;a <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;tel:111</span><span class="hljs-string">&quot;</span>&gt;</span>111<span class="hljs-tag">&lt;/a&gt;</span> or your GP.<span class="hljs-tag">&lt;/p&gt;</span>
<span class="hljs-tag">&lt;p&gt;</span>Call <span class="hljs-tag">&lt;a <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;tel:999</span><span class="hljs-string">&quot;</span>&gt;</span>999<span class="hljs-tag">&lt;/a&gt;</span> if it's a life-threatening emergency.<span class="hljs-tag">&lt;/p&gt;</span> 
                      </code></pre>
                    </div>
                    <a class="app-link--close" href="javascript:void(0);" aria-live="assertive">
                      Close
                    </a>
                  </div>
            </div>
        </div>
</div>

<strong>Styling guidelines</strong>
  <ul>
          <li style="max-width:none;">heading font size should be no smaller than 20px.</li>
          <li style="max-width:none;">body copy should be no smaller than 16px.</li>
          <li style="max-width:none;">hyperlink emergency contact numbers as advised.</li>
  </ul>

<strong>Dynamic content suggestions</strong>
 <p>Only add your own content when you have information that might be of value to the user to either navigate away from the no-consent error screen, or to correct any errors. For example, a contact email or number.</p>

</div>
</div>
</div>
</div>

<p>Contact us if you are unsure which version of the no-consent error screen content guidance is right for your service.</p> 
