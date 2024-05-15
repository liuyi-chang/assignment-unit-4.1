console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
function consoleLogName (name){
  return console.log(helloName(name));
}
consoleLogName('Jo');
consoleLogName('Stacy');

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
function consoleLogNumber1 (firstNumber, secondNumber){
  return console.log(`Calculation: ${firstNumber}+${secondNumber}=${addNumbers(firstNumber, secondNumber)}`);
}

consoleLogNumber1 (1, 2);
consoleLogNumber1 (34, 243);


// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  return firstNumber * secondNumber * thirdNumber
}
function consoleLogMultiplyNumbers (firstNumber, secondNumber, thirdNumber){
  return console.log(`Calculation: ${firstNumber}*${secondNumber}*${thirdNumber}=${multiplyThree(firstNumber,secondNumber,thirdNumber)}`);
}
consoleLogMultiplyNumbers (1, 3, 5);
consoleLogMultiplyNumbers (5, 10, 20);


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  else return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
number = 5; 

if (isPositive (number) === true){
  console.log (`${number} is positive.`);
}
else console.log (`${number} is not positive.`);

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  return array[array.length-1];
}
arrayFood = ['chicken', 'peanuts', 'cucumber'];
console.log (`The last item of the array is ${getLast(arrayFood)}`);

arrayEmpty = [];
console.log (`The last item of the array is ${getLast(arrayEmpty)}`);

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  let result;
  for (let arrayItem of array){
    if (arrayItem === value){
      result = true;
      break;
    }
    else {
      result = false;
    };
  }
  return result;
}
arrayNumbers = [1, 2, 4, 5, 3, 8, 9];
console.log(find(2,arrayNumbers));
if (find(3, arrayNumbers)===true){
  console.log(`3 is included in the array.`)
}
else{
  console.log (`3 is not included in the array.`)
}


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let arrayLetters = string.split("");
  if (letter === arrayLetters[0]){
    return true;
  }
  else {
    return false;
  }
}

function consoleLogFirstLetter (letter, string){
  if (isFirstLetter(letter,string) === true){
    return console.log (`${letter} is the first letter of ${string}.`)
  }
  else {
    return console.log (`${letter} is NOT the first letter of ${string}.`)
  }
}

consoleLogFirstLetter ('c', 'chinese');
consoleLogFirstLetter ('J','Carlos Kelley');


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  for (let arrayNumbersItem of array){
    sum += arrayNumbersItem;
  }
  return sum;
  // TODO: loop to add items

  // TODO: return the sum
}
numbersArray = [1,2,3,4,5,6,7];
console.log(`The sum of all the numbers is ${sumAll(numbersArray)}`);

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  let arrayPositiveNumbers = [];
  for (let arrayNumbersItem of array){
    if (arrayNumbersItem > 0){
      arrayPositiveNumbers.push(arrayNumbersItem);
    }
  }
  return arrayPositiveNumbers;
}
arrayNumbers = [-1, 3, 5, 0, -5, 6];
console.log(`Positive numbers include ${allPositive(arrayNumbers)}`);


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Creat a function that can do basic math operations;

function threeItemsCalculation(operator, number1, number2){
  return eval(number1+operator+number2);
}
console.log(threeItemsCalculation('+', 3, 3));
// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
