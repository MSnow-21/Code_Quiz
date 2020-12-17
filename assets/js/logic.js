// Variables on the index.html page
var timerDigit = document.getElementById("time"); // On timer div - timer in span
var startScreen= document.getElementById("start-screen"); // On start screen div
var startButton = document.getElementById("start"); // In button element
var questionsEl = document.getElementById ("questions"); // In questions div
var titleElement = document.getElementById("question-title"); // On h2 element - questions div
var choicesEl = document.getElementById("choices"); // div within questions div
var endscreenEl = document.getElementById("end-screen"); // On end-screen div
var initialsEl = document.getElementById("initials"); // p tag in end-screen div
var submitEL = document.getElementById("submit"); // button within end-screen div
var finalscoreEl = document.getElementById("final-score"); // p tag within end screen div

// call out variable

// question variables
// looking at variables options

var firstQuestion = ["Commonly used data types DO NOT include:", "nothing here"];
var firstAnswer = ["1. strings","2. booleans", "3. alerts", "4. numbers"];
var answerOne = firstAnswer[2]; // correct answer is "3. alerts". This is the 2 Index
var wrongAnswer1 = firstAnswer[0]; // This is "1. strings"
var wrongAnswer2 = firstAnswer[1]; // This is "2. booleans"
var wrongAnswer3 = firstAnswer[3]; // This is "4. numbers"

var secondQuestion = ["The condition in an if / else statement is enclosed within_____."]
var secondAnswer = ["1. qoutes", "2. curly brackets", "3. parentheses", "4. square brackets"];
// "3. parentheses"

var thirdQuestion = ["Arrays in Javascript can be used to store:"]
var thirdAnswers = ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"];
// "4. all of the above"

var fourthQuestion = ["String values must be enclosed within____ when being assigned to variables"]
var fourthAnswer = ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"];
// "3. quotes"

var fifthQuestion = ["A very useful tool used during development and debugging for printing content to the debugger is:"]
var fifthAnswer = ["1. Javascript", "2. terminal / bash", "3. helps", "4. console log"];
// "4. console log"


// main timer countdown

startButton.addEventListener("click", function(event){
    event.preventDefault();

    var timeLeft = 75;

    var timeInterval = setInterval(function(){
        timerDigit.textContent = timeLeft;
        timeLeft--;

        if(timeLeft === 0){
            timerDigit.textContent = "0";
            clearInterval(timeInterval);
        }
    }, 1000);

    console.log(event);
});

// The questions div is hidden in the start screen. Once clicked, this will allow the questions div to show //
// Process - uses var elements classnames to switch from "hide" to "start" //

startButton.addEventListener("click", function(event){
    event.preventDefault();
    startScreen.className = "hide";
    questionsEl.className = "start";
});


// trying to create a list of buttons //
// ["1. strings","2. booleans", "3. alerts", "4. numbers"]

// creating buttons //
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");

// first question answers //
// correct answer is 3. alerts //

button1.textContent = "1. strings";
button2.textContent = "2. booleans";
button3.textContent = "3. alerts";
button4.textContent = "4. numbers";

choicesEl.appendChild(button1);
choicesEl.appendChild(button2);
choicesEl.appendChild(button3);
choicesEl.appendChild(button4);

//creating ids for buttons //

var buttonuno = document.getElementsByTagName("button")[0];
var att = document.createAttribute("id");
att.value = "buttonone";
button1.setAttributeNode(att);

var buttondos = document.getElementsByTagName("button")[1];
var att = document.createAttribute("id");
att.value = "buttontwo";
button2.setAttributeNode(att);

var buttontres = document.getElementsByTagName("button")[2];
var att = document.createAttribute("id");
att.value = "buttonthree";
button3.setAttributeNode(att);

var buttonquatro = document.getElementsByTagName("button")[3];
var att = document.createAttribute("id");
att.value = "buttonfour";
button4.setAttributeNode(att);

// testing function

// ["1. strings","2. booleans", "3. alerts", "4. numbers"]

// Question One

startButton.addEventListener("click", function(event){
    event.preventDefault();

    //Question One//
    // The title element is the h2 tag in the question div //
    // Using textcontent to assign question text //
    // ["1. strings","2. booleans", "3. alerts", "4. numbers"]
    // correct answer is alerts
    titleElement.textContent = "Commonly used data types DO NOT include:"
    document.getElementById("buttonone").addEventListener("click", inCorrectAnswer1);
    document.getElementById("buttontwo").addEventListener("click", inCorrectAnswer1);
    document.getElementById("buttonthree").addEventListener("click", correctAnswer1);
    document.getElementById("buttonfour").addEventListener("click", inCorrectAnswer1);

});

// Question One - functions for correct and incorrect answers //

function inCorrectAnswer1(){
    console.log("InCorrect!");
    questionSetTwo();
}

