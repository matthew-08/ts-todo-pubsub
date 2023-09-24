import { Todo, TodoInput } from './Todo';

class Database {
  private _todos: Todo[] = JSON.parse(localStorage.get('todos')) || [];

  getTodos() {
    return this._todos;
  }

  private _setLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this._todos));
  }

  private _getTodoById(todoId: number) {
    return this._todos.find(({ id }) => id === todoId);
  }

  createTodo() {
    this._todos.push();
    this._setLocalStorage();
  }

  editToDo({ description, title, id }: Todo) {
    const requestedTodo = this._getTodoById(id);
    requestedTodo.description = description;
    requestedTodo.title = title;
    this._setLocalStorage();
  }

  deleteTodo() {}
}
