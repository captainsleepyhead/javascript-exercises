const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arry) {
	let total = 0;
  for(let i = 0; i < arry.length; ++i){
    total += arry[i];
  }
  return total;
};

const multiply = function(arry) {
  let total = 1;
  for(let i = 0; i < arry.length; ++i){
    total *= arry[i];
  }
  return total;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(n) {
  let total = 1;
  for(let i = 1; i <= n; ++i){
    total *= i;
  }
  return total;
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
