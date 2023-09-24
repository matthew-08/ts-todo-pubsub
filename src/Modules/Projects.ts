import { Subscribable } from './Subscribable';
import { Subscriber } from './Subscriber';

class Project {
  id: number;
  name: string;

  constructor(name: string, id: number) {
    this.id = id;
    this.name = name;
  }
}

export class ProjectContainer implements Subscriber {
  private _publisher: Subscribable;
  private _projects: Project[] = [];
  constructor(pub: Subscribable) {
    this._publisher = pub;
  }

  subscribe(): void {
    this._publisher.on('PROJECT_ADDED', ({ name }) => {
      this.projects.push(
        new Project(name, Math.floor(Math.random() * (5000 - 1 + 1)) + 1)
      );
    });
  }

  get projects() {
    return this._projects;
  }

  deleteProject() {}
}
