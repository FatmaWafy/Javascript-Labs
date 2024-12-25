//c-1
function alphabet_position(str) {
  let alphabetical = "abcdefghijklmnopqrstuvwxyz";
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (alphabetical.includes(char)) {
      result.push(alphabetical.indexOf(char) + 1);
    }
  }
  return result.join(" ");
}
console.log(alphabet_position("The sunset sets at twelve o' clock."));

//c-2
function order(text) {
  if (text === "") {
    return "";
  }

  let arrOfText = text.split(" ");

  arrOfText.sort(function (a, b) {
    return a.match(/\d/) - b.match(/\d/);
  });

  return arrOfText.join(" ");
}
console.log(order("is2 Thi1s T4est 3a"));

//c-3
function specialMultiply(a, b) {
  if (b !== undefined) {
    return a * b;
  } else {
    return function (c) {
      return a * c;
    };
  }
}
console.log(specialMultiply(2, 5));
console.log(specialMultiply(2)(5));
console.log(specialMultiply(2));

//c-4
function guessingGame(amount) {
  let answer = Math.floor(Math.random() * 11);
  let guesses = 0;

  return function (guess) {
    guesses++;
    if (guesses > amount) {
      return `No more guesses, the answer was ${answer}`;
    }
    if (guess === answer) {
      return "You got it!";
    } else if (guess < answer) {
      return "Your guess is too low!";
    } else {
      return "Your guess is too high!";
    }
  };
}
var game = guessingGame(5);
console.log(game(1));
console.log(game(8));
console.log(game(5));
console.log(game(7));
var game2 = guessingGame(3);
console.log(game2(5));
console.log(game2(3));
console.log(game2(1));
