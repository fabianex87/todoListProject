import { Todo } from "./todo.class";

export class TodoList {
  constructor() {
    //array
    // this.todos = [];

    //cariamento dal localStorage
    this.loadLocalStorage();
  }

  //metodi
  newTodo(todo) {
    this.todos.push(todo);
    this.saveLocalStorage();
  }

  //metodo per eliminare il task
  deleteTodo(id) {
    //id è uno string
    this.todos = this.todos.filter((todo) => {
      todo.id != id; //ritorna un nuovo array escludendo l'id che ho

      //save on localStorage
      this.saveLocalStorage();
    });
  }
  //metodo completed
  checkCompleteTodo(id) {
    for (const todo of this.todos) {
      //if(isNaN(id))
      console.log(id, todo.id);

      if (todo.id == id) {
        //== perché una è stringa e l'altro è un numero
        todo.completed = !todo.completed;
        this.saveLocalStorage();
        break;
      }
    }
  }
  //clear delete completed
  deleteCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
    this.saveLocalStorage();
  }

  //save on the localStorage
  saveLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }
  //load from localStorage
  loadLocalStorage() {
    //dobbiamo verificare sempre se quell'oggetto esiste nel lcoalStorage
    /*if (localStorage.getItem("todo")) {
      this.todos = JSON.parse(localStorage.getItem("todo"));
      console.log("locallllllllllll", this.todos);
    } else {
      this.todos = [];
    }*/
    this.todos = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
    //this.todos = this.todos.map((obj) => Todo.fromJson(obj));
    //miglioriamo
    this.todos = this.todos.map(Todo.fromJson);
  }
}
