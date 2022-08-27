function subArray(a) {
  let mainSum = 0;
  let interSum = 0;
  for (let i = 0; i < a.length; i++) {
    interSum = a[i];
    if (mainSum < interSum) {
      mainSum = interSum;
    }
    for (let j = i + 1; j < a.length; j++) {
      interSum += a[j];
      if (mainSum < interSum) {
        mainSum = interSum;
      }
    }
  }
  return mainSum;
}

const a = subArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(a);
