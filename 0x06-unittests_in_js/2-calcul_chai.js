// 2-calcul_chai.js
function calculateNumber(type, a, b) {
    const customRound = (num) => (num < 0 ? Math.ceil(num - 0.5) : Math.floor(num + 0.5));
    const roundedA = customRound(a);
    const roundedB = customRound(b);

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
}

module.exports = calculateNumber;
