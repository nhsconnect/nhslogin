---
layout: base.njk
title: Adding the NHS login button to your service
---

<p>With many partners using NHS login, we need to make sure the NHS login button is consistent and recognisable.</p>

<p>We will have regular checks with you to make sure you are aligning to the guidelines. We will also review the placement and visibility of the NHS login button on your website or app.</p>

<div class="nhsuk-inset-text">
  <span class="nhsuk-u-visually-hidden">Information: </span>
  <p>To integrate with, or continue using NHS login on your service, you will need to provide evidence that you align to these guidelines.</p>
  <p>If you fail to comply and we cannot agree a solution, we will remove NHS login from your service.</p>
</div>


 
---

<h2>Contents</h2>
<dl>
<dt><a href="/nhslogin/guidance#journey">User journey behind the button</a></dt>
<dt><a href="/nhslogin/guidance#NHS-login-buttons">The NHS login button</a></dt>
<dd>- <a href="/nhslogin/guidance#NHS-DS">Services that use the NHS Design System</a></dd>
<dd>- <a href="/nhslogin/guidance#NHS">Services that use NHS branding</a></dd>
<dd>- <a href="/nhslogin/guidance#other">All other services</a></dd>
<dt><a href="/nhslogin/guidance#related-links">Related links</a></dt>

<hr>

<h2 id="journey">User journey behind the button</h2>

  <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/diagram-behind-button.png" alt="Diagram showing the flow that a user goes down from selecting the NHS button to getting authorised by NHS login and back to the service.">
<!--   <figcaption class="nhsuk-image__caption">
    It can affect large areas of the body or limbs.
  </figcaption> -->
<br>
<p>After a user enters their email, NHS login will check if they are on our database. If they are not, they will need to register.</p>

<p>If they are, they can enter their password. NHS login then checks which level of verification they have and matches that against the level your service is requesting.</p>

<p>If the user does not have the same or a higher level of verification, they need to uplift to that level.</p>


<div class="nhsuk-warning-callout">
  <h3 class="nhsuk-warning-callout__label">
    Important<span class="nhsuk-u-visually-hidden">:</span>
  </h3>
  <p>Do not place any content around the NHS login button that describes how users will progress through the service. You cannot guarantee what that journey will be.</p>
  <p>Futher information about <a href="/nhslogin/guidance#content-around-button">content around the button</a>.</p>
</div>


---

<h2 id="NHS-login-buttons">The NHS login button</h2>

<p>There are three different types of NHS login button. The button you use depends on the type of service you are.</p>

---

<h2 id="button-placement">I am an NHS service that uses the NHS Design System</h2>
  <div class="nhsuk-grid-row">

  <div class="nhsuk-grid-column-one-quarter">
  <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Guidance-example-button-NHSDS.png" alt="NHS login button for services that use the NHS Design System">
  </div>
  <div class="nhsuk-grid-column-three-quarters">
  <p>The NHS Design System uses styles, components and patterns that help to build consistent, accessible user interfaces. Only services that use the <a href="https://service-manual.nhs.uk/design-system">NHS Design System</a> can use this version.</p>
  </div>
<ul class="nhsuk-inside-box-text" style="max-width:none;">
<li>This version of the NHS login button has minimal use of the term "NHS login". Instead, we would suggest using 'Continue' as the call to action.</li>
  <li>To align with the <a href="https://www.england.nhs.uk/nhsidentity/identity-guidelines/">NHS Identity Guidelines</a>, there should only be one NHS logo on a screen at once. Do not repeat the logo on the NHS login button.</li>
  <li>To keep the NHS login brand clear, the button should be <a href="https://digital.nhs.uk/about-nhs-digital/corporate-information-and-documents/nhs-digital-style-guidelines/how-we-look/colour-palette">NHS bright blue</a>.</li>
  <li>When the NHS login button is on a background that is darker than 50% grey, you should use the light version of the button for legibility. Do not change the colour of the button to anything other than the original and light version.</li>
  <li>We are working with the NHS Design System to create a button that can be a reusable component within the Design System.</li>
  </ul>

  <details class="nhsuk-details nhsuk-expander">
  <summary class="nhsuk-details__summary">
    <span class="nhsuk-details__summary-text">
      Aligning to the users mental model
    </span>
  </summary>
  <div class="nhsuk-details__text">
    <div class="nhsuk-grid-column-three-quarters">
    NHS login has over 40million users and so it is very likely that your users will already have an NHS login account. The easiest route for the user to sign up or log in to your service would be to use their NHS login details.<br><br> 
