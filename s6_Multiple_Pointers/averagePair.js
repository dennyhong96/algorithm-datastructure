// time O(n), space O(1)
function averagePair(arr, avg) {
  let p1 = 0;
  let p2 = arr.length - 1;
  while (p1 < p2) {
    const curAvg = (arr[p1] + arr[p2]) / 2;
    if (curAvg === avg) {
      return true;
    } else if (curAvg < avg) {
      p1++;
    } else {
      p2--;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([], 4));
