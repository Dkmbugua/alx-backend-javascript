// api.test.js
const { describe, it, before, after } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

chai.use(chaiHttp);
const { expect } = chai;

describe('Index page', () => {
    let server;

    // Start the server before tests
    before((done) => {
        server = app.listen(7865, done);
    });

    // Stop the server after tests
    after((done) => {
        server.close(done);
    });

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

    it('should return content type text/html', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.header('content-type', /text\/html/);
                done();
            });
    });
});
