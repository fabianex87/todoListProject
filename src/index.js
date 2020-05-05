import "./styles.css";

//import { Todo } from "./classes/todo.class";
//import { TodoList } from "./classes/todo-list.class";
import { Todo, TodoList } from "./classes";
import { createTodoHtml } from "./js/componentes";

export const todoList = new TodoList();

//console.log(todoList.todos);
/*todoList.todos.forEach((todo) => {
  createTodoHtml(todo);
});*/
//se una rgomento che entra ed esce, si puo semplificare ulteriormente
todoList.todos.forEach(createTodoHtml);

/*
//const newTodo = new Todo("learning Javascript");
//todoList.newTodo(newTodo);
//problema i metodi, si perdono perhce non sono immagazzinati nel localStorage
//ma non le proprieta delle classi,
//newTodo.stampa();
//todoList.todos[0].stampa(); //dopo aver risolto il problema con la creazione del metodo static fromJson funziona
*/
console.log("todos", todoList.todos);
/*
const task = new Todo("learning Javascript");
//const task2 = new Todo("Comprare un libro di informatica");
todoList.newTodo(task);
//todoList.newTodo(task2);

task.completed = true;
//console.log(todoList);

createTodoHtml(task);
*/
/*
//localStorage: funziona solo per la web, ma non per il backend con nodejs,
//li dobbiamo utilizzare file system
//localStorage e Session Storage
//SesionStorage si cancella quando chiudi il browser
//localStorage mantiene anche se riavvi il pc

localStorage.setItem("myKey", "ABC123987");

/*
//cancella il myKey dopo due secondi
setTimeout(() => {
  localStorage.removeItem("myKey");
}, 2000);
*/
