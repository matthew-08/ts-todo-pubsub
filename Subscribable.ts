type ProjectInput = {
  name: string;
};

type TodoAddedInput = {
  projectId: number;
  todoInput: Todo;
};

interface EventArgsMap {
  PROJECT_ADDED: ProjectInput;
  TODO_ADDED: TodoAddedInput;
}

type Id<T extends Record<any, any>> = { [K in keyof T]: T[K] };

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

enum TodoPriority {
  'LOW',
  'MEDIUM',
  'HIGH',
}

type TodoInput = {
  title: string;
  description: string;
  dueDate: Date;
  priority: TodoPriority;
};

type EditInput<T extends keyof Todo> = {
  key: T;
  value: Todo[T];
};

type EditFieldInput<T extends keyof TodoInput> = {
  key: T;
  value: TodoInput[T];
};

class Todo {
  private _title: string;
  private _description: string;
  private _dueDate: Date;
  private _priority: TodoPriority;
  private _projects: number[] = [];

  constructor({ description, dueDate, priority, title }: TodoInput) {
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
    this._projects = [];
  }

  private isValidInternalField<T extends keyof Todo>(
    editInput: EditInput<T>
  ): editInput is EditInput<T> {
    if (
      !(editInput.key in Todo) &&
      typeof editInput.value === typeof this[editInput.key]
    ) {
      throw new Error('err');
    } else return true;
  }

  getTodoInfo<T extends keyof TodoInput>(
    fields?: T[]
  ): Pick<TodoInput, T> | TodoInput {
    if (fields) {
      return fields.reduce(
        (curr: Record<keyof TodoInput, any>, field: keyof TodoInput) => {
          curr[field] = this[`_${field}`];
          return curr;
        },
        {} as Record<keyof TodoInput, any>
      );
    }
    return {
      title: this._title,
      description: this._description,
      dueDate: this._dueDate,
      priority: this._priority,
    };
  }

  /* editField<T extends keyof TodoInput>(editInput: EditFieldInput<T>) {
    const internalField = `_${editInput.key} ` as keyof Todo;
    if (
      this.isValidInternalField({
        key: internalField,
        value: editInput.value,
      })
    ) {
    }
  } */
}

class Project {
  private todos: Todo[] = [];
  private _name: string;
  private _publisher: Subscribable;
  private _id: number;

  constructor(name: string, publisher: Subscribable) {
    this._name = name;
    this._publisher = publisher;
    this._id = Math.floor(Math.random() * (5000 - 1 + 1)) + 1;

    this.subscribe();
  }

  subscribe() {
    this._publisher.on('TODO_ADDED', (data) => {
      if (this._id === data.projectId) {
        this.todos.push(data.todoInput);
      }
    });
  }

  addToDo(todo: Todo) {
    this.todos.push(todo);
  }

  deleteToDo(todo: Todo) {
    this.todos.push(todo);
  }

  getAllTodos() {
    return this.todos;
  }

  get name() {
    return this._name;
  }
  get id() {
    return this._id;
  }

  changeName(newName: string) {
    return (this._name = newName);
  }
}

class Controller {
  _publisher: Subscribable;
  private _projects: Project[] = [];

  constructor() {
    this._publisher = new Subscribable();
    this.subscribe();
  }

  private subscribe() {
    this._publisher.on('PROJECT_ADDED', ({ name }) => {
      this._projects.push(new Project(name, this._publisher));
    });
  }
  get projects() {
    return this._projects;
  }
  handleAddToDo(projectIds: number[], todo: Todo) {
    projectIds.forEach((id) => {
      this._publisher.emit('TODO_ADDED', {
        projectId: id,
        todoInput: todo,
      });
    });
  }
  handleAddProjects(name: string) {
    this._publisher.emit('PROJECT_ADDED', {
      name,
    });
  }
}

class View {
  private controller: Controller;
  constructor(controller: Controller) {
    this.controller = controller;
  }
  clickAddTodo(projectIds: number[], todo: Todo) {
    this.controller.handleAddToDo(projectIds, todo);
  }
  clickAddProject(name: string) {
    this.controller.handleAddProjects(name);
  }

  getProjects() {
    return this.controller.projects;
  }
}

const controller = new Controller();
const view = new View(controller);

view.clickAddProject('hello');
view.clickAddTodo(
  [2845],
  new Todo({
    description: 'hello',
    dueDate: new Date(),
    priority: 2,
    title: 'ee',
  })
);
const test = view.getProjects();

console.log(test);
