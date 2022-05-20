import sinon from 'sinon';
import mongoose from 'mongoose';
import { expect } from 'chai';
import TodoModel from '../../app/models/TodoModel';

const mockedTodo = {
  name: 'Estudar',
  status: 'pendente',
};

const mockedTodos = [
  {
    name: 'Estudar',
    status: 'pendente',
  },
  {
    name: 'malhar',
    status: 'pendente',
  },
];

const todoModel = new TodoModel();

describe('Todo Model tests', () => {
  describe('1 - "Create" method', () => {
    before(async () => {
      sinon.stub(mongoose.Model, 'create').resolves(mockedTodo);
    });

    after(() => {
      sinon.restore();
    });

    it('Creates a todo item and return it', async () => {
      const response = await todoModel.create({
        name: 'Estudar',
        status: 'pendente',
      });
      expect(response).to.be.deep.equal(mockedTodo);
    });
  });

  describe('2 - "List" method', () => {
    before(async () => {
      sinon.stub(mongoose.Model, 'find').resolves(mockedTodos);
    });

    after(() => {
      sinon.restore();
    });

    it('Returns a array with all todos', async () => {
      const response = await todoModel.list();
      expect(response).to.be.deep.equal(mockedTodos);
    });
  });
});
