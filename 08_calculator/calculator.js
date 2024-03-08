const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numsToSum) {
	return numsToSum.reduce((total, num) => total += num, 0);
};

const multiply = function(numsToMoltiply) {
  return numsToMoltiply.reduce((total, num) => total *= num, 1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  const decomposedNum = Array.from({length: num}, (_, i) => i + 1);
	return decomposedNum.reduce((total, num) => total *= num, 1);
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
