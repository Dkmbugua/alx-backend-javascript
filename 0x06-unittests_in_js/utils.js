// utils.js
const Utils = {
    calculateNumber(type, a, b) {
        const roundedA = Math.round(a);
        const roundedB = Math.round(b);

        if (type === 'SUM') {
            return roundedA + roundedB;
        } else if (type === 'SUBTRACT') {
            return roundedA - roundedB;
        } else if (type === 'DIVIDE') {
            if (roundedB === 0) {
                return 'Error'; // Handle division by zero
            }
            return roundedA / roundedB;
        } else {
            throw new Error('Invalid operation type');
        }
    },
};

module.exports = Utils;
