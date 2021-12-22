const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");
const TODOS_KEY = "Todos";
let todos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  todos = todos.filter((todo) => todo.id !== Number(li.id));
  saveTodos();
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  span.innerText = newTodo.text;
  button.innerText = "❤";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span); //li안에 span 넣기
  li.appendChild(button);
  // console.log(li);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  // console.log(todoInput.value);
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parsedTodo = JSON.parse(savedTodos);
  todos = parsedTodo;
  parsedTodo.forEach((item) => paintTodo(item));
  console.log(parsedTodo);
}
