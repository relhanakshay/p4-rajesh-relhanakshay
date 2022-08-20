let obj = {
  [Symbol.iterator]() {
    let i = 0;
    let j1 = 0,
      j2 = 1,
      sum = 0;
    return {
      next() {
        if (i < 2) {
          sum = i;
          i++;
          return { value: sum, done: i > 2 };
        }
        sum = j1 + j2;
        j1 = j2;
        j2 = sum;
        i++;
        return { value: sum, done: i > 7 };
      },
    };
  },
};

for (const el of obj) {
  console.log(el);
}
