'use strict';

var userName = prompt('What is your name?');
var correctAnswersTotal = 0;

alert('Hi ' + userName + ', thanks for visiting my site!');

function questionOne() {
  var homeTown = prompt('Am I from Seattle?').toLowerCase();
  if (homeTown === 'yes' || homeTown === 'y') {
    correctAnswersTotal++;
    alert('That\'s correct!');
  } else {
    alert('You\'re wrong, I am from Seattle.');
  }
}

function questionTwo() {
  var myAge = prompt('Am I 30 years old?').toLowerCase();
  if (myAge === 'yes' || myAge === 'y') {
    correctAnswersTotal++;
    alert('That\'s correct!');
  } else {
    alert('You\'re wrong, I am 30 years old.');
  }
}

function questionThree() {
  var favoriteHobby = prompt('Do I enjoy skiing?').toLowerCase();
  if (favoriteHobby === 'yes' || favoriteHobby === 'y') {
    correctAnswersTotal++;
    alert('You are correct, I do!');
  } else {
    alert('You are wrong, I do enjoy it!');
  }
}

function questionFour() {
  var favoriteAnimal = prompt('Are cats my favorite animal?').toLowerCase();
  if (favoriteAnimal === 'no' || favoriteAnimal === 'n') {
    alert('You\'re right, dogs are better!');
    correctAnswersTotal++;
  } else {
    alert('You are wrong, I like dogs better.');
  }
}

function questionFive() {
  var favoriteSeason = prompt('Is summer my favorite season?').toLowerCase();
  if (favoriteSeason === 'yes' || favoriteSeason === 'y') {
    alert('That\'s correct!');
    correctAnswersTotal++;
  } else {
    alert('Nope, you are wrong.');
  }
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();

alert('Thanks for answering all these questions ' + userName + ', I appreciate you wanting to know a bit more about me!');


var correctAnswer = 19;
var numberGuesses = 4;
console.log(userGuess);
for (var i = 0; i < numberGuesses; i++) {
  var userGuess = parseInt(prompt('Guess a number between 1 and 20'));
  console.log(userGuess);
  if (userGuess === correctAnswer) {
    correctAnswersTotal++;
    alert('Great guess, you are correct!');
    break;
  }
  if (userGuess < correctAnswer && i !== 3) {
    alert('Too low, guess again');
  } else if (userGuess > correctAnswer && i !== 3) {
    alert('Too high, guess again');
  } else {
    alert(`You are wrong, correct answer is ${correctAnswer}`);
  }
  console.log(i);
}

var answersColor = ['blue', 'aqua', 'teal', 'sky'];
var guessCount = 0;
var guessMax = 6;
var guessCorrect = false;
while (!guessCorrect && guessCount < guessMax) {
  guessCount++;
  var question = prompt('What are my favorite colors?');
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

if (!guessCorrect){
  alert(`The correct answers are ${answersColor[0]}, ${answersColor[1]}, ${answersColor[2]}.`);
}

alert(`Thanks for playing the guessing game ${userName}! Out of 7 questions you got ${correctAnswersTotal} correct!`);


