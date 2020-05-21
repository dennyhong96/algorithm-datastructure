function isPalindrome(str) {
  if (str.length < 1) {
    return false;
  } else if (str.length === 1) {
    return true;
  } else if (str.length === 2) {
    return str[0] === str[1];
  } else {
    return str[0] === str[str.length - 1] && isPalindrome(str.slice(1, -1));
  }
}

console.log(isPalindrome("racecar"));
