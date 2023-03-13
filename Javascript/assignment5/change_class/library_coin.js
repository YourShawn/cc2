"use strict";

const Coins = {
  quarters,
  dimes,
  nickels,
  cents,

  constructor(quarters, dimes, nickels, cents) {
    this.quarters = quarters;
    this.dimes = dimes;
    this.nickels = nickels;
    this.cents = cents;
  },
  constructor() {
    this.quarters = 0;
    this.dimes = 0;
    this.nickels = 0;
    this.cents = 0;
  },

  makeChange(cions_num) {
    //Check whether the number of coins is integer.
    const intBoolean = Number.isInteger(cions_num);
    // And the number must be greater then 0 and less then 99
    if (!intBoolean || cions_num > 100 || cions_num < 0) {
      throw new Error("The Number of Coins is Not Valid.");
    }
    //Quarters
    this.quarters = Math.floor(cions_num / 25);
    cions_num = cions_num % 25;
    //Dimes
    this.dimes = Math.floor(cions_num / 10);
    cions_num = cions_num % 10;
    //Nickels
    this.nickels = Math.floor(cions_num / 5);
    cions_num = cions_num % 5;
    //Cents
    this.cents = cions_num;
  },
};
//Export the Object. IMPORTANT
export { Coins };