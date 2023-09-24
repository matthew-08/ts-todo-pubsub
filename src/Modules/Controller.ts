import { ProjectContainer } from './Projects';
import { Subscribable } from './Subscribable';
import { TodoContainer, TodoInput } from './Todo';

export class Controller {
  private _publisher: Subscribable;
  private _todoContainer: TodoContainer;
  private _projectContainer: ProjectContainer;

  constructor() {
    this._publisher = new Subscribable();
    this._todoContainer = new TodoContainer(this._publisher);
    this._projectContainer = new ProjectContainer(this._publisher);
  }

  handleAddTodo(todoInput: TodoInput) {
    this._publisher.emit('TODO_ADDED', {
      projectId: 1,
      todoInput,
    });
  }

  handleGetAllTodos() {
    return this._todoContainer.todos;
  }

  handleAddProject(name: string) {
    this._publisher.emit('PROJECT_ADDED', {
      name,
    });
  }
}
