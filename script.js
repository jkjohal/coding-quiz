
//quiz questions
const quizQuestions = [
    {
        title: "One of the most popular Git repository hosts is called...",
        choices: ["Gethub", "Gothub", "Github", "Greathub"],
        answer: "Github" 
    },
    
    {
        title: "CSS stands for...",
        choices: ["Cold salami sandwich", "Cascading style sheets", "Cascading sheet styling", "Computer science school"],
        answer: "Cascading style sheets"
    },

    {
        title: "Which of the following will you NOT gain from a coding course?",
        choices: ["New skills", "Knowledge about coding", "Troubleshooting abilities", "Weight"],
        answer: "Weight"
    }
]            

//quiz logic

var currentQuestionIndex = 0;
var time = quizQuestions.length * 20;
var timerId;

const startBtn = document.querySelector("#start-btn")
const questionArea = document.querySelector("#questions")
const timer = document.querySelector("#time")
const choices = document.querySelector("#answer-choices")
const submitBtn = document.querySelector("#submit")
const initials = document.querySelector("#initials")

function startGame() {
    var startScreen = document.querySelector("#start-screen");
    startScreen.setAttribute("class","hide");

    questionArea.removeAttribute("class");

    timerId = setInterval(clockTick, 1000);

    timer.textContent = time;

    showQuestion();
}

startBtn.addEventListener("click", startGame);