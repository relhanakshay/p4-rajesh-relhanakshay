function check3Sum(a, target) {
  let l, r;
  let final = "";
  a.sort(function (a, b) {
    return a - b;
  });
  console.log(a);

  for (let i = 0; i < a.length - 2; i++) {
    // console.log("Hello");
    l = i + 1;
    r = a.length - 1;
    // console.log("l is" + l);
    // console.log("r is " + r);
    while (l < r) {
      if (a[i] + a[l] + a[r] === target) {
        final = "(" + a[i] + "," + a[l] + "," + a[r] + ")";
        return final;
      } else if (a[i] + a[l] + a[r] < target) {
        // console.log(a[i] + a[l] + a[r]);
        l++;
      } else {
        // console.log(a[i] + a[l] + a[r]);
        r--;
      }
    }
  }
  return false;
}

let array = [2, 4, 1, 8, -10, 16];

let result = check3Sum(array, -5);
console.log(result);
