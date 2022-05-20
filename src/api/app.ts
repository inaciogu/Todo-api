import express, { Router } from 'express';
import cors from 'cors';
import connectDatabase from './connection';

export default class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors());
  }

  public startServer(PORT: string | number = 3001): void {
    connectDatabase();
    this.app.listen(PORT, () => console.log(`Server running here 👉 http://localhost:${PORT}`));
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }
}
