// time O(n*k), space O(n+k)
function radixSort(intArr) {
  const maxDigits = mostDigits(intArr);
  for (let k = 0; k < maxDigits; k++) {
    const buckets = Array.from({ length: 10 }, () => []); // construct an array of 10 empty arrays respresenting 10 digits.
    intArr.forEach((num) => buckets[getDigit(num, k)].push(num)); // fill buckets according to current digit k
    intArr = [].concat(...buckets); // overwrite intArr with flattened buckets array
  }
  return intArr;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));

// helper functions:
// get single digit value in a number
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
// get max digit count in a list of numbers
function mostDigits(nums) {
  let maxDigits = 0;
  nums.forEach((num) => {
    maxDigits = Math.max(digitCount(num), maxDigits);
  });
  return maxDigits;
}
// get digit count in a number
function digitCount(num) {
  return `${Math.abs(num)}`.length;
}
