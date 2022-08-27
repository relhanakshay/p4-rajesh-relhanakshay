function sortArray(n, arr) {
  let countZero = 0;
  let countOne = 0;
  let countTwo = 0;
  // console.log(arr.length);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      countZero++;
    } else if (arr[i] === 1) {
      countOne++;
    } else {
      countTwo++;
    }
  }

  // console.log(countZero);
  // console.log(countOne);
  // console.log(countTwo);

  let arr2 = [];
  // console.log(arr2);

  while (countZero > 0) {
    arr2.push(0);
    countZero--;
  }
  while (countOne > 0) {
    arr2.push(1);
    countOne--;
  }
  while (countTwo > 0) {
    arr2.push(2);
    countTwo--;
  }

  return arr2;
}

const a = sortArray(7, [0, 1, 2, 1, 2, 0, 0]);
console.log(a);
