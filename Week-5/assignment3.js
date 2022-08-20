const hasDuplicate = (arr) => {
  if (new Set(arr).size !== arr.length) {
    console.log("Duplicate found");
  } else {
    console.log("No Duplicate found");
  }
};

hasDuplicate([1, 5, -1, 3]);

hasDuplicate([3, 2, -1, 3]);
