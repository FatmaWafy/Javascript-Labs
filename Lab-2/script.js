//c-1
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort(function (a, b) {
  return a - b;
});
console.log(arr1);

//c-2
function bigWord(str) {
  let word = str.split(" ");
  for (let i = 0; i <= word.length; i++) {
    if (word[i].length > word[i + 1].length) {
      return word[i];
    } else {
      return word[i + 1];
    }
  }
  return word;
}
console.log(bigWord("Web Development Tutorial"));

//c-3
function number(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(number(5));

//c-4
function amountTocoins(num, arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    while (num >= arr[i]) {
      newArr.push(arr[i]);
      num -= arr[i];
    }
  }
  return newArr.join(",");
}
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));
