// Lesson 24
// function add(x) {
//    // Only change code below this line
//  return function(y){
//    return function(z) {
//  return x + y + z
//    }
   
//  }
 
//    // Only change code above this line
//  }
 
//  add(10)(20)(30);
// --------------------------------------------------------
// Lesson 23
// function checkPositive(arr) {
//    // Only change code below this line
//  return arr.some(function(e){
//    return e >=0 
//  })
 
//    // Only change code above this line
//  }
 
//  checkPositive([1, 2, 3, -4, 5]);
// --------------------------------------------------------
// Lesson 22
// function checkPositive(arr) {
//    // Only change code below this line
//  return arr.every(function(e){
//    return e >=0 
//  })
 
//    // Only change code above this line
//  }
 
//  checkPositive([1, 2, 3, -4, 5]);
// --------------------------------------------------------
// Lesson 21
// Only change code below this line
// function urlSlug(title) {
//    return title.toLowerCase().split(' ').filter(e => e != '').join('-')
   
//    }
//    // Only change code above this line
//    console.log(urlSlug(" Winter Is  Coming"))
// --------------------------------------------------------
// Lesson 20
// function sentensify(str) {
//    // Only change code below this line
//  return str.split(/\W/).join(' ')
 
//    // Only change code above this line
//  }
 
//  ;
//  console.log(sentensify("May-the-force-be-with-you"))
// --------------------------------------------------------
// Lesson 19
// function splitify(str) {
//    // Only change code below this line
//  return str.split(/\W/)
 
//    // Only change code above this line
//  }
 
//  console.log(splitify("Hello World,I-am code"))
// --------------------------------------------------------
// Lesson 18
// const globalArray = [5, 6, 3, 2, 9];

// function nonMutatingSort(arr) {
//   // Only change code below this line
// return arr.slice(0).sort(function(a,b){
//   return a-b
// })

//   // Only change code above this line
// }

// console.log(nonMutatingSort(globalArray))
// --------------------------------------------------------
// Lesson 17
// function alphabeticalOrder(arr) {
//    // Only change code below this line
 
//    return arr.sort(function(a, b) {
//      return a === b ? 0 : a > b ? 1 : -1;
//    });
//    // Only change code above this line
//  }
 
//  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
// --------------------------------------------------------
// Lesson 16
// const squareList = arr => {
//    // Only change code below this line
//    let integerArray = arr.filter(e => e % 1 == 0).filter(e=> e>=0)
//    // Only change code above this line
//    return integerArray.map(e=> e * e)
//  };
 
//  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
//  console.log(squaredIntegers);
// --------------------------------------------------------
// Lesson 15

// --------------------------------------------------------
// Lesson 14
// function nonMutatingPush(original, newItem) {
//    // Only change code below this line
//    return original.concat(newItem);
 
//    // Only change code above this line
//  }
 
//  const first = [1, 2, 3];
//  const second = [4, 5];
//  nonMutatingPush(first, second);
// --------------------------------------------------------
// Lesson 13
// function nonMutatingConcat(original, attach) {
//    // Only change code below this line
 
//  return [...original].concat([...attach])
//    // Only change code above this line
//  }
 
//  const first = [1, 2, 3];
//  const second = [4, 5];
//  nonMutatingConcat(first, second);
// --------------------------------------------------------
// Lesson 12
// function nonMutatingSplice(cities) {
//    // Only change code below this line
//    return cities.slice(0,3);
 
//    // Only change code above this line
//  }
 
//  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
//  nonMutatingSplice(inputCities);
// --------------------------------------------------------
// Lesson 11
// function sliceArray(anim, beginSlice, endSlice) {
//      // Only change code below this line
//    let newArray = []
   
//    newArray = anim.slice(beginSlice, endSlice)
//    return newArray
   
//      // Only change code above this line
//    }
   
//    const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
//    sliceArray(inputAnim, 1, 3);
// --------------------------------------------------------
// Lesson 10
// --------------------------------------------------------
// Lesson 9
// The global variable
// const watchList = [
//      {
//        "Title": "Inception",
//        "Year": "2010",
//        "Rated": "PG-13",
//        "Released": "16 Jul 2010",
//        "Runtime": "148 min",
//        "Genre": "Action, Adventure, Crime",
//        "Director": "Christopher Nolan",
//        "Writer": "Christopher Nolan",
//        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//        "Language": "English, Japanese, French",
//        "Country": "USA, UK",
//        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//        "Metascore": "74",
//        "imdbRating": "8.8",
//        "imdbVotes": "1,446,708",
//        "imdbID": "tt1375666",
//        "Type": "movie",
//        "Response": "True"
//      },
//      {
//        "Title": "Interstellar",
//        "Year": "2014",
//        "Rated": "PG-13",
//        "Released": "07 Nov 2014",
//        "Runtime": "169 min",
//        "Genre": "Adventure, Drama, Sci-Fi",
//        "Director": "Christopher Nolan",
//        "Writer": "Jonathan Nolan, Christopher Nolan",
//        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//        "Language": "English",
//        "Country": "USA, UK",
//        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//        "Metascore": "74",
//        "imdbRating": "8.6",
//        "imdbVotes": "910,366",
//        "imdbID": "tt0816692",
//        "Type": "movie",
//        "Response": "True"
//      },
//      {
//        "Title": "The Dark Knight",
//        "Year": "2008",
//        "Rated": "PG-13",
//        "Released": "18 Jul 2008",
//        "Runtime": "152 min",
//        "Genre": "Action, Adventure, Crime",
//        "Director": "Christopher Nolan",
//        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//        "Language": "English, Mandarin",
//        "Country": "USA, UK",
//        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//        "Metascore": "82",
//        "imdbRating": "9.0",
//        "imdbVotes": "1,652,832",
//        "imdbID": "tt0468569",
//        "Type": "movie",
//        "Response": "True"
//      },
//      {
//        "Title": "Batman Begins",
//        "Year": "2005",
//        "Rated": "PG-13",
//        "Released": "15 Jun 2005",
//        "Runtime": "140 min",
//        "Genre": "Action, Adventure",
//        "Director": "Christopher Nolan",
//        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//        "Language": "English, Urdu, Mandarin",
//        "Country": "USA, UK",
//        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//        "Metascore": "70",
//        "imdbRating": "8.3",
//        "imdbVotes": "972,584",
//        "imdbID": "tt0372784",
//        "Type": "movie",
//        "Response": "True"
//      },
//      {
//        "Title": "Avatar",
//        "Year": "2009",
//        "Rated": "PG-13",
//        "Released": "18 Dec 2009",
//        "Runtime": "162 min",
//        "Genre": "Action, Adventure, Fantasy",
//        "Director": "James Cameron",
//        "Writer": "James Cameron",
//        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//        "Language": "English, Spanish",
//        "Country": "USA, UK",
//        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//        "Metascore": "83",
//        "imdbRating": "7.9",
//        "imdbVotes": "876,575",
//        "imdbID": "tt0499549",
//        "Type": "movie",
//        "Response": "True"
//      }
//    ];
   
