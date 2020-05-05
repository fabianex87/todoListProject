/* metodo che mi permette creare il todo in html simile all'index.js */

import { Todo } from "../classes";
import { todoList } from "../index";
//riferimento all'html
const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");
const btnDeleted = document.querySelector(".clear-completed");
const ulFilter = document.querySelector(".filters");
const anchorFilter = document.querySelectorAll(".filtro");

export const createTodoHtml = (todo) => {
  const htmlTodo = `
    <li class="${todo.completed ? "completed" : ""}" data-id="${todo.id}">
			<div class="view">
			    <input class="toggle" type="checkbox" ${todo.completed ? "checked" : ""}>
				<label>${todo.task}</label>
				<button class="destroy"></button>
			</div>
		<input class="edit" value="Create a TodoMVC template">
	</li>
    `;
  //creazione dell'elemento html
  const div = document.createElement("div");
  div.innerHTML = htmlTodo;
  //divTodoList
  //divTodoList.append(div);//ma voglio il figlio
  divTodoList.append(div.firstElementChild);
  //return div; //voglio il figlio
  return div.firstElementChild;
};

//Events
txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    //console.log(event); //mi fa vedere tutto quello che scrivi enter=13
    const newTodo = new Todo(txtInput.value);
    //console.log(txtInput.value);
    todoList.newTodo(newTodo);
    //console.log(todoList);
    //lo mettiamo sull'html
    createTodoHtml(newTodo);
    txtInput.value = "";
  }
});

divTodoList.addEventListener("click", (event) => {
  //console.log(event.target); mi fa vedere il tag in cui ho fatto click
  //console.log(event.target.localName); //mi fa vedere il tipo del tag
  const nameElement = event.target.localName; //input, label, button
  //const todoElement = event.target.parentElement; //div con classe view
  const todoElement = event.target.parentElement.parentElement; //rifermento all li
  //console.log(todoElement);

  //estrazione dell'id
  const todoId = todoElement.getAttribute("data-id");
  //console.log(todoId);

  if (nameElement.includes("input")) {
    //click nel check
    todoList.checkCompleteTodo(todoId);
    //se non ce aggiunge la classe, se ce la toglie
    todoElement.classList.toggle("completed");
  }
  //console.log(todoList);
  //console.log(nameElement);//input, label, button
  else if (nameElement.includes("button")) {
    //deleted il todo
    todoList.deleteTodo(todoId);
    //delete from html
    divTodoList.removeChild(todoElement);
  }
  console.log(todoList);
});

btnDeleted.addEventListener("click", () => {
  //deleted
  todoList.deleteCompleted();
  //deleted from html
  for (let i = divTodoList.children.length - 1; i >= 0; i--) {
    const element = divTodoList.children[i];
    //console.log(element);
    if (element.classList.contains("completed")) {
      divTodoList.removeChild(element);
    }
  }
});

ulFilter.addEventListener("click", (event) => {
  //console.log(event.target.text); //legge il testo di a

  const filter = event.target.text;
  //se è undefined
  if (!filter) {
    //!!filter
    return;
  }
  //acnhorFilter
  anchorFilter.forEach((element) => {
    element.classList.remove("selected");
    //console.log(event.target);
    event.target.classList.add("selected");
  });
  for (const element of divTodoList.children) {
    //console.log(element);
    //togliere la classe hidden, sta nel file css
    element.classList.remove("hidden");
    const completed = element.classList.contains("completed");

    switch (filter) {
      case "Pendientes":
        if (completed) {
          element.classList.add("hidden");
        }
        break;
      case "Completados":
        if (!completed) {
          element.classList.add("hidden");
        }
        break;
    }
  }
});
