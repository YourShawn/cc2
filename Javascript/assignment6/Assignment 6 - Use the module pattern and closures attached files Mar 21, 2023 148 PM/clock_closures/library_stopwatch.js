"use strict";

const createStopwatch = (minuteSpan, secondSpan, msSpan) => {
    
    // public methods
    return {
        start(){
            timerCurrent = createClock();
            window.stopwatchTimer = timerCurrent.start();
            console.log(
              "start parameter:",
              window.stopwatchTimer,
              timerCurrent
            );
            return window.stopwatchTimer;
        },

        stop(){
            console.log("Stop:", window.stopwatchTimer);
            clearInterval(window.stopwatchTimer);
            window.stopwatchTimer = null;
            timerCurrent = null;
        },

        reset(){
             $("#s_minutes").text("00");
             $("#s_seconds").text("00");
             $("#s_ms").text("000");
             console.log("Reset End:", window.stopwatchTimer);
        },
    }
};