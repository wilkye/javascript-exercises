const fibonacci = function (x) {
    x = parseInt(x);
    if (x == 0) {
        return x
    } else if (x < 0) {
        return "OOPS";
    }
    let fibArray = [];
    for (let i = 0; i < x; i++) {
        if (i <= 1) {
            fibArray.push(1);
        } else {
            const a = fibArray[i - 1];
            const b = fibArray[i - 2];
            let total = b + a;
            fibArray.push(total);
        }
    }
    return fibArray[x - 1]
};

// Do not edit below this line
module.exports = fibonacci;
