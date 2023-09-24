import { Todo, TodoInput } from './Todo';

export class Database {
  private _todos: Todo[] = JSON.parse(localStorage.getItem('todos')) || [];

  getTodos() {
    return this._todos;
  }

  private _setLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this._todos));
  }

  private _getTodoById(todoId: number) {
    return this._todos.find(({ id }) => id === todoId);
  }

  createTodo(todo: Todo) {
    this._todos.push(todo);
    this._setLocalStorage();
  }

  editToDo({ description, title, id }: Todo) {
    const requestedTodo = this._getTodoById(id);
    requestedTodo.description = description;
    requestedTodo.title = title;
    this._setLocalStorage();
  }

  deleteTodo({ id }: Todo) {
    this._todos = this._todos.filter((todo) => todo.id !== id);
    this._setLocalStorage();
  }
}

export default Database;