If you have any other native or third-party log in or register options, the NHS login button must appear as the first option, and always be as clear and visible as other options.<br><br>
If you have a <b>clear user need</b> why this isn't possible, you will need to provide proof of this. We will then review and decide if we can support this.
</div>
  </div>
</details>

---



<div id="NHS-DS">
<details class="nhsuk-details nhsuk-expander">
  <summary class="nhsuk-details__summary">
    <span class="nhsuk-details__summary-text">
      I am an NHS service that uses the NHS Design System
    </span>
  </summary>
  <div class="nhsuk-details__text">
  <div class="nhsuk-grid-column-three-quarters">
      <p>The NHS Design System uses styles, components and patterns that help to build consisten, accessible user interfaces. Only services that use the <a href="https://service-manual.nhs.uk/design-system">NHS Design System</a> can use this version.</p>
      </div>
          <div class="nhsuk-grid-column-one-quarter">
      <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Guidance-example-button-NHS.png" alt="NHS login button for services that use the NHS Design System">
  </div>
  <div class="nhsuk-grid-row">
    <div class="nhsuk-grid-column-full nhsuk-inside-box-text">
      <hr class="divider-thick">
        <ul class="nhsuk-inside-box-text" style="max-width:none;">
        <li>This version of the NHS login button has minimal use of the term "NHS login". Instead, we would suggest using 'Continue' as the call to action.</li>
        <li>To align with the <a href="https://www.england.nhs.uk/nhsidentity/identity-guidelines/">NHS Identity Guidelines</a>, there should only be one NHS logo on a screen at once. Do not repeat the logo on the NHS login button.</li>
        <li>To keep the NHS login brand clear, the button should be <a href="https://digital.nhs.uk/about-nhs-digital/corporate-information-and-documents/nhs-digital-style-guidelines/how-we-look/colour-palette">NHS bright blue</a>.</li>
        <li>When the NHS login button is on a background that is darker than 50% grey, you should use the light version of the button for legibility. Do not change the colour of the button to anything other than the original and light version.</li>
        <li>We are working with the NHS Design System to create a button that can be a reusable component within the Design System.</li>
        </ul>
      <hr class="divider-thick">
      <details class="nhsuk-details">
        <summary class="nhsuk-details__summary">
          <span class="nhsuk-details__summary-text-small">View JavaScript for this button</span>
        </summary>
        <div class="nhsuk-details__text">
          <pre style="
            background-color: white;
            padding: 30px;
            overflow:auto;
            font-size:12px
            ">
            <code>
  .nhslogin-button {
  background-color: darken($color_nhsuk-blue, 1%);
  box-shadow: 0 $button-shadow-size 0 darken($color_nhsuk-blue, 20%); // s0
  &:hover {
  background-color: darken($color_nhsuk-blue, 12%);
  cursor: default;
  }
  &:focus {
  outline: none;
  background-color: darken($color_nhsuk-blue, 12%);
  }
  &:active {
  box-shadow: 0 $button-shadow-size 0 darken($color_nhsuk-blue, 12%); // s0
  top: 0;
  }
  }   
            </code>
          </pre>
        </div>
      </details>
      <a href="#download">Download the NHS login button package for services that use the NHS Design System</a>.<br><br>
      </div>
  </div>
  </div>
</details>
</div>

