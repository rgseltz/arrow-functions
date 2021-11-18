//refactor with arrow function 
// function double(arr) {
//   return arr.map(function(val) {
//     return val * 2;
//   });
// }

// const double = (arr) => {return arr.map(val => val * 2)};

const double = (arr) => (arr.map(val => val * 2));

//Refactor the following functions to use arrow functions:
// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

const squareAndFindEvens = numbers => (numbers.map((num => num ** 2)).filter(evens => evens % 2 === 0));
