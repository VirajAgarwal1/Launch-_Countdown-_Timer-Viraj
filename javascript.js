var endDate = new Date();
endDate.setDate("05");
endDate.setFullYear("2022");
endDate.setMonth("00");
endDate.setHours("00");
endDate.setSeconds("00");
endDate.setMinutes("00");
console.log(endDate);

//Setting up animation nams to control them.
var animationSeconds = document.querySelector("#seconds .id2");
var animationMinutes = document.querySelector("#minutes .id2");
var animationHours = document.querySelector("#hours .id2");
var animationDays = document.querySelector("#days .id2");

//Seconds divs select
let secondsFU = document.querySelector("#seconds .front_number_upper .upper_number");
let secondsFL = document.querySelector("#seconds .front_number_lower .lower_number");
let secondsBU = document.querySelector("#seconds .back_number_upper .upper_number");
let secondsBL = document.querySelector("#seconds .back_number_lower .lower_number");
//Minutes divs select
let minutesFU = document.querySelector("#minutes .front_number_upper .upper_number");
let minutesFL = document.querySelector("#minutes .front_number_lower .lower_number");
let minutesBU = document.querySelector("#minutes .back_number_upper .upper_number");
let minutesBL = document.querySelector("#minutes .back_number_lower .lower_number");
//Hours divs select
let hoursFU = document.querySelector("#hours .front_number_upper .upper_number");
let hoursFL = document.querySelector("#hours .front_number_lower .lower_number");
let hoursBU = document.querySelector("#hours .back_number_upper .upper_number");
let hoursBL = document.querySelector("#hours .back_number_lower .lower_number");
//Days divs select
let daysFU = document.querySelector("#days .front_number_upper .upper_number");
let daysFL = document.querySelector("#days .front_number_lower .lower_number");
let daysBU = document.querySelector("#days .back_number_upper .upper_number");
let daysBL = document.querySelector("#days .back_number_lower .lower_number");





//Here is the function where everything happens
// ***********************************************************************
setInterval(function() {

    animationSeconds.style.animationName = 'SecondsTimerIdle';
    animationMinutes.style.animationName = 'MinutesTimerIdle';
    animationHours.style.animationName = 'HoursTimerIdle';
    animationDays.style.animationName = 'DaysTimerIdle';

    let now = new Date().getTime(); 
    var t = endDate - now; 

    var second = Math.floor((t % (1000 * 60)) / 1000);
    var minute = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var hour = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var day = Math.floor(t / (1000 * 60 * 60 * 24));
//Days Setup
    daysFU.innerHTML = day;
    daysFL.innerHTML = day;
    if( day == 0 ){
        daysBU.innerHTML = 23;
        daysBL.innerHTML = 23;
    }else{
        daysBU.innerHTML = (day-1);
        daysBL.innerHTML = (day-1);
    }

//Hours setup
    hoursFU.innerHTML = hour;
    hoursFL.innerHTML = hour;
    if( hour == 0 ){
        hoursBU.innerHTML = 23;
        hoursBL.innerHTML = 23;
    }else{
        hoursBU.innerHTML = (hour-1);
        hoursBL.innerHTML = (hour-1);
    }

//Minutes Setup
    minutesFU.innerHTML = minute;
    minutesFL.innerHTML = minute;
    if( minute == 0 ){
        minutesBU.innerHTML = 59;
        minutesBL.innerHTML = 59;
    }else{
        minutesBU.innerHTML = (minute-1);
        minutesBL.innerHTML = (minute-1);
    }
  
//Seconds setup
    secondsFU.innerHTML = second;
    secondsFL.innerHTML = second;
    if( second == 0 ){
        secondsBU.innerHTML = 59;
        secondsBL.innerHTML = 59;
        animationMinutes.style.animationName = 'MinutesTimerMoving';
    }else{
        secondsBU.innerHTML = (second-1);
        secondsBL.innerHTML = (second-1);
    }
    setTimeout(function(){
        animationSeconds.style.animationName = 'SecondsTimerMoving'
    }, 600);


    if( minute==0 && second==0 ){
        animationHours.style.animationName = 'HoursTimerMoving';
    }
    if( minute==0 && second==0 && hour==0 ){
        animationDays.style.animationName = 'DaysTimerMoving';
    }
}, 1000);



