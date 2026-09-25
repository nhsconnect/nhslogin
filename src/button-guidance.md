# Revised button guidance handover

This handover provides a GitHub-ready replacement for `src/button-guidance.md`, based on the latest Version B prototype. It uses the NHS login repository’s existing Eleventy Markdown format, `design-example` pattern, button packages and NHS component classes.

## Files to add or replace

| Handover file | Repository destination | Purpose |
| --- | --- | --- |
| `src/button-guidance.md` | `src/button-guidance.md` | Replacement page content |
| `src/example-button-placement.md` | `src/example-button-placement.md` | Full-page example showing NHS login first and a separate MyHealth App form |
| `src/example-button-with-nhs-logo.md` | `src/example-button-with-nhs-logo.md` | Contextual example for the logo-free button |
| `src/images/Guidance-button-clear-space.svg` | `src/images/Guidance-button-clear-space.svg` | Scalable clear-space diagram using the approved standard button proportions |

The existing `src/images/myhealth-app-wordmark.png`, `src/example-other.md`, `src/example-NHSDS.md`, and three button-package directories are reused. No prototype CSS or React code is required.

## Content decisions retained from Version B

The page leads with the standard button containing the NHS logo, because it is the common version for partner websites and apps. The NHS-logo-visible and NHS Design System versions follow as secondary cases. A single stacked NHS Do and Don’t treatment gives the cross-cutting requirements once. Each variant then gives only its own condition, example, package link and HTML.

The placement example keeps NHS login first, uses an `or` divider, calls the alternative field **Account name**, and separates the partner form from the NHS login route. The clear-space diagram replaces the old fuzzy phone mock-up and explains the minimum half-height clear space. The NHS-logo-visible example uses the official reversed NHS logo in a contextual header so that the no-duplicate-logo rule is visible.

The page keeps the warning about post-button verification close to the explanation of what happens after selection. It does not restore the old full journey diagram. The page links to the existing NHS login user-journeys page instead.

## Review points before merge

Confirm that showing NHS login first remains the required policy where other sign-in or registration options are available. Confirm the phrase “contact NHS login with evidence” remains the agreed route for exceptions. The external button-package links have been retained from the current page; verify the package folders contain all approved default, hover, focus and pressed states before merging.


## 25 September correction

The first handover assumed a newer NHS frontend version for the Do and Don't icon colours. The live repository stylesheet has the list layout but does not include those colour rules, so `button-guidance.md` now contains tightly scoped styles and explicit green tick and red cross fills. It also restores the full approved CSS beneath the HTML in each button disclosure, and uses the original direct package-download wording.

`example-button-placement.md` no longer uses the low-resolution MyHealth App wordmark asset. It recreates the styled wordmark used in the review prototype so it remains crisp in the embedded example. Replace both files in `src`; the clear-space SVG and NHS-logo-visible example remain unchanged.

## Warning callout correction

The **What happens after someone selects an NHS login button** section now uses the current NHS warning-callout markup: `nhsuk-card nhsuk-card--warning`. The live site uses an earlier NHS frontend stylesheet, so `button-guidance.md` includes a scoped compatibility style block that preserves the current component’s pale-yellow panel and yellow **Important** label. Replace `src/button-guidance.md` again with this latest version. No other file has changed for this correction.
