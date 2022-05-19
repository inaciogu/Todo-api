import { Request, Response } from 'express';
import TodoService from '../services/TodoService';

export default class TodoController {
  private _route: string;

  constructor(public service = new TodoService(), route = '/todo') {
    this._route = route;
  }

  get route(): string {
    return this._route;
  }

  list = async (_req: Request, res: Response): Promise<typeof res> => {
    try {
      const response = await this.service.list();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server errror' });
    }
  };

  create = async (req: Request, res: Response): Promise<typeof res> => {
    try {
      const todo = req.body;

      const response = await this.service.create(todo);

      if (!response) {
        return res.status(404).json({ message: 'Object not found' });
      }

      if ('error' in response) {
        return res.status(400).json(response);
      }

      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  listOne = async (req: Request, res: Response): Promise<typeof res> => {
    try {
      const { id } = req.params;

      const response = await this.service.listOne(id);

      if (!response) {
        return res.status(404).json({ message: 'Object not found' });
      }

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  update = async (req: Request, res: Response): Promise<typeof res> => {
    try {
      const { id } = req.params;
      const todo = req.body;

      const response = await this.service.update(id, todo);

      if (!response) {
        return res.status(404).json({ message: 'Object not found' });
      }

      if ('error' in response) {
        return res.status(400).json(response);
      }

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  switchStatus = async (req: Request, res: Response): Promise<typeof res> => {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const response = await this.service.switchStatus(id, status);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  delete = async (req: Request, res: Response): Promise<typeof res> => {
    try {
      const { id } = req.params;

      const response = await this.service.delete(id);

      if (!response) {
        return res.status(404).json({ message: 'Object not found' });
      }

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
}
