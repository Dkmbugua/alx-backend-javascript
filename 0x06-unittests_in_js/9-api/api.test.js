const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./api');

chai.use(chaiHttp);
const { expect } = chai;

describe('Integration Testing', () => {
  // Test for the root route
  describe('GET /', () => {
    it('Code: 200 | Body: Welcome to the payment system', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Welcome to the payment system');
          done();
        });
    });
  });

  // Test suite for the cart route
  describe('GET /cart/:id', () => {
    it('should return status code 200 and correct message for a valid numeric id', (done) => {
      chai.request(server)
        .get('/cart/12')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Payment methods for cart 12');
          done();
        });
    });

    it('should return status code 404 for an invalid id (non-numeric)', (done) => {
      chai.request(server)
        .get('/cart/hello')
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });

    it('should return status code 404 for a missing id', (done) => {
      chai.request(server)
        .get('/cart/')
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });

  after(() => {
    server.close(); // Close the server after tests
  });
});
