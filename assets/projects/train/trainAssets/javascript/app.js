
$(document).ready(function(){

	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyC-yc_z3Rq2DlxixCpSlaeTj3bxnGrAerQ",
		authDomain: "train-time-pjp.firebaseapp.com",
		databaseURL: "https://train-time-pjp.firebaseio.com",
		storageBucket: "train-time-pjp.appspot.com",
		messagingSenderId: "1030367313016"
	};
	firebase.initializeApp(config);

	// Create a variable to reference the database.
	var database = firebase.database();

	// Initial Variables
	var name = "";
	var dest = "";
	var first = 0;
	var freq = 0;
	

	// Submit Button Click
	$("#submit-button").on("click", function(event) {
		event.preventDefault();

		// Grab values from text boxes
		name = $("#nameInput").val().trim();
		dest = $("#destInput").val().trim();
		first = $("#firstInput").val().trim();
		freq = $("#freqInput").val().trim();

		var firstTime = moment(first, "hh:mm").subtract(1, "years");
		var currentTime = moment();
		var diffTime = moment().diff(moment(firstTime), "minutes");
		var remainTime = diffTime % freq;
		var minAway = freq - remainTime;
		var nextTrain = moment().add(minAway, "minutes");
		var next = (moment(nextTrain).format("hh:mm"));
		database.ref().push({
			name: name,
			dest: dest,
			freq: freq,
			next: next,
			minAway: minAway,
			dateAdded: firebase.database.ServerValue.TIMESTAMP
		});
	});


	database.ref().on("child_added", function(snapshot) {
		var snapValue = snapshot.val();
		var snapValueArr = Object.keys(snapValue);
		var lastIndex = snapValueArr.length - 1;
		var lastKey = snapValueArr[lastIndex];
		var lastObj = snapValue[lastKey]	
	}, function(errorObject) {
		console.log("Errors handled: " + errorObject.code);
	});


    database.ref().orderByChild("dateAdded").limitToLast(10).on("child_added", function(snapshot) {
    var markup = "<tr><td>" + snapshot.val().name + "</td><td>" + snapshot.val().dest + "</td><td>" + snapshot.val().freq + "</td><td>" + snapshot.val().next + "</td><td>" + snapshot.val().minAway + "</td></tr>";
		$("#curTrainTable").append(markup);
    });

});