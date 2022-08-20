function vowelCount(str) {
  let vwMap = new Map();

  for (let char of str) {
    let lowerChar = char.toLowerCase();

    if (isVowel(lowerChar)) {
      if (vwMap.has(lowerChar)) {
        vwMap.set(lowerChar, vwMap.get(lowerChar) + 1);
      } else {
        vwMap.set(lowerChar, 1);
      }
    }
  }
  return vwMap;
}

function isVowel(char) {
  return "aeiou".includes(char);
}

const a = vowelCount("abccddaaeiffoooxxuuuaaebbii");

console.log(a);
