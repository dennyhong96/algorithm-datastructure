// // time O(n)
function findLongestSubstring(str) {
  let longest = 0;
  const seen = {};
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (seen[char]) {
      start = Math.max(seen[char], start);
    }
    longest = Math.max(longest, i - start + 1);
    seen[str[i]] = i + 1;
  }
  return longest;
}
console.log(findLongestSubstring("thecatinthehat"));
