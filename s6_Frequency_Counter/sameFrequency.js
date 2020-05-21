function sameFrequency(num1, num2) {
  const n1 = num1.toString();
  const n2 = num2.toString();
  if (n1.length !== n2.length) return false;
  const n1Count = {};
  const n2Count = {};
  for (const char of n1) {
    n1Count[char] = (n1Count[char] || 0) + 1;
  }
  for (const char of n2) {
    n2Count[char] = (n2Count[char] || 0) + 1;
  }
  console.log(n1Count);
  console.log(n2Count);
  for (const key in n1Count) {
    if (n1Count[key] !== n2Count[key]) return false;
  }
  return true;
}

console.log(sameFrequency(281, 1822));
