//mongodb+srv://Shawn0727:LdsrcHgXQjWq3Bjv@cluster0.ujd9xu3.mongodb.net/test
function handleChange(event) {
  console.log("handleChange --- ");
  const selectedOption = event.target.value;
  const dateTimeVal = $("#dateTime").val();
  fetch("/findAppointmentDayTime?dateTime=" + dateTimeVal, {
    method: "GET",
    // body: JSON.stringify({
    //   dateTime: selectedOption,
    // }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    response.json().then((data) => {
      if(jQuery.isEmptyObject(data)){
        return;
      }
      console.log(data);
      document.getElementById("dayTime").innerHTML = "";
      //Render page
      for (i = 0; i < data.length; i++) {
        console.log(data[i]);
        let option = document.createElement("option");
        option.value = data[i];
        option.innerHTML = data[i];
        document.getElementById("dayTime").appendChild(option);
      }
    });
  });
};

function driverBookAppointment(event) {
  console.log("driverBookAppointment --- ");
  const selectedOption = event.target.value;
  const dateTimeVal = $("#dateTime").val();
  fetch("/findAppointmentDayTime?dateTime=" + dateTimeVal, {
    method: "POST",
    body: JSON.stringify({
      dateTime: selectedOption,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    response.json().then((data) => {
      console.log(data);
      document.getElementById("dayTime").innerHTML = "";
      //Render page
      for (i = 0; i < data.length; i++) {
        console.log(data[i]);
        let option = document.createElement("option");
        option.value = data[i];
        option.innerHTML = data[i];
        document.getElementById("dayTime").appendChild(option);
      }
    });
  });
};




function driverCancelAppointment() {
  console.log("driverBookAppointment --- ");
  const selectedOption = $("#cancelAppointmentId").val();
  fetch("/driver/cancelAppointment", {
    method: "POST",
    body: JSON.stringify({
      id: selectedOption,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    console.log(response);  
    window.location.replace("/booking");
  });
};
