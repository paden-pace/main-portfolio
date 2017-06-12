console.log("JavaScript set up.");

var topics = [
  "Lebron James",
  "Tim Duncan",
  "Kevin Durant",
  "Peyton Manning",
  "John Elway", 
  "Tom Brady",
  "Serena Williams",
  "Venus Williams",
  "Cristiano Ronaldo",
  "Wayne Rooney",
  "Wayne Gretzky",
  "Ronda Rousey",
  ];

$(document).ready(function(){ 

  var person;
  console.log(topics);

  function buttonMaker() {
      $("#button-location").empty();
      for (var i = 0; i < topics.length; i++) {
        $('<button/>',{
          id: 'button'+i,
          class: 'topic-button',
          text: topics[i],
          value: topics[i],
          click: function (){person = this.value}
        }).appendTo("#button-location");
      };
      $(".topic-button").on("click", function(){
      topicClick();
      });
  };

  buttonMaker();

  $("#new-person-add").on("click", function(event) {
    event.preventDefault();

    // Get the to-do "value" from the textbox and store it a variable
    var newPerson = $("#new-person-input").val().trim();
    topics.push(newPerson);
    buttonMaker();
  });

  function topicClick(){
      console.log(person);
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          person + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
      url: queryURL,
      method: "GET"
      }).done(function(response) {
          console.log(response);
          $("#gif-location1").empty();
          $("#gif-location2").empty();

          for (var k = 0; k < response.data.length; k++) {
              if (k <= 4) {
                  $("<div/>", {
                      class: "imageAndRatingDiv",
                      id: "imageAndRatingDiv" + k,
                  }).appendTo("#gif-location1");
              } else if (k > 4) {
                  $("<div/>", {
                      class: "imageAndRatingDiv",
                      id: "imageAndRatingDiv" + k,
                  }).appendTo("#gif-location2");
              }


              var personImage = $("<img>");
              personImage.attr({
                  "src": response.data[k].images.fixed_width_still.url,
                  "data-still": response.data[k].images.fixed_width_still.url,
                  "data-animated": response.data[k].images.fixed_width.url,
                  "movement": "still",
                  "class": "gifImage",
                  "id": "gifImage"+k
              });

              $("#imageAndRatingDiv"+k).prepend(personImage);
              $("#imageAndRatingDiv"+k).prepend("<p> Rating: "+response.data[k].rating+"</p>");

              $("#gifImage"+k).on("click", function(){

                  var active = $(this).attr("movement");

                  if (active === ("still")) {
                      $(this).attr("src", $(this).attr("data-animated"));
                      $(this).attr("movement", "animated");
                  } else if (active === ("animated")) {
                      $(this).attr("src", $(this).attr("data-still"));
                      $(this).attr("movement", "still");
                  };
              });
          };
      });
  };
});