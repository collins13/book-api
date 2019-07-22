const should = require('should');
const sinon = require('sinon');
const Book = require('../models/Book');
const bookController = require('../controller/bookController');

describe('book  controller test:', () => {
  describe('Post', () => {
    it('should not allow empty title on post', () => {
      const book = function (Book) { this.save = () => {}; };
      const res = {
        bosy: {
          auth: 'rashid collins frank',
        },
      };
      const req = {
        status: sinon.spy(),
        send: sinon.spy(),
        json: sinon.spy(),
      };
      const controller = bookController(Book);
      controller.post(req, res);
      res.status.calledWith(400).should.equal(true, `bad status ${res.status.args[0][0]}`);
      res.send.calledWith(400).should.equal(true);
    });
  });
});
