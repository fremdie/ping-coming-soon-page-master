# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

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
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![desktop](/images/desktop.png)
![mobile](/images/mobile.png)
![error](/images/error.png)



### Links

- Solution URL: [my solution](https://github.com/fremdie/ping-coming-soon-page-master)
- Live Site URL: [live site](https://ping-coming-soon-1.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [Tailwindcss](https://tailwindcss.com/) - Tailwindcss


### What I learned

I learnt how to validate email with JavaScript.

Check out my code here:

```js
function validateEmail() {
  if (email.value === "") {
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "Whoops! It looks like you forgot to add your email";
    email.style.borderColor = "hsl(354, 100%, 66%)";
    return false;
  }
  else if (!email.value.match(pattern)) {
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "Please provide a valid email address"
    email.style.borderColor = "hsl(354, 100%, 66%)";
    return false;
  }
    errorMsg.innerHTML = "";
    return true;
};

```

### Useful resources

- [Tailwindcss](https://tailwindcss.com/docs/)


## Author

- Frontend Mentor - [@fremdie](https://www.frontendmentor.io/profile/fremdie)
- Twitter - [@AG_Ijeoma](https://www.twitter.com/AG_Ijeoma)

