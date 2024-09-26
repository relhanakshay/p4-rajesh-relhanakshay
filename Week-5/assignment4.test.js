const mathOperations = {
  sum: function (a, b) {
    return a + b;
  },
  diff: function (a, b) {
    return a - b;
  },
  product: function (a, b) {
    return a * b;
  },
};

test("two plus two is four", () => {
  expect(mathOperations.sum(2, 2)).toBe(4);
});

test("eight plus seven is fifteen", () => {
  expect(mathOperations.sum(8, 7)).toBe(15);
});

test("twenty three plus forty is sixty three", () => {
  expect(mathOperations.sum(23, 40)).toBe(63);
});

test("two minus one is one", () => {
  expect(mathOperations.diff(2, 1)).toBe(1);
});

test("four minus one is three", () => {
  expect(mathOperations.diff(4, 1)).toBe(3);
});

test("four multiply one is four", () => {
  expect(mathOperations.product(4, 1)).toBe(4);
});

test("eight multiply zero is zero", () => {
  expect(mathOperations.product(8, 0)).toBe(0);
});
