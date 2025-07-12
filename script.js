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

addTeam.addEventListener("click", function () {
  event.preventDefault();
  if (homeRadio.checked) {
    homeTitle.style.visibility = "visible";
    homeRecord.style.visibility = "visible";
    homeTitle.textContent = teamName.value;
    homeRecord.textContent = teamRecord.value;
    teamName.value = "";
    teamRecord.value = "";
  } else if (awayRadio.checked) {
    awayTitle.style.visibility = "visible";
    awayRecord.style.visibility = "visible";
    awayTitle.textContent = teamName.value;
    awayRecord.textContent = teamRecord.value;
  }
});
