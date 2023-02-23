//function to get highscores from local storage and display on page
function showHighscores(){
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    highscores.sort(function (a,b){
        return b.score - a.score;
    });

    for (var i = 0; i < highscores.length; i += 1) {

        var liTag = document.createElement("li");
        liTag.textContent = highscores[i].userInitials + " - " + highscores[i].score;

        var olEl = document.querySelector("#highscores");
        olEl.appendChild(liTag);
    }
};

//function to clear scores from local storage
function clearScores(){
    window.localStorage.removeItem('highscores');
    window.location.reload();
};

var clearBtn = document.querySelector("#clear")

clearBtn.addEventListener("click", clearScores);

showHighscores();