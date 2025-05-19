document.getElementById("startBtn").addEventListener('click', () =>{   

// Pomodoro Timer
// Set the countdown time in minutes


let startingMinutes = 50;
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
        countdownEl.innerHTML = "Break Time!";
    }
}

});

document.getElementById("stopBtn").addEventListener('click', () =>{
    for (let i = 0; i < 100; i++) {
        clearInterval(i);

    document.getElementById("startBtn").textContent = "Resume?";
    }

    const countdownEl = document.getElementById("display");

    
    if(document.getElementById("startBtn").addEventListener('click', () =>{

        console.log("Resumed");



    }))
1000});
 
// Reset Timer
// FIXME: This is not working as expected 
// It should reset the timer to the initial value and stop the countdown not create a second new one!

document.getElementById("resetBtn").addEventListener('click', () =>{

let startingMinutes = 50;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("display");

let refreshIntervalId = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}

    if (time < 0) {
        clearInterval(refreshIntervalId);
        countdownEl.innerHTML = "Break Time!";
    }
});

