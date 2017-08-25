$(document).ready(function (){

  // getting html elements and assigning variables to them
  var fiveDay = $("#fiveday"), zip = $("#zip"), err = $("#err");

  // defining click event for "get weather" button
  $("#btn").on("click", function (){
    event.preventDefault();
    err.hide();
    var $xhr = $.getJSON("api.openweathermap.org/data/2.5/forecast?zip=" + zip.val + "&format = json");
    // error checking for bad/no zipcode
    if ((zip.val() == "") || (zip.val().length < 7)) {
      err.show();
      console.log();
    } else {
      $xhr.done(function (data){

      });
    }
  });
});
