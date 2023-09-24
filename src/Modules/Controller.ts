import { Subscribable } from './Subscribable';
import { TodoInput } from './Todo';

export class Controller {
  private _publisher: Subscribable;

  constructor() {
    this._publisher = new Subscribable();
  }
}
