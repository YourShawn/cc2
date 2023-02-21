"use strict";


$(document).ready( () => {
	// display data from session storage
	const email = localStorage.getItem("email");
	const phone = localStorage.getItem("phone");
	const postal = localStorage.getItem("postal");
	const dob = localStorage.getItem("dob");
	$("#email").text(email);
	$("#phone").text(phone);
	$("#postal").text(postal);
	$("#dob").text(dob);

	$("#back").click( () => {	
		window.history.back()
	}); // end of click()
	
}); // end of ready()