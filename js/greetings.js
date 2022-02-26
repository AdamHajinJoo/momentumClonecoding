const loginForm = document.querySelector("#form");
const loginInput = document.querySelector("#form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_LOCALSTORAGE_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_LOCALSTORAGE_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", saveUsername);
} else {
  paintGreeting(savedUsername);
}

function saveUsername(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_LOCALSTORAGE_KEY, username);
  console.log(username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerHTML = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
