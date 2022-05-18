import express from 'express';
import connectDatabase from './connection';

export default class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  public startServer(PORT: string | number = 3001): void {
    connectDatabase();
    this.app.listen(PORT, () => console.log(`Server running here 👉 http://localhost:${PORT}`));
  }
}
