import { Controller } from './Modules/Controller';
import { View } from './Modules/View';

const app = new Controller();

const view = new View(app);

view.handleAddProject('test');

view.handleAddTodo({
  description: 'hello',
  title: '123',
  projectIds: [1],
});
console.log('test');
console.log(view.handleGetAllTodos());
