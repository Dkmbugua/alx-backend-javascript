// 5-payment.test.js
const { describe, it, beforeEach, afterEach } = require('mocha');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let spy;

    beforeEach(() => {
        // Spy on console.log before each test
        spy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        // Restore the spy after each test
        sinon.restore();
    });

    it('should log "The total is: 120" and be called once for 100 and 20', () => {
        sendPaymentRequestToApi(100, 20);

        sinon.assert.calledOnce(spy); // Verify console.log is called once
        sinon.assert.calledWithExactly(spy, 'The total is: 120'); // Verify the exact log message
    });

    it('should log "The total is: 20" and be called once for 10 and 10', () => {
        sendPaymentRequestToApi(10, 10);

        sinon.assert.calledOnce(spy); // Verify console.log is called once
        sinon.assert.calledWithExactly(spy, 'The total is: 20'); // Verify the exact log message
    });
});
