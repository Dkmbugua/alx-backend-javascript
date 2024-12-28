const { expect } = require('chai');
const { describe, it } = require('mocha');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should round and sum 1.4 and 4.5 to return 6', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });

        it('should round and sum negative numbers correctly', () => {
            expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-6);
        });
    });

    describe('SUBTRACT', () => {
        it('should round and subtract 1.4 and 4.5 to return -4', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });

        it('should round and subtract negative numbers correctly', () => {
            expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(4);
        });
    });

    describe('DIVIDE', () => {
        it('should round and divide 1.4 and 4.5 to return 0.2', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.01);
        });

        it('should return "Error" when dividing by zero', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });

    describe('Invalid Type', () => {
        it('should throw an error for an invalid type', () => {
            expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw('Invalid operation type');
        });
    });
});
