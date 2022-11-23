const id = (id) => document.getElementById(id);
const classes = (classes) => document.getElementsByClassName(classes);

const form = id("form");
const fullName = id("fullName");
const email = id("email");
const username = id("username");
const password = id("password");
const errMsg = classes("error");

const handleNameChange = (event) => {
  const nameValue = event.target.value;
  if (nameValue.length < 1) {
    fullName.style.border = "2px solid #ED4337";
    errMsg[0].innerText = "❗ Full name required.";
    fullName.classList.add("invalid");
    console.log(fullName.classList);
  } else {
    fullName.style.border = "2px solid #57C79B";
    errMsg[0].innerText = "";
    fullName.classList.remove("invalid");
    console.log(fullName.classList);
  }
};

const handleEmailChange = (event) => {
  const emailValue = event.target.value;
  console.log(emailValue);
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(emailValue)) {
    email.style.border = "2px solid #ED4337";
    errMsg[1].innerText = "❗ Please enter a valid email address.";
    email.classList.add("invalid");
    console.log(email.classList);
  } else {
    email.style.border = "2px solid #57C79B";
    errMsg[1].innerText = "";
    email.classList.remove("invalid");
    console.log(email.classList);
  }
};

const handleUsernameChange = (event) => {
  const usernameValue = event.target.value;
  console.log(usernameValue);
  const usernameLength = /^(?=.{5,20}$)/;
  const usernameChars = /[a-zA-Z0-9]/;
  if (
    !usernameLength.test(usernameValue) ||
    !usernameChars.test(usernameValue)
  ) {
    username.style.border = "2px solid #ED4337";
    errMsg[2].innerText =
      "❗ Username must be 5-20 characters long, and use only letters or numbers.";
    username.classList.add("invalid");
    console.log(username.classList);
  } else {
    username.style.border = "2px solid #57C79B";
    errMsg[2].innerText = "";
    username.classList.remove("invalid");
    console.log(username.classList);
  }
};

const handlePwordChange = (event) => {
  const pwordValue = event.target.value;
  console.log(pwordValue);
  const pwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!pwordRegex.test(pwordValue)) {
    password.style.border = "2px solid #ED4337";
    errMsg[3].innerText =
      "❗ Password must at least 6 characters long, and contain at least one letter and one number.";
    password.classList.add("invalid");
    console.log(password.classList);
  } else {
    password.style.border = "2px solid #57C79B";
    errMsg[3].innerText = "";
    password.classList.remove("invalid");
    console.log(password.classList);
  }
};

const handleBlankInputs = (fieldID, fieldNum, msg) => {
  if (fieldID.value.trim() === "") {
    errMsg[fieldNum].innerHTML = msg;
    console.log(errMsg[fieldNum].innerHTML);
    fieldID.style.border = "2px solid #ED4337";
    fieldID.classList.add("invalid");
  } else {
    errMsg[fieldNum].innerHTML = "";
    fieldID.style.border = "2px solid #57C79B";
    fieldID.classList.remove("invalid");
  }
};

fullName.addEventListener("blur", handleNameChange);
email.addEventListener("blur", handleEmailChange);
username.addEventListener("blur", handleUsernameChange);
password.addEventListener("blur", handlePwordChange);

form.addEventListener("submit", (event) => {
  handleBlankInputs(fullName, 0, "❌ Full Name is required.");
  handleBlankInputs(email, 1, "❌ Email is required.");
  handleBlankInputs(username, 2, "❌ Username is required.");
  handleBlankInputs(password, 3, "❌ Password is required.");
  if (
    fullName.classList.contains("invalid") ||
    email.classList.contains("invalid") ||
    username.classList.contains("invalid") ||
    password.classList.contains("invalid")
  ) {
    event.preventDefault();
  }
});
