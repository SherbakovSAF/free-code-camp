// Lesson 7
// --------------------------------------------------------
// Lesson 6
// // The global variable
// const bookList = [
//     "The Hound of the Baskervilles",
//     "On The Electrodynamics of Moving Bodies",
//     "Philosophiæ Naturalis Principia Mathematica",
//     "Disquisitiones Arithmeticae",
// ];

// // Change code below this line
// function add(bookName, stroke) {
//     let newArray = [];
//     bookName.map((e) => newArray.push(e));
//     newArray.push(stroke);
//     return newArray;

//     // Change code above this line
// }

// // Change code below this line
// function remove(bookName, stroke) {
//     let newArray = [];
//     bookName.forEach((e) => {
//         if (e != stroke) {
//             newArray.push(e);
//         }
//     });
//     return newArray;
// }

// --------------------------------------------------------
// Lesson 5
// The global variable
// let fixedValue = 4;

// // Only change code below this line
// function incrementer(arg) {
// return arg + 1

//   // Only change code above this line
// }
// --------------------------------------------------------
// Lesson 4
// The global variable
// let fixedValue = 4;

// function incrementer() {
//   // Only change code below this line
// return fixedValue + 1

//   // Only change code above this line
// }
// --------------------------------------------------------
// Lesson 3

// --------------------------------------------------------
// Lesson 2
// // Function that returns a string representing a cup of green tea
// const prepareGreenTea = () => 'greenTea';

// // Function that returns a string representing a cup of black tea
// const prepareBlackTea = () => 'blackTea';

// /*
// Given a function (representing the tea type) and number of cups needed, the
// following function returns an array of strings (each representing a cup of
// a specific type of tea).
// */
// const getTea = (prepareTea, numOfCups) => {
//   const teaCups = [];

//   for(let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };

// // Only change code below this line
// const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
// const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// // Only change code above this line

// console.log(
//   tea4GreenTeamFCC,
//   tea4BlackTeamFCC
// );
// --------------------------------------------------------
// Lesson 1
// // Function that returns a string representing a cup of green tea
// const prepareTea = () => 'greenTea';

// /*
// Given a function (representing the tea type) and number of cups needed, the
// following function returns an array of strings (each representing a cup of
// a specific type of tea).
// */
// const getTea = (numOfCups) => {
//   const teaCups = [];

//   for(let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };

// // Only change code below this line
// const tea4TeamFCC = getTea(40);
// // Only change code above this line
// --------------------------------------------------------