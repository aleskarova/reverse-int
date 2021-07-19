module.exports = function reverse (n) {
  let result = 0;
  let current = Math.abs(n);
  do {
    const remainder = current % 10;
    result = result * 10 + remainder;
    current = Math.floor(current / 10);
  } while (current != 0);

  return result;
};
