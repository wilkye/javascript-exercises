const reverseString = function (str) {
    let revString = "";
    for (let i = 0; i < str.length; i++) {
        revString += str[str.length - 1 - i];
    }
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
