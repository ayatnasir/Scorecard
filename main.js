let homeScore = document.getElementById("homescore")
let guestScore = document.getElementById("guestscore")
let score = 0

function addOne() {
let newScore = score += 1
homeScore.textContent = newScore
}

function addOneGuest() {
    let newScore = score +=1
    guestScore.textContent = newScore
}

function addTwo() {
    let newScore = score += 2
homeScore.textContent = newScore
}

function addTwoGuest() {
    let newScore = score +=2
    guestScore.textContent = newScore
}

function addThree() {
    let newScore = score += 3
    homeScore.textContent = newScore
}

function addThreeGuest() {
    let newScore = score += 3
    guestScore.textContent = newScore
}