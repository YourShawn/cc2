"use strict"

const winningTotal = 50;
$(document).ready(()=>{
  $("#player1").val("1");
  $("#player2").val("2");
  $("#die").val("0");
  $("#total").val("0");

  $("#winning_total").text(winningTotal);
  $("#player1").focus();

 




  //When the new game button is clicked, should remove the class of turn element. And give the value of player1 to the current element id element.
  $("#new_game").click(() => {
    // debugger;
    $("#score1").val("0");
    $("#score2").val("0");
    $("#die").val("0");
    $("#total").val("0");

    if ($("#player1").val() == "" || $("#player2").val() == "") {
      alert("Please enter the plers name");
      return;
    }
    //give the players name to current element
    const player1 = $("#player1").val();
    $("#current").html(player1);

    $("#turn").removeClass("hide");
  });
  //When the roll button is clicked, we will get a random number to complate the input tag of die
function randomNumber(){
  return (parseInt(Math.random() * 10) % 6) + 1;
}

  var currentScores = 0;
  

  $("#roll").click(()=>{
    // debugger
    const dieRandomNumber = (parseInt(Math.random() * 10) % 6) + 1;
    $("#die").val(dieRandomNumber);
    currentScores += dieRandomNumber;
    $("#total").val(currentScores);
  });

  $("#hold").click(()=>{
    // debugger
    const player1 = $("#player1").val();
    const player2 = $("#player2").val();
    var totalScore = parseInt($("#total").val());
    var currentPlayers = $("#current").html();

      if (currentPlayers == player1) {
        // debugger
        var score1 = parseInt($("#score1").val());
        totalScore = totalScore + score1;
        $("#score1").val(totalScore);
        $("#total").val(0);
        $("#die").val(0);
        if (totalScore >= 50) {
          alert("Player1 is winner!");
        }
        currentScores = 0;
        $("#current").html(player2);
        return;
      }

      if (currentPlayers == player2) {
        const score2 = parseInt($("#score2").val());
        totalScore += score2;
        $("#score2").val(totalScore);
        $("#total").val(0);
        $("#die").val(0);
        if (totalScore >= 50) {
          alert("Player2 is winner!");
        }
        currentScores = 0;
        $("#current").html(player1);
      }

  })

});