require('should');

const request = require('supertest');
const app = require('../app');

const Book = require('../models/Book');

process.env.ENV = 'test';

describe('Book Crud Test:', () => {
  it('should alow book to be posted return read and _id', (done) => {
    const bookPost = { title: 'my book', author: 'frank', genre: 'horror' };
    agent.post('/api/books')
      .send(bookPost)
      .expect(200, done)
      .end((err, result) => {
        result.body.should.not.equal(false);
        result.body.should.have.property('_id');
        done();
      });
  });
  afterEach((done) => {
    Book.deleteMany({}).exec();
    done();
  });
  after((done) => {
    mongoose.connection.close();
    done();
  });
});
