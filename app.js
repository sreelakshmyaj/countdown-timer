var daysOut = document.getElementById("days");
var hoursOut = document.getElementById("hours");
var minutesOut = document.getElementById("minutes");
var secondsOut = document.getElementById("seconds");

function countDown() {
    var present = new Date();
    var end = new Date("07/05/2023");

    var Days = Math.round((end.getTime() - present.getTime()) / (1000*60*60*24));

    var Hours = 23 - present.getHours();
    var Minutes = 59 - present.getMinutes();
    var Seconds = 59 - present.getSeconds();
    
    daysOut.innerText = Days;
    hoursOut.innerText = Hours;
    minutesOut.innerText = Minutes;
    secondsOut.innerText = Seconds;
}

setInterval(countDown, 1000);