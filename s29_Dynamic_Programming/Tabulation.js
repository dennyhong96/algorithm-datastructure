// Tabulation - (bottom up approach) usually done with loops
// O(n) linear time, single loop
function fib3(num) {
  if (num === 1 || num === 2) return 1;
  const fibNums = [undefined, 1, 1];
  for (let i = 3; i <= num; i++) {
    // start with smallest sub-problem and build up the final solution
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[num];
}

console.log(fib3(100));
