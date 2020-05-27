// time O(nlogn), space O(n)
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // base case when only 1 element in arr
  } else {
    const mid = Math.floor(arr.length / 2); // divide arr into left and right halves
    return mergeArray(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
  }
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));

// helper function to merge two arrays in sorted mannar
function mergeArray(arr1, arr2) {
  let i1 = 0;
  let i2 = 0;
  const result = [];
  // compare then push the smaller element into array
  while (i1 < arr1.length && i2 < arr2.length) {
    if (arr1[i1] < arr2[i2]) {
      result.push(arr1[i1]);
      i1++;
    } else {
      result.push(arr2[i2]);
      i2++;
    }
  }
  // put remaining elements into result
  while (i1 < arr1.length) {
    result.push(arr1[i1]);
    i1++;
  }
  while (i2 < arr2.length) {
    result.push(arr2[i2]);
    i2++;
  }
  return result;
}
