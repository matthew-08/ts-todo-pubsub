import { DOMObjects } from './DOM-objects';
import { DOMCreator } from './DOM-creator';
import { Subscribable } from './Subscribable';
import { Subscriber } from './Subscriber';
import { Todo } from './Todo';

export class View implements Subscriber {
  private _dom: typeof DOMObjects;
  private _domCreator: DOMCreator;
  private _publisher: Subscribable;

  constructor(
    domObjects: typeof DOMObjects,
    domCreator: DOMCreator,
    publisher: Subscribable
  ) {
    this._dom = domObjects;
    this._domCreator = domCreator;
    this._publisher = publisher;
    this._registerEventHandlers();
  }

  subscribe(): void {
    this._publisher.on('RENDER_TODOS', (todos) => this._displayTodos(todos));
  }

  private _displayTodos(todos: Todo[]) {
    todos.forEach((todo) => {
      const todoRow = this._domCreator.generateTodoRow(todo);
      console.log(todoRow);
      this._dom.todoContainer.appendChild(todoRow);
    });
  }

  private _registerEventHandlers() {
    this._dom.addTodoButton.addEventListener('click', () =>
      this._handleAddTodo.call(this)
    );
  }
  private _getTodoState() {
    return {
      description: this._dom.inputs.descriptionInput.value,
      title: this._dom.inputs.titleInput.value,
    };
  }
  private _resetTodoState() {
    Object.values(this._dom.inputs).forEach((input) => (input.value = ''));
  }
  private _handleAddTodo() {
    const todoState = this._getTodoState();
    console.log(todoState);
    this._publisher.emit('TODO_ADDED', todoState);
    this._resetTodoState();
  }
}
