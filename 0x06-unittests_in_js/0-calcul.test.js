const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should round and sum positive numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 3.6), 5);
        });

        it('should round and sum with negative numbers', () => {
            assert.strictEqual(calculateNumber('SUM', -1.4, -3.6), -5);
        });
    });

    describe('SUBTRACT', () => {
        it('should round and subtract numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 5.4, 3.2), 2);
        });

        it('should handle negative numbers for subtraction', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -5.4, -3.2), -2);
        });
    });

    describe('DIVIDE', () => {
        it('should round and divide numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 8.4, 2.2), 4);
        });

        it('should return "Error" for division by zero', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 8.4, 0), 'Error');
        });
    });

    describe('Invalid Type', () => {
        it('should return "Error" for invalid operation type', () => {
            assert.strictEqual(calculateNumber('MULTIPLY', 2.2, 3.3), 'Error');
        });
    });
});
