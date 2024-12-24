//c-1
// function sort(a, b, c) {
//   let result = "";

//   if (a >= b && a >= c) {
//     if (b >= c) {
//       result = a + ", " + b + ", " + c;
//     } else {
//       result = a + ", " + c + ", " + b;
//     }
//   } else if (b >= a && b >= c) {
//     if (a >= c) {
//       result = b + ", " + a + ", " + c;
//     } else {
//       result = b + ", " + c + ", " + a;
//     }
//   } else {
//     if (a >= b) {
//       result = c + ", " + a + ", " + b;
//     } else {
//       result = c + ", " + b + ", " + a;
//     }
//   }
//   alert(result);
// }
// sort(3, -7, 2);

//c-2
// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// fizzBuzz(100);

//c-3
// function threeFive(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(threeFive(1000));

//c-4;
// function game() {
//   let start = 0;
//   const trials = 3;

//   while (start < trials) {
//     const random = Math.floor(Math.random() * 10) + 1;
//     const answer = parseInt(prompt("write number between 1 and 10"));

//     if (answer === random) {
//       alert("Good Work");
//       return;
//     } else {
//       start++;

//       if (start < trials) {
//         const tryAgain = confirm("wrong guess, want to try again?");

//         if (!tryAgain) {
//           alert("no!! bye bye");
//           return;
//         }
//       }
//     }
//   }

//   if (start === trials) {
//     alert("game over");
//   }
// }
// game();

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
