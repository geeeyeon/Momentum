const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function handleBtnClick(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreeting(userName);
  console.log(userName);
}

function paintGreeting(userName) {
  greeting.innerText = `hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
  alert("click");
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
console.log(savedUserName);

if (savedUserName === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleBtnClick);
} else {
  paintGreeting(savedUserName);
  // show the greetings
}
