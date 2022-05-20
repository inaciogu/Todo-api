import sinon from 'sinon';
import mongoose from 'mongoose';
import { expect } from 'chai';
import TodoModel from '../../app/models/TodoModel';

const mockedTodo = {
  _id: 'asasd1sd3441ds',
  name: 'Estudar',
  status: 'pendente',
};

const mockedTodos = [
  {
    _id: '123das231ds',
    name: 'Estudar',
    status: 'pendente',
  },
  {
    _id: 'asdasdbk1231',
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

  describe('3 - "List One" method', () => {
    before(async () => {
      sinon.stub(mongoose.Model, 'findOne').resolves(mockedTodo);
    });

    after(() => {
      sinon.restore();
    });

    it('Returns the todo item with the id passed', async () => {
      const response = await todoModel.listOne(mockedTodo._id);
      expect(response).to.be.deep.equal(mockedTodo);
    });
  });
});
