
const question1 = document.querySelector("#question1");
const answer1 = document.querySelector("#answer1");
const question2 = document.querySelector("#question2");
const answer2 = document.querySelector("#answer2");
const question3 = document.querySelector("#question3");
const answer3 = document.querySelector("#answer3");
const question4 = document.querySelector("#question4");
const answer4 = document.querySelector("#answer4");
const question5 = document.querySelector("#question5");
const answer5 = document.querySelector("#answer5");
const endMessage = document.querySelector("#end-message");

//varable to store the correct or wrong answers
var correctAnswerCounte = 0;
var wrongAnswerCounter = 0;


//array of location for places we are lookin for 
var locations = [
  [34.240439 , 34.239556 , -118.530108 , -118.528582],//Ovitt Libarary NSWE 
  [34.238768 , 34.238125 , -118.528879 , -118.527580],//Live Oak Hall
  [34.238964 , 34.238549 , -118.533636 , -118.532761],//Police Services
  [34.243100 , 34.242933 , -118.530240 , -118.529774], //Art and Design Center
  [34.240855 , 34.240100 , -118.528480 , -118.527578]//Sequioa Hall
]

//functions for correct answers
function answer1Correct() {
  answer1.classList.add("correct");
  answer1.innerHTML = "Great Job, you got 1 point!";
  triggerQuestion2();
}

function answer2Correct() {
  answer2.classList.add("correct");
  answer2.innerHTML = "Great Job, you got 1 point!";
  triggerQuestion3();
}

function answer3Correct() {
  answer3.classList.add("correct");
  answer3.innerHTML = "Great Job, you got 1 point!";
  triggerQuestion4();
}

function answer4Correct() {
  answer4.classList.add("correct");
  answer4.innerHTML = "Great Job, you got 1 point!";
  triggerQ5();
}

function answer5Correct() {
  answer5.classList.add("correct");
  answer5.innerHTML = "Great Job! you got 1 point,let see the result";
  triggerEnd();
}
//these are the function for wron answers
function answer1Wrong() {
  answer1.classList.add("wrong");
  answer1.innerHTML = "sorry it’s wrong try next one";
  triggerQuestion2();
}

function answer2Wrong() {
  answer2.classList.add("wrong");
  answer2.innerHTML = "sorry it’s wrong try next one";
  triggerQuestion3();
}

function answer3Wrong() {
  answer3.classList.add("wrong");
  answer3.innerHTML = "sorry it’s wrong try next one";
  triggerQuestion4();
}

function answer4Wrong() {
  answer4.classList.add("wrong");
  answer4.innerHTML = "sorry it’s wrong try next one";
  triggerQ5();
}

function answer5Wrong() {
  answer5.classList.add("wrong");
  answer5.innerHTML = "sorry it’s wrong, let see the result";
  triggerEnd();
}


function triggerQuestion2() {
  question2.style.visibility = "visible";
}
function triggerQuestion3() {
  question3.style.visibility = "visible";
}
function triggerQuestion4() {
  question4.style.visibility = "visible";
}
function triggerQ5() {
  question5.style.visibility = "visible";
}
function triggerEnd() {
  endMessage.innerHTML = correctAnswerCounte + " Correct, " + wrongAnswerCounter + " Incorrect";
  endMessage.style.visibility = "visible";
}