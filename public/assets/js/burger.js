$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newDevoured");

	var newDevouredState = {
		devoured: newDevoured
	};
//	I want to say that devoured = true

	$.ajax("/api/burgers/" + id, {
		type: "PUT",
		data: newDevouredState
		}).then(function() {
			console.log("changed devoured to ", newDevoured);
			location.reload();
			}
	);
  });

	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		var newBurger = {
			burger_name: $("#burgerName").val().trim()
		};

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(
			function() {
				console.log("created new burger");
				location.reload();
			}
		);
  });
});    	


