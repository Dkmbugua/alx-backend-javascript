function calculateNumber(type, a, b) {
    if (typeof type !== 'string' || !['SUM', 'SUBTRACT', 'DIVIDE'].includes(type)) {
        return 'Error';
    }

    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    if (type === 'SUM') {
        return roundedA + roundedB;
    } else if (type === 'SUBTRACT') {
        return roundedA - roundedB;
    } else if (type === 'DIVIDE') {
        if (roundedB === 0) {
            return 'Error'; // Avoid division by zero
        }
        return roundedA / roundedB;
    }

    return 'Error'; // Fallback for unexpected cases
}

module.exports = calculateNumber;
