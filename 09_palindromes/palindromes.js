const palindromes = function (string) {
    let cleanedString = string.replaceAll(/[^a-zA-Z0-9]+/g, '').toLowerCase();
    let i = 0;
    const len = cleanedString.length - 1;

    while (i < len/2) {
        if (cleanedString[i] !== cleanedString[len - i])
            return false;
        ++i;
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
