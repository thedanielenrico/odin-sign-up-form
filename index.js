const form = document.querySelector("#userinfo");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match!");
  }
  form.reset();
});
