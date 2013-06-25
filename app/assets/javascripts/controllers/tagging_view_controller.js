Photos.TaggingViewController.initialize = function (photo) {
	var rend_method = JST['templates/photo-show']
	var rend_content = rend_method({
		photo: photo
	});
	$("#photos_window").html(rend_content);
}