import { Model } from './Model';
import { Subscribable } from './Subscribable';
import { TodoInput } from './Todo';
import { View } from './View';

export class Controller {
  private _model: Model;
  private _view: View;

  constructor(model: Model, view: View) {
    this._model = model;
    this._view = view;
    this._initSubs();
  }

  _initSubs() {
    this._model.subscribe();
    this._view.subscribe();
  }
}
