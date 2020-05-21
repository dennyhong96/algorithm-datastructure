function collectStrings(obj) {
  let arr = [];
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "string") {
      arr = arr.concat(value);
    } else if (typeof value === "object") {
      arr = arr.concat(collectStrings(value));
    }
  }
  return arr;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
