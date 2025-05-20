const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const countdownEl = document.getElementById("display");

let startingMinutes = 50;
let time = startingMinutes * 60;
let intervalId = null;
let isPaused = false;

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

    if (time < 0) {
        clearInterval(intervalId);
        countdownEl.innerHTML = "Break Time!";
        startBtn.textContent = "Start Timer";
        isPaused = false;
    }
}

// Start or Resume
startBtn.addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(updateCountdown, 1000);
        if (isPaused) {
            startBtn.textContent = "Start Timer";
            isPaused = false;
        }
    }
});

// Stop (Pause)
stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    startBtn.textContent = "Resume";
    isPaused = true;
});

// Reset
resetBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    time = startingMinutes * 60;
    countdownEl.innerHTML = `${startingMinutes}:00`;
    startBtn.textContent = "Start Timer";
    isPaused = false;
});