$(document).ready(function (){

  // getting html elements and assigning variables to them
  var fiveDay = $("#fiveday"), zip = $("#zip"), err = $("#err");

  // defining click event for "get weather" button
  $("#btn").on("click", function (){
    event.preventDefault();
    $("#err").addClass("hide");
    var $xhr = $.getJSON("https://api.openweathermap.org/data/2.5/forecast?zip=" + zip.val() + "&format=json" + "&APPID=286fc55d927f2ff688bc60806f52f979");
    // error checking for bad/no zipcode
    if ((zip.val() == "") || (zip.val().length != 5)) {
      $("#err").removeClass("hide");
      console.log();
    } else {
      $("#err").addClass("hide");
      $xhr.done(function (data){
        console.log(data);
      });
    }
  });
});
