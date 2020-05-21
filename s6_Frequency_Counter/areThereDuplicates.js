function areThereDuplicates(...args) {
  const argCount = {};
  for (let i = 0; i < args.length; i++) {
    const key = args[i];
    argCount[key] = (argCount[key] || 0) + 1;
  }
  for (const key in argCount) {
    if (argCount[key] > 1) return true;
  }
  return false;
}

// two pointers solution
function areThereDuplicates2(...args) {
  args.sort((a, b) => a - b); // ascending order
  let p1 = 0;
  let p2 = 1;
  while (p2 < args.length) {
    if (args[p1] === args[p2]) return true;
    p1++;
    p2++;
  }
  return false;
}

// construct a new Set then compare size
function areThereDuplicates3(...args) {
  return new Set(args).size !== args.length;
}

console.log(areThereDuplicates(1, 2, 3, 4, 5));
console.log(areThereDuplicates2(1, 2, 3, 4, 5));
console.log(areThereDuplicates3(1, 2, 3, 4, 5));
