const form = document.getElementById("form");
const email = document.getElementById("email");
const errorMsg = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  formValidation();
});

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
