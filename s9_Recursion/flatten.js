function flatten(arr) {
  let newArr = [];
  arr.forEach((element) => {
    newArr = newArr.concat(Array.isArray(element) ? flatten(element) : element);
  });
  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
