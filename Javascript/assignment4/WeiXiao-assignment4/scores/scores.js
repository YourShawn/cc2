"use strict";

const displayScores = (scores, scoresString) => {
    let score_sum = scores.reduce((accumulator, currentValue) =>{
        return accumulator + currentValue;
    });
    let average_score = score_sum/scores.length;

    $('#scores').val(scoresString.join("\n"));
	$('#avr_score').text(average_score.toFixed(2));
};

    
$(document).ready( () => {

    var stringArray = [];
    var scoreArray = [];

    const clearValue = () => {
      stringArray= [];
      scoreArray = [];
      $("#avr_score").val("");
      $("#scores").val("");
      $("#first_name").focus();
    };


    $("#add_button").click( () => {
        //Get the values from DOM
        let firstName = $("#first_name").val();
        let lastName = $("#last_name").val();
        let score = parseInt($("#score").val());
        
        let stringElement = `${lastName}, ${firstName}: ${score}`;
        stringArray.push(stringElement);
        scoreArray.push(score);

        displayScores(scoreArray, stringArray);
        //Clear form values
        $("#first_name").val("");
        $("#last_name").val("");
        $("#score").val("");
        $("#first_name").focus();
    }); // end click()
    
    $("#clear_button").click( () => {
        clearValue();
    }); // end click()
       
    $("#sort_button").click( () => {
        let sortedArray = stringArray.sort();
        $('#scores').val(sortedArray.join("\n"));
    }); // end click()
    
    $("#first_name").focus();
}); // end ready()