import { Controller } from './Controller';
import { TodoInput } from './Todo';
import { DOMObjects } from './DOM-objects';
import { DOMCreator } from './DOM-creator';

export class View {
  private _controller: Controller;
  private _dom: typeof DOMObjects;
  private _domCreator: DOMCreator;

  constructor(
    controller: Controller,
    domObjects: typeof DOMObjects,
    domCreator: DOMCreator
  ) {
    this._controller = controller;
    this._dom = domObjects;
    this._domCreator = domCreator;
  }

  private _registerEventHandlers() {
    this._dom.addTodoButton;
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
