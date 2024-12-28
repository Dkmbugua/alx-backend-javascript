// 4-payment.test.js
const { describe, it, afterEach } = require('mocha');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let stub, spy;

    afterEach(() => {
        // Restore stub and spy after each test
        sinon.restore();
    });

    it('should call Utils.calculateNumber with "SUM", 100, 20 and log correct total', () => {
        // Stub Utils.calculateNumber to always return 10
        stub = sinon.stub(Utils, 'calculateNumber').returns(10);

        // Spy on console.log
        spy = sinon.spy(console, 'log');

        // Call the function under test
        sendPaymentRequestToApi(100, 20);

        // Assertions
        sinon.assert.calledOnceWithExactly(stub, 'SUM', 100, 20); // Verify stub arguments
        sinon.assert.calledOnceWithExactly(spy, 'The total is: 10'); // Verify console.log output
    });
});
