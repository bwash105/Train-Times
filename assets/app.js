var config = {
    apiKey: "AIzaSyBQ_2X7NQ90gcEOHDji_TJ-t5uGgHKoUHo",
    authDomain: "cbc-bwash105.firebaseapp.com",
    databaseURL: "https://cbc-bwash105.firebaseio.com",
    projectId: "cbc-bwash105",
    storageBucket: "",
    messagingSenderId: "280720559854"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#submitbutton").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var trainName = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrain = moment($("#first-train").val().trim(), "24:00").format("X");
    var frequency = $("#frequency").val().trim();
  
    // Creates local "temporary" object for holding employee data
    var newTrain = {
      name: trainName,
      dest: destination,
      first: firstTrain,
      frequency: frequency
    };
    // Uploads employee data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.dest);
  console.log(newTrain.first);
  console.log(newTrain.frequency);

  // Alert
  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#train-name").val("");
  $("#destination").val("");
  $("#first-train").val("");
  $("#frequency").val("");

});