function pairDiff(a, b) {
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] - a[j] === b || a[j] - a[i] === b) {
        return 1;
      }
    }
  }
  return 0;
}

const c = pairDiff([5, 10, 3, 2, 50, 80], 72);
const d = pairDiff([5, 10, 3, 2, 50, 80], 78);

console.log(c);
console.log(d);
