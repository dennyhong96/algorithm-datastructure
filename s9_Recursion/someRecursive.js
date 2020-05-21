function someRecursive(arr, callback) {
  if (arr.length === 0) {
    return false;
  } else if (callback(arr[0])) {
    return true;
  } else {
    return someRecursive(arr.slice(1), callback);
  }
}

const isOdd = (num) => num % 2 === 1;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
