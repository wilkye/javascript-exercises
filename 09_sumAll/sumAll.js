const sumAll = function (a, b) {
    let finalNum = 0;
    let upper = 0;
    let lower = 0;
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }

    if (a < b) {
        upper = b;
        lower = a;
    } else {
        upper = a;
        lower = b;
    }

    if (typeof a !== 'number') {
        return "ERROR";
    }
    for (let i = lower; i <= upper; i++) {
        finalNum += i;
    }
    return finalNum;
};

// Do not edit below this line
module.exports = sumAll;
