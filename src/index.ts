import { todo } from 'node:test';
import Database from './Modules/Database';
import { Todo } from './Modules/Todo';

const db = new Database();

const todos = db.getTodos();

console.log(todos);
