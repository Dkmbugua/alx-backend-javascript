const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./api');

chai.use(chaiHttp);
const { expect } = chai;

describe('Integration Testing', () => {
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

  after(() => {
    server.close(); // Close the server after tests
  });
});
