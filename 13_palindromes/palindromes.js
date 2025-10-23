const palindromes = function (str) {
    const reversed = str
        .split('')
        .reverse()
        .join('')
        .toLowerCase()
        .replaceAll(" ", "")
        .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');

    if (str.toLowerCase().replaceAll(" ", "").replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '') === reversed) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