//    // Only change code below this line
   
//    let filteredList = [];
//    filteredList = watchList
//    .filter(e => {
//      return e.imdbRating.toString() >= 8.0
//    })
//    .map(e=>{
//      return {
//           title: e.Title,
//           rating: e.imdbRating
//      }
//    })
   
   // Only change code above this line
// --------------------------------------------------------
// Lesson 8
// --------------------------------------------------------
// Lesson 7
// The global variable
// const watchList = [
//      {
//        "Title": "Inception",
//        "Year": "2010",
//        "Rated": "PG-13",
//        "Released": "16 Jul 2010",
//        "Runtime": "148 min",
//        "Genre": "Action, Adventure, Crime",
//        "Director": "Christopher Nolan",
//        "Writer": "Christopher Nolan",
//        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//        "Language": "English, Japanese, French",
//        "Country": "USA, UK",
//        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//        "Metascore": "74",
//        "imdbRating": "8.8",
//        "imdbVotes": "1,446,708",
//        "imdbID": "tt1375666",
//        "Type": "movie",
//        "Response": "True"
//      },
//      {
//        "Title": "Interstellar",
//        "Year": "2014",
//        "Rated": "PG-13",
//        "Released": "07 Nov 2014",
//        "Runtime": "169 min",
//        "Genre": "Adventure, Drama, Sci-Fi",
//        "Director": "Christopher Nolan",
//        "Writer": "Jonathan Nolan, Christopher Nolan",
//        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//        "Language": "English",
//        "Country": "USA, UK",
//        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//        "Metascore": "74",
//        "imdbRating": "8.6",
//        "imdbVotes": "910,366",
//        "imdbID": "tt0816692",
//        "Type": "movie",
//        "Response": "True"
//      },
//      {
//        "Title": "The Dark Knight",
//        "Year": "2008",
//        "Rated": "PG-13",
//        "Released": "18 Jul 2008",
//        "Runtime": "152 min",
//        "Genre": "Action, Adventure, Crime",
//        "Director": "Christopher Nolan",
//        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//        "Language": "English, Mandarin",
//        "Country": "USA, UK",
//        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//        "Metascore": "82",
//        "imdbRating": "9.0",
//        "imdbVotes": "1,652,832",
//        "imdbID": "tt0468569",
//        "Type": "movie",
//        "Response": "True"
//      },
//      {
//        "Title": "Batman Begins",
//        "Year": "2005",
//        "Rated": "PG-13",
//        "Released": "15 Jun 2005",
//        "Runtime": "140 min",
//        "Genre": "Action, Adventure",
//        "Director": "Christopher Nolan",
//        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//        "Language": "English, Urdu, Mandarin",
//        "Country": "USA, UK",
//        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//        "Metascore": "70",
//        "imdbRating": "8.3",
//        "imdbVotes": "972,584",
//        "imdbID": "tt0372784",
//        "Type": "movie",
//        "Response": "True"
//      },
//      {
//        "Title": "Avatar",
//        "Year": "2009",
//        "Rated": "PG-13",
//        "Released": "18 Dec 2009",
//        "Runtime": "162 min",
//        "Genre": "Action, Adventure, Fantasy",
//        "Director": "James Cameron",
//        "Writer": "James Cameron",
//        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//        "Language": "English, Spanish",
//        "Country": "USA, UK",
//        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//        "Metascore": "83",
//        "imdbRating": "7.9",
//        "imdbVotes": "876,575",
//        "imdbID": "tt0499549",
//        "Type": "movie",
//        "Response": "True"
//      }
//    ];
   
//    // Only change code below this line
   
//    const ratings = [];
//    watchList.map(e => {
//      ratings.push({
//        title: e.Title,
//        rating: e.imdbRating,
//      })
//    })
   
//    // Only change code above this line
   
//    console.log(JSON.stringify(ratings));
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