const events = ['TODO_ADDED'] as const;

export class Subscribable {
  private subscribers: { [key: string]: () => any } = {};
  constructor() {}

  on(eventName: string, callback: (...args: any[]) => any) {
    if (eventName in this.subscribers) return 'event already registered';

    this.subscribers[eventName] = callback;
  }

  emit(event: string) {
    const func = this.subscribers[event];
    if (!func) {
      return 'no event found';
    }
    func();
  }
}

class Todo {}

class Project {
  private todos: Todo[] = [];
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  addToDo(todo: Todo) {
    this.todos.push(todo);
  }

  deleteToDo(todo: Todo) {
    this.todos.push(todo);
  }

  get name() {
    return this._name;
  }

  changeName(newName: string) {
    return (this._name = newName);
  }
}
