const reverseString = function(string) {

    if (typeof string !== 'string')
        return "ERROR";

    let reversed = '';
    let len = string.length;

    for (let i = 1; i <= len; ++i) {
        reversed += string[len - i];
    }
    return reversed;
}


console.log(reverseString('asd'));
console.log(reverseString('asd asd'));
console.log(reverseString(''));
// Do not edit below this line
module.exports = reverseString;
