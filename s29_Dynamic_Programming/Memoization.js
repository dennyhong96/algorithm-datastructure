// DP: when problem has recurring* sub-problem
// when end solution can be constructed from solutions of sub-problems

// O(2^n) exponential* time
function fib(num) {
  if (num === 1 || num === 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

// console.log(fib(40));

// Memoization (top-down approach) - memoing the result of the repeting sub-problem
// O(n) linear time
function fib2(num, memo = [undefined, 1, 1]) {
  if (memo[num]) return memo[num];
  const result = fib2(num - 1, memo) + fib2(num - 2, memo);
  memo[num] = result;
  return result;
}

console.log(fib2(40));
