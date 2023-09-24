import { Controller } from './Controller';
import { TodoInput } from './Todo';

export class View {
  private _controller: Controller;

  constructor(controller: Controller) {
    this._controller = controller;
  }

  handleAddTodo(todoInput: TodoInput) {
    this._controller.handleAddTodo(todoInput);
  }

  handleGetAllTodos() {
    return this._controller.handleGetAllTodos();
  }

  handleAddProject(name: string) {
    this._controller.handleAddProject(name);
  }
}
