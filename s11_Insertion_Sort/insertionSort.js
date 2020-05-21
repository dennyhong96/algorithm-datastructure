// time O(n2), always keeps left portion of list sorted. Onrline algorithm
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const curValue = arr[i];
    // have to use var because we want to refer to it after the loop
    for (var j = i - 1; j >= 0 && curValue < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = curValue; // j either stop at -1 or the index thats smaller than curValue
  }
  return arr;
}

console.log(insertionSort([3, 5, 2, 8, 7, 1]));
