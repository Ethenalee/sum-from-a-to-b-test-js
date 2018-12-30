
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if(toN === fromN) {
    return toN;
  }
  return fromN + sum(fromN + 1, toN);
}

module.exports = sum;
