// time O(n2), best case O(n) for the nearly sorted list optimization
function bubbleSort(arr) {
  // es2015 swap syntax helper
  const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  let noSwaps;
  // index 0 is handled by inner loop
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    // index i - arr.length is already handled by previous passes
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break; // noSwaps used to short circut for nealy sorted lists
  }
  return arr;
}

console.log(bubbleSort([2, 8, 5, 6, 1, 3]));

// function swap(arr, idx1, idx2) {
//   const temp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp;
// }
