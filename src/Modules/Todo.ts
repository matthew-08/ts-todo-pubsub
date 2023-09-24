import { Subscribable } from './Subscribable';
import { Subscriber } from './Subscriber';

export type TodoInput = {
  title: string;
  description: string;
};

export class Todo {
  title: string;
  description: string;
  id: number;
  constructor({ description, title }: TodoInput) {
    this.title = title;
    this.description = description;
    this.id = Math.floor(Math.random() * (5000 - 1 + 1)) + 1;
  }
}
