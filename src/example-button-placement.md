---
layout: base-example.njk
title: NHS login shown first with a separate service sign-in form
---

<style>
.button-placement-example{max-width:480px;margin:0 auto;border:1px solid #d8dde0;background:#fff;color:#212b32;font-family:Arial,Helvetica,sans-serif}.button-placement-example__brand{padding:17px 20px;border-bottom:1px solid #d7e3d4;background:#f0faed}.button-placement-example__wordmark{display:inline-block;color:#007f3b;font-size:23px;font-weight:800;letter-spacing:-1.3px}.button-placement-example__wordmark span{margin-left:3px;font-family:"Comic Sans MS","Bradley Hand",cursive;font-size:28px;letter-spacing:-2px}.button-placement-example__content{padding:25px 28px 28px}.button-placement-example h1{margin:0 0 22px;color:#212b32;font-size:24px;line-height:1.2}.button-placement-example h2{margin:0 0 10px;color:#212b32;font-size:17px;line-height:1.3}.button-placement-example p{margin:0 0 16px;color:#4c6272;font-size:16px;line-height:1.45}.button-placement-example .button-placement-example__nhs{padding:20px;border:1px solid #aeb9bd;background:#eef6fd}.button-placement-example .nhslogin-button{display:flex;width:100%;justify-content:center;margin:0}.button-placement-example__divider{display:flex;align-items:center;gap:14px;margin:34px 0 30px;color:#212b32;font-size:16px;font-weight:700;text-align:center}.button-placement-example__divider:before,.button-placement-example__divider:after{content:"";height:0;flex:1;border-top:2px dashed #4c6272}.button-placement-example__divider span{padding:0 8px}.button-placement-example label{display:block;margin:0 0 5px;font-size:14px;font-weight:700}.button-placement-example input{box-sizing:border-box;width:100%;height:37px;margin:0 0 15px;border:1px solid #aeb9bd;background:#fff;font:inherit}.button-placement-example__service-button{display:inline-block;width:auto!important;margin-top:3px!important;padding:9px 16px!important;background:#007f3b!important;box-shadow:none!important;color:#fff!important;font-size:14px!important;font-weight:700}.button-placement-example__service-button:hover{background:#005a30!important}@media(max-width:400px){.button-placement-example__content{padding:20px}.button-placement-example h1{font-size:22px}.button-placement-example .nhslogin-button{font-size:16px}}
</style>

<div class="button-placement-example">
  <div class="button-placement-example__brand" aria-label="MyHealth App">
    <span class="button-placement-example__wordmark">MyHealth<span>App</span></span>
  </div>
  <div class="button-placement-example__content">
    <h1>Sign in to MyHealth App</h1>
    <div class="button-placement-example__nhs">
      <h2>Use NHS login</h2>
      <p>Use your NHS login details to sign in or register.</p>
      <button class="nhslogin-button nhslogin-button-logo" type="button">
        <span class="button-logo" aria-hidden="true">
          <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 16" height="27" width="67">
            <path fill="#fff" d="M0 0h40v16H0z"></path>
            <path fill="#005eb8" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
          </svg>
        </span>
        Continue to NHS login
      </button>
    </div>
    <div class="button-placement-example__divider" aria-label="or"><span>OR</span></div>
    <h2>Sign in with your MyHealth App account</h2>
    <label for="account-name">Account name</label>
    <input id="account-name" type="text">
    <label for="password">Password</label>
    <input id="password" type="password">
    <button class="nhslogin-button button-placement-example__service-button" type="button">Sign in</button>
  </div>
</div>
