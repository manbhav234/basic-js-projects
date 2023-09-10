const time = document.querySelector('.time')
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')

let timerRunning = false
let runTimeCaller; 

let milliSeconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function runTime(){
    milliSeconds += 4;
    if(milliSeconds >= 1000){
        milliSeconds = 0;
        seconds++;
    }
    if (seconds === 60){
        seconds = 0;
        minutes++;
    }
    if (minutes === 60){
        minutes = 0;
        hours++;
    }
    time.textContent = `${hours}:${minutes}:${seconds}:${milliSeconds}`
}

startBtn.addEventListener('click', function(e){
    if (!timerRunning){
        timerRunning = true;
        runTimeCaller = setInterval(runTime,4);
        startBtn.setAttribute('disabled', '')
        stopBtn.removeAttribute('disabled')
    }

})

stopBtn.addEventListener('click', function (e){
    if (timerRunning){
        clearInterval(runTimeCaller)
        timerRunning = false;
        stopBtn.setAttribute('disabled', '')
        resetBtn.removeAttribute('hidden')
        startBtn.removeAttribute('disabled')
    }
})

resetBtn.addEventListener('click', function(e){
    milliSeconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    time.textContent = "00:00:00:000"
    resetBtn.setAttribute('hidden', '')
})