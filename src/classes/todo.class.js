export class Todo {
  //per recuperare i metodi dal localStorage
  //static fromJson(obj) {//usiamo la destrutturazione
  // const tempTodo = new Todo(obj.task); //crea una nuova istanza
  //}
  static fromJson({ id, task, completed, created }) {
    const tempTodo = new Todo(task); //crea una nuova istanza
    tempTodo.id = id;
    tempTodo.completed = completed;
    tempTodo.created = created;
    return tempTodo;
  }

  constructor(task) {
    this.task = task;
    this.id = new Date().getTime(); //12435363
    this.completed = false;
    this.created = new Date();
  }

  stampa() {
    console.log(`${this.task}-${this.id}`);
  }
}
