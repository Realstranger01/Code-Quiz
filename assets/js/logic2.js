const startBtn = document.getElementById("start");
const questionTitle = document.getElementById("question-title");
const choices = document.getElementById("choices");
const feedback = document.getElementById("feedback");
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");
const submitBtnEl = document.getElementById("submit");
const scoresList = document.getElementById("highscores");
const time = document.getElementById("time");

let questionIndex = 0;
let score = 0;
let timeLeft = 75;
let timerId;

const questions = [
    {
        title: "Commonly used data types DO NOT include?",
        choices: [
            "strings", "booleans", "alerts", "number"
        ],
        answer: "booleans"
    },
    {
        title: "The condition in an if / else statement is enclosed within _________.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses" //parentheses
    },

    {
        title: "Arrays in JavaScript can be used to store ________.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: 3 //all of the above
    },

    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log" //console.log
    },

    {
        title: "String values must be enclosed within ______ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "curly brackets" //quotes
    }
];

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startBtn.style.display = "none";
    questionTitle.parentElement.style.display = "block";
    timerId = setInterval(function () {
        timeLeft--;
        time.textContent = timeLeft;
        if (timeLeft <= 0 || questionIndex >= questions.length) {
            endQuiz();
        }
    }, 1000);
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[questionIndex];
    questionTitle.textContent = currentQuestion.title;
    choices.innerHTML = "";
    currentQuestion.choices.forEach(function (choice) {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", function () {
            const correctAudio = new Audio("./assets/sfx/correct.wav");
            const incorrectAudio = new Audio("./assets/sfx/incorrect.wav");
            if (choice === currentQuestion.answer) {
                feedback.textContent = "Correct!";
                feedback.style.display = "block";
                correctAudio.play();
                setTimeout(function () {
                    feedback.style.display = "none";
                }, 1000);
                score += 10;
            } else {
                feedback.textContent = "Incorrect!";
                feedback.style.display = "block";
                incorrectAudio.play();
                setTimeout(function () {
                    feedback.style.display = "none";
                }, 1000);
                timeLeft -= 10;
            }
            questionIndex++;
            if (questionIndex >= questions.length) {
                endQuiz();
            } else {
                showQuestion();
            }
        });

        choices.appendChild(button);
    });
}

function endQuiz() {
    console.log("end-quiz");
    clearInterval(timerId);
    questionTitle.parentElement.style.display = "none";
    endScreen.style.display = "block";
    finalScore.textContent = timeLeft;
    submitBtnEl.addEventListener("click", showResponse);
    function showResponse(event) {
        // Prevent default action
        event.preventDefault();

        let initialsTextEl = document.getElementById('initials');

        let newResult = {
            initials: initialsTextEl.value.trim(),
            score: timeLeft,
            date: new Date().toDateString() + " " + new Date().toLocaleTimeString()
        };

        let scoresHistory = JSON.parse(localStorage.getItem("scores")) || [];
        scoresHistory.push(newResult);
        localStorage.setItem("scores", JSON.stringify(scoresHistory));

        location.href = './pages/highscores.html';
    }
};

