$(document).ready(function (){

  // getting html elements and assigning variables to them
  var zip = $("#zip"), err = $("#err"), one = $("#one"), two = $("#two"), three = $("#three"), four = $("#four"), five = $("#five");

  var lowTemps = [];
  var hiTemps = [];

  // defining click event for "get weather" button
  $("#btn").on("click", function (){
    event.preventDefault();
    $("#err").addClass("hide");
    var $xhr = $.getJSON("https://api.openweathermap.org/data/2.5/forecast?zip=" + zip.val() + "&format=json" + "&APPID=286fc55d927f2ff688bc60806f52f979");
    // error checking for bad/no zipcode
    if ((zip.val() == "") || (zip.val().length != 5)) {
      $("#err").removeClass("hide");
    } else {
      $("#err").addClass("hide");
      $("#noon").removeClass("hide");
      $xhr.done(function (data){
        convertK(data);
        $("#city").text(data.city.name);
        one.text(
          JSON.stringify(data.list[3].dt_txt) + " Low Temp: " + lowTemps[0] + " High Temp: " + hiTemps[0] + " Pressure: " + JSON.stringify(data.list[3].main.pressure) + " Humidity: " + JSON.stringify(data.list[3].main.humidity) + " Conditions: " +
          JSON.stringify(data.list[3].weather[0].description)
        );

        two.text(
          JSON.stringify(data.list[11].dt_txt) + " Low Temp: " + lowTemps[1] + " High Temp: " + hiTemps[1] + " Pressure: " + JSON.stringify(data.list[11].main.pressure) + " Humidity: " + JSON.stringify(data.list[11].main.humidity) + " Conditions: " +
          JSON.stringify(data.list[11].weather[0].description)
        );

        three.text(
          JSON.stringify(data.list[19].dt_txt) + " Low Temp: " + lowTemps[2] + " High Temp: " + hiTemps[2] + " Pressure: " + JSON.stringify(data.list[19].main.pressure) + " Humidity: " + JSON.stringify(data.list[19].main.humidity) + " Conditions: " +
          JSON.stringify(data.list[19].weather[0].description)
        );

        four.text(
          JSON.stringify(data.list[27].dt_txt) + " Low Temp: " + lowTemps[3] + " High Temp: " + hiTemps[3] + " Pressure: " + JSON.stringify(data.list[27].main.pressure) + " Humidity: " + JSON.stringify(data.list[27].main.humidity) + " Conditions: " +
          JSON.stringify(data.list[27].weather[0].description)
        );

        five.text(
          JSON.stringify(data.list[35].dt_txt) + " Low Temp: " + lowTemps[4] + " High Temp: " + hiTemps[4] + " Pressure: " + JSON.stringify(data.list[35].main.pressure) + " Humidity: " + JSON.stringify(data.list[35].main.humidity) + " Conditions: " +
          JSON.stringify(data.list[35].weather[0].description)
        );
      });
    }
  });

  // function for converting Kelvin to farenheit
  function convertK (data) {
    for (let i = 3; i < 36; i += 8){
      let k = (((parseFloat(JSON.stringify(data.list[i].main.temp_min))) * 1.8) - 459.67).toFixed(2);
      lowTemps.push(k);
    }

    for (let i = 3; i < 36; i += 8){
      let k = (((parseFloat(JSON.stringify(data.list[i].main.temp_max))) * 1.8) - 459.67).toFixed(2);
      hiTemps.push(k);
    }
  }

});
