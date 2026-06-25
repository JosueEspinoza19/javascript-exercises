const fibonacci = function (num) {
  if (typeof num === String) num.parseInt();
  if (num == 0) return 0;
  if (num < 0) return "OOPS";

  let sequence = [1, 1];
  for (let i = 1; i < num; i++) {
    let sum = sequence[i] + sequence[i - 1];
    sequence.push(sum);
  }
  return sequence[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
