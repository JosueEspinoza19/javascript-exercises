const sumAll = function (a, b) {
  if (
    typeof a != "number" ||
    typeof b != "number" ||
    a < 0 ||
    b < 0 ||
    a % 1 != 0 ||
    b % 1 != 0
  ) {
    return "ERROR";
  }
  let start = a;
  let end = b;
  if (a > b) {
    start = b;
    end = a;
  }
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
