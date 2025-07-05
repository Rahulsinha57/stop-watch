const result = document.getElementById('result')
const startbutton = document.getElementById('start-button')
const stopbutton = document.getElementById('stop-button')
const resetbutton = document.getElementById('reset-button')


let startTime = 0;
let interval;
let running = false;
let BeforePause = 0;

const pad = (num) => num.toString().padStart(2, '0')
const padMilli = (num) => num.toString().padStart(3, '0')

startbutton.addEventListener("click", () => {
    if (startTime === 0)
        startTime = Date.now()

    if (!running) {
         running = true;
          startTime = Date.now() - BeforePause;
        interval = setInterval(() => {

            let timeGap = Date.now() - startTime;

            let MSS = timeGap % 1000;

            let SS = Math.floor(timeGap / 1000);

            let MM = Math.floor(timeGap / 1000 / 60);

            if (SS >= 60) SS %= 60;

            result.textContent = `${pad(MM)}:${pad(SS)}:${padMilli(MSS)}`

        }, 15);
    }

});
stopbutton.addEventListener('click',() =>{
    if(running){
    running=false;
    clearInterval(interval)
    BeforePause = Date.now() - startTime;
    }
})
resetbutton.addEventListener('click',() =>{
    running=false
    clearInterval(interval)
    startTime=0
    elapsedBeforePause = 0;
    result.textContent ="00:00:00"
})



