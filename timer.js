// let countFrom = Date.now()
// console.log(countFrom);
// let countTill = countFrom + 5700000
// console.log(countTill);
// let distance = (countTill - countFrom) *-1
// console.log(distance);


// let timer = setInterval(function () {
//     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s "
//     if (distance < 0) {
//         clearInterval(timer);
//         document.getElementById("timer").innerHTML = "Game Over"
//     }
// }, 1000)

let minutes = 0
let seconds = 0
let timer = setInterval(() => {
    seconds++
    if (seconds == 60) {
        minutes++
        seconds = 0
    }
    if (minutes == 80) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Game Over"
    }
    document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s "
// console.log(seconds);

}, 16.6)