function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

var answer = isEven(4);
console.log(answer);

answer = isEven(21);
console.log(answer);

//check if number is even or odd
//  ^ ^ ^ ^

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

answer = factorial(5);
console.log(answer);

answer = factorial(10);
console.log(answer);

//give factorial of a number
//  ^ ^ ^ ^

function kebabToSnake(str) {
    var myString = str.replace(/-/g, "_");
    return myString;
}

var randomString = 'random-words';
console.log(randomString);
randomString = kebabToSnake(randomString);
console.log(randomString);

randomString = 'more-random-words';
console.log(randomString);
randomString = kebabToSnake(randomString);
console.log(randomString);

randomString = 'word';
console.log(randomString);
randomString = kebabToSnake(randomString);
console.log(randomString);

//switch cases for a string
//  ^ ^ ^ ^