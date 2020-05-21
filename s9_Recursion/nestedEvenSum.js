function nestedEvenSum(obj, sum = 0) {
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "number") {
      if (value % 2 === 0) sum += value;
    } else if (typeof value === "object") {
      sum = nestedEvenSum(value, sum);
    }
  }
  return sum;
}

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};
console.log(nestedEvenSum(obj1));
console.log(nestedEvenSum(obj2));
