// Variables for highscores.html page
var highscoreEl = document.getElementById("highscores"); // 
var clearEl = document.getElementById("clear");

var li = document.createElement("li");
li.setAttribute("id", "list");
highscoreEl.appendChild(li);

finalScoreList = document.getElementById("list");

var finalScore = localStorage.getItem("finalScore");
var userInitials = localStorage.getItem("initials");

finalScoreList.textContent = userInitials +" "+ finalScore

// local storage clear button event listener and textcontent clearing
clearEl.addEventListener("click", function(event){
    event.preventDefault(event);
    localStorage.clear();
    highscoreEl.textContent = "";

});




