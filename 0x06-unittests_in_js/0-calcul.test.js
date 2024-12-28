const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should round and sum 1 and 3 to return 4', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should round and sum 1 and 3.7 to return 5', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('should round and sum 1.2 and 3.7 to return 5', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('should round and sum 1.5 and 3.7 to return 6', () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});
