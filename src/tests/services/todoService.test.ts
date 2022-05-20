import sinon from 'sinon';
import { expect } from 'chai';
import TodoService from '../../app/services/TodoService';
import { todoArray, todoReturn } from '../mocks/todoMocks';

describe('Todo service layer tests', () => {
  const todoService = new TodoService();

  describe('"Create" method', () => {
    before(async () => {
      sinon.stub(todoService.model, 'create').resolves(todoReturn);
    });

    after(() => {
      sinon.restore();
    });

    it('Returns the created todo item', async () => {
      const response = await todoService.create(todoReturn);
      expect(response).to.be.deep.equal(todoReturn);
    });
  });

  describe('"List" method', () => {
    before(async () => {
      sinon.stub(todoService.model, 'list').resolves(todoArray);
    });

    after(() => {
      sinon.restore();
    });

    it('Returns all todo items', async () => {
      const response = await todoService.list();
      expect(response).to.be.deep.equal(todoArray);
    });
  });
});
