// time O(nlogn) average, worst case O(n2); space O(logn)
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    // get pivot index
    const pivotIdx = pivotHelper(arr, left, right);
    // sort pivot leftside
    quickSort(arr, left, pivotIdx - 1);
    // sort pivot rightside
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));

function pivotHelper(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]); // swap helper

  let pivot = arr[start]; // select starting idx as pivot
  let swapIdx = start; // tracks how many spots to the right pivot has to swap to

  // move everthing greater than pivot alongside the pivot to the right
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }

  // swap pivot into correct position
  swap(arr, start, swapIdx);
  return swapIdx;
}

// console.log(pivotHelper([4, 8, 2, 1, 5, 7, 6, 3]));
