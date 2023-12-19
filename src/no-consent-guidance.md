---
layout: base.njk
title: Sharing a user's NHS login information with your service
---

<p>For users to access your service they need to agree to share their NHS login information with you. In order for user information to be received by your service, and ID token or autorisation code, containing the user information, must be passed from NHS login to your service. This can only be done with ther user's consent.</p>
<p>If a user does not agree to share their NHS login information, your service should display a clear message telling them what they can do to continue their journey, or that they will be unable to use your service.</p>

---

<h2 id="journey">User journey asking users to share their NHS login information</h2>
<a href="/nhslogin/images/Guidance-userjourney-consent.png" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">
    Open this user journey flow in new window
  </a>
  <div class="code-embed">
  <img class="nhsuk-image__img" src="/nhslogin/images/Guidance-userjourney-consent.png" alt="Diagram showing the flow that a user goes down from selecting the NHS button to being authorised by NHS login and back to the partner service.">
  </div>
<br>
<p>We ask users to agree to share their NHS login information with your service when they use your service to:</p>
<ul>
  <li>register a new level of verification</li>
  <li>sign into NHS login for the first time</li>
</ul>

<h3>Consent flow</h3>

<p>When a user agrees to share their NHS login information, they can continue to your website or app and use the service they need.</p>
<p>Their consent allows the ID token with their information to be securely passed from NHS login to your service.</p>

<h3>No-consent flow</h3>

<p>If a user does not agree to share their NHS login information, they can go back from the confirmation screen to amend their decision. They can then continue to your service.</p>
<p>If the user still does not agree to share their NHS login information, they will be redirected to your service without passing an ID token or authorisation code.</p>
<p>Their information is not passed to your service and you need to display a no-consent error screen.</p>
<p>How the user is able to continue to your website or app depends on how you handle them. For example, you may have a guest process or alternative authentication journey.</p>


<p>The suggested content on the no-consent error screen differs,depending on the type of service you are.</p>
<ul>
  <li>a service that uses Wayfinder</li>
  <li>a service that has alternative journeys or processes</li>
  <li>any other type of service</li>
</ul>

<div class="nhsuk-inset-text">
  <span class="nhsuk-u-visually-hidden">Information: </span>
  <p>Though the no-consent error screen is the responsibility of your service, the solution does not require a technically complex implementation and only requires tailored content to adjust user expectations.</p>
</div>

---

<h1 id="NHS-login-buttons">Guidance for no-consent error screen content</h1>

<p>There are three different types of implementation of the no-consent error screen. The guidance most suitable for you will depend on what type of service you are.</p>

