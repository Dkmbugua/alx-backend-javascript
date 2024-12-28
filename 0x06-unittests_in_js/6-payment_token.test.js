// 6-payment_token.test.js
const { describe, it } = require('mocha');
const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
    it('should return a resolved promise with the correct data when success is true', (done) => {
        getPaymentTokenFromAPI(true).then((response) => {
            expect(response).to.deep.equal({ data: 'Successful response from the API' });
            done(); // Ensure the test completes properly
        }).catch((err) => {
            done(err); // Fail the test if an error occurs
        });
    });

    it('should do nothing when success is false', (done) => {
        const result = getPaymentTokenFromAPI(false);
        expect(result).to.be.undefined; // Validate the function does nothing
        done();
    });
});
