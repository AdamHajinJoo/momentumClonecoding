/* <form id="todo-form">
    <input type="text" placeholder="Write a To Do and Press Enter" />
</form>
<ul id="todo-list"></ul> */

const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("ul#todo-list");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos;
  parseToDos.forEach(paintTodo);
}
