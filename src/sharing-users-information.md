---
layout: base.njk
title: Sharing a user's NHS login information with your service
---

<p>Users need to agree to share their NHS login information with the partner service to access the service.</p>

<p>If a user does not agree to share their NHS login information, the partner service will need to display a clear message telling them that they will be unable to use the service and to advise the user of possible actions that can be taken to correct this or move on. </p>

<p>To ensure consistency across partner services we have created an example of this message for you to use.</p>

---

<h2 id="asking-users">Asking users to share their NHS login information</h2>
<a href="https://raw.githubusercontent.com/nhsconnect/nhslogin/main/src/images/image.png" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">
    Open this user journey flow in new window
  </a>
  <div class="code-embed">
  <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/image.png" alt="Need alt text for this image">
  </div>
<br>
<p>We ask users to agree to share their NHS login information with a partner service when they</p>
<ul>
<li>register a new level of verification through a partner service</li>
<li>sign into NHS login for the first time using a partner service</li>
</ul>
 
<p>If the user agrees to share their NHS login information, they can continue to the partner website and use the required service.</p>

<p>If they do not agree, they go back to the partner website, but are unable to use the service.</p>

<p>We have provided guidance on how to tell users they cannot use the service when this happens.</p>

<p>We will give the user two options.</p>
<ol><li>Go back and agree to share their NHS login information, or</li>
<li>Continue without agreeing to share their NHS login information, but not being able to use the required service.</li></ol>

---

<h1 id="users-who-do-not-agree">Guidance for users who do not agree to share their NHS login information</h1>

<p>There are two different screens we show users when they do not agree to share their NHS login information.</p>

<p>The screen they see depends on whether you use the NHS Design System and how you handle the user if they do not agree to share their NHS login information.</p>

<div class="nhsuk-inset-text">
  <span class="nhsuk-u-visually-hidden">Information: </span>
  <p>What is the NHS Design System?</p>
  <p>The NHS Design System uses styles, components and patterns that help to build consistent, accessible user interfaces.</p>
  <p>It is not compulsory to use this system. Some partners use their own design guidelines.</p>
</div>

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
                NHS services that use the NHS design system
              </h2>
              <p class="nhsuk-card__description">Only NHS services that use the NHS Design System <a href="https://service-manual.nhs.uk/design-system" target="_blank">NHS Design System</a> can use this version, such as <a href="https://www.nhs.uk/nhs-app/" target="_blank">NHS App</a>.</p>
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

 <p>There are two scenarios for users who do not agree to share their information.</p>
<nav class="nhsuk-contents-list" role="navigation" aria-label="scenarios for users who do not agree to share their information">
  <h2 class="nhsuk-u-visually-hidden">There are two scenarios for users who do not agree to share their information.</h2>
  <ol class="nhsuk-contents-list__list">
    <li class="nhsuk-contents-list__item">1. 
      <a class="nhsuk-contents-list__link" href="#back-NHSD">Send the user back to NHS login</a>
    </li>
    <li class="nhsuk-contents-list__item">2. 
      <a class="nhsuk-contents-list__link" href="sharing-users-information#another-area-NHSD">Send the user to another area of your website or app</a>
    </li>
  </ol>
</nav>

<p>Being able to send a user back to NHS login, will depend on how your systems processes users after they choose not to share their NHS login information. You will need to inform users if they are able to return to NHS login.</p>

<p>In all these examples, replace "<strong>NHS App</strong>" with the name of your website or app.</p>

<hr>

 <h2>If you are able to send the user to NHS login</h2></a>
      <div class="nhsuk-grid-row" id="#back-NHSD">
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
                All other websites or apps
              </h2>
              <p class="nhsuk-card__description">Use this version if your website or app uses any other design system or uses custom design elements, as in this example for MyHealth App.</p>
              <p class="nhsuk-card__description">This applies even if your website or app:</p>
              <ul>
                <li>is part of or partnered with the NHS,</li>
                <li>uses the NHS logo or NHS branding including in any documentation,</li>
                <li>uses the NHS logo on any other screen except the one in which you place the NHS login button.</li>
              </ul>
              <hr>
            </div>
      <div class="nhsuk-grid-column-one-third">
          <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/image.png" alt="need alt text here">
      </div>
      </div>
      <details class="nhsuk-details nhsuk-expander--no-outline">
        <summary class="nhsuk-details__summary">
          <span class="nhsuk-details__summary-text">
            View the guidance for websites or apps that do not use the NHS logo
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
 <p>There are two scenarios for users who do not agree to share their information.
 <ol>
    <li>Send the user back to NHS login.</li>
    <li>Send the user to another area of your website or app.</li>
</p>

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

</div>
</div>
</div>
</div>


<p>Contact us if you are unsure which version of the page is right for your website or app.</p> 


