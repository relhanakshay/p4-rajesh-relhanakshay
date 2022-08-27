function buySell(a) {
  let buyPrice = 0;
  let sellPrice = 0;
  let profit = 0;

  for (let i = 0; i < a.length; i++) {
    buyPrice = a[i];
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] > buyPrice) {
        if (a[j] - buyPrice > profit) {
          profit = a[j] - buyPrice;
          sellPrice = a[j];
        }
      }
    }
  }
  return profit;
}

const a = buySell([2, 1, 4]);
console.log(a);