function correctAnswer1(){
    console.log("That's correct! Great job!");
    questionSetTwo();
}

// function called for second set of questions //

function questionSetTwo(){

    //Question Set Two//
    //Removing question set one text content.
    // ["1. qoutes", "2. curly brackets", "3. parentheses", "4. square brackets"];
    // correct answer is 3. parentheses

    button1.textContent = "1. quotes";
    button2.textContent = "2. curley brackets";
    button3.textContent = "3. parentheses";
    button4.textContent = "4. square brackets";

    titleElement.textContent = "The condition in an if / else statement is enclosed within_____."
    document.getElementById("buttonone").addEventListener("click", inCorrectAnswer2);
    document.getElementById("buttontwo").addEventListener("click", inCorrectAnswer2);
    document.getElementById("buttonthree").addEventListener("click", correctAnswer2);
    document.getElementById("buttonfour").addEventListener("click", inCorrectAnswer2);

}

// Question Two - functions for incorrect and correct answers from question two

function inCorrectAnswer2(){
    console.log("InCorrect!");
    questionSetThree();
}

function correctAnswer2(){
    console.log("That's correct! Great job!");
    questionSetThree();
}

// Question Three

function questionSetThree(){

    //Question Set Three//
    //Removing question set one text content.
    // ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"];
    // correct answer is "4. all of the above"
    // ["Arrays in Javascript can be used to store:"]

    button1.textContent = "1. numbers and strings";
    button2.textContent = "2. other arrays";
    button3.textContent = "3. booleans";
    button4.textContent = "4. all of the above";

    titleElement.textContent = "Arrays in Javascript can be used to store:";
    document.getElementById("buttonone").addEventListener("click", inCorrectAnswer3);
    document.getElementById("buttontwo").addEventListener("click", inCorrectAnswer3);
    document.getElementById("buttonthree").addEventListener("click", inCorrectAnswer3);
    document.getElementById("buttonfour").addEventListener("click", correctAnswer3);
}

// Question 3 - functions for incorrect and correct answers from question 3

function inCorrectAnswer3(){
    console.log("InCorrect!");
    questionSetFour();
}

function correctAnswer3(){
    console.log("That's correct! Great job!");
    questionSetFour();
}

// Question Four

function questionSetFour(){

    //Question Set Four//
    //Removing question set one text content.
    // ["String values must be enclosed within____ when being assigned to variables"]
    // correct answer is "3. quotes"
    // ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"]

    button1.textContent = "1. commas";
    button2.textContent = "2. curly brackets";
    button3.textContent = "3. quotes";
    button4.textContent = "4. parenthesis";

    titleElement.textContent = "String values must be enclosed within____ when being assigned to variables";
    document.getElementById("buttonone").addEventListener("click", inCorrectAnswer4);
    document.getElementById("buttontwo").addEventListener("click", inCorrectAnswer4);
    document.getElementById("buttonthree").addEventListener("click", correctAnswer4);
    document.getElementById("buttonfour").addEventListener("click", inCorrectAnswer4);
}

// functions for incorrect and correct answers from question 4

function inCorrectAnswer4(){
    console.log("InCorrect!");
    questionSetFive();
}

function correctAnswer4(){
    console.log("That's correct! Great job!");
    questionSetFive();
}

function questionSetFive(){

    //Question Set Five//
    //Removing question set one text content.
    //["A very useful tool used during development and debugging for printing content to the debugger is:"]
    // correct answer is "4. console log"
    // ["1. Javascript", "2. terminal / bash", "3. helps", "4. console log"];

    button1.textContent = "1. Javascript";
    button2.textContent = "2. terminal / bash";
    button3.textContent = "3. helps";
    button4.textContent = "4. console log";

    titleElement.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    document.getElementById("buttonone").addEventListener("click", inCorrectAnswer4);
    document.getElementById("buttontwo").addEventListener("click", inCorrectAnswer4);
    document.getElementById("buttonthree").addEventListener("click", inCorrectAnswer4);
    document.getElementById("buttonfour").addEventListener("click", correctAnswer4);
}

function inCorrectAnswer5(){
    console.log("InCorrect!");
    // continue testing
}

function correctAnswer5(){
    console.log("That's correct! Great job!");
    // continue testing
}












// testing functions once clicked.
// getting


// create event listener for button
// activite timer countdown
// show questions
    // build question arrays
        // build a for loop to go through arrays
        // it needs to create buttons
        // event listener for each answer button
        // correct answer add point
            // how to show extra points in final scoring set
            // set item/get item local storage.
        // wrong answer subract extra time
            // go to next question
            // keep time going
            // final button answer - go to score screen
// score screen
    // display value of local storage as score
    // input field for initials
        // store initials as local storage.
        // link to high scores page.
// high scores page
    // create an element with two local storage items.
    // append that element to the high scores id
    // clear high scores to nothing once clear is clicked
    //

