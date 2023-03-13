"use strict";
import {Coins} from "./library_coin.js"

$(document).ready( () => {
    $("#calculate").click( () => {
        // get the number of cents from the user
        let cents = Math.floor( parseInt( $("#cents").val() ) );

        if (isNaN(cents) || cents < 0 || cents > 99) {
            alert("Please enter a valid number between 0 and 99");
        } else {
          //Utilise Object method to calculate the numebr of every type coins.
          Coins.makeChange(cents);
          console.log(Coins);
          // display the results of the calculations
          $("#quarters").val(Coins.quarters);
          $("#dimes").val(Coins.dimes);
          $("#nickels").val(Coins.nickels);
          $("#pennies").val(Coins.cents);
          // set focus on cents text box
          $("#cents").focus();
        }
    }); // end click() method
    
    // set focus on cents text box on initial load
    $("#cents").focus();
            
}); // end ready() method