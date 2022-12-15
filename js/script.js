// Regex Pattern: /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/


const form = document.getElementById('form');
const email = document.getElementById('email');
const errorMsg = document.getElementById('error-msg');
const pattern = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
const button = document.getElementById('btn');

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

button.addEventListener("click", () => {
  validateEmail();
});