<div id="NHS">
<details class="nhsuk-details nhsuk-expander">
  <summary class="nhsuk-details__summary">
    <span class="nhsuk-details__summary-text">
      I am a service that uses the NHS logo
    </span>
  </summary>
    <div class="nhsuk-details__text">
        <div class="nhsuk-grid-column-two-thirds">
        <p>Use this version if you have the NHS logo <b>on the same screen</b> as the NHS login button. If it is not on the same screen you will need to use <a href="/nhslogin/guidance#others">the version for services that do not use NHS logo</a>.</p>
        <p>Examples of services of this would be</p>
        <ul>
        <li>Hey Pharmacist</li>
        </ul>
      </div>
      <div class="nhsuk-grid-column-one-third">
      <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Guidance-example-button-other.png" alt="NHS login button for services that use NHS branding">
      </div>
      <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-full nhsuk-inside-box-text">
          <hr class="divider-thick">
            <ul class="nhsuk-inside-box-text" style="max-width:none;">
            <li>To align with the <a href="https://www.england.nhs.uk/nhsidentity/identity-guidelines/">NHS Identity Guidelines</a>, there should only be one NHS logo on a screen at once. Do not repeat the logo on the NHS login button.</li>
            <li>The call to action on this button should always be Continue to NHS login.</li>
            <li>To keep the NHS login brand clear, the button should be <a href="https://digital.nhs.uk/about-nhs-digital/corporate-information-and-documents/nhs-digital-style-guidelines/how-we-look/colour-palette">NHS bright blue</a>.</li>
            <li>When the NHS login button is on a background that is darker than 50% grey, you should use the light version of the button for legibility. Do not change the colour of the button to anything other than the original and light version.</li>
          <hr class="divider-thick">
            <details class="nhsuk-details">
              <summary class="nhsuk-details__summary">
                <span class="nhsuk-details__summary-text-small">View JavaScript for this button</span>
              </summary>
              <div class="nhsuk-details__text">
                <pre style="
                      background-color: white;
                      padding: 30px;
                      overflow:auto;
                      font-size:12px
                      ">
                  <code>
.nhslogin-button {
  background-color: darken($color_nhsuk-blue, 1%);
  box-shadow: 0 $button-shadow-size 0 darken($color_nhsuk-blue, 20%); // s0
  &:hover {
    background-color: darken($color_nhsuk-blue, 12%);
    cursor: default;
  }
  &:focus {
    outline: none;
    background-color: darken($color_nhsuk-blue, 12%);
  }
  &:active {
    box-shadow: 0 $button-shadow-size 0 darken($color_nhsuk-blue, 12%); // s0
    top: 0;
  }
}   
                  </code>
                </pre>
              </div>
            </details>
            <a href="#download">Download the NHS login button package for services that use NHS branding</a>.<br><br>
        </div>
      </div>
  </div>
</details>
</div>

<div id="other">
<details class="nhsuk-details nhsuk-expander">
  <summary class="nhsuk-details__summary">
    <span class="nhsuk-details__summary-text">
      I am a service that does not use the NHS logo
    </span>
  </summary>
  <div class="nhsuk-details__text">
    <div class="nhsuk-grid-column-one-half" id="others">
      <p>Use this version if you do not have NHS branding <b>on the same screen</b> as the NHS login button and you don't use the NHS Design System. This applies even if your service is part of the NHS.</p>
      </div>
      <div class="nhsuk-grid-column-one-half">
      <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Continue-to-NHS-login_standard.png" alt="NHS login button for services that do not use the NHS Design System or have NHS branding">
            <p>Update example to be button inside phone</p>
    </div>
        <div class="nhsuk-grid-row">
          <div class="nhsuk-grid-column-full nhsuk-inside-box-text">
            <hr class="divider-thick">
              <ul class="nhsuk-inside-box-text" style="max-width:none;">
                <li>To keep the NHS login brand recognisable to users, this button should have the NHS logo and use the call to acton "Continue to NHS login".</li>
                <li>To keep the NHS login brand clear, the button should be <a href="https://digital.nhs.uk/about-nhs-digital/corporate-information-and-documents/nhs-digital-style-guidelines/how-we-look/colour-palette">NHS bright blue</a>.</li>
                <li>When the NHS login button is on a background that is darker than 50% grey, you should use the light version of the button for legibility. Do not change the colour of the button to anything other than the original and light version.</li>
                <li>If you'd like to align the button to your service's own design system, you will need to provide proof of your design system. Bear in mind the difference between a design system and branding. We will then review this and decide if we can allow any of your requested changes to the NHS login button. You should not change anything on the button without our approval.</li>
                </ul>
                            <hr class="divider-thick">
                <details class="nhsuk-details">
                  <summary class="nhsuk-details__summary">
                    <span class="nhsuk-details__summary-text-small">View JavaScript for this button</span>
                  </summary>
                  <div class="nhsuk-details__text">
                    <pre style="
                      background-color: white;
                      padding: 30px;
                      overflow:auto;
                      font-size:12px
                      ">
                      <code>
