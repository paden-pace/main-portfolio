
$(document).ready(function(){
	console.log("page open");

	// Wins and Losses shouldn't reset after every game so they need to be declared out of the "start button"
	var wins = 0;
	var losses = 0;

	$("#start-button").on("click", function() {

		$("#start-button").html("Restart");

		// set my variables to 0 at the start of every game 
		var numberTotal = 0;
		var randNumberBig = 0;
		// set my random Big number and alert the console and html
		var randNumberBig = Math.floor(Math.random()*100 +20);
		console.log(randNumberBig);
		console.log(numberTotal);
		$("#numberRand").html(randNumberBig);
		$("#numberTotal").html(numberTotal);


		// declaring the winOrLose function
		// should be set to run only if numberTotal is >= Big Random
		var winOrLose = function(){
			if (numberTotal >= randNumberBig) {
				if (numberTotal == randNumberBig){
					alert("wow you guessed it and the function runs");
					wins++;
					$("#wins").html("Wins: "+ wins);
					$("#start-button").html("Play Again?");
					return;
				} else if (numberTotal > randNumberBig) {
					alert("You Lost");
					losses++;
					$("#losses").html("Losses: "+ losses);
					$("#start-button").html("Play Again?");
					return;
				} else {
					return;
				};
			};
		};



		//setting the random number arry to have 4 random values for the 4 jewels
		var randNumber = [];
		console.log(randNumber);

		for (var i = 0; i <= 3; i++) {
			var storeNumber = Math.floor(Math.random()*12 +1);
			randNumber.push(storeNumber);
			console.log(randNumber);
		};

		// Then allowing each jewel to be clickable
		// and add their assigned value from the random number array to numberTotal
		// then they will check for a win/lose and will annouch numbers to html and cosole
		$("#jewel_1").on("click", function() {
			if (numberTotal < randNumberBig) {
			    numberTotal = numberTotal + randNumber[0];
			    $("#numberTotal").html(numberTotal);
			    console.log("total: " + numberTotal + "  random: " + randNumberBig);
			    winOrLose();
			};
		});

		$( "#jewel_2" ).on( "click", function() {
			if (numberTotal < randNumberBig) {
			    numberTotal = numberTotal + randNumber[1];
			    $("#numberTotal").html(numberTotal);
			    console.log("total: " + numberTotal + "  random: " + randNumberBig);
			    winOrLose();
			};
		});

		$( "#jewel_3" ).on( "click", function() {
			if (numberTotal < randNumberBig) {
			    numberTotal = numberTotal + randNumber[2];
			    $("#numberTotal").html(numberTotal);
			    console.log("total: " + numberTotal + "  random: " + randNumberBig);
			    winOrLose();
			};
		});

		$( "#jewel_4" ).on( "click", function() {
			if (numberTotal < randNumberBig) {
				numberTotal = numberTotal + randNumber[3];
			    $("#numberTotal").html(numberTotal);
			    console.log("total: " + numberTotal + "  random: " + randNumberBig);
			    winOrLose();
			};
		});

	});

});






