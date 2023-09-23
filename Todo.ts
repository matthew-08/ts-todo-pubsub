import { Subscribable } from './Subscribable';

class Todo {}

class TodoContainer {
  private _publisher: Subscribable;
  todos: Todo[] = [];
  constructor(pub: Subscribable) {
    this._publisher = pub;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  getTodoById() {}

  editTodo() {}
}