.nhslogin-button {
  background-color: darken($color_nhsuk-blue, 1%);
  box-shadow: 0 $button-shadow-size 0 darken($color_nhsuk-blue, 20%); // s0
  &:hover {
    background-color: darken($color_nhsuk-blue, 12%);
    cursor: default;
  }
  &:focus {
    outline: none;
    background-color: darken($color_nhsuk-blue, 12%);
  }
  &:active {
    box-shadow: 0 $button-shadow-size 0 darken($color_nhsuk-blue, 12%); // s0
    top: 0;
  }
}   
                      </code>
                    </pre>
                  </div>
                </details>
                <a href="#download">Download the NHS login button package for all other services</a>.<br><br>
        </div>
        </div>
  </div>
</details>
</div>


---

<h2 id="button-placement">How to place the button on your service</h2>

<p>The NHS login button must always be visible and up front on your service. When placing the button on your service, you must follow these rules:</p>

<hr>

<div class="nhsuk-grid-row">
<div class="nhsuk-grid-column-one-half">
<h3 id="align">Aligning to the users mental model</h3>
</div>

<div class="nhsuk-grid-column-one-half">
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Guidance-example-mentalmodel.png" alt="Example of NHS login button alongside other log in or register options">
</div>
</div>

<hr>

<div class="nhsuk-grid-row">
<div class="nhsuk-grid-column-one-half">
<h3 id="forms">Avoid placing the button on the same screen as any other forms</h3>
The button directs users to the NHS login service that allows users to log in or register. Putting the NHS login button alongside any other entry fields confuses the users, and makes it not clear what their call to action is.<br><br>
<b>If there is a user need</b> to have a form on the same screen as the button, you should place NHS login at the top. You should then create a clear distinction between the NHS login button and your form.
</div>

<div class="nhsuk-grid-column-one-half">
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Guidance-example-forms.png" alt="Example showing forms on the same screen as NHS login button ">
</div>
</div>

<hr>

<div class="nhsuk-grid-row">
<div class="nhsuk-grid-column-one-half">
<h3 id="content">Add content around the button if needed</h3>
Sometimes it may be necessary to add content around the NHS login button to reassure a user what happens when they select it.<br><br>

<b>Suggested content:</b>

<div class="nhsuk-inset-text">
  <span class="nhsuk-u-visually-hidden">Suggested content: </span>
NHS login allows you to access your health and care websites and apps with one set of login details.<br><br>
We will check if you have an NHS login. If not, you can set one up.
</div>
</div>


<div class="nhsuk-grid-column-one-half">
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Guidance-example-content.png" alt="Example of content around the NHS login button">
</div>
</div>

<hr>

<div class="nhsuk-grid-row">
<div class="nhsuk-grid-column-one-half">
<h3 id="resize">Resizing the button</h3>
You can scale the button as needed for different devices and screen sizes, but you must keep the aspect ratio the same so that the NHS logo is not stretched. When scaling the button, you must ensure that the writing is still clear and readable.<br><br>
The padding around the NHS login button should always be equal to at least half of its height.<br><br>
If the width of the button needs to change:
<ul>
<li>there should always be 16dp between the logo and the text</li>
<li>the padding to the left and right of the button content should be atleast 16dp, and equal on both sides</li>
<li>the padding above and below the button content should always be 14dp</li>
<li>the shadow below the button should always be 14dp</li>
</ul>
<br><br>

</div>

<div class="nhsuk-grid-column-one-half">
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/example_size.svg" alt="Example of content around the NHS login button">
</div>
</div>

<hr>

<div class="nhsuk-grid-row">
<div class="nhsuk-grid-column-one-half">
<h3 id="padding">
</div>
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/example_padding.svg" alt="Example of content around the NHS login button">
</div>


---

<h2 id="related-links">Related links</h2>

For detailed technical guidance on who can use NHS and NHS Digital identities and how and where to apply them, visit: 

[NHS Identity Guidelines](https://www.england.nhs.uk/nhsidentity/identity-guidelines/ "NHS Identity Guidelines")

[NHS Digital Style Guidelines](https://digital.nhs.uk/about-nhs-digital/corporate-information-and-documents/nhs-digital-style-guidelines "NHS Digital Style Guidelines")


