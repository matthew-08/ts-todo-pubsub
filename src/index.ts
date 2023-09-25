import Database from './Modules/Database';
import { View } from './Modules/View';
import { DOMObjects } from './Modules/DOM-objects';
import { DOMCreator } from './Modules/DOM-creator';
import { Subscribable } from './Modules/Subscribable';
import { Controller } from './Modules/Controller';
import { Model } from './Modules/Model';

const db = new Database();

const publisher = new Subscribable();
const domCreator = new DOMCreator();
const model = new Model(publisher, db);
const view = new View(DOMObjects, domCreator, publisher);

const app = new Controller(model, view);
