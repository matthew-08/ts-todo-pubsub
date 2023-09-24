import { TodoInput } from './Todo';

interface EventArgsMap {
  TODO_ADDED: TodoInput;
}

type Test = {
  [K in keyof EventArgsMap]: ((args: EventArgsMap[K]) => void)[];
};

export class Subscribable {
  private subscribers: Partial<Test> = {};

  on<T extends keyof EventArgsMap>(
    eventName: T,
    callback: (args: EventArgsMap[T]) => void
  ) {
    if (!this.subscribers[eventName]) {
      this.subscribers[eventName] = [];
    }
    this.subscribers[eventName]?.push(callback);
  }

  emit<EventName extends keyof EventArgsMap>(
    event: EventName,
    args: EventArgsMap[EventName]
  ) {
    const funcs = this.subscribers[event];
    if (!funcs) {
      return 'no event found';
    }
    funcs.forEach((func) => func(args));
  }
}
