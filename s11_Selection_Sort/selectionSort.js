// time O(n2)
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    if (minIdx !== i) swap(arr, i, minIdx); // if minIdx not changed dont swap
  }
  return arr;
}

console.log(selectionSort([5, 3, 6, 8, 2]));
