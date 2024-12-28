// api.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

chai.use(chaiHttp);
const { expect } = chai;

describe('Index page', () => {
    it('should return status code 200', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('should return the correct message', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res.text).to.equal('Welcome to the payment system');
                done();
            });
    });
});

describe('Cart page', () => {
    it('should return status code 200 when id is a number', (done) => {
        chai.request(app)
            .get('/cart/12')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Payment methods for cart 12');
                done();
            });
    });

    it('should return status code 404 when id is not a number', (done) => {
        chai.request(app)
            .get('/cart/hello')
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            });
    });

    it('should return status code 404 for missing id', (done) => {
        chai.request(app)
            .get('/cart/')
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            });
    });
});
