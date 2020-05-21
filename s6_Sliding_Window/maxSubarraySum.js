// time O(n), space O(1)
function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - num];
    maxSum = Math.max(tempSum, maxSum);
    console.log(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400, 500], 3));
