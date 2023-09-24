import { string } from 'zod';

const domGenHelper = (
  element: keyof HTMLElementTagNameMap,
  className: string
) => {
  const userElement = document.createElement(element);
  userElement.classList.add(className);
  return userElement;
};

export class DOMCreator {
  generateTodoRow() {
    const section = domGenHelper('div', 'todo-row');
    const text = domGenHelper('p', 'todo-text');
    const deleteButton = domGenHelper('button', 'todo-delete-button');
    section.appendChild(text);
    section.appendChild(deleteButton);
    return section;
  }
}
