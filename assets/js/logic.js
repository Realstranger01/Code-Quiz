import{questionsAnswers} from "./questions";
console.log(questionsAnswers);


var startButtonEl = document.getElementById("start");
var startScreenEl = document.getElementById("start-screen");
var questionEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var questionTitleEl = document.getElementById("question-title");

startButtonEl.addEventListener("click", function () {
    startScreenEl.classList.add("hide");
    questionEl.classList.remove("hide");
    
    

});

// populating variables questionTitleEl and choicesEl(logic)



// how to display the next question after the users answers the first questions(logic)
// how to get the timer started(logic)
// how to display the timer(logic)
// how do you get the user's choice(logic)
// how does do you check if the choice is incorrect or correct(logic)
// how do you track the user's score(logic)
// how do you subtract from the timer upon it being correct(logic)
// its gameover if the timer runs out or if all the questions are answered(logic)

