import { Subscribable } from './Subscribable';

class EventBus {
  _publisher: Subscribable;

  constructor() {
    this._publisher = new Subscribable();
  }
}
