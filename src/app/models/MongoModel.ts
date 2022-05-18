import { Model as M, Document } from 'mongoose';
import Model from './index';

export default abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T & Document>) { }

  create = async (obj: T): Promise<T> => (
    this.model.create({ ...obj }));

  list = async (): Promise<T[]> => (
    this.model.find());

  listOne = async (id: string): Promise<T | null> => (
    this.model.findOne({ _id: id }));

  update = async (id: string, obj: T): Promise<T | null> => {
    const response = this.model.findOneAndUpdate(
      { _id: id },
      { ...obj },
      { new: true },
    );
    return response;
  };

  delete = async (id: string): Promise<T | null> => {
    const response = this.model.findOneAndDelete({ _id: id });
    return response;
  };
}
