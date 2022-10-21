---
layout: base.njk
title: Adding the NHS login button to your service
---

<p>With multiple partners integrated with NHS login, we must make sure that the NHS login button stays consistent and recognisable across our partners. </p>

<p>We will check in with you periodically to make sure that you are aligning to the guidelines, and to review the placement and visibility of the NHS login button on your website or app.</p>

<div class="nhsuk-inset-text">
  <span class="nhsuk-u-visually-hidden">Information: </span>
  <p>You will need to provide evidence that you align to these guidelines in order to integrate with NHS login.</p>
  <p>If you are found to be non compliant, we will <b>XXX</b>. </p>
</div>


 
---

<h2>Contents</h2>

<div class="nhsuk-grid-row">
    <div class="nhsuk-grid-column-one-half">
<dl>
<dt><a href="/nhslogin/guidance#how">How the button works</a></dt>
</dl>
<dl>
<dt><a href="/nhslogin/guidance#NHS-login-buttons">The NHS login buttons</a></dt>
<dd>- <a href="/nhslogin/guidance#NHS-DS">Services that use the NHS Design System</a></dd>
<dd>- <a href="/nhslogin/guidance#NHS">Services that use the NHS branding</a></dd>
<dd>- <a href="/nhslogin/guidance#other">All other services</a></dd>
</dl>
</div>
    <div class="nhsuk-grid-column-one-half">
<dl>
<dt><a href="/nhslogin/guidance#button-placement">How to place the button on your service</a></dt>
<dd><b>- </b><a href="/nhslogin/guidance#align">Align to the users mental model</a></dd>
<dd><b>- </b><a href="/nhslogin/guidance#forms">Avoid placing the button on the same screen as any other forms</a></dd>
<dd><b>- </b><a href="/nhslogin/guidance#resize">Do not resize the button beyond recognition</a></dd>
<dd><b>- </b><a href="/nhslogin/guidance#linebreaking">Do not break the button text</a></dd>
<dd><b>- </b><a href="/nhslogin/guidance#padding">Keep the button padding consistent</a></dd>
</dl>
<dt><a href="/nhslogin/guidance#related-links">Related links</a></dt>
</div>

</div>
<hr>

<h2 id="how"> How the button works</h2>

  <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/diagram-behind-button.png" alt="Diagram showing the flow that a user goes down from selecting the NHS button to getting authorised by NHS login and back to the service.">
<!--   <figcaption class="nhsuk-image__caption">
    It can affect large areas of the body or limbs.
  </figcaption> -->
<br>
<p>After a user enters their email, NHS login will check to see if they exist on our database. If they do, they can enter their password, if not, they will sign up as part of their journey. </p>

<p>After entering their password, NHS login will check to see what level of verification the user has, and match that against what level of verification your service is requesting. If the user does not have the same or higher level of verification as requested, they need to uplift to that level of verification.</p>


<div class="nhsuk-warning-callout">
  <h3 class="nhsuk-warning-callout__label">
    Important<span class="nhsuk-u-visually-hidden">:</span>
  </h3>
  <p>Do not place any content around the NHS login button that specifies a users journey as you cannot guarantee what journey that will be. For more information on this, see <a href="/nhslogin/guidance#content-around-button">content around the button</a>.</p>
</div>


---

<h2 id="NHS-login-buttons">The NHS login button</h2>

<p>There are three different types of NHS login buttons, which button your service will use is defined by the type of service you are.</p>

