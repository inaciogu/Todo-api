import { ZodError } from 'zod';
import { Todo, todoSchema } from '../interfaces/todo';
import TodoModel from '../models/TodoModel';

export interface ServiceError {
  error: ZodError;
}

export default class TodoService {
  constructor(public model = new TodoModel()) {}

  async create(obj: Todo): Promise<Todo | ServiceError> {
    const parsed = todoSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  }

  async list(): Promise<Todo[] | ServiceError> {
    return this.model.list();
  }
}
