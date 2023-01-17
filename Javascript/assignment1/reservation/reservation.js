"use strict";

//This function is that check the all values are vaild and submit them to the second website.
//Illustrate this coding assignment, the coding demo can not express all problems in the logical problems, so I will declare some logical descriptions to show problem descriptions in this demo coding.
$(document).ready( () => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	$("#pickup_date").focus();

	//When the submit button is clicked, the coding will check the all values, and check the regular expressions with email address and phone.
	$("#reservation_form").submit((event) => {
    var submitFlag = true;

    const pickDate = $("#pickup_date").val().trim();
    const days = $("#days").val().trim();
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const phone = $("#phone").val().trim();

    //Match the regular pick date and check wether it is empty.
    if (!check_pick_date(pickDate)) {
      $("#pickup_date").next().html("Please enter a vaild value");
      submitFlag = false;
    }

    //Check the value of days wether is Numeric.
    if (isNaN(days)) {
      $("#days").next().html("Please enter a vaild value");
      submitFlag = false;
    }

    //Check the name wether is empty.
    if (name == "") {
      $("#name").next().html("This field is required");
      submitFlag = false;
    }

    if (email == "" || !emailPattern.test(email)) {
      $("#email").next().html("This field is required");
      submitFlag = false;
    }
    //Declared the regular expression to check the form of phone number. 000-000-0000
    const phonePattern = /[0-9]{3}\-[0-9]{3}\-[0-9]{4}/;
    console.log(phonePattern.test("111-111-111"));
    if (phone == "" || !phonePattern.test(phone)) {
      $("#phone").next().html("Please enter a vaild value");
      submitFlag = false;
    }

    // if the submitFlag is true, which stand for all valurs are valid. If any values are not valid, can not submit this form.
    if (!submitFlag) {
      event.preventDefault();
    }
  });
	
	//Declare the function to check the form of pick date. If the pick date is empty and the value is not match the regular expression return false, else return ture.
	function check_pick_date(pickDate) {
    if (pickDate == "") {
      return false;
    }
    //Split the pick date value, and check the every values of array.
    const pick_date_arry = pickDate.split("/");
    if (pick_date_arry.length != 3) {
      return false;
    }
    const dd = parseInt(pick_date_arry[0]);
    const mm = parseInt(pick_date_arry[1]);
    const year = parseInt(pick_date_arry[2]);
		//I know there are some uncertain problems, but do NEW just check the value is from 1 to 31. If check the accuracy date time, we must check wether the year is the leap year, and the day must match the value of the month.
    if (dd < 1 || dd > 31) {
      return false;
    }
    if (mm < 1 || mm > 12) {
      return false;
    }
		//The year must from 1000 to 3000.
    if (year < 1000 || year > 3000) {
      return false;
    }
    return true;
  }

		
}); // end ready