<div id="NHS-DS">
<div class="nhsuk-do-dont-list">
  <h3 class="nhsuk-do-dont-list__label">Services that use the NHS Design System</h3>
  <ul class="nhsuk-list">
    <div class="nhsuk-grid-column-three-quarters">
      <p>This version is only to be used by services that use the <a href="https://service-manual.nhs.uk/design-system">NHS Design System</a>.</p>
      </div>
          <div class="nhsuk-grid-column-one-quarter">
      <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Continue-to-NHS-login_NHS-Design-System.png" alt="NHS login button for services that use the NHS Design System">
    </div>
        <div class="nhsuk-grid-row">
          <div class="nhsuk-grid-column-full nhsuk-inside-box-text">
            <hr class="divider-thick">
                <ul class="nhsuk-inside-box-text" style="max-width:none;">
                <li>This version of the NHS login button uses a minimal use of the term "NHS login", instead it relies on an action driven call to action on the button. In alignment with the NHS Design System, we would suggest to use 'Continue'.</li>
                <li>In accordance with the <a href="https://www.england.nhs.uk/nhsidentity/identity-guidelines/">NHS Identity Guidelines</a>, there should only be one NHS lozenge on a screen at once. Therefore, the NHS lozenge is not to be repeated on the NHS login button.</li>
                <li>In order to keep the NHS login brand clear, the button should be <a href="https://digital.nhs.uk/about-nhs-digital/corporate-information-and-documents/nhs-digital-style-guidelines/how-we-look/colour-palette">NHS bright blue</a>.</li>
                <li>We are working with the NHS Design System to create a button that can be a reusable component within the Design System.</li>
                </ul>
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
              </span>
            </figcaption>
          </div>
        </div>
  </ul>
</div>
</div>

<div id="NHS">
<div class="nhsuk-do-dont-list">
  <h3 class="nhsuk-do-dont-list__label">Services that use the NHS branding</h3>
  <ul class="nhsuk-list">
    <div class="nhsuk-grid-column-two-thirds">
      <p>This version of the NHS login button is to be used by services that do not use the NHS design system, but have NHS branding <b>on the same screen</b> as the NHS login button.</p>
      </div>
          <div class="nhsuk-grid-column-one-third">
      <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Continue-to-NHS-login_NHS.png" alt="NHS login button for services that use the NHS branding">
    </div>
        <div class="nhsuk-grid-row">
          <div class="nhsuk-grid-column-full nhsuk-inside-box-text">
            <hr class="divider-thick">
                <ul class="nhsuk-inside-box-text" style="max-width:none;">
                <li>In accordance with the <a href="https://www.england.nhs.uk/nhsidentity/identity-guidelines/">NHS Identity Guidelines</a>, there should only be one NHS lozenge on a screen at once. Therefore, the NHS lozenge is not to be repeated on the NHS login button.</li>
                <li>In order to keep the NHS login brand clear, the button should be <a href="https://digital.nhs.uk/about-nhs-digital/corporate-information-and-documents/nhs-digital-style-guidelines/how-we-look/colour-palette">NHS bright blue</a>.</li>
                <li>The call to action on this button should always be <b>Continue to NHS login</b>, if you need to further explain what login is, see <a href="/nhslogin/guidance#content-around-button">content around the button</a>.</li>
                </ul>
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
                <a href="#download">Download the NHS login button package for services that use the NHS branding</a>.<br><br>
              </span>
            </figcaption>
          </div>
        </div>
  </ul>
</div>
</div>

<div id="other">
<div class="nhsuk-do-dont-list" id="other">
  <h3 class="nhsuk-do-dont-list__label">All other services</h3>
  <ul class="nhsuk-list">
    <div class="nhsuk-grid-column-one-half">
      <p>This version is to be used by all other services that do not use the NHS Design System, or do not have NHS branding <b>on the same screen</b> as the NHS button, even if the service is part of the NHS.</p>
      </div>
      <div class="nhsuk-grid-column-one-half">
      <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Continue-to-NHS-login_standard.png" alt="NHS login button for services that do not use the NHS Design System or have NHS branding">
    </div>
        <div class="nhsuk-grid-row">
          <div class="nhsuk-grid-column-full nhsuk-inside-box-text">
            <hr class="divider-thick">
              <ul class="nhsuk-inside-box-text" style="max-width:none;">
                <li>In order to keep the NHS login brand recognisable to users, this button should have the NHS lozenge and use the call to action "Continue to NHS login".</li>
                <li>When the NHS login button is placed on a background that is darker than 50% grey, you should use the light version of the button for legibility. Changing the colour of the button to anything other than the original and light version is not allowed.</li>
                <li>If your service has its own design system and you'd like to align the button to it, you will need to provide proof of this design system (bearing in mind the difference between a design system and branding). We will then review your application to use a different type of button, and make a decision if we can allow a variation of shape or font within the NHS login button. <b>You should not change anything on the NHS login button without our approval</b>.</li>
                </ul>
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
              </span>
            </figcaption>
          </div>
        </div>
  </ul>
</div>
</div>

