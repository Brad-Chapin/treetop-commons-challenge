$(document).ready(function (){
  var fiveDay = $("#fiveday");
  var zip = $("#zip");
  $("#btn").on("click", function (){
    event.preventDefault();
    var $xhr = $.getJSON("api.openweathermap.org/data/2.5/forecast?zip=" + zip.val + "&format = json");
    if ((zip.val() == "") || (zip.val().length < 7)) {
      alert("Please enter a valid zip code.");
      console.log(zip.val());
    }
  });
});
