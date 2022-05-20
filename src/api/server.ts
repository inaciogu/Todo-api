import App from './app';
import TodoController from '../app/controllers/TodoController';
import CustomRouter from '../routes/Router';

const server = new App();

const todoRouter = new CustomRouter();
const todoController = new TodoController();

todoRouter.addRoute(todoController);

server.addRouter(todoRouter.router);

server.startServer();