---

<h2 id="button-placement">How to place the button on your service</h2>

<p>The NHS login button must always be visible and up front on your service. When placing the button on your service, you must follow these rules:</p>

<hr>

<div class="nhsuk-grid-row">
<div class="nhsuk-grid-column-one-half">
<h3 id="align">Aligning to the users mental model</h3>
NHS login has over 40million users and so it is very likely that your users will already have an NHS login. The easiest route for the user to sign up or log in to your service would be to use their NHS login details.<br><br> 
If you have any other third party login options, the NHS login button must appear as the first option, and always be as clear and visible as any other third party login options.<br><br>
If you have a <b>clear user need</b> as to why this isn't possible, you will need to provide proof of this. We will then review your application, and make a decision if we can support this. 
</div>

<div class="nhsuk-grid-column-one-half">
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Guidance-example-1.png" alt="Example of content around the NHS login button">
</div>
</div>

<hr>

<div class="nhsuk-grid-row">
<div class="nhsuk-grid-column-one-half">
<h3 id="forms">Avoid placing the button on the same screen as any other forms</h3>
The button directs users to the NHS login service that allows users to log in or register. Putting the NHS login button alongside any other entry fields confuses the users, leaving it not clear what their call to action is.<br><br>
<b>If there is a user need</b> to have a form on the same place as the button, you should place NHS login at the top, and then create a clear distinction between the button and your form.
</div>

<div class="nhsuk-grid-column-one-half">
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Guidance-example-1.png" alt="Example of content around the NHS login button">
</div>
</div>

<hr>

<div class="nhsuk-grid-row">
<div class="nhsuk-grid-column-one-half">
<h3 id="content">Add content around the button if needed</h3>
Sometimes it may be necessary to add some content around the NHS login button in order to reassure a user of what will happen upon selecting the button.<br><br>
<b>Suggested content:</b><br><br>
NHS login allows you to access your health and care websites and apps with one set of login details.<br><br>
We will check if you have an NHS login. If not, you can set one up.
</div>

<div class="nhsuk-grid-column-one-half">
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/Guidance-example-1.png" alt="Example of content around the NHS login button">
</div>
</div>

<hr>

<div class="nhsuk-grid-row">
<div class="nhsuk-grid-column-one-half">
<h3 id="resize">Do not resize the button beyond recognition</h3>
You can scale the button as needed for different devices and screen sizes, but you must keep the aspect ratio the same so that the NHS logo is not stretched. When scaling the button, you must ensure that the writing is still clear and readable.<br><br>

</div>

<div class="nhsuk-grid-column-one-half">
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/example_size.svg" alt="Example of content around the NHS login button">
</div>
</div>

<hr>

<div class="nhsuk-grid-row">
<div class="nhsuk-grid-column-one-half">
<h3 id="line-breaking">Do not break the button text into more than one line</h3>
The call to action text should be placed on one line to keep the design of the button consistent. Whichever call to action you choose to use, do not break the text onto more than one line.

</div>

<div class="nhsuk-grid-column-one-half">
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/example_linebreaking.svg" alt="Example of content around the NHS login button">
</div>
</div>

<hr>

<div class="nhsuk-grid-row">
<div class="nhsuk-grid-column-one-half">
<h3 id="padding">Keep the padding around and inside the button consistent</h3>
If the width of the button needs to change, the padding to the left and right of the text should be 16dp + *x*. The logo should be 67.05dp x 28dp and there should be 16dp between the logo and the button text. The padding above and below the logo should always be 12dp. The padding around the NHS login button should be equal to at least half of its height.
</div>

<div class="nhsuk-grid-column-one-half">
    <img class="nhsuk-image__img" src="https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/example_padding.svg" alt="Example of content around the NHS login button">
</div>
</div>


---

<h2 id="related-links">Related links</h2>

For detailed technical guidance on who can use NHS and NHS Digital identities, including how and where they should be correctly applied, please visit: 

[NHS Identity Guidelines](https://www.england.nhs.uk/nhsidentity/identity-guidelines/ "NHS Identity Guidelines")

[NHS Digital Style Guidelines](https://digital.nhs.uk/about-nhs-digital/corporate-information-and-documents/nhs-digital-style-guidelines "NHS Digital Style Guidelines")


