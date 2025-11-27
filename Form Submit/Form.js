const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const pwd = document.getElementById("password");

  const nameErr = document.getElementById("nameErr");
  const emailErr = document.getElementById("emailErr");
  const pwdErr = document.getElementById("pwdErr");

  nameErr.textContent = emailErr.textContent = pwdErr.textContent = "";

  if (name.value.trim() === "") {
    valid = false;
    nameErr.textContent = "Required";
  }
  if (!email.value.includes("@")) {
    valid = false;
    emailErr.textContent = "Invalid email";
  }
  if (pwd.value.length < 6) {
    valid = false;
    pwdErr.textContent = "Min 6 chars";
  }

  if (valid) {
    document.getElementById("success").textContent = "Form Submitted Successfully!";
  }
});

// Auto-clear errors
form.addEventListener("input", () => {
  document.getElementById("success").textContent = "";
  document.querySelectorAll(".err").forEach(e => e.textContent = "");
});
