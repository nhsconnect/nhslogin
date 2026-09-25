---
layout: base.njk
title: How to use the NHS login button
---

This page explains how to use the NHS login button on your website or app.

There are 3 button versions. Each has specific requirements for its label, NHS logo, colour, size and placement.

## Before you add the button

<style>
.button-guidance-do-dont .nhsuk-card--feature {
  margin: 0 0 24px;
  border: 1px solid #d8dde0;
}
.button-guidance-do-dont .nhsuk-card__content--feature {
  padding: 0 24px 20px;
}
.button-guidance-do-dont .nhsuk-card__heading--feature {
  margin: 0 0 14px -24px;
  padding: 8px 24px;
}
.button-guidance-do-dont .nhsuk-list--tick,
.button-guidance-do-dont .nhsuk-list--cross {
  margin: 0;
  padding-left: 36px;
}
.button-guidance-do-dont .nhsuk-list--tick > li,
.button-guidance-do-dont .nhsuk-list--cross > li {
  position: relative;
  margin-bottom: 10px;
}
.button-guidance-do-dont .nhsuk-list--tick > li:last-child,
.button-guidance-do-dont .nhsuk-list--cross > li:last-child {
  margin-bottom: 0;
}
.button-guidance-do-dont .nhsuk-list--tick svg,
.button-guidance-do-dont .nhsuk-list--cross svg {
  position: absolute;
  top: 4px;
  left: -28px;
  width: 16px;
  height: 16px;
  margin: 0;
}
.button-guidance-do-dont .nhsuk-icon--tick { fill: #007f3b; }
.button-guidance-do-dont .nhsuk-icon--cross { fill: #d5281b; }
</style>

<div class="button-guidance-do-dont">
  <div class="nhsuk-card nhsuk-card--feature">
    <div class="nhsuk-card__content nhsuk-card__content--feature">
      <h3 class="nhsuk-card__heading nhsuk-card__heading--feature">Do</h3>
      <ul class="nhsuk-list nhsuk-list--tick" role="list">
        <li><svg class="nhsuk-icon nhsuk-icon--tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true"><path fill="#007f3b" d="M11.4 17.5a2 2 0 0 1-2.7.1h-.1L4 12.8a1.5 1.5 0 0 1 2.1-2L10 14.7l8.1-8.1a1.5 1.5 0 1 1 2.2 2l-8.9 9Z" /></svg>use the right button based on the design of your login screen</li>
        <li><svg class="nhsuk-icon nhsuk-icon--tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true"><path fill="#007f3b" d="M11.4 17.5a2 2 0 0 1-2.7.1h-.1L4 12.8a1.5 1.5 0 0 1 2.1-2L10 14.7l8.1-8.1a1.5 1.5 0 1 1 2.2 2l-8.9 9Z" /></svg>use the supplied label, logo treatment and button styles</li>
        <li><svg class="nhsuk-icon nhsuk-icon--tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true"><path fill="#007f3b" d="M11.4 17.5a2 2 0 0 1-2.7.1h-.1L4 12.8a1.5 1.5 0 0 1 2.1-2L10 14.7l8.1-8.1a1.5 1.5 0 1 1 2.2 2l-8.9 9Z" /></svg>show NHS login first when other sign-in or registration options are available</li>
        <li><svg class="nhsuk-icon nhsuk-icon--tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true"><path fill="#007f3b" d="M11.4 17.5a2 2 0 0 1-2.7.1h-.1L4 12.8a1.5 1.5 0 0 1 2.1-2L10 14.7l8.1-8.1a1.5 1.5 0 1 1 2.2 2l-8.9 9Z" /></svg>contact NHS login if a clear user need means you cannot follow this guidance</li>
      </ul>
    </div>
  </div>

  <div class="nhsuk-card nhsuk-card--feature">
    <div class="nhsuk-card__content nhsuk-card__content--feature">
      <h3 class="nhsuk-card__heading nhsuk-card__heading--feature">Don't</h3>
      <ul class="nhsuk-list nhsuk-list--cross" role="list">
        <li><svg class="nhsuk-icon nhsuk-icon--cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true"><path fill="#d5281b" d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z" /></svg>do not change a button’s label, logo, colours, proportions or interaction states without approval</li>
        <li><svg class="nhsuk-icon nhsuk-icon--cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true"><path fill="#d5281b" d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z" /></svg>do not show 2 NHS logos on the same screen</li>
        <li><svg class="nhsuk-icon nhsuk-icon--cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true"><path fill="#d5281b" d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z" /></svg>do not place the NHS login route beside another form without making the routes clearly separate</li>
      </ul>
    </div>
  </div>
</div>
## NHS login button with the NHS logo

Use this version if no NHS logo is visible on the same screen. This is the version most partner apps and websites use.

<div class="design-example">
  <a href="/nhslogin/example-other" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">Open this example in a new window</a>
  <div class="code-embed">
    <iframe title="NHS login button with the NHS logo" src="/nhslogin/example-other" class="design-example-frame" scrolling="no" style="overflow:hidden;height:156px;"></iframe>
  </div>
</div>

[Download the NHS login button package for websites or apps that do not use the NHS logo](https://github.com/nhsconnect/nhslogin/tree/main/src/buttons/Other).

<details class="nhsuk-details">
  <summary class="nhsuk-details__summary">
    <span class="nhsuk-details__summary-text">View the HTML and CSS for this button</span>
  </summary>
  <div class="nhsuk-details__text">

### HTML

```html
<button class="nhslogin-button nhslogin-button-logo" type="submit">
  <div class="button-logo">
    <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 16" height="27" width="67">
      <path fill="#fff" d="M0 0h40v16H0z"></path>
      <path fill="#005eb8" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
    </svg>
  </div>
  Continue to NHS login
</button>
```

### CSS

```css
.nhslogin-button {
  font-weight: 400;
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 28px;
  -webkit-appearance: none;
  appearance: none;
  background-color: #005eb8;
  border: 2px solid transparent;
  border-radius: 4px;
  box-shadow: 0 4px 0 #003087;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  margin-top: 0;
  padding: 12px 16px;
  position: relative;
  text-align: center;
  vertical-align: top;
  width: auto;
}
@media (min-width: 40.0625em) {
  .nhslogin-button {
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
  }
}
@media print {
  .nhslogin-button {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .nhslogin-button {
    margin-bottom: 36px;
  }
}
@media (max-width: 40.0525em) {
  .nhslogin-button {
    padding: 8px 16px;
  }
}
.nhslogin-button:link,
.nhslogin-button:visited,
.nhslogin-button:active,
.nhslogin-button:hover {
  color: #fff;
  text-decoration: none;
}
.nhslogin-button::-moz-focus-inner {
  border: 0;
  padding: 0;
}
.nhslogin-button:hover {
  background-color: #1e569b;
}
.nhslogin-button:focus {
  background: #ffeb3b;
  box-shadow: 0 4px 0 #003087;
  color: #003087;
  outline: none;
}
.nhslogin-button:active {
  background: #1e569b;
  box-shadow: none;
  color: #fff;
  top: 4px;
}
.nhslogin-button::before {
  background: transparent;
  bottom: -6px;
  content: "";
  display: block;
  left: -2px;
  position: absolute;
  right: -2px;
  top: -2px;
}
.nhslogin-button:active::before {
  top: -6px;
}
.nhslogin-button--reverse {
  background-color: #fff;
  box-shadow: 0 4px 0 #003087;
  color: #005eb8;
}
.nhslogin-button--reverse:hover {
  background-color: #f2f2f2;
  color: #005eb8;
}
.nhslogin-button--reverse:focus {
  background: #ffeb3b;
  box-shadow: 0 4px 0 #003087;
  color: #003087;
  outline: 4px solid transparent;
}
.nhslogin-button--reverse:active {
  background: #f2f2f2;
  box-shadow: none;
  color: #005eb8;
  top: 4px;
}
.nhslogin-button--reverse:link {
  color: #005eb8;
}
.nhslogin-button--reverse.nhsuk-button--disabled {
  background-color: #fff;
}
.nhslogin-button--reverse.nhsuk-button--disabled:focus {
  background-color: #fff;
}
.nhslogin-button--disabled,
.nhslogin-button[disabled="disabled"],
.nhslogin-button[disabled] {
  background-color: #005eb8;
  opacity: 0.5;
  pointer-events: none;
}
.nhslogin-button--disabled:hover,
.nhslogin-button[disabled="disabled"]:hover,
.nhslogin-button[disabled]:hover {
  background-color: #005eb8;
  cursor: default;
}
.nhslogin-button--disabled:focus,
.nhslogin-button[disabled="disabled"]:focus,
.nhslogin-button[disabled]:focus {
  background-color: #005eb8;
  outline: none;
}
.nhslogin-button--disabled:active,
.nhslogin-button[disabled="disabled"]:active,
.nhslogin-button[disabled]:active {
  box-shadow: 0 4px 0 #003087;
  top: 0;
}
.nhslogin-button--reverse[disabled="disabled"],
.nhslogin-button--reverse[disabled] {
  background-color: #fff;
  opacity: 0.5;
}
.nhslogin-button--reverse[disabled="disabled"]:hover,
.nhslogin-button--reverse[disabled]:hover {
  background-color: #fff;
  cursor: default;
}
.nhslogin-button--reverse[disabled="disabled"]:focus,
.nhslogin-button--reverse[disabled]:focus {
  outline: none;
}
.nhslogin-button--reverse[disabled="disabled"]:active,
.nhslogin-button--reverse[disabled]:active {
  box-shadow: 0 4px 0 #003087;
  top: 0;
}
.ie8 .nhslogin-button:focus {
  outline: 1px dotted #003087;
}

.nhslogin-button-logo {
    display: flex;
    align-items: center;
    justify-content: center;
}

.button-logo {
    padding-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

  </div>
</details>

### Place this button on your sign-in or registration screen

If you offer other native or third-party sign-in or registration options, show NHS login first and make it as clear and visible as the other options. If you have a clear user need not to do this, contact NHS login with evidence before making the change.

<div class="design-example">
  <a href="/nhslogin/example-button-placement" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">Open this example in a new window</a>
  <div class="code-embed">
    <iframe title="Example of NHS login shown first, followed by a separate MyHealth App sign-in form" src="/nhslogin/example-button-placement" class="design-example-frame" scrolling="no" style="overflow:hidden;height:650px;"></iframe>
  </div>
</div>

### Keep it separate from other forms

Do not show the button beside other entry fields. If there is a clear user need to show another form on the same screen, put NHS login first and make a clear distinction between the button and the form, as shown in the example.

### Size and space the button correctly

You can resize the button for different screen sizes, but do not stretch it. Keep the supplied proportions, spacing and shadow measurements. The button files include the approved hover, focus and pressed states.

<div class="design-example">
  <a href="/nhslogin/images/Guidance-button-clear-space.svg" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">Open the button clear-space diagram in a new window</a>
  <div class="code-embed">
    <img class="nhsuk-image__img" src="/nhslogin/images/Guidance-button-clear-space.svg" alt="Diagram showing a standard NHS login button. Clear space of half the height of the button is shown above, below and to the right.">
  </div>
</div>

Leave clear space equal to at least half the height of the button on every side.

## NHS login button without the NHS logo

Use this version only when the NHS logo is already visible on the screen where people select NHS login. It does not repeat the NHS logo.

<div class="design-example">
  <a href="/nhslogin/example-button-with-nhs-logo" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">Open this example in a new window</a>
  <div class="code-embed">
    <iframe title="NHS login button without the NHS logo, used where an NHS logo is already visible" src="/nhslogin/example-button-with-nhs-logo" class="design-example-frame" scrolling="no" style="overflow:hidden;height:330px;"></iframe>
  </div>
</div>

Follow the placement, form-separation and sizing guidance above for this button version.

[Download the NHS login button package for websites or apps that use NHS branding](https://github.com/nhsconnect/nhslogin/tree/main/src/buttons/NHS).

<details class="nhsuk-details">
  <summary class="nhsuk-details__summary">
    <span class="nhsuk-details__summary-text">View the HTML and CSS for this button</span>
  </summary>
  <div class="nhsuk-details__text">

### HTML

```html
<button class="nhslogin-button" type="submit">Continue to NHS login</button>
```

### CSS

```css
.nhslogin-button {
  font-weight: 400;
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 28px;
  -webkit-appearance: none;
  appearance: none;
  background-color: #005eb8;
  border: 2px solid transparent;
  border-radius: 4px;
  box-shadow: 0 4px 0 #003087;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  margin-top: 0;
  padding: 12px 16px;
  position: relative;
  text-align: center;
  vertical-align: top;
  width: auto;
}
@media (min-width: 40.0625em) {
  .nhslogin-button {
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
  }
}
@media print {
  .nhslogin-button {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .nhslogin-button {
    margin-bottom: 36px;
  }
}
@media (max-width: 40.0525em) {
  .nhslogin-button {
    padding: 8px 16px;
  }
}
.nhslogin-button:link,
.nhslogin-button:visited,
.nhslogin-button:active,
.nhslogin-button:hover {
  color: #fff;
  text-decoration: none;
}
.nhslogin-button::-moz-focus-inner {
  border: 0;
  padding: 0;
}
.nhslogin-button:hover {
  background-color: #1e569b;
}
.nhslogin-button:focus {
  background: #ffeb3b;
  box-shadow: 0 4px 0 #003087;
  color: #003087;
  outline: none;
}
.nhslogin-button:active {
  background: #1e569b;
  box-shadow: none;
  color: #fff;
  top: 4px;
}
.nhslogin-button::before {
  background: transparent;
  bottom: -6px;
  content: "";
  display: block;
  left: -2px;
  position: absolute;
  right: -2px;
  top: -2px;
}
.nhslogin-button:active::before {
  top: -6px;
}
.nhslogin-button--reverse {
  background-color: #fff;
  box-shadow: 0 4px 0 #003087;
  color: #005eb8;
}
.nhslogin-button--reverse:hover {
  background-color: #f2f2f2;
  color: #005eb8;
}
.nhslogin-button--reverse:focus {
  background: #ffeb3b;
  box-shadow: 0 4px 0 #003087;
  color: #003087;
  outline: 4px solid transparent;
}
.nhslogin-button--reverse:active {
  background: #f2f2f2;
  box-shadow: none;
  color: #005eb8;
  top: 4px;
}
.nhslogin-button--reverse:link {
  color: #005eb8;
}
.nhslogin-button--reverse.nhsuk-button--disabled {
  background-color: #fff;
}
.nhslogin-button--reverse.nhsuk-button--disabled:focus {
  background-color: #fff;
}
.nhslogin-button--disabled,
.nhslogin-button[disabled="disabled"],
.nhslogin-button[disabled] {
  background-color: #005eb8;
  opacity: 0.5;
  pointer-events: none;
}
.nhslogin-button--disabled:hover,
.nhslogin-button[disabled="disabled"]:hover,
.nhslogin-button[disabled]:hover {
  background-color: #005eb8;
  cursor: default;
}
.nhslogin-button--disabled:focus,
.nhslogin-button[disabled="disabled"]:focus,
.nhslogin-button[disabled]:focus {
  background-color: #005eb8;
  outline: none;
}
.nhslogin-button--disabled:active,
.nhslogin-button[disabled="disabled"]:active,
.nhslogin-button[disabled]:active {
  box-shadow: 0 4px 0 #003087;
  top: 0;
}
.nhslogin-button--reverse[disabled="disabled"],
.nhslogin-button--reverse[disabled] {
  background-color: #fff;
  opacity: 0.5;
}
.nhslogin-button--reverse[disabled="disabled"]:hover,
.nhslogin-button--reverse[disabled]:hover {
  background-color: #fff;
  cursor: default;
}
.nhslogin-button--reverse[disabled="disabled"]:focus,
.nhslogin-button--reverse[disabled]:focus {
  outline: none;
}
.nhslogin-button--reverse[disabled="disabled"]:active,
.nhslogin-button--reverse[disabled]:active {
  box-shadow: 0 4px 0 #003087;
  top: 0;
}
.ie8 .nhslogin-button:focus {
  outline: 1px dotted #003087;
}

.nhslogin-button-logo {
    display: flex;
    align-items: center;
    justify-content: center;
}

.button-logo {
    padding-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

  </div>
</details>

## NHS Design System button

Only NHS services that use the [NHS Design System](https://service-manual.nhs.uk/design-system/) can use this version, for example the NHS App. The button uses the label `Continue`.

<div class="design-example">
  <a href="/nhslogin/example-NHSDS" class="design-example__pop-out" target="_blank" rel="noopener noreferrer">Open this example in a new window</a>
  <div class="code-embed">
    <iframe title="NHS Design System button" src="/nhslogin/example-NHSDS" class="design-example-frame" scrolling="no" style="overflow:hidden;height:156px;"></iframe>
  </div>
</div>

Follow the placement, form-separation and sizing guidance above for this button version.

[Download the NHS login button package for services that use the NHS Design System](https://github.com/nhsconnect/nhslogin/tree/main/src/buttons/NHS-Design-System).

<details class="nhsuk-details">
  <summary class="nhsuk-details__summary">
    <span class="nhsuk-details__summary-text">View the HTML and CSS for this button</span>
  </summary>
  <div class="nhsuk-details__text">

### HTML

```html
<button class="nhslogin-button" type="submit">Continue</button>
```

### CSS

```css
.nhslogin-button {
  font-weight: 400;
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 28px;
  -webkit-appearance: none;
  appearance: none;
  background-color: #005eb8;
  border: 2px solid transparent;
  border-radius: 4px;
  box-shadow: 0 4px 0 #003087;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  margin-top: 0;
  padding: 12px 16px;
  position: relative;
  text-align: center;
  vertical-align: top;
  width: auto;
}
@media (min-width: 40.0625em) {
  .nhslogin-button {
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
  }
}
@media print {
  .nhslogin-button {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .nhslogin-button {
    margin-bottom: 36px;
  }
}
@media (max-width: 40.0525em) {
  .nhslogin-button {
    padding: 8px 16px;
  }
}
.nhslogin-button:link,
.nhslogin-button:visited,
.nhslogin-button:active,
.nhslogin-button:hover {
  color: #fff;
  text-decoration: none;
}
.nhslogin-button::-moz-focus-inner {
  border: 0;
  padding: 0;
}
.nhslogin-button:hover {
  background-color: #1e569b;
}
.nhslogin-button:focus {
  background: #ffeb3b;
  box-shadow: 0 4px 0 #003087;
  color: #003087;
  outline: none;
}
.nhslogin-button:active {
  background: #1e569b;
  box-shadow: none;
  color: #fff;
  top: 4px;
}
.nhslogin-button::before {
  background: transparent;
  bottom: -6px;
  content: "";
  display: block;
  left: -2px;
  position: absolute;
  right: -2px;
  top: -2px;
}
.nhslogin-button:active::before {
  top: -6px;
}
.nhslogin-button--reverse {
  background-color: #fff;
  box-shadow: 0 4px 0 #003087;
  color: #005eb8;
}
.nhslogin-button--reverse:hover {
  background-color: #f2f2f2;
  color: #005eb8;
}
.nhslogin-button--reverse:focus {
  background: #ffeb3b;
  box-shadow: 0 4px 0 #003087;
  color: #003087;
  outline: 4px solid transparent;
}
.nhslogin-button--reverse:active {
  background: #f2f2f2;
  box-shadow: none;
  color: #005eb8;
  top: 4px;
}
.nhslogin-button--reverse:link {
  color: #005eb8;
}
.nhslogin-button--reverse.nhsuk-button--disabled {
  background-color: #fff;
}
.nhslogin-button--reverse.nhsuk-button--disabled:focus {
  background-color: #fff;
}
.nhslogin-button--disabled,
.nhslogin-button[disabled="disabled"],
.nhslogin-button[disabled] {
  background-color: #005eb8;
  opacity: 0.5;
  pointer-events: none;
}
.nhslogin-button--disabled:hover,
.nhslogin-button[disabled="disabled"]:hover,
.nhslogin-button[disabled]:hover {
  background-color: #005eb8;
  cursor: default;
}
.nhslogin-button--disabled:focus,
.nhslogin-button[disabled="disabled"]:focus,
.nhslogin-button[disabled]:focus {
  background-color: #005eb8;
  outline: none;
}
.nhslogin-button--disabled:active,
.nhslogin-button[disabled="disabled"]:active,
.nhslogin-button[disabled]:active {
  box-shadow: 0 4px 0 #003087;
  top: 0;
}
.nhslogin-button--reverse[disabled="disabled"],
.nhslogin-button--reverse[disabled] {
  background-color: #fff;
  opacity: 0.5;
}
.nhslogin-button--reverse[disabled="disabled"]:hover,
.nhslogin-button--reverse[disabled]:hover {
  background-color: #fff;
  cursor: default;
}
.nhslogin-button--reverse[disabled="disabled"]:focus,
.nhslogin-button--reverse[disabled]:focus {
  outline: none;
}
.nhslogin-button--reverse[disabled="disabled"]:active,
.nhslogin-button--reverse[disabled]:active {
  box-shadow: 0 4px 0 #003087;
  top: 0;
}
.ie8 .nhslogin-button:focus {
  outline: 1px dotted #003087;
}

.nhslogin-button-logo {
    display: flex;
    align-items: center;
    justify-content: center;
}

.button-logo {
    padding-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

  </div>
</details>

## What happens after someone selects an NHS login button

This applies to all 3 button versions. NHS login manages the sign-in and verification journey after someone selects the button, then returns them to your service.

<style>
/* Compatibility styles for the NHS.UK Frontend 10.6 warning-card markup.
   The documentation site currently uses an earlier frontend stylesheet. */
.button-guidance-warning .nhsuk-card--warning {
  margin: 40px 0;
  padding: 0;
  border: 1px solid #ffeb3b;
  background: #fff9c4;
  color: #212b32;
}
.button-guidance-warning .nhsuk-card--warning > .nhsuk-card__content {
  padding: 0 24px 24px;
}
.button-guidance-warning .nhsuk-card--warning .nhsuk-card__heading {
  display: inline-block;
  margin: 0 0 16px -24px;
  padding: 8px 24px;
  background: #ffeb3b;
  color: #212b32;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
}
.button-guidance-warning .nhsuk-card--warning .nhsuk-card__description {
  margin: 0 0 16px;
}
.button-guidance-warning .nhsuk-card--warning .nhsuk-card__description:last-child {
  margin-bottom: 0;
}
@media (min-width: 40.0625em) {
  .button-guidance-warning .nhsuk-card--warning {
    margin: 48px 0;
  }
  .button-guidance-warning .nhsuk-card--warning > .nhsuk-card__content {
    padding: 0 32px 32px;
  }
  .button-guidance-warning .nhsuk-card--warning .nhsuk-card__heading {
    margin-left: -32px;
    padding: 8px 32px;
    font-size: 24px;
    line-height: 1.33333;
  }
}
</style>

<div class="button-guidance-warning">
  <div class="nhsuk-card nhsuk-card--warning">
    <div class="nhsuk-card__content">
      <h3 class="nhsuk-card__heading">Important</h3>
      <p class="nhsuk-card__description">Do not tell users what will happen after they select the NHS login button.</p>
      <p class="nhsuk-card__description">NHS login decides which sign-in and verification steps the user needs. This depends on their existing NHS login account and the level of verification your service requires.</p>
    </div>
  </div>
</div>

[View NHS login user journeys](/nhslogin/user-journeys/).

## Ask for help or request a change

[Contact NHS login developer support](/nhslogin/developer-support/) if you need help applying this guidance or want to request a change to the NHS login button.
