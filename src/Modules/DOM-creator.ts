import { string } from 'zod';
import { Todo } from './Todo';

const domGenHelper = (
  element: keyof HTMLElementTagNameMap,
  className: string
) => {
  const userElement = document.createElement(element);
  userElement.classList.add(className);
  return userElement;
};

const appendChildren = (
  appendee: HTMLElement,
  elementsToAppend: HTMLElement[]
) => {
  elementsToAppend.forEach((element) => appendee.appendChild(element));
  return appendee;
};

export class DOMCreator {
  generateTodoRow(todo: Todo) {
    const section = domGenHelper('div', 'todo-row');
    const title = domGenHelper('p', 'todo-title');
    const desc = domGenHelper('p', 'todo-desc');
    const deleteButton = domGenHelper('button', 'todo-delete-button');
    deleteButton.textContent = 'Delete';
    title.textContent = todo.title;
    desc.textContent = todo.description;
    const todoRow = appendChildren(section, [title, desc, deleteButton]);
    return todoRow;
  }
}
