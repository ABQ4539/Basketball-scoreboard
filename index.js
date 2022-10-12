
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let resultHome = 0;
let resultGuest = 0;

function addOneHome() {
    resultHome++;
    homeScore.textContent = resultHome;
}
function addTwoHome() {
    resultHome += 2;
    homeScore.textContent = resultHome;
}
function addThreeHome() {
    resultHome += 3;
    homeScore.textContent = resultHome;
}

function addOneGuest() {
    resultGuest++;
    guestScore.textContent = resultGuest;
}
function addTwoGuest() {
    resultGuest += 2;
    guestScore.textContent = resultGuest;
}
function addThreeGuest() {
    resultGuest += 3;
    guestScore.textContent = resultGuest;
}