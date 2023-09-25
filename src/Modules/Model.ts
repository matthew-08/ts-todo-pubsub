import { Subscribable } from './Subscribable';
import Database from './Database';
import { Todo, TodoInput } from './Todo';
import { Subscriber } from './Subscriber';

export class Model implements Subscriber {
  private _publisher: Subscribable;
  private _database: Database;
  constructor(publisher: Subscribable, database: Database) {
    this._publisher = publisher;
    this._database = database;
  }
  get todos() {
    return this._database.getTodos();
  }
  subscribe() {
    this._publisher.on('TODO_ADDED', (todoInput) => {
      console.log(todoInput);
      return this.createTodo(todoInput);
    });
  }
  createTodo(todoInput: TodoInput) {
    const todo = new Todo(todoInput);
    this._database.createTodo(todo);
    this._render();
  }

  private _render() {
    this._publisher.emit('RENDER_TODOS', this.todos);
  }
}
