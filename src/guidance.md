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

<!-- 
<dl>
<dt><b>1</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc-1"></a></dt>
<dd><b>1.1</b> How the button works</dd>
<dd><b>1.2</b> Audience</dd>
<dd><b>1.3</b> Definitions</dd>
</dl>
<dl>
<dt><b>2</b> <a href="https://nhsconnect.github.io/nhslogin/interface-spec-doc-2">What the button looks like</a></dt>
<dd><b>2.1</b> Scope / Constraints</dd>
<dd><b>2.2</b> Changes in this version</dd>
</dl>
<dt><b>3</b> <a href="/nhslogin/guidance#content-around-button">How to place the button on your service</a></dt>
<dd><b></b><a href="/nhslogin/guidance#content-around-button">content around the button</a></dd> -->


## How the button works

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

<h2 id=content-around-button>Content around the button</h2>

Sometimes, it may be necessary to add some content around the NHS login button in order to reassure a user of what will happen upon selecting the button. 


<div class="nhsuk-do-dont-list">
  <h3 class="nhsuk-do-dont-list__label">Example</h3>
  <ul class="nhsuk-list nhsuk-list--tick">
    <li><img class="nhsuk-image__img" src="Guidance-example-1.png" alt="Example showing how to place the NHS login button">
  <figcaption class="nhsuk-image__caption">
   NHS login allows you to access your health and care websites and apps with one set of login details. We will check if you have an NHS login. If not, you can set one up.
  </figcaption>
    </li>
  </ul>
</div>



<!-- 
## Button placement


<div class="nhsuk-do-dont-list">
<div class="nhsuk-grid-row">

<div class="nhsuk-grid-column-one-half">
    <h3 class="nhsuk-do-dont-list__label">Don't</h3>
<ul class="nhsuk-list nhsuk-list--cross">
  <li>
  <svg class="nhsuk-icon nhsuk-icon__cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="34" height="34">
        <path d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z" fill="#d5281b"></path>
        <path d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z" fill="#d5281b"></path>
      </svg>
      <img class="nhsuk-image__img" src="#" alt="Example showing how to place the NHS login button">
  <figcaption class="nhsuk-image__caption">
    Do not place any forms on the same screen as the NHS login button.

  </figcaption>
</div>

  <div class="nhsuk-grid-column-one-half">
    <h3 class="nhsuk-do-dont-list__label">Do</h3>
<ul class="nhsuk-list nhsuk-list--cross">
  <li>
      <svg class="nhsuk-icon nhsuk-icon__tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" width="34" height="34">
        <path stroke-width="4" stroke-linecap="round" d="M18.4 7.8l-8.5 8.4L5.6 12" stroke="#007f3b"></path>
      </svg>
      <img class="nhsuk-image__img" src="#" alt="Example showing how to place the NHS login button">
  <figcaption class="nhsuk-image__caption">
   Explain to the users what NHS login is
  </figcaption>
</div>


</div>
</div>

### Exceptions to the rules


**The NHS login button must always be visible and up front.**


---


## NHS login button types

<p>There are three different types of NHS login buttons, which button your service will use is defined by the type of service you are.</p>

### Version 1
This version is to be used by services that are using the <a href="https://service-manual.nhs.uk/design-system">NHS Design System</a>.

- minimal use of "NHS login"
- no lozenge
- action driven button
- NHS blue

<figure class="nhsuk-image">
  <img class="nhsuk-image__img" src="#" alt="NHS login button for services using the NHS Design System">
  <figcaption class="nhsuk-image__caption">
    <a href="#download">Download the NHS login button package for services that use the NHS Design System</a>.
  </figcaption>
</figure>

We are working with the NHSD design system to create a button that can be a reusable component.

<details class="nhsuk-details">
  <summary class="nhsuk-details__summary">
    <span class="nhsuk-details__summary-text">
      View JavaScript for this button
    </span>
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

<br>

### Version 2
This version is to be used by services that are do not use the NHS design system, but has NHS branding **on the same screen** as the NHS login button.

- no lozenge
- Full CTA
- NHS blue

