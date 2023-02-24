


let clearBtnEl = document.getElementById("clear")
let scoreTableEl = document.getElementById("score-table")


function updateScoresTable() {
  // clear existing rows from table
  while (scoreTableEl.rows.length > 1) {
    scoreTableEl.deleteRow(-1);
  }
}
//get the scores object from local storage
var allScores = localStorage.getItem("scores");

//stringify it
var allScoresParsed = JSON.parse(allScores);

if (allScoresParsed !== allScores) {
//sort the list so that the highest score appears first
allScoresParsed.sort(function (a, b) {
  return b.userScore - a.userScore;
});

allScoresParsed.reverse();

console.log("allScoresParsed:", allScoresParsed);


// iterate localStorage
for (var i = 0; i < allScoresParsed.length; i++) {
  console.log("allScoresParsed:", allScoresParsed[i]);
  let result = new quizResult(allScoresParsed[i].userInitial, allScoresParsed[i].userScore, allScoresParsed[i].dateTime)

  console.log("result:", result);
  console.log("userInitial:", result.userInitial);
  console.log("userScore:", result.userScore);
  console.log("dateTime:", result.dateTime);

  let intialColumnEl = document.createElement('td')
  let scoreColumnEl = document.createElement('td')
  let dateColumnEl = document.createElement('td')

  intialColumnEl.innerHTML = result.userInitial
  scoreColumnEl.innerHTML = result.userScore
  dateColumnEl.innerHTML = result.dateTime

  var row = scoreTableEl.insertRow()

  row.appendChild(intialColumnEl)
  row.appendChild(scoreColumnEl)
  row.appendChild(dateColumnEl)
}

}


clearBtnEl.addEventListener('click', function (event) {
  localStorage.clear()
  location.href = '../pages/highscores.html'
})