# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](/assets/images/screenshot.png)

### Links

- [Solution on Frontend Mentor](https://www.frontendmentor.io/solutions/intro-component-with-sign-up-form-using-oop-VdRy8LwbRk)
- [live site URL](https://alaa-mekibes.github.io/intro-component-with-signup-form-frontend-mentor)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS OOP
- Regex

### More Info

- I use OOP concept in my project:

```javascript
class InputVerfication {
    constructor() {/* .... */}

    displayError(field) {/* .... */}
    init(field) {/* .... */}
    verification() {/* .... */}
}
```

- I use regex for email verification:

```javascript
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!this.userEA.value.trim() || !emailPattern.test(this.userEA.value.trim())) {this.displayError(this.userEA); isValid = false;} else this.init(this.userEA);
```