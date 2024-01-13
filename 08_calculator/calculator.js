const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
    return arr.reduce((x,y) => x+y, 0);
};

const multiply = function(nums) {
    return nums.reduce((x,y) => x*y, 1);
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(x) {
    if (x == 0) return 1;
    let result = 1;
    for (let i = 1; i <= x; ++i)
        result *= i;
    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
