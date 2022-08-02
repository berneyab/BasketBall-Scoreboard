let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let scoreCountHome = 0
function homeScorePlusOne(){
    scoreCountHome += 1
    homeScore.textContent = scoreCountHome
}

function homeScorePlusTwo(){
    scoreCountHome += 2
    homeScore.textContent = scoreCountHome
}

function homeScorePlusThree(){
    scoreCountHome += 3
    homeScore.textContent = scoreCountHome
}

let scoreCountGuest = 0
function guestScorePlusOne(){
    scoreCountGuest += 1
    guestScore.textContent = scoreCountGuest
}

function guestScorePlusTwo(){
    scoreCountGuest += 2
    guestScore.textContent = scoreCountGuest
}

function guestScorePlusThree(){
    scoreCountGuest += 3
    guestScore.textContent = scoreCountGuest
}

