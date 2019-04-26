exports.add = function(num1, num2) {
  return Number(num1) + Number(num2);
};

exports.subtract = function(num1, num2) {
  return Number(num1) - Number(num2);
};

exports.average = function(arr) {
  let sumOfArrElements = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  sumOfArrElements = Number(sumOfArrElements).toFixed(2);
  
  let average = Number(sumOfArrElements / arr.length).toFixed(2);
  return Number(average);
};
