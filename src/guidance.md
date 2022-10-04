---
layout: base.njk
title: Adding the NHS login button to your service
---

With multiple partners we have to make sure that the button stays consistent and recognisable across our partners. 

Our guidance has been put together through our own research and using GDS standards. You will need to provide evidence that you comply with that standard in order to integrate with NHS login.

We will check in with you periodically to make sure you are aligning with our guidelines, and to review the placement and visibility of the NHS login button on your website or app.
 
---


## How the button works

<img src="https://github.com/nhsconnect/nhslogin/raw/main/src/images/diagram-behind-button.png">

After a user enters their email, NHS login will check to see if they exist on our database. If they do, they can enter their password, if not, they will sign up as part of their journey. 

After entering their password, NHS login will check to see what level of verification the user has, and match that against what level of verification your service is requesting. If the user does not have the same or higher level of verification as requested, they need to uplift to that level of verification.

---

### It is important not to place any content around the NHS login button that specifies a users journey as you cannot guarantee what journey that will be.

For example, **do not** use "Log in", this will confuse the user if they need to uplift to a higher level of verification to use your service, and will cause the users to drop off.

## NHS login button

The button must adhere to our button guidelines. It is not customisable, and must have the same visibility as any other login mechanism if present.


The NHS login button is available to download in a variety of different formats.

# If your service uses the NHS design system

![button](https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/example_button.svg "the NHS login button")

[Download the NHS login button package](https://github.com/nhsconnect/nhslogin/blob/main/NHS%20login%20buttons.zip?raw=true).

---

## Placement 

**The NHS login button must always be visible and up front.**

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

### Size

You can scale the button as needed for different devices and screen sizes, but you must keep the aspect ratio the same so that the NHS logo is not stretched. When scaling the button, you must ensure that the writing is still clear and readable.

![example](https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/example_size.svg "size example")

---

### Padding

If the width of the button needs to change, the padding to the left and right of the text should be 16dp + *x*. The logo should be 67.05dp x 28dp and there should be 16dp between the logo and the button text. The padding above and below the logo should always be 12dp. The padding around the NHS login button should be equal to at least half of its height. 

![example](https://github.com/nhsconnect/nhslogin/raw/files-into-markdown/src/images/example_padding.svg "padding example")

---

## Related links

For detailed technical guidance on who can use NHS and NHS Digital identities, including how and where they should be correctly applied, please visit: 

[NHS Identity Guidelines](https://www.england.nhs.uk/nhsidentity/identity-guidelines/ "NHS Identity Guidelines")

[NHS Digital Style Guidelines](https://digital.nhs.uk/about-nhs-digital/corporate-information-and-documents/nhs-digital-style-guidelines "NHS Digital Style Guidelines")


