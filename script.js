
//quiz questions
const quizQuestions = [
    {
        id:0,
        q: "One of the most popular Git repository hosts is called...",
        a: [
            { text: "Gethub", isCorrect: false },
            { text: "Gothub", isCorrect: false },
            { text: "Github", isCorrect: true },
            { text: "Greathub", isCorrect: false },
            
            ] 
    },
    
    {
        id:1,
        q: "CSS stands for...",
        a: [
            { text: "Cold salami sandwich", isCorrect: false },
            { text: "Cascading sheet styling", isCorrect: false },
            { text: "Cascading style sheets", isCorrect: true },
            { text: "Computer science school", isCorrect: false },
            ]
    },

    {
        id:2,
        q: "Which of the following will you NOT gain from a coding course?",
        a: [
            { text: "New skills", isCorrect: false },
            { text: "Knowledge about coding", isCorrect: false },
            { text: "Weight", isCorrect: true },
            { text: "Troubleshooting abilities", isCorrect: false },
            ]

    }
]            

//quiz logic
const startBtn = document.querySelector("#start-btn")
const questionArea = document.querySelector("#questions")
const timer = document.querySelector("#time")
const choices = document.querySelector("#answer-choices")
const submitBtn = document.querySelector("#submit")
const initials = document.querySelector("#initials")

function startGame() {

}