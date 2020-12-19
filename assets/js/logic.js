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

// call out variables

// var firstQuestion = ["Commonly used data types DO NOT include:", "nothing here"];
// var firstAnswer = ["1. strings","2. booleans", "3. alerts", "4. numbers"];
// correct answer is "3. alerts".

// var secondQuestion = ["The condition in an if / else statement is enclosed within_____."]
// var secondAnswer = ["1. qoutes", "2. curly brackets", "3. parentheses", "4. square brackets"];
// "3. parentheses"

// var thirdQuestion = ["Arrays in Javascript can be used to store:"]
// var thirdAnswers = ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"];
// "4. all of the above"

//var fourthQuestion = ["String values must be enclosed within____ when being assigned to variables"]
// var fourthAnswer = ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"];
// "3. quotes"

// var fifthQuestion = ["A very useful tool used during development and debugging for printing content to the debugger is:"]
// var fifthAnswer = ["1. Javascript", "2. terminal / bash", "3. helps", "4. console log"];
// "4. console log"

// Main timer

timerDigit.textContent = 75;

startButton.addEventListener("click", function(event){
    event.preventDefault();

    var timeInterval = setInterval(function(){
        timerDigit.textContent--;

        if(timerDigit.textContent === 0){
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

// office hours tutoring - worked on overall process and function call outs.
// added for loop

for (var i=1; i<5; i++){
    var button = document.createElement("button");
    button.id = "button" + i;
    button.classList.add("answerButton");
    choicesEl.appendChild(button);
}

var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")
var button4 = document.getElementById("button4")

button1.textContent = "1. strings";
button2.textContent = "2. booleans";
button3.textContent = "3. alerts";
button4.textContent = "4. numbers";

var currentQuestionFunction = questionSetTwo; // see questions below. reassigns variable as program moves through.

// var answerButtons = document.getElementsByClassName("answerButton");
// answerButtons.forEach((button)=>{button.addEventListener("click", function(e){console.log(e)})})

document.addEventListener("click", function(e){
    let answer = e.target.getAttribute("data-id");
    if (answer === "correct"){
        correctAnswer(currentQuestionFunction); // see variable called out on line 82
    }else if (answer === "incorrect"){
        inCorrectAnswer(currentQuestionFunction); // see variable called out on line 82
    }

});

// Question One
// correct answer is 3

startButton.addEventListener("click", function(event){
    event.preventDefault();

    titleElement.textContent = "Commonly used data types DO NOT include:"
    button1.setAttribute("data-id", "incorrect")
    button2.setAttribute("data-id", "incorrect")
    button3.setAttribute("data-id", "correct")
    button4.setAttribute("data-id", "incorrect")
    console.log(event.target)

});

function inCorrectAnswer(nextQuestionFunction){
    console.log("InCorrect!");
    nextQuestionFunction();
}

function correctAnswer(nextQuestionFunction){
    console.log("That's correct! Great job!");
    nextQuestionFunction();
}

// Question 2

function questionSetTwo(){

    button1.textContent = "1. quotes";
    button2.textContent = "2. curley brackets";
    button3.textContent = "3. parentheses";
    button4.textContent = "4. square brackets";

    // correct answer is 3

    titleElement.textContent = "The condition in an if / else statement is enclosed within_____."
    button1.setAttribute("data-id", "incorrect")
    button2.setAttribute("data-id", "incorrect")
    button3.setAttribute("data-id", "correct")
    button4.setAttribute("data-id", "incorrect")
    currentQuestionFunction = questionSetThree;
}

// Question 3

function questionSetThree(){

    // correct answer is "4. all of the above"

    button1.textContent = "1. numbers and strings";
    button2.textContent = "2. other arrays";
    button3.textContent = "3. booleans";
    button4.textContent = "4. all of the above";

    titleElement.textContent = "Arrays in Javascript can be used to store:";
    button1.setAttribute("data-id", "incorrect")
    button2.setAttribute("data-id", "incorrect")
    button3.setAttribute("data-id", "incorrect")
    button4.setAttribute("data-id", "correct")
    currentQuestionFunction = questionSetFour;
    
}

function questionSetFour(){

    button1.textContent = "1. commas";
    button2.textContent = "2. curly brackets";
    button3.textContent = "3. quotes";
    button4.textContent = "4. parenthesis";

    // correct answer is 3.

    titleElement.textContent = "String values must be enclosed within____ when being assigned to variables";
    button1.setAttribute("data-id", "incorrect")
    button2.setAttribute("data-id", "incorrect")
    button3.setAttribute("data-id", "correct")
    button4.setAttribute("data-id", "incorrect")
    currentQuestionFunction = questionSetFive;

}

function questionSetFive(){

    // correct answer is 4

    button1.textContent = "1. Javascript";
    button2.textContent = "2. terminal / bash";
    button3.textContent = "3. helps";
    button4.textContent = "4. console log";

    titleElement.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    button1.setAttribute("data-id", "incorrect")
    button2.setAttribute("data-id", "incorrect")
    button3.setAttribute("data-id", "incorrect")
    button4.setAttribute("data-id", "correct")
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

