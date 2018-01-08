$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = 1;

	var newDevouredState = {
		devoured: newDevoured
	};
	console.log(newDevoured);


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


