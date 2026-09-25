---
layout: base-example.njk
title: NHS login button without the NHS logo
---

<style>
.button-nhs-logo-example{max-width:520px;margin:0 auto;border:1px solid #d8dde0;background:#fff;color:#212b32;font-family:Arial,Helvetica,sans-serif}.button-nhs-logo-example__header{display:flex;align-items:center;gap:18px;min-height:66px;padding:16px 20px;background:#005eb8;color:#fff;font-size:18px;font-weight:700}.button-nhs-logo-example__header svg{display:block;width:67px;height:27px;flex:none}.button-nhs-logo-example__content{padding:30px 28px 26px}.button-nhs-logo-example h1{margin:0 0 12px;color:#212b32;font-size:28px;line-height:1.18}.button-nhs-logo-example p{margin:0 0 21px;color:#4c6272;font-size:16px;line-height:1.45}@media(max-width:400px){.button-nhs-logo-example__content{padding:22px 20px}.button-nhs-logo-example h1{font-size:25px}}
</style>

<div class="button-nhs-logo-example">
  <div class="button-nhs-logo-example__header">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 16" width="67" height="27" role="img" aria-label="NHS">
      <path fill="#005eb8" d="M0 0h40v16H0z"></path>
      <path fill="#fff" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
    </svg>
    <span>Example health service</span>
  </div>
  <div class="button-nhs-logo-example__content">
    <h1>Sign in</h1>
    <p>Use your NHS login to sign in.</p>
    <button class="nhslogin-button" type="button">Continue to NHS login</button>
  </div>
</div>
