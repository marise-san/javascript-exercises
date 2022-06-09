const add = function(num1, num2) {
	const adds = num1 + num2;
  return adds;
};

const subtract = function(num1, num2) {
  const sub = num1 - num2;
  return sub;	
};

const sum = function(args) {
  let sumArray = 0;
  for(i = 0; i < args.length; i++){
    sumArray += args[i];
  }
  return sumArray;
};

const multiply = function(args) {
  let multiplied = 1;
  for(i = 0; i < args.length; i++){
    multiplied *= args[i]; 
  }
  return multiplied;
};

const power = function(num1, num2) {
  let powered = 1;
  for(let i = 0; i < num2; i++){
    powered *= num1;
  }
  return powered;
};

const factorial = function(num) {
  fac = num;
  result = fac;
  if(fac === 0){
    return 1;
  } else {
  for(let i = 1; i < fac; i++){
    result *= i;
  }
}
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
