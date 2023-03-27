"use strict";

const createClock = (hourSpan, minuteSpan, secondSpan, ampmSpan) => {
    // private state
    $("#hours").text(hourSpan);
    $("#minutes").text(minuteSpan);
    $("#seconds").text(secondSpan);
    $("#ampm").text(ampmSpan);

    const tickStopwatch = () => {
        // increment milliseconds by 10 milliseconds
        elapsed.milliseconds = elapsed.milliseconds + 10;

        // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
        if (elapsed.milliseconds == 1000) {
            elapsed.seconds++;
            elapsed.milliseconds = 0;
        }
        // if seconds total 60, increment minutes by one and reset seconds to zero
        if (elapsed.seconds == 60) {
            elapsed.minutes++;
            elapsed.seconds = 0;
        }

        //display new stopwatch time
        $("#s_minutes").text(padSingleDigit(elapsed.minutes));
        $("#s_seconds").text(padSingleDigit(elapsed.seconds));
        $("#s_ms").text(elapsed.milliseconds);
    };
    
    // public methods
    return {
        start(){
            return setInterval(tickStopwatch, 10);
        },
    }
};