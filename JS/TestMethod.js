// Lesson 34

// --------------------------------------------------------
// Lesson 33

// --------------------------------------------------------
// Lesson 32
// let myString = "Eleanor Roosevelt";
// let myRegex = /(Franklin|Eleanor)( | .. )Roosevelt/gi; // Change this line
// let result = myRegex.test(myString); // Change this line
// --------------------------------------------------------
// Lesson 31

// --------------------------------------------------------
// Lesson 30
// let favWord = "favorite";
// let favRegex = /favou?/; // Change this line
// let result = favRegex.test(favWord);
// --------------------------------------------------------
// Lesson 29
// let timStr = "Timmmmber";
// let timRegex = /Tim{4}ber/; // Change this line
// let result = timRegex.test(timStr);
// --------------------------------------------------------
// Lesson 28
// let timStr = "Timmmmber";
// let timRegex = /Tim{4}ber/; // Change this line
// let result = timRegex.test(timStr);
// --------------------------------------------------------
// Lesson 27
// let haStr = "Hazzzzah";
// let haRegex = /Haz{4,}ah/; // Change this line
// let result = haRegex.test(haStr);
// --------------------------------------------------------
// Lesson 26
// let ohStr = "Ohhh no";
// let ohRegex = /Oh{3,6} no/; // Change this line
// let result = ohRegex.test(ohStr);
// --------------------------------------------------------
// Lesson 25
// let sample = "Whitespace is important in separating words";
// let countNonWhiteSpace = /\S/g; // Change this line
// let result = sample.match(countNonWhiteSpace);
// --------------------------------------------------------
// Lesson 24
// let sample = "Whitespace is important in separating words";
// let countNonWhiteSpace = /\S/g; // Change this line
// let result = sample.match(countNonWhiteSpace);
// --------------------------------------------------------
// Lesson 23
// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\s/g; // Change this line
// let result = sample.match(countWhiteSpace);
// --------------------------------------------------------
// Lesson 22

// --------------------------------------------------------
// Lesson 21
// let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/g; // Change this line
// let result = movieName.match(noNumRegex).length;
// --------------------------------------------------------
// Lesson 20
// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g; // Change this line
// let result = movieName.match(numRegex).length;
// --------------------------------------------------------
// Lesson 19
// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex).length;
// --------------------------------------------------------
// Lesson 18
// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2).length;
// --------------------------------------------------------
// Lesson 17
// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/; // Change this line
// let result = lastRegex.test(caboose);
// --------------------------------------------------------
// Lesson 16
// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/; // Change this line
// let result = calRegex.test(rickyAndCal);
// console.log(result)
// --------------------------------------------------------
// Lesson 15
// let reCriminals = /C+/; // Change this line
// --------------------------------------------------------
// Lesson 14
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<[a-z0-9]*?>/; // Change this line
// let result = text.match(myRegex);
// --------------------------------------------------------
// Lesson 13
// Only change code below this line
// let chewieRegex = /Aa*/; // Change this line
// // Only change code above this line

// let result = chewieQuote.match(chewieRegex);
// --------------------------------------------------------
// Lesson 12
// let difficultSpelling = "Mississippi";
// let myRegex = /ss+/g; // Change this line
// let result = difficultSpelling.match(myRegex);
// --------------------------------------------------------
// Lesson 11
// let quoteSample = "3 blind mice.";
// let myRegex = /[^aeiou0-9]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
// console.log(result)
// --------------------------------------------------------
// Lesson 10
// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[2-6h-s]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
// --------------------------------------------------------
// Lesson 9
// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/ig; // Change this line
// let result = quoteSample.match(alphabetRegex); // Change this line
// console.log(result)
// --------------------------------------------------------
// Lesson 8
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/ig; // Change this line
// let result = quoteSample.match(vowelRegex); 
// console.log(result)
// --------------------------------------------------------
// Lesson 7
// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un/; // Change this line
// let result = unRegex.test(exampleStr);
// --------------------------------------------------------
// Lesson 6
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /Twinkle/gi; // Change this line
// let result = twinkleStar.match(starRegex); // Change this line
// --------------------------------------------------------
// Lesson 5
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // Change this line
// let result = extractStr.match(codingRegex); // Change this line
// --------------------------------------------------------
// Lesson 4
// let myString = "freeCodeCamp";
// let fccRegex = /freeCodeCamp/i; // Change this line
// let result = fccRegex.test(myString);
// --------------------------------------------------------
// Lesson 3
// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/; // Change this line
// let result = petRegex.test(petString);
// --------------------------------------------------------
// Lesson 2
// let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /Waldo/; // Change this line
// let result = waldoRegex.test(waldoIsHiding);
// --------------------------------------------------------
// Lesson 1
// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString);; // Change this line
// --------------------------------------------------------