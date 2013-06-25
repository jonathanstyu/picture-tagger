$(function () {
	Photos.View.render();

	$('#photos_window').on("click", "#new_photo", function (event) {
		event.preventDefault();
		var attrs = $(this.form).serialize()
		var photo = new Photos.Photo({
			url: attrs
		})
		photo.save(this.form, function (data) {
			Photos.View.render();
		})
	});

	$('#photos_window').on("click", ":button", function (event) {
		event.preventDefault();

		Photos.Photo.find($(this).attr("data-id"), function(photo) {
			photo.destroy(function (destroyed) {
				Photos.View.render();
			})
		})
	});

	$('#photos_window').on("click", ".img-polaroid", function (event) {
		event.preventDefault();

		Photos.Photo.find($(this).attr("data-id"), function(photo) {
			Photos.TaggingViewController.initialize(photo);
		});
	})



});

