let timerDisplay = document.querySelector(".timer");
const timeInput = document.querySelector(".time-input");
const startButton = document.querySelector(".start");
const cancelButton = document.querySelector(".cancel");
let timeLeft = 0;
let timerInterval;
function startTimer(){
    timerInterval = setInterval("timer()", 1000);
    timeLeft = timeInput.value;
    timeInput.style.display = "none";
}
function timer(){
    timeLeft--;
    timerDisplay.innerText = String(timeLeft);
    if (timeLeft <= 0){
        timerDisplay.innerText = "0";
        stopTimer();
        alert("Timer Finished");
    }
}
function stopTimer(){
    clearInterval(timerInterval);
    timerDisplay.innerText = "0";
    timeInput.style.display = "block";
}

startButton.addEventListener("click", startTimer);
cancelButton.addEventListener("click", stopTimer);
timeInput.addEventListener("change", function() {
    timerDisplay.innerText = timeInput.value;
});
