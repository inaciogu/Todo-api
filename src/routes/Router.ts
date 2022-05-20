import { Router } from 'express';
import TodoController from '../app/controllers/TodoController';

export default class CustomRouter {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute = (controller: TodoController, route: string = controller.route) => {
    this.router.get(route, controller.list);
    this.router.get(`${route}/:id`, controller.listOne);
    this.router.post(route, controller.create);
    this.router.put(`${route}/:id`, controller.update);
    this.router.put(`${route}/:id`, controller.switchStatus);
    this.router.delete(`${route}/:id`, controller.delete);
  };
}
