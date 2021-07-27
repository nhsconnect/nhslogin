# What is NHS login?

NHS login is a new way for people to prove who they are online, so they can access online health and care services safely and securely.

By integrating NHS login to your website or app you can offer users self-service access. You can also choose the level and combination of verification and authentication required for user access.

NHS login is based on [OpenID Connect](https://openid.net/connect/faq/) (OIDC). You can find out more about NHS login on the NHS Digital [website](https://digital.nhs.uk/services/nhs-login)

# NHS login developer documentation

Documentation is hosted on GitHub pages: [https://nhsconnect.github.io/nhslogin/](https://nhsconnect.github.io/nhslogin/)

## Running locally

NHS login developer documentation uses [11ty](https://www.11ty.dev/).

To run locally:

```npm install```

```npx @11ty/eleventy --serve```

More 11ty guidance [here](https://www.11ty.dev/docs/getting-started/).

## Editing on GitHub.com

1. Click on the **src** file [here](https://github.com/nhsconnect/nhslogin/tree/main/src)
2. Find the file that you would like to edit and click into it
3. Click the **"Edit" icon button** at the top right of the page
4. When you are finished making your changes, click **Propose file change** at the bottom of the page
5. You will see a box that will allow you to add a title and description to your changes
6. Add a title. The description is optional
7. Now click the green button that says **"Create Pull Request"**. Now your changes are in a queue waiting to be accepted by an admin
8. If you wish to cancel your request to make changes, click **"Close Pull Request"**

## Creating a new page on GitHub.com

1. Click on the **src** file [here](https://github.com/nhsconnect/nhslogin/tree/main/src)
2. Click the **"Create new file" button** at the top right of the page
3. Give your file an appropriate name, making sure to end this name with **.md**
4. When you are finished making your changes, click **Propose new file** at the bottom of the page
5. You will see a box that will allow you to add a title and description to your changes
6. Add a title. The description is optional
7. Now click the green button that says **"Create Pull Request"**. Now your changes are in a queue waiting to be accepted by an admin
8. If you wish to cancel your request to make changes, click **"Close Pull Request"**

## Before you start writing

1. Make sure before you begin writing your document, that you copy and paste the following block of text to the very top of your document
2. Make sure that where it states **"Your title"**, you change it to whatever you would like your title to be

```
---
layout: base.njk
title: Your title
---

```

Making sure your document contains this at the very top means that your contribution will automatically use the site theme.
