import { Subscribable } from './Subscribable';
import { Subscriber } from './Subscriber';

export type TodoInput = {
  title: string;
  description: string;
  projectIds: number[];
};

class Todo {
  title: string;
  description: string;
  id: number;
  projectIds: number[];
  constructor({ description, title, projectIds }: TodoInput) {
    this.title = title;
    this.description = description;
    this.projectIds = projectIds;
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
