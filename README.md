# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Ping coming soon page solution](#frontend-mentor---ping-coming-soon-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Screenshot

![](./images/desktop-screenshot.png)
![](./images/desktop-screenshot-blank.png)
![](./images/desktop-screenshot-invalid.png)
![](./images/mobile-screenshot.png)
![](./images/mobile-screenshot-blank.png)
![](./images/mobile-screenshot-invalid.png)

### Links

- Solution URL: [Frontendmentor.io](https://www.frontendmentor.io/solutions/ping-single-column-coming-soon-page-using-html-css-js-Odi6HjHkzM)
- Live Site URL: [fsuropaty.github.io](https://fsuropaty.github.io/ping-single-column-coming-soon-page-challenge/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Ionicons](https://ionic.io/ionicons)

### What I learned

I learned about :

- form validation

```js
function formValidation() {
  const emailValue = email.value.trim();
  if (emailValue === "") {
    errorMsg.classList.add("show-error");
    email.classList.add("error-ring");
    errorMsg.innerHTML = "Whoops! It looks like you forgot to add your email";
  } else if (!isEmail(emailValue)) {
    errorMsg.classList.add("show-error");
    email.classList.add("error-ring");
  } else {
    errorMsg.classList.remove("show-error");
    email.classList.remove("error-ring");
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
```

### Useful resources

- [W3Schools](https://www.w3schools.com) - Pretty much your guidebook in website development
- [MDN](https://developer.mozilla.org) - W3Schools but from Mozilla.
- [Layoutit!](https://grid.layoutit.com) - A very cool grid generator
- [Ionicons](https://ionicons.com/) - A really cool open source icon set

## Author

- Website - [fsuropaty]()
- Frontend Mentor - [@fsuropaty](https://www.frontendmentor.io/profile/fsuropaty)