<!--
//.............................................................................................................
//..WW....WWW....WW.....AAA....AA......YYY.............FI...IN......NN...NDDDD........DEEEEEEEE...ERRRRR.......
//.WWWW..WWWWW..WWWW...AAAAA..AAAYY...YYYYYYYFFFFFFFF.FFII.IINNN...NNNN.NNDDDDDDDD...DDEEEEEEEEE.EERRRRRRRRR...
//.WWWW..WWWWW..WWWW...AAAAA..AAAYY...YYYY.YYFFFFFFFF.FFII.IINNN...NNNN.NNDDDDDDDDD..DDEEEEEEEEE.EERRRRRRRRR...
//.WWWW..WWWWW..WWWW..AAAAAAA..AAYYY.YYYYY.YYFFFFFFFF.FFII.IINNNN..NNNN.NNDDDDDDDDD..DDEEEEEEEEE.EERRRRRRRRRR..
//..WWWW.WWWWW.WWWW...AAAAAAA...AYYY.YYYY..YYFF.......FFII.IINNNN..NNNN.NNDD...DDDDD.DDEE........EERR...RRRRR..
//..WWWWWWWWWWWWWWW...AAAAAAA...AYYYYYYYY..YYFF.......FFII.IINNNNN.NNNN.NNDD....DDDD.DDEEEEEEEE..EERR....RRRR..
//..WWWWWWWWWWWWWWW..AAAAAAAAA...YYYYYYY...YYFFFFFFFF.FFII.IINNNNN.NNNN.NNDD....DDDD.DDEEEEEEEE..EERRRRRRRRRR..
//..WWWWWWWWWWWWWWW..AAAA.AAAA...YYYYYY....YYFFFFFFFF.FFII.IINNNNNNNNNN.NNDD....DDDD.DDEEEEEEEE..EERRRRRRRRR...
//...WWWWWW.WWWWWW...AAAAAAAAAA...YYYYY....YYFFFFFFFF.FFII.IINNNNNNNNNN.NNDD....DDDD.DDEEEEEEEE..EERRRRRRRRR...
//...WWWWWW.WWWWWW..AAAAAAAAAAA...YYYY.....YYFF.......FFII.IINN.NNNNNNN.NNDD....DDDD.DDEE........EERR..RRRRR...
//...WWWWWW.WWWWWW..AAAAAAAAAAA...YYYY.....YYFF.......FFII.IINN..NNNNNN.NNDD...DDDDD.DDEE........EERR....RRRR..
//....WWWWW.WWWWW...AAAAAAAAAAAA..YYYY.....YYFF.......FFII.IINN..NNNNNN.NNDDDDDDDDD..DDEEEEEEEEE.EERR....RRRR..
//....WWWW...WWWW..WAAAA....AAAA..YYYY.....YYFF.......FFII.IINN...NNNNN.NNDDDDDDDDD..DDEEEEEEEEE.EERR....RRRR..
//....WWWW...WWWW..WAAA.....AAAA..YYYY.....YYFF.......FFII.IINN...NNNNN.NNDDDDDDDD...DDEEEEEEEEE.EERR....RRRR..
//.............................................................................................................
-->

<div class="nhsuk-card nhsuk-card" id="NHSDS">
  <div class="nhsuk-card__content">
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-two-thirds">
              <h2>
                Services that use Wayfinder
              </h2>
              <p class="nhsuk-card__description">Use this version of the no-consent error screen content guidance if your website or app uses Wayfinder, such as <a href="" target="_blank">Health Call</a>.</p>
              <hr>
      </div>
      <div class="nhsuk-grid-column-one-third">
          <img class="nhsuk-image__img" src="/nhslogin/images/Guidance-example-wayfinder.png" alt="Example of NHS login button alongside other log in or register options">
      </div>
      </div>
      <details class="nhsuk-details nhsuk-expander--no-outline">
        <summary class="nhsuk-details__summary">
          <span class="nhsuk-details__summary-text">
            View the no-consent error screen content guidance for services that use Wayfinder
          </span>
        </summary>
      <div class="nhsuk-details__text nhsuk-grid-row">
      <div class="nhsuk-grid-column-full width">
      <ul class="nhsuk-inside-box-text" style="max-width:none;">
        <li>This version of the no-consent error screen refers to your service as "The service provider". This should remain unchanged. Do not use the name of your service as it may not make sense to the user in their journey.</li>
        <li>To align with all other services that use Wayfinder, only use the content provided and do not change it.</li>
        <li>To minimise clinical risk, make sure all anchor tags to emergency services are operational and implemented as suggested.</li>
        <li>You can use your service font and styling on this page, but it must follow our styling suggestions.</li>
      </ul>
      <hr>
      <h3>How to display content for the no-consent error screen</h3>
      <p>Here is an example of the Wayfinder no-consent error page. You can copy the content and code by selecting the HTML tab below this diagram.</p>
      <p>You will need to apply your own CSS to the code. You should not add any other content to this screen.</p>
      <div class="design-example">
        <a href="/nhslogin/images/Guidance-example-wayfinder.png" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">
          Open this image in new window
        </a>
        <div class="code-embed">
        <iframe title="default" src="/nhslogin/example-no-consent-content-wayfinder" class="design-example-frame" id="iFrameResizer0" scrolling="no" style="overflow: hidden; height: 156px;"></iframe>
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
<span class="hljs-tag">&lt;p&gt;</span>If you need medical help, go to <span class="hljs-tag">&lt;a <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://www.nhs.uk/contact-us/get-medical-help/&quot;</span>&gt;</span>111.nhs.uk<span class="hljs-tag">&lt;/a&gt;</span> or call<span class="hljs-tag">&lt;a <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;tel:111</span><span class="hljs-string">&quot;</span>&gt;</span>111<span class="hljs-tag">&lt;/a&gt;</span> or your GP.<span class="hljs-tag">&lt;/p&gt;</span>
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

