let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;
let value = "stopped";
let nowtime = 0;
let num = 1;
let i = 0;


function stopWatch() {
    seconds++;
    if (seconds / 60 == 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 == 1) {
            minutes = 0;
            hours++;
        }
    }
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();

    } else {
        displaySeconds = seconds;

    }
    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();

    } else {
        displayMinutes = minutes;

    }
    if (hours < 10) {
        displayHours = "0" + hours.toString();

    } else {
        displayHours = hours;

    }

    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}


function startStop() {
    document.getElementById("reset").style.display = "block";
    document.getElementById("reset").style.visibility = "visible";



    if (value === "stopped") {
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startPause").innerHTML = "Pause";
        document.getElementById("reset").innerHTML = "Lap";
        value = "started";

    } else {
        window.clearInterval(interval);
        document.getElementById("startPause").innerHTML = "Resume";
        document.getElementById("reset").innerHTML = "Reset";
        value = "stopped";

    }

}




function resetLap() {


    if (document.getElementById("reset").innerHTML == "Lap") {
        localStorage.setItem("hours", displayHours);
        localStorage.setItem("minutes", displayMinutes);
        localStorage.setItem("seconds", displaySeconds);
        let table1 = localStorage.getItem('hours');
        let table2 = localStorage.getItem('minutes');
        let table3 = localStorage.getItem('seconds');
        let arrh = new Array();
        let arrm = new Array();
        let arrs = new Array();
        arrh.push(table1);
        arrm.push(table2);
        arrs.push(table3);
        s = arrs[i];
        i = i + 1;
        document.getElementById("Lap-Record").innerHTML += "<tr><td>" + "#" + num + "</td>" + "     " + "<td>" + table1 + ":" + table2 + ":" + table3 + "</td ></tr>";
        num = num + 1;


    }
    if (document.getElementById("reset").innerHTML == "Reset") {

        window.clearInterval(interval);
        seconds = 0;
        minutes = 0;
        hours = 0;
        num = 1;
        document.getElementById("display").innerHTML = "00:00:00";
        document.getElementById("startPause").innerHTML = "Start";
        document.getElementById("reset").style.visibility = "hidden";
        document.getElementById("Lap-Record").innerHTML = "";
    }
}