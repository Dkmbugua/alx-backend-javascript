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

  // Test suite for the /available_payments endpoint
  describe('GET /available_payments', () => {
    it('should return the correct payment methods', (done) => {
      chai.request(server)
        .get('/available_payments')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false,
            },
          });
          done();
        });
    });
  });

  // Test suite for the /login endpoint
  describe('POST /login', () => {
    it('should return welcome message with valid userName', (done) => {
      chai.request(server)
        .post('/login')
        .send({ userName: 'Betty' })
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Welcome Betty');
          done();
        });
    });

    it('should return 400 for missing userName', (done) => {
      chai.request(server)
        .post('/login')
        .send({})
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.text).to.equal('Missing userName');
          done();
        });
    });
  });

  after(() => {
    server.close(); // Close the server after tests
  });
});
