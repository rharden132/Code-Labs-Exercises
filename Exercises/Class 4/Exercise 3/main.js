let timerDisplay = document.querySelector(".timer");
const timeInput = document.querySelector(".time-input");
const startButton = document.querySelector(".start");
const cancelButton = document.querySelector(".cancel");

let timeLeft = 0;
let timerInterval;

startButton.style.backgroundColor = "green";
cancelButton.style.backgroundColor = "#A43333";
cancelButton.style.display = "block";
timeInput.style.display = "block";
startButton.style.display = "block";
function startTimer(){
    timerInterval = setInterval("timer()", 1000);
    timeLeft = timeInput.value;
    timeInput.style.display = "none";
    startButton.style.display = "none";
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
    startButton.style.display = "block";
}

startButton.addEventListener("click", startTimer);
startButton.addEventListener("mouseover", function(){
    startButton.style.backgroundColor = "#CA9A9A";
});
startButton.addEventListener("mouseout", function(){
    startButton.style.backgroundColor = "green";
});
cancelButton.addEventListener("click", stopTimer);
cancelButton.addEventListener("mouseover", function(){
    cancelButton.style.backgroundColor = "#CA9A9A";
});
cancelButton.addEventListener("mouseout", function(){
    cancelButton.style.backgroundColor = "#A43333";
});
timeInput.addEventListener("change", function() {
    timerDisplay.innerText = timeInput.value;
});
console.log(timerDisplay.clientWidth);



//CA9A9A - Button Pressed color