// time O(n), space O(1)
function minSubArrayLen(arr, sum) {
  let minLength = arr.length;
  let p1 = 0;
  let p2 = 0;
  let curSum = 0;
  while (p1 < arr.length && p2 < arr.length) {
    curSum += arr[p2];
    p2++;

    if (curSum >= sum) {
      minLength = Math.min(minLength, p2 - p1);
      curSum = 0;
      p1++;
      p2 = p1;
    }
  }
  return minLength === arr.length ? 0 : minLength;
}

console.log(minSubArrayLen([2, 1, 6, 5, 4], 15));
console.log(minSubArrayLen([1, 4, 16, 21, 5, 7, 8, 9, 10], 39));
