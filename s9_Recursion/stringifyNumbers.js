// no modify on existing object
function stringifyNumbers(obj) {
  const newObj = {};
  for (const key in obj) {
    const value = obj[key];
    console.log(value);
    if (typeof value === "number") {
      newObj[key] = value.toString();

      // array is also object, need to rule out
    } else if (typeof value === "object" && !Array.isArray(value)) {
      newObj[key] = stringifyNumbers(value);
    } else {
      newObj[key] = value;
    }
  }
  return newObj;
}

const obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(obj);
console.log(stringifyNumbers(obj));

// const sample = {
//   num: "1",
//   test: [],
//   data: {
//     val: "4",
//     info: {
//       isRight: true,
//       random: "66",
//     },
//   },
// };
