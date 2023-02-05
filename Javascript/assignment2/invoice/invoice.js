"use strict";

const calculateDiscount = (customer, subtotal) => {
    if (customer == "reg") {
        if (subtotal >= 100 && subtotal < 250) {
            return .1;
        } else if (subtotal >= 250 && subtotal < 500) {
            return  .25;
        } else if (subtotal >= 500) {
            return .3;
        } else {
            return 0;
        }        
    }
    else if (customer == "loyal") {
        return .3;        
    }
    else if (customer == "honored") {
        if (subtotal < 500) {
            return .4;
        }
        else {
            return .5;
        }    
    }
};

$( document ).ready( () => {

    $("#calculate").click( () => {
        const customerType = $("#type").val();
        let subtotal = $("#subtotal").val();
        subtotal = parseFloat(subtotal);
        if ( isNaN(subtotal) || subtotal <= 0) {
            alert("Subtotal must be a number greater than zero.");
            $("#clear").click();
            $("#subtotal").focus();
            return;
        }
        
        let invoiceDateStr = $("#invoice_date").val().trim();
        if (invoiceDateStr == "" || invoiceDateStr == "null") {
            //If the user don't enter value, we will retrieve the localStorage value
          invoiceDateStr = localStorage.getItem("currentDate");
          if (invoiceDateStr == "" || invoiceDateStr == "null") {
            //If the localStorage still is empty, just return.
            alert("Invoice date must be not a empty value.");
            $("#clear").click();
            $("#subtotal").focus();
            return;
          }
          $("#invoice_date").val(invoiceDateStr);
        }
        //Chek the format whether the date is valid.
        let invoiceDate = new Date(invoiceDateStr);
        if ((invoiceDate == "Invalid Date")) {
             alert("Invoice date must be a valid value.");
              $("#clear").click();
              $("#subtotal").focus();
             return;
        }
        //Stor the date value, if it is valid.
        localStorage.setItem("currentDate", invoiceDateStr);
        //Calculate the due date that after invoice date 30 days.
        var dueDate = invoiceDate;
        dueDate.setDate(invoiceDate.getDate() + 30);
        var dueDateStr = dueDate.toISOString().split("T")[0];
        $("#due_date").val(dueDateStr);

        const discountPercent = calculateDiscount(customerType, subtotal);
        const discountAmount = subtotal * discountPercent;
        const invoiceTotal = subtotal - discountAmount;
        
        $("#subtotal").val( subtotal.toFixed(2) );
        $("#percent").val( (discountPercent * 100).toFixed(2) );
        $("#discount").val( discountAmount.toFixed(2) );
        $("#total").val(  invoiceTotal.toFixed(2) );

        // set focus on type drop-down when done  
        $("#type").focus();

    });
    
    $("#clear").click( () => {

        $("#type").val("reg");
        $("#subtotal").val("");
        $("#invoice_date").val("");
        $("#percent").val("");
        $("#discount").val("");
        $("#total").val("");
        $("#due_date").val("");

        // set focus on type drop-down when done
        $("#type").focus();
    })

    // set focus on type drop-down on initial load
    $("#type").focus();
});

