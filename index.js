var readLine = require("readline-sync");


questionOne = {
  question: "In Hera Pheri, what was Paresh Rawal's character called?\n",
  options: ['Raju', 'Shyam', 'Baburao','Kabira'],
  answer: "Baburao",
}

questionTwo = {
  question: "What is the name of Sholay' s iconic villain?\n",
  options:['Kalia','Gabbar','Shakaal','Thakur'],
  answer: "Gabbar",
}

questionThree = {
  question: "Finish the quote from Deewar: \"Mere paas _____.\"\n",
  options:['Baap Hai', 'Paisa Hai', 'iPhone Hai', 'Maa Hai'],
  answer: "Maa Hai",
}

questionFour = {
  question: "What was aliens name in Koi Mil Gaya?\n",
  options:['Jaadu', 'Elon', 'Thanos', 'Eve'],
  answer: "Jaadu",
}

questionFive = {
  question: "What's the Movie name for this iconic Dialouge: \"Meri shaktiyon ka galat istemaal kiya gaya, maa\"\n",
  options:['Koi..Mil Gaya', 'Krrish', 'Krrish 3', 'Ra One'],
  answer: "Krrish",
}

scores = {
  shivam: 5,
  alok: 3,
}

score = 0;

var quizQuestions = [questionOne,questionTwo,questionThree,questionFour,questionFive];

function welcomeUser(){
  var userName = readLine.question("Hello, What's your name?\n");
  log("Welcome " + userName+ ", Let's play Bollywood Trivia...")
}

function startGame(){
for(var i=0; i < quizQuestions.length; i++){
  quiz(quizQuestions[i]);    
}
}


function quiz(question){
  var ans = readLine.keyInSelect(question.options, question.question);
    if(question.options[ans] === question.answer){
    log('Correct');
    score++;
  }else{
    log('Wrong');
  }

  log('-------------');
  log('Your current score: ' + score);
  log('-------------');
}

function showScores(){
  log("*****Highscores*****")

log("Shivam -> " + scores.shivam);
log("Alok -> " + scores.alok);
log("Your Score -> " + score);
}


function log(msg){
  console.log(msg);
}

welcomeUser();
startGame();
showScores();