import { Subscribable } from './Subscribable';
import Database from './Database';
import { Todo, TodoInput } from './Todo';
import { Subscriber } from './Subscriber';

class Model implements Subscriber {
  private _publisher: Subscribable;
  private _database: Database;
  constructor(publisher: Subscribable, database: Database) {
    this._publisher = publisher;
    this._database = database;
  }
  get todos() {
    return this._database;
  }
  subscribe() {
    this._publisher.on('TODO_ADDED', (todoInput) => {
      return this.createTodo(todoInput);
    });
  }
  createTodo(todoInput: TodoInput) {
    const todo = new Todo(todoInput);
    this._database.createTodo(todo);
  }
}
