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
    var firstTrain = moment($("#first-train").val().trim(), "HH:mm").format("hh:mm");
    var tFrequency = $("#frequency").val().trim();
  
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

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().dest;
  var firstTrain = childSnapshot.val().first;
  var tFrequency = childSnapshot.val().frequency;

  console.log(trainName);
  console.log(destination);
  console.log(firstTrain);
  console.log(frequency);



tFrequency = 3;
firstTime = "03:30";
var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    $("table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
    firstTrain + "</td><td>" + tFrequency + "</td><td>");

    $("#clock").append(currentTime);

});

  
