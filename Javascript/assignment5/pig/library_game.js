"use strict";
const game = {
  player1: new Pig(),
  player2: new Pig(),
  currentPlayer: null,
  get isValid() {
    if (this.player1.name === "" || this.player2.name === "") {
      return false;
    } else {
      return true;
    }
  },
  start(name1, name2) {
    this.player1.name = name1;
    this.player2.name = name2;
    this.currentPlayer = this.player1;
    return this;
  },
  reset() {
    // call the reset() method on each of the player Pig objects
    this.player1 = new Pig();
    this.player2 = new Pig();
    this.currentPlayer = this.player1;
    return this;
  },
  changePlayer() {
    // determine whether player1 or player2 is the current player, then
    // update the currentPlayer property to hold the other player.

    if(this.currentPlayer.name == this.player1.name){
        this.currentPlayer = this.player2;
        return;
    }
    this.currentPlayer = this.player1;
  },
  //score1, score2
  hold() {
    // call the hold() method of the current player
    this.currentPlayer.hold();
    // this.changePlayer();
    // debugger
    // $("#current").text(game.currentPlayer.name);
    $("#score1").val(this.player1.total);
    $("#score2").val(this.player2.total);
    // determine whether player1 or player2 is the current player, then
    // update that player's score with the current total
   
    $("#die").val(0);
    $("#total").val(0);
  },
  checkWinner() {
    // check the players' totals to see if either is at or above 100
    // points. If so, return that player's name. Otherwise, return
    // the string "none".
    if (this.currentPlayer.total >= 100) {
      return this.currentPlayer.name;
    }
    return "none";
  },
};