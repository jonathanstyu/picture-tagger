
Photos.View.render = function () {
	Photos.User.fetchPhotos(function (photos) {
		var render_method = JST['templates/photo-index']
		var rendered_content = render_method({
			photos: photos
		});
		$("#photos_window").html(rendered_content);
	});

}