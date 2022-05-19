import TodoService from '../services/TodoService';

export default class TodoController {
  private _route: string;

  constructor(public service = new TodoService(), route = '/todo') {
    this._route = route;
  }

  get route(): string {
    return this._route;
  }
}
