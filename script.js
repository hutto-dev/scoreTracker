// Add Team Info
const teamName = document.getElementById("team-name");
const teamRecord = document.getElementById("team-record");
const addTeam = document.getElementById("add-team");

// Scoreboard
const awayTitle = document.getElementById("away-school-name");
const awayRecord = document.getElementById("away-school-record");
const homeTitle = document.getElementById("home-school-name");
const homeRecord = document.getElementById("home-school-record");

// Radios
const homeRadio = document.getElementById("home-radio");
const awayRadio = document.getElementById("away-radio");

// Choose Team Radios
const chooseHome = document.getElementById("choose-home");
const chooseAway = document.getElementById("choose-away");

// Choose Team Labels
const chooseHomeLabel = document.getElementById("choose-home-label");
const chooseAwayLabel = document.getElementById("choose-away-label");

// Update Score box
const updateScoreBox = document.getElementById("update-score-box");
const homeScore = document.getElementById("home-score");
const awayScore = document.getElementById("away-score");

// Choose Team Buttons
const submitButton = document.getElementById("submit-button");
const newGameButton = document.getElementById("new-game-button");

// Modal
const modalContainer = document.getElementById("modal-container");
const modalYesButton = document.getElementById("modal-button-yes");
const modalNoButton = document.getElementById("modal-button-no");

//Add Teams

addTeam.addEventListener("click", function (e) {
  e.preventDefault();
  if (homeRadio.checked) {
    homeTitle.style.visibility = "visible";
    homeRecord.style.visibility = "visible";
    homeTitle.textContent = teamName.value;
    homeRecord.textContent = teamRecord.value;
    chooseHomeLabel.textContent = teamName.value;
    teamName.value = "";
    teamRecord.value = "";
    homeRadio.checked = false;
  } else if (awayRadio.checked) {
    awayTitle.style.visibility = "visible";
    awayRecord.style.visibility = "visible";
    awayTitle.textContent = teamName.value;
    awayRecord.textContent = teamRecord.value;
    chooseAwayLabel.textContent = teamName.value;
    teamName.value = "";
    teamRecord.value = "";
    awayRadio.checked = false;
  }
});

// Submitting Scores

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (chooseAway.checked) {
    awayScore.textContent = updateScoreBox.value;
    updateScoreBox.value = "";
  } else if (chooseHome.checked) {
    homeScore.textContent = updateScoreBox.value;
    updateScoreBox.value = "";
  }
});

// New Games

newGameButton.addEventListener("click", function (e) {
  e.preventDefault();
  modalContainer.style.visibility = "visible";
});

modalYesButton.addEventListener("click", function () {
  homeTitle.style.visibility = "hidden";
  homeRecord.style.visibility = "hidden";
  homeTitle.textContent = "";
  homeRecord.textContent = "";
  chooseAwayLabel.textContent = "Away";
  chooseHomeLabel.textContent = "Home";
  teamName.value = "";
  teamRecord.value = "";
  awayScore.textContent = "0";
  homeScore.textContent = "0";
  modalContainer.style.visibility = "hidden";
});

modalNoButton.addEventListener("click", function () {
  modalContainer.style.visibility = "hidden";
});
