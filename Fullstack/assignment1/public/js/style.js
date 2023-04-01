//mongodb+srv://Shawn0727:LdsrcHgXQjWq3Bjv@cluster0.ujd9xu3.mongodb.net/test

  function dayTimeOnChangeEvent() {
    const dateTime = $("#dateTime").val();
    if (dateTime != null || dateTime != "") {
      console.log("--Change dateTime Event");
      $("#dateTime").trigger("change");
    }
  }

  $(document).ready(() => {
    // dayTimeOnChangeEvent();
    console.log("min is working?");
    document.getElementById("dateTime").setAttribute("min", new Date().toISOString().split("T")[0]);

  });
