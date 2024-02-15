const fibonacci = function(num) {
    let fibs = [0, 1];
    let nextFib;
    num = Number(num);
    if (num < 0 || isNaN(num)) return "OOPS";
    for (let i = 0; i < num; ++i) {
        nextFib = fibs.reduce((x, y) => x + y);
        fibs[0] = fibs[1];
        fibs[1] = nextFib;
    }
    return fibs[0];
};

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
// Do not edit below this line
module.exports = fibonacci;
