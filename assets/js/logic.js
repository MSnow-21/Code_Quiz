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
var feedbackEl = document.getElementById("feedback"); // div below enter initials screen

// Questions - Arrays
var questionOne = ["Commonly used data types DO NOT include:", "nothing here"]
var multChoiceOne = ["1. strings","2. booleans", "3. alerts", "4. numbers"];
// correct answer is "3. alerts".

var questionTwo = ["The condition in an if / else statement is enclosed within_____."]
var multChoiceTwo = ["1. qoutes", "2. curly brackets", "3. parentheses", "4. square brackets"];
// "3. parentheses"

var questionThree = ["Arrays in Javascript can be used to store:"]
var multChoiceThree = ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"];
// "4. all of the above"

var questionFour = ["String values must be enclosed within____ when being assigned to variables"]
var multChoiceFour = ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"];
// "3. quotes"

var questionFive = ["A very useful tool used during development and debugging for printing content to the debugger is:"]
var multChoiceFive = ["1. Javascript", "2. terminal / bash", "3. for helps", "4. console log"];
// "4. console log"


// Setting local storage

localStorage.setItem("score", 0);


// Main timer

var time = 75;
timerDigit.textContent = time;


// Timer Style 4

function startCountdown(){
    var timeInterval = setInterval(function(){
        timerDigit.textContent--;
        console.log(timerDigit.textContent);

        if(timerDigit.textContent < 1){
            timerDigit.textContent === 0;
            clearInterval(timeInterval);
            endScreen();
        }

    }, 1000);
};

// Event listener for start button

startButton.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("start-screen").className = "hide";
    document.getElementById("questions").className = "start";
    // added local storage start here
    localStorage.setItem("score", "0");
    // startCountdown(seconds);
    startCountdown();
});

// for-loop

for (var i=1; i<5; i++){
    var button = document.createElement("button");
    button.id = "button" + i;
    button.classList.add("answerButton");
    choicesEl.appendChild(button);
}

// Assigning variables for text content

var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")
var button4 = document.getElementById("button4")

// button text content

button1.textContent = multChoiceOne[0];
// button1.textContent = "1. strings";
button2.textContent = multChoiceOne[1];
// button2.textContent = "2. booleans";
button3.textContent = multChoiceOne[2];
// button3.textContent = "3. alerts";
button4.textContent = multChoiceOne[3];
// button4.textContent = "4. numbers";

var currentQuestionFunction = questionSetTwo; // see questions below. reassigns variable as program moves through.

// var answerButtons = document.getElementsByClassName("answerButton");
// answerButtons.forEach((button)=>{button.addEventListener("click", function(e){console.log(e)})})

document.addEventListener("click", function(e){
    let answer = e.target.getAttribute("data-id");
    if (answer === "correct"){
        correctAnswer(currentQuestionFunction); // see variable called out on line 82
        var score = parseInt(localStorage.getItem("score")); // need to use parseInt otherwise digits do not show up correctly
        localStorage.setItem("score", score+5);


    }else if (answer === "incorrect"){
        inCorrectAnswer(currentQuestionFunction); // see variable called out on line 82
        timerDigit.textContent = parseInt(timerDigit.textContent) - 15; // 75/5 questions = 15
    }
    
});

// Question One - variables assigned above - correct answer is 3

startButton.addEventListener("click", function(event){
    event.preventDefault();

    titleElement.textContent = questionOne[0];
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

    button1.textContent = multChoiceTwo[0];
    // button1.textContent = "1. quotes";
    button2.textContent = multChoiceTwo[1];
    // button2.textContent = "2. curley brackets";
    button3.textContent = multChoiceTwo[2];
    // button3.textContent = "3. parentheses";
    button4.textContent = multChoiceTwo[3];
    // button4.textContent = "4. square brackets";

    // correct answer is 3

    titleElement.textContent = questionTwo[0];
    button1.setAttribute("data-id", "incorrect")
    button2.setAttribute("data-id", "incorrect")
    button3.setAttribute("data-id", "correct")
    button4.setAttribute("data-id", "incorrect")
    currentQuestionFunction = questionSetThree;
}

// Question 3

function questionSetThree(){

    // correct answer is "4. all of the above"

    button1.textContent = multChoiceThree[0];
    // button1.textContent = "1. numbers and strings";
    button2.textContent = multChoiceThree[1];
    // button2.textContent = "2. other arrays";
    button3.textContent = multChoiceThree[2];
    // button3.textContent = "3. booleans";
    button4.textContent = multChoiceThree[3];
    // button4.textContent = "4. all of the above";

    titleElement.textContent = questionThree[0];
    button1.setAttribute("data-id", "incorrect")
    button2.setAttribute("data-id", "incorrect")
    button3.setAttribute("data-id", "incorrect")
    button4.setAttribute("data-id", "correct")
    currentQuestionFunction = questionSetFour;
    
}

function questionSetFour(){

    button1.textContent = multChoiceFour[0];
    // button1.textContent = "1. commas";
    button2.textContent = multChoiceFour[1];
    // button2.textContent = "2. curly brackets";
    button3.textContent = multChoiceFour[2];
    // button3.textContent = "3. quotes";
    button4.textContent = multChoiceFour[3];
    // button4.textContent = "4. parenthesis";

    // correct answer is 3.

    titleElement.textContent = questionFour[0];
    button1.setAttribute("data-id", "incorrect")
    button2.setAttribute("data-id", "incorrect")
    button3.setAttribute("data-id", "correct")
    button4.setAttribute("data-id", "incorrect")
    currentQuestionFunction = questionSetFive;

}

function questionSetFive(){

    // correct answer is 4

    button1.textContent = multChoiceFive[0];
    // button1.textContent = "1. Javascript";
    button2.textContent = multChoiceFive[1];
    // button2.textContent = "2. terminal / bash";
    button3.textContent = multChoiceFive[2];
    // button3.textContent = "3. helps";
    button4.textContent = multChoiceFive[3];
    // button4.textContent = "4. console log";

    titleElement.textContent = questionFive[0];
    button1.setAttribute("data-id", "incorrect")
    button2.setAttribute("data-id", "incorrect")
    button3.setAttribute("data-id", "incorrect")
    button4.setAttribute("data-id", "correct")

}

function endScreen(){
    document.getElementById("questions").className = "hide";
    document.getElementById("end-screen").className = "start";

    var finalScore = localStorage.getItem("score");
    finalscoreEl.textContent = finalScore;

}

// name signing event listener

function displayMessage(message){
    feedbackEl.textContent = message;

}

submitEL.addEventListener("click", function(event){
    event.preventDefault();

    var initials = document.querySelector("#initials").value;
    var numberIn = initials.length
    // var finalscore = document.querySelector("#final-score").value;
    var lastScore = localStorage.getItem("score");

    if(numberIn ===3){
        displayMessage("Success - initials entered");
    }else{
        displayMessage("Error-Please enter 3 initials");
    }

    localStorage.setItem("initials", initials);
    localStorage.setItem("finalScore", lastScore);

    feedbackEl.setAttribute("class", "feedback-start")

});

