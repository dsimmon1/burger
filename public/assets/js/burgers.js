$(function() {
  $("#devoured").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var name = $(this).data("name")

    var devoured = {
      name: name,
      devoured: 1,
      id: id
    };
    console.log(devoured);

    // Send the PUT request.
    $.ajax("/api/burger/", {
      type: "PUT",
      data: devoured
    }).then(
      function() {
        console.log("burger is devoured");
         location.reload();
      }
    );
  });

$("#add").on("click", function(event) {
    // Make sure to preventDefault on a submit event.

    event.preventDefault();

    var newburger = { 
      name: $("#burger").val().trim()
    }

    // Send the POST request.
    $.ajax("/api/burger/", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created a new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });



  });