<strong>Styling suggestions</strong>
  <ul>
          <li style="max-width:none;">heading font size should be no smaller than 20px.</li>
          <li style="max-width:none;">body copy should be no smaller than 16px.</li>
          <li style="max-width:none;">hyperlink emergency contact numbers as advised.</li>
  </ul>

<strong>The functionality of the back navigation in the NHS App</strong>
 <p>Depending on where they came from, a user can return to a previous point in their journey in the NHS App by using the native back link. </p>
 <p>The two places from which the user may have entered into the journey are the:
</p>
 <ul>
          <li style="max-width:none;">message hub</li>
          <li style="max-width:none;">appointment aggregator screen </li>
  </ul>
<p>Rather than returning to the consent screen, a user will return to a point this early in the journey, because their ID token or authorisation code were not passed to your service in the no-consent flow.</p>

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
                <h2>
                  Services that have alternative user verification processes
                </h2>
                <p class="nhsuk-card__description">Use this version of the no-consent error screen content guidance if your website or app can send obtain the user information for verification in an alternative manner, such as <a href="" target="_blank">111 online</a>.</p>
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
              <h2>
                All other services
              </h2>
              <p class="nhsuk-card__description">Use this version of the no-consent error screen content guidance if the previous options did not describe your service.</p>
              <hr>
      </div>
      <div class="nhsuk-grid-column-one-third">
          <img class="nhsuk-image__img" src="/nhslogin/images/Guidance-example-other.png" alt="Example of NHS login button alongside other log in or register options">
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
        <li>TIn this version we recommend that you insert the name of your service in the [Your service name] placeholder.</li>
        <li>The "dynamic content" placeholder text indicates variable text where you may insert your own copy.</li>
        <li>To minimise clinical risk, make sure all anchor tags to emergency services are operational and implemented as suggested.</li>
        <li>You can use your service font and styling on this page, but it must follow our styling suggestions.</li>
      </ul>
      <hr>
      <h3>How to display content for the no-consent error screen</h3>
      <p>Here is an example of the no-consent error page. You can copy the content and code by selecting the HTML tab below this diagram.</p>
      <p>You will need to apply your own CSS to the code.</p>
      <div class="design-example">
        <a href="/nhslogin/images/Guidance-example-other.png" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">
          Open this image in new window
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
<span class="hljs-tag">&lt;p&gt;</span>[Your service name] needs your NHS login information to verify your identity.<span class="hljs-tag">&lt;/p&gt;</span>
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

<strong>Styling suggestions</strong>
  <ul>
          <li style="max-width:none;">heading font size should be no smaller than 20px.</li>
          <li style="max-width:none;">body copy should be no smaller than 16px.</li>
          <li style="max-width:none;">hyperlink emergency contact numbers as advised.</li>
  </ul>

<strong>Dynamic content suggestions</strong>
 <p>Only add your own content when you have information that might be of value to the user to either navigate away from the no-consent error page, or to correct any errors. For example, a contact email or number.</p>

</div>
</div>
</div>
</div>

<p>Contact us if you are unsure which version of the no-consent content guidance is right for your service.</p> 
