"use strict";
$(document).ready( () => {  
    $("#new_game").click( () => {
        // clear any previous data from the page
        $("#result").text( "" );
        $("#score1").val( "0" );  
        $("#score2").val( "0" );
        $("#die").val( "0" );
        $("#total").val( "0" );
        
        // reset the game object and then start a new game, passing in
        // the players' names
        game.reset().start( $("#player1").val(), $("#player2").val() );
        

        // if the game object contains valid data...
        if (game.isValid) {
            // display the "turn" div, use the currentPlayer property of 
            // the game object to display the name of the player whose turn
            // it is, and set the focus on the Roll button
            $("#turn").removeClass("hide");
            $("#current").text( game.currentPlayer.name );
            $("#roll").focus();
            localStorage.setItem("currentPlayer", game.currentPlayer);
            localStorage.setItem("player1", game.player1);
            localStorage.setItem("player2", game.player2);
        } else {
            // hide the "turn" div, notify the user to enter player names, 
            // and set the focus on the Player 1 text box
            $("#turn").addClass("hide");
            alert("Please enter two player names.");
            $("#player1").focus();
        }
    }); // end click()
    
    $("#roll").click( () => {
        // use the currentPlayer property of the game object to take a turn
        var newDie = new Die();
        // set the value of the Die text box to the value of the roll 
        // property of the currentPlayer property
       

        // check the read-only isBust property for the current player. If it's true, 
        // set the value of the Total text box to zero, use the game object to change
        // players, and use the currentPlayer property of 
        // the game object to display the name of the player whose turn
        // it now is. Otherwise, set the value of the Total text box to the 
        // value of the turn property of currentPlayer.
        game.currentPlayer.takeTurn();
        $("#die").val(game.currentPlayer.roll);
        $("#total").val(game.currentPlayer.turn);
        if (game.currentPlayer.isBust){
          $("#total").val(0);
          $("#die").val(0);
          game.changePlayer(); // Change players.
          $("#current").text(game.currentPlayer.name);
          return;
        }
        var total = parseInt($("#total").val());
        $("#total").val(game.currentPlayer.turn);
        // set the focus on the Roll button
        $("#roll").focus();
        
    }); // end click()
    
    $("#hold").click( () => {
        // use the game object to hold, passing in the Score1 and Score2 elements.
        // Then use the game object to check the winner, storing the result in a
        // variable.
        game.hold();
        // If the value of the winner variable is "none", set the 
        // value of the Die and Total text boxes to zero, use the game object 
        // to change players, use the currentPlayer property of 
        // the game object to display the name of the player whose turn
        // it now is, and set the focus on the Roll button.  Otherwise, set the 
        // value of the result span element to indicate the name of the winner.
        const winner = game.checkWinner();
        if (winner != "none") {
            $("#result").text(winner + " is the Winner");
            $("#result").removeClass("hide");
            $("#turn").addClass("hide");
            game.reset();
            return;
        }
         $("#total").val(0);
         game.changePlayer(); // Change players.
         $("#current").text(game.currentPlayer.name);
    }); // end click()

    // set focus on initial page load
    $("#player1").focus();
}); // end ready()