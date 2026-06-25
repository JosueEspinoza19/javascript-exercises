const palindromes = function (string) {
  const clean = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = [...clean].reverse().join("");
  return clean === reversed;
};

// Do not edit below this line
module.exports = palindromes;
