let tryy = document.getElementById("try")
let tryTwo = document.getElementById("tryTwo")
let penalty = document.getElementById("penalty")
let penaltyTwo = document.getElementById("penaltyTwo")
let conversion = document.getElementById("conversion")
let conversionTwo = document.getElementById("conversionTwo")
let dropGoal = document.getElementById("dropGoal")
let dropGoalTwo = document.getElementById("dropGoalTwo")
let events = document.getElementById("events")
let eventsTwo = document.getElementById("eventsTwo")
let teamOneScore = 0
let teamTwoScore = 0
let results = document.getElementById("results")
let resultsTwo = document.getElementById("resultsTwo")
let timer = document.getElementById("timer")
let minutes = 0
let seconds = 0


let timerFeat = setInterval(() => {
    seconds++
    if (seconds == 60) {
        minutes++
        seconds = 0
    }
    if (minutes == 80) {
        clearInterval(timerFeat);
        document.getElementById("timer").innerHTML = "Game Over"
    }
    document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s "
// console.log(seconds);

}, 16.6)

tryy.addEventListener("click", () => {
    teamOneScore += 5
    results.innerText = teamOneScore
    events.innerText += `Try scored by team one at ${minutes}m ${seconds}s\n`
})

tryTwo.addEventListener("click", () => {
    teamTwoScore += 5
    resultsTwo.innerText = teamTwoScore
    eventsTwo.innerText += `Try scored by team two at ${minutes}m ${seconds}s\n`
})

penalty.addEventListener("click", () => {
    teamOneScore += 3
    results.innerText = teamOneScore
    events.innerText += `Penalty scored by team one at ${minutes}m ${seconds}s\n`
})

penaltyTwo.addEventListener("click", () => {
    teamTwoScore += 3
    resultsTwo.innerText = teamTwoScore
    eventsTwo.innerText += `Penalty scored by team two at ${minutes}m ${seconds}s\n`

})

conversion.addEventListener("click", () => {
    teamOneScore += 2
    results.innerText = teamOneScore
    events.innerText += `Conversion scored by team one at ${minutes}m ${seconds}s\n`
})

conversionTwo.addEventListener("click", () => {
    teamTwoScore += 2
    resultsTwo.innerText = teamTwoScore
    eventsTwo.innerText += `Conversion scored by team two at ${minutes}m ${seconds}s\n`

})

dropGoal.addEventListener("click", () => {
    teamOneScore += 3
    results.innerText = teamOneScore
    events.innerText += `Drop Goal scored by team one at ${minutes}m ${seconds}s\n`
})

dropGoalTwo.addEventListener("click", () => {
    teamTwoScore += 3
    resultsTwo.innerText = teamTwoScore
    eventsTwo.innerText += `Drop Goal scored by team two at ${minutes}m ${seconds}s\n`

})