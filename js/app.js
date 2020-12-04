'use strict';

var userName = prompt('What is your name?');
var correctAnswersTotal = 0;
// console.log('The user name is ' + userName + '!');

// TODO - create personalized welcome message with userName
//document.write('Hi ' + userName + ', thanks for visiting my site!');
alert('Hi ' + userName + ', thanks for visiting my site!');

function questionOne() {
  // Question One
  //TODO - ask a question y/n or yes/no response - normalize case
  var homeTown = prompt('Am I from Seattle?').toLowerCase();
  //TODO - console.log the answer if it is correct, in a string concatenation
  if (homeTown === 'yes' || homeTown === 'y') {
    // console.log(userName + ' says ' + homeTown + ', I live in Seattle.');
    correctAnswersTotal++;
    alert('That\'s correct!');
  } else {
    alert('You\'re wrong, I am from Seattle.');
  }
  //TODO - if it works, comment out console.log, send alert to user
}

function questionTwo() {
  // Question Two
  //TODO - ask a question y/n or yes/no response - normalize case
  var myAge = prompt('Am I 30 years old?').toLowerCase();
  //TODO - console.log the answer if it is correct, in a string concatenation
  if (myAge === 'yes' || myAge === 'y') {
    // console.log(userName + ' answered ' + myAge + ', I am 30 years old.');
    correctAnswersTotal++;
    alert('That\'s correct!');
  } else {
    alert('You\'re wrong, I am 30 years old.');
  }
  //TODO - if it works, comment out console.log, send alert to user
}

function questionThree() {
  // Question Three
  //TODO - ask a question y/n or yes/no response - normalize case
  var favoriteHobby = prompt('Do I enjoy skiing?').toLowerCase();
  //TODO - console.log the answer if it is correct, in a string concatenation
  if (favoriteHobby === 'yes' || favoriteHobby === 'y') {
    // console.log(userName + ' answered correctly, I do enjoy skiing.');
    correctAnswersTotal++;
    alert('You are correct, I do!');
  } else {
    alert('You are wrong, I do enjoy it!');
  }
  //TODO - if it works, comment out console.log, send alert to user
}

function questionFour() {
  // Question Four
  //TODO - ask a question y/n or yes/no response - normalize case
  var favoriteAnimal = prompt('Are cats my favorite animal?').toLowerCase();
  //TODO - console.log the answer if it is correct, in a string concatenation
  if (favoriteAnimal === 'no' || favoriteAnimal === 'n') {
    // console.log('Great job ' + userName + ', you are right! Dogs are better!');
    alert('You\'re right, dogs are better!');
    correctAnswersTotal++;
  } else {
    alert('You are wrong, I like dogs better.');
  }
  //TODO - if it works, comment out console.log, send alert to user
}

function questionFive() {
  //Question Five
  //TODO - ask a question y/n or yes/no response - normalize case
  var favoriteSeason = prompt('Is summer my favorite season?').toLowerCase();
  //TODO - console.log the answer if it is correct, in a string concatenation
  if (favoriteSeason === 'yes' || favoriteSeason === 'y') {
    // console.log('Right you are ' + userName + '! I do love summer.');
    alert('That\'s correct!');
    correctAnswersTotal++;
  } else {
    alert('Nope, you are wrong.');
  }
  //TODO - if it works, comment out console.log, send alert to user
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();

alert('Thanks for answering all these questions ' + userName + ', I appreciate you wanting to know a bit more about me!');

//Question Six
//Set the correct number, number that will win the guessing game
//Set the number of guesses that will be allowed
var correctAnswer = 19;
var numberGuesses = 4;
//Prompt user to guess a number and take numeric input
// var userGuess = prompt('Guess a number between 1 and 20');
console.log(userGuess);
//Evaluate guess against correct number
for (var i = 0; i < numberGuesses; i++) {
  var userGuess = parseInt(prompt('Guess a number between 1 and 20'));
  console.log(userGuess);
  if (userGuess === correctAnswer) {
    correctAnswersTotal++;
    alert('Great guess, you are correct!');
    break;
  }
  //Respond to user if guess is too high or too low
  if (userGuess < correctAnswer && i !== 3) {
    alert('Too low, guess again');
  } else if (userGuess > correctAnswer && i !== 3) {
    alert('Too high, guess again');
    // if (userGuess > 19 && i < numberGuesses) {
    //   alert('too high, guess again');
    // } else {
    //   alert('too low');
    // }
  } else {
    alert(`You are wrong, correct answer is ${correctAnswer}`);
  }
  console.log(i);
}
//Give user four opportunities to get the correct answer




// Question 7
// multiple answers in an array
var answersColor = ['blue', 'aqua', 'teal', 'sky'];
var guessCount = 0;
var guessMax = 6;
var guessCorrect = false;
// console.log(answersColor);
//Loop while user has not guessed correct and they have guesses left
while (!guessCorrect && guessCount < guessMax) {
  guessCount++;
  var question = prompt('What are my favorite colors?');
  // console.log(question);
  // console.log(guessCount);
  for (var j = 0; j < answersColor.length; j++) {
    if (question === answersColor[j]) {
      correctAnswersTotal++;
      alert('That is correct!');
      guessCorrect = true;
      break;
    }
  }
  if (!guessCorrect) {
    alert('Sorry, that\'s not it.');
  }
}

alert(`Thanks for playing the guessing game ${userName}! Out of 7 questions you got ${correctAnswersTotal} correct!`);

// Instructions #4 - Final score
// each correct answer, add one to the count

