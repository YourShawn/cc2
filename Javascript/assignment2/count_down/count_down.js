"use strict";

$( document ).ready( () => { 

    $("#countdown").click( () => {
        const eventName = $("#event").val();
        const eventDate = $("#date").val();  
        const messageLbl = $("#message");  
        
        // make sure user entered task and event date 
        if (eventName.length == 0 || eventDate.length == 0) {
            messageLbl.text( "Please enter both a name and a date." );
            return;
        }  
      
        // make sure event date string has two slashes 
        const dateParts = eventDate.split("/");
        if (dateParts.length != 3) {   
            messageLbl.text( "Please enter the date in MM/DD/YYYY format." );
            return;
        } 
        
        // make sure event date string has a 4-digit year
        const year = eventDate.substring(eventDate.length - 4); 
        if (isNaN(year)) {
            messageLbl.text( "Please enter the date in MM/DD/YYYY format." );
            return;
        }     
        // convert event date string to Date object and check for validity
        let date = new Date(eventDate);
        if (date == "Invalid Date") {
            messageLbl.text( "Please enter the date in MM/DD/YYYY format." );
            return;
        }
        //Check leap year
        let leapYearBool = false;
        if (parseInt(dateParts[2] % 4 == 0)) {
            //The year is leap year.
            leapYearBool = true;
        }
        const monthInt = parseInt(dateParts[0]);
        //Check the month whether it is correct
        if (monthInt<0 || monthInt>12) {
          //The month is incorrect
          messageLbl.text( "Please enter the date in MM/DD/YYYY format." );
          return;
        }
        if (!checkMonthAndDay(leapYearBool, monthInt, parseInt(dateParts[1]))) {
            messageLbl.text("Please enter the date in MM/DD/YYYY format.");
            return;
        }

        // capitalize each word of event name
        let formattedName = "";
        const words = eventName.split(" ");
        for (const i in words) {
            const firstLetter = words[i].substring(0,1).toUpperCase();
            const word = firstLetter + words[i].substring(1).toLowerCase();
            formattedName += word.padEnd(word.length + 1);
        } 
        formattedName = formattedName.trimEnd();     

        // calculate days
        const today = new Date();
        const msFromToday = date.getTime() - today.getTime();
        const msForOneDay = 24 * 60 * 60 * 1000; // hrs * mins * secs * milliseconds  
        let daysToDate = Math.ceil( msFromToday / msForOneDay ); 

        // create and display message 
        let msg = "";
        date = date.toDateString();
        if (daysToDate == 0) {
            msg = `Hooray! Today is ${formattedName}! (${date})`;
        }
        else if (daysToDate > 0) {
            msg = `${daysToDate} day(s) until ${formattedName}! (${date})`;
        }
        else if (daysToDate < 0) {
            daysToDate = Math.abs(daysToDate);
            msg = `${formattedName} happened ${daysToDate} day(s) ago. 
                  (${date})`;
        }
        messageLbl.text(msg);
    });
    
    $("#event").focus();
});

// Check the day is match the month.
function checkMonthAndDay(year, monthInt, days) {
  if (year && monthInt == 2) {
    if (days > 0 && days <= 29) {
      return true;
    }
  }

  if (!year && monthInt == 2) {
    if (days > 0 && days <= 28) {
      return true;
    }
  }

  if (
    monthInt == 1 ||
    monthInt == 3 ||
    monthInt == 5 ||
    monthInt == 7 ||
    monthInt == 8 ||
    monthInt == 10 ||
    monthInt == 12
  ) {
    if (days > 0 && days <= 31) {
      return true;
    }
  }

  if (monthInt == 4 || monthInt == 6 || monthInt == 9 || monthInt == 11) {
    if (days > 0 && days <= 30) {
      return true;
    }
  }
  return false;
}