// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".eat-burger").on("click", function(event) {
    var id = $(this).data("id");
    var ifDevoured = $(this).data("ifDevoured");

    var ifEaten = {
      devoured: ifDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: ifEaten
    }).then(
      function() {
        console.log("changed burger to");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".burger-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger: $("#burger").val().trim(),

    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Eaten a new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".remove-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
