let totalScoreHome = document.getElementById("score-home")
let totalScoreGuest = document.getElementById("score-guest")

let scoreHome = 0
let scoreGuest = 0

function incrementH(){
    scoreHome = scoreHome + 1
    totalScoreHome.textContent = scoreHome
}

function incrementDoubleH(){
    scoreHome = scoreHome + 2
    totalScoreHome.textContent = scoreHome
}

function incrementTripleH(){
    scoreHome = scoreHome + 3
    totalScoreHome.textContent = scoreHome
}

function incrementG(){
    scoreGuest = scoreGuest + 1
    totalScoreGuest.textContent = scoreGuest
}

function incrementDoubleG(){
    scoreGuest = scoreGuest + 2
    totalScoreGuest.textContent = scoreGuest
}

function incrementTripleG(){
    scoreGuest = scoreGuest + 3
    totalScoreGuest.textContent = scoreGuest
}

function reset(){
    totalScoreHome.textContent = 0
    scoreHome = 0
    totalScoreGuest.textContent = 0
    scoreGuest = 0
}