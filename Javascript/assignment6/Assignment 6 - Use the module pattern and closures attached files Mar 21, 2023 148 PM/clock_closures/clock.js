"use strict";

//global stop watch timer variable and elapsed time object
let elapsed = { minutes: 0, seconds: 0, milliseconds: 0 };
let stopwatchTimer = null;
let timerCurrent = null;
    
const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let ampm = "AM"; // set default value
    
    // correct hours and AM/PM value for display
    if (hours > 12) { // convert from military time
        hours = hours - 12;
        ampm = "PM";
    } else { // adjust 12 noon and 12 midnight
         switch (hours) {
            case 12: // noon
                ampm = "PM";
                break;
            case 0:  // midnight
                hours = 12;
                ampm = "AM";
        }
    }
    createClock(
      hours,
      padSingleDigit(now.getMinutes()),
      padSingleDigit(now.getSeconds()),
      ampm
    );
};
 

$(document).ready(function() {
    $("#start").click( () => {
      // do first tick of stop watch and then set interval timer to tick
      // stop watch every 10 milliseconds. Store timer object in stopwatchTimer
      // variable so next two functions can stop timer.

        if (!window.stopwatchTimer){
            stopwatchTimer = createStopwatch();
            window.stopwatchTimer = stopwatchTimer.start();
        } 
    }); 
    
    $("#stop").click( () => {
		// stop timer
        // clearInterval(stopwatchTimer);

        stopwatchTimer.stop();
    }); 
    
    $("#reset").click( () => {		

        // clear elapsed object and stopwatch display
        elapsed = { minutes:0, seconds:0, milliseconds:0 }; 
        stopwatchTimer.reset(0,0,0);
    }); 

    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
    
}); // end ready()
