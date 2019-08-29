

let hours = 00;
let minutes = 00;
let seconds = 00;
let timer;
isRunning = false;

function updateTime(){
    if (seconds ===59 ){
        seconds = 00;
        minutes ++;
    }if(minutes === 59){
        minutes = 00;
        hours++;

    }
    else{
    seconds++;
    }
    // console.log(`${hours} : ${minutes} : ${seconds}`);
    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#minutes').innerHTML = minutes;
    document.querySelector('#second').innerHTML = seconds;
}

function start(){
    if( isRunning === false){
timer = setInterval(updateTime,1000);
isRunning = true;
    }
}

function stop(){
    clearInterval(timer);
    isRunning = false;

}


function reset(){

     hours = 00;
     minutes = 00;
     seconds = 00;
     stop();

}







