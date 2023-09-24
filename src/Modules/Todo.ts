import { Subscribable } from './Subscribable';
import { Subscriber } from './Subscriber';

export type TodoInput = {
  title: string;
  description: string;
};

export class Todo {
  title: string;
  description: string;
  id: number;
  constructor({ description, title }: TodoInput) {
    this.title = title;
    this.description = description;
    this.id = Math.floor(Math.random() * (5000 - 1 + 1)) + 1;
  }
}

export class TodoContainer implements Subscriber {
  private _publisher: Subscribable;
  todos: Todo[] = [];
  constructor(pub: Subscribable) {
    this._publisher = pub;
    this.subscribe();
  }

  subscribe(): void {
    this._publisher.on('TODO_ADDED', ({ projectId, todoInput }) => {
      this.addTodo(todoInput);
    });
    this._publisher.on('EDIT_TODO', ({ projectId, todoInput }) => {
      const todo = this.todos.find;
    });
  }

  addTodo(todoInput: TodoInput) {
    this.todos.push(new Todo(todoInput));
  }

  getTodoById() {}

  editTodo() {}
}
