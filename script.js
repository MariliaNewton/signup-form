const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const form = document.querySelector("#myform");
const difPassword = document.querySelector(".password-dif");

form.addEventListener("submit", function (e) {
  if (password.value !== confirmPassword.value) {
    e.preventDefault();
    difPassword.classList.remove("hidden");
  }
});
