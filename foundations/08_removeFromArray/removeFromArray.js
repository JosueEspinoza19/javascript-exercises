const removeFromArray = function (arr, ...args) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let arg of args) {
      if (arg === arr[i]) {
        arr.splice(i, 1);
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