<figure class="nhsuk-image">
  <img class="nhsuk-image__img" src="#" alt="NHS login button for services that has NHS branding on the same screen as the NHS login button">
  <figcaption class="nhsuk-image__caption">
    <a href="#download">Download the NHS login button package for services that has NHS branding <b>on the same screen</b> as the NHS login button</a>.
  </figcaption>
</figure>




### Version 3
This version is to be used by all other services that do not fall into the above categories.

- NHS lozenge
- Full CTA
- NHS blue

<figure class="nhsuk-image">
  <img class="nhsuk-image__img" src="#" alt="NHS login button for all other services">
  <figcaption class="nhsuk-image__caption">
    <a href="#download">Download the NHS login button package for all other services</a>.
  </figcaption>
</figure>

Special cases:

### If your service has its own (non NHS) design system

NHS login button can match in shape and font, but must be NHS blue (or white background with the blue text).


---

### Size

You can scale the button as needed for different devices and screen sizes, but you must keep the aspect ratio the same so that the NHS logo is not stretched. When scaling the button, you must ensure that the writing is still clear and readable.

![example](https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/example_size.svg "size example")






<h2 id="content-around-button">Content around the button</h2>



 NHS login button

The NHS login button is available to download in a variety of different formats. 

# If your service uses the NHS design system

![button](https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/example_button.svg "the NHS login button")

[Download the NHS login button package](https://github.com/nhsconnect/nhslogin/blob/main/NHS%20login%20buttons.zip?raw=true).

---

## Colour

The NHS login button is available in NHS blue and in a light version. When the button is placed on a background that is darker than 50% grey, the light version of the button should be used for legibility.

Changing the colour of the button to anything other than the original and light version is not allowed.

![example](https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/example_colour.svg "colour example") 

---

## Clear and visible

The NHS login button must always be as clear and visible as any other third party login options. All login buttons should be the same size and have a similar visual weight.

![example](https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/example_clear.svg "clear and visible example")

---

## Matching your own style

To allow users to recognise the NHS login option quickly, we strongly recommend using the standard NHS blue version of the button, with the call to action ‘**Continue with NHS login**’.

If you want to adapt the button design or translate the text to match the style of your website or app, continue reading these guidelines.

---

### Call to action text

To encourage users to click the button, we recommend using ‘**Continue with NHS login**’ as the call to action text. This may need to change depending on the context and environment. 

If you need to change the text, you should make it clear to the user that they are either signing up or logging in to your app or website with their NHS login credentials. 

These examples show which calls to action work best.

![example](https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/example_cta.svg "call to action examples")

---

### Condensed version

If for any reason you need to have the call to action outside of the button, please use our condensed version. When you use this version, you must not change the text. NHS login is the name of the service and is separate from the NHS logo, so using the word ‘login’ on its own with the NHS logo is not allowed.

This condensed version is only to be used at times when you cannot comfortably display the call to action text within the button, or it is not appropriate to do so due to surrounding copy.

![example](https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/example_condensed.svg "condensed version example")

---

### Line breaking

The call to action text should be placed on one line to keep the design of the button consistent. Whichever call to action you choose to use, do not break the text onto more than one line.

![example](https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/example_linebreaking.svg "line breaking example")

---

### Padding

If the width of the button needs to change, the padding to the left and right of the text should be 16dp + *x*. The logo should be 67.05dp x 28dp and there should be 16dp between the logo and the button text. The padding above and below the logo should always be 12dp. The padding around the NHS login button should be equal to at least half of its height. 

![example](https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/example_padding.svg "padding example")
 -->
---

## Related links

For detailed technical guidance on who can use NHS and NHS Digital identities, including how and where they should be correctly applied, please visit: 

[NHS Identity Guidelines](https://www.england.nhs.uk/nhsidentity/identity-guidelines/ "NHS Identity Guidelines")

[NHS Digital Style Guidelines](https://digital.nhs.uk/about-nhs-digital/corporate-information-and-documents/nhs-digital-style-guidelines "NHS Digital Style Guidelines")


