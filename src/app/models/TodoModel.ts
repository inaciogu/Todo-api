import { Schema, model as createModel, Document } from 'mongoose';
import { Todo } from '../interfaces/todo';
import MongoModel from './MongoModel';

interface TodoDocument extends Todo, Document {}

const TodoSchema = new Schema<TodoDocument>({
  name: String,
  status: String,
}, { versionKey: false });

export default class TodoModel extends MongoModel<Todo> {
  constructor(model = createModel('Todo', TodoSchema)) {
    super(model);
  }
}
