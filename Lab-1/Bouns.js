//c-5 Bouns
function happy(num) {
  while (num !== 1 && num !== 4) {
    let sum = 0;

    while (num > 0) {
      let digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    num = sum;
  }
  return num === 1;
}

function checkHappy(count) {
  let found = 0;
  let start = 1;

  while (found < count) {
    if (happy(start)) {
      console.log(start);
      found++;
    }
    start++;
  }
}
checkHappy(5);
