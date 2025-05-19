document.getElementById("startBtn").addEventListener('click', () =>{   

// Pomodoro Timer
// Set the countdown time in minutes


let startingMinutes = 1;
let time = startingMinutes * 60;
let intervalId = null;

const countdownEl = document.getElementById("display");

let refreshIntervalId = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

    if (time < 0) {
        clearInterval(refreshIntervalId);
        countdownEl.innerHTML = "00:00";
    }
}

});

document.getElementById("stopBtn").addEventListener('click', () =>{
    for (let i = 0; i < 100; i++) {
        clearInterval(i);
    } 





});



