const add = function(x, y) {
  num1 = parseInt(x);
  num2 = parseInt(y);
  return num1 + num2;  	
};

const subtract = function(x, y) {
  num1 = parseInt(x);
  num2 = parseInt(y);
  return num1 - num2; 
};

const sum = function(x) {
	sumOfArray = x.reduce((total, current) => total + current, 0);
  return sumOfArray;
};

const multiply = function(x) {
  multipleOfArray = x.reduce((total, current) => total * current, 1);
  return multipleOfArray;
};

const power = function(x, y) {
	return Math.pow(parseInt(x),parseInt(y));
};

const factorial = function(x) {
  arr = [];
  while (x > 0) {
    arr.push(x);
    x--;
  }
  return multiply(arr);
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
