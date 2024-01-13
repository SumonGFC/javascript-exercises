const sumAll = function(x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0) return "ERROR";

    const start = Math.min(x, y);
    const end = Math.max(x, y);

    let sum = 0;

    for (let i = start; i <= end; ++i)
        sum += i

    return sum;
};

console.log(sumAll(1, 5));  //15
console.log(sumAll(1, -1)); //ERROR
console.log(sumAll(0, 0));  //0
console.log(sumAll('', 5)); //ERROR
console.log(sumAll(NaN, 5));

// Do not edit below this line
module.exports = sumAll;
