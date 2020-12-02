'use strict';

var userName = prompt('What is your name?');
console.log('The user name is ' + userName + '!');

//TODO - create personalized welcome message with userName
//document.write('Hi ' + userName + ', thanks for visiting my site!');
alert('Hi ' + userName + ', thanks for visiting my site!');

// Question One
//TODO - ask a question y/n or yes/no response - normalize case
var homeTown = prompt('Am I from Seattle?').toLowerCase();
//TODO - console.log the answer if it is correct, in a string concatenation
if (homeTown === 'yes' || homeTown === 'y'){
  console.log(userName + ' says ' + homeTown + ', I live in Seattle.');
  alert('That\'s correct!');
} else {
  alert('You\'re wrong, I am from Seattle.');
}
//TODO - if it works, comment out console.log, send alert to user

// Question Two
//TODO - ask a question y/n or yes/no response - normalize case
var myAge = prompt('Am I 30 years old?').toLowerCase();
//TODO - console.log the answer if it is correct, in a string concatenation
if (myAge === 'yes' || myAge === 'y'){
  console.log(userName + ' answered ' + myAge + ', I am 30 years old.');
  alert('That\'s correct!');
} else {
  alert('You\'re wrong, I am 30 years old.');
}
//TODO - if it works, comment out console.log, send alert to user


// Question Three
//TODO - ask a question y/n or yes/no response - normalize case
var favoriteHobby = prompt('Do I enjoy skiing?').toLowerCase();
//TODO - console.log the answer if it is correct, in a string concatenation
if (favoriteHobby === 'yes' || favoriteHobby === 'y'){
  console.log(userName + ' answered correctly, I do enjoy skiing.');
  alert('You are correct, I do!');
} else {
  alert('You are wrong, I do enjoy it!');
}
//TODO - if it works, comment out console.log, send alert to user


// Question Four
//TODO - ask a question y/n or yes/no response - normalize case
var favoriteAnimal = prompt('Are cats my favorite animal?').toLowerCase();
//TODO - console.log the answer if it is correct, in a string concatenation
if (favoriteAnimal === 'no' || favoriteAnimal === 'n'){
  console.log('Great job ' + userName + ', you are right! Dogs are better!');
  alert('You\'re right, dogs are better!');
} else {
  alert('You are wrong, I like dogs better.');
}
//TODO - if it works, comment out console.log, send alert to user



//Question Five
//TODO - ask a question y/n or yes/no response - normalize case
var favoriteSeason = prompt('Is summer my favorite season?').toLowerCase();
//TODO - console.log the answer if it is correct, in a string concatenation
if (favoriteSeason === 'yes' || favoriteSeason === 'y'){
  console.log('Right you are ' + userName + '! I do love summer.');
  alert('That\'s correct!');
} else {
  alert('Nope, you are wrong.');
}
//TODO - if it works, comment out console.log, send alert to user

alert('Thanks for answering all these questions ' + userName + ', I appreciate you wanting to know a bit more about me!');


// var favoriteFood = prompt('What is your favorite food?');
// console.log(userName + ' answered that ' + favoriteFood + ' is their favorite food.');

// var feelingToday = prompt('How do you feel today?');
// console.log(userName + ' feels ' + feelingToday + ' today.');

// alert('Thanks for answering ' + userName + ', ' + homeTown + ' is great!' + ' I really enjoy ' + favoriteFood + ' as well. I appreciate you letting me know that you feel ' + feelingToday + ' today. It is always good to check in on each other.');

