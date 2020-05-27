// slow O(n), not scattered enough
function hash(key, arrLength) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96; // "a" => 1...
    total = (total + value) % arrLength;
  }
  return total;
}

// slightly improved
function hash2(key, arrLength) {
  let total = 0;
  let WEIRD_PRIME = 31;
  // at most loop through 100 chars, increases speed for long keys
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const char = key[i];
    let value = char.charCodeAt(0) - 96; // "a" => 1...
    // use prime numbers to help prevent collisions
    total = (total * WEIRD_PRIME + value) % arrLength;
  }
  return total;
}

console.log(hash("pink", 10));
console.log(hash("orange", 10));
console.log(hash("purple", 10));

console.log(hash2("pink", 13));
console.log(hash2("cyan", 13));
console.log(hash2("purple", 13));
