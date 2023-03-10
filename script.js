
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
const feedback = document.querySelector("#feedback")


//function to begin game
function startGame() {
    var startScreen = document.querySelector("#start-screen");
    startScreen.setAttribute("class","hide");

    questionArea.removeAttribute("class");

    timerId = setInterval(clockTick, 1000);

    timer.textContent = time;

    showQuestion();
};

//function to show quiz questions
function showQuestion(){
    var currentQuestion = quizQuestions[currentQuestionIndex];

    var questionTitle = document.querySelector("#question-title");
    questionTitle.textContent = currentQuestion.title;

    choices.innerHTML = "";

    for (var i = 0; i < currentQuestion.choices.length; i++){
        var choice = currentQuestion.choices[i];
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice waves-effect waves-light btn blue darken-4");
        choiceNode.setAttribute("value", choice);

        choiceNode.textContent = i + 1 + ". " + choice;

        choices.appendChild(choiceNode);
    }
};

//function to handle when users select a quiz answer
function selectAnswer(event) {
    var buttonEl = event.target;

    if (!buttonEl.matches('.choice')){
        return;
    };

    if (buttonEl.value !== quizQuestions[currentQuestionIndex].answer){
        time -= 10;

        if (time < 0) {
            time = 0;
        }

        timer.textContent = time;
        
        feedback.textContent = "Incorrect!"
    } else {

        feedback.textContent = "Correct!"
    }

    feedback.setAttribute("class", "feedback center-align");
    setTimeout(function(){
        feedback.setAttribute("class", "feedback hide");
    }, 1000);

    currentQuestionIndex++;

    if (time <= 0 || currentQuestionIndex === quizQuestions.length){
        endQuiz();
    } else {
        showQuestion();
    }
};


//function for when the quiz ends
function endQuiz(){

    clearInterval(timerId);

    var endScreen = document.querySelector("#end-screen");
    endScreen.removeAttribute("class")

    var finalScore = document.querySelector("#final-score");
    finalScore.textContent = time;

    questionArea.setAttribute("class", "hide");
};

//function for countdown timer
function clockTick(){
    time--;
    timer.textContent = time;

    if (time <= 0){
        endQuiz();
    }
};

//function to save score
function saveScore() {
    var userInitials = initials.value.trim();

    if (userInitials !== ""){

        var highscores = 
        JSON.parse(window.localStorage.getItem("highscores")) || [];

        var newScore = {
            score: time,
            userInitials: userInitials,
        };

        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        window.location.href = "scores.html"
    }
};

function checkForEnter(event){
    if(event.key === "Enter"){
        saveScore();
    }
}


//event listeners to set off different functions for gameplay
startBtn.addEventListener("click", startGame);

submitBtn.addEventListener("click", saveScore);

choices.addEventListener("click", selectAnswer);

initials.addEventListener("onkeyup", checkForEnter);