Photos.TaggingViewController.initialize = function (photo) {
	Photos.User.friends(function () {
		var rend_method = JST['templates/photo-show']
		var rend_content = rend_method({
			photo: photo
		});
		$("#photos_window").html(rend_content);
	})
}

$(function () {

	$('#photos_window').on("click", ".img-enlarged", function (event) {
		event.preventDefault();


		console.log(event);
		var tagX = event.offsetX;
		var tagY = event.offsetY;
		// var tagX = event.clientX + $(this).offset().right;
// 		var tagY = event.clientY - $(this).offset().top;

		var percentX = (tagX / $(this).width());
		var percentY = (tagY / $(this).height());

		console.log(tagX)
		console.log(tagY)
		var rend_method = JST['templates/friend-select'];
		var content = rend_method({
			tagX: tagX,
			tagY: tagY,
			friends: Photos.Store._allFriends
		});

		$("#image-wrapper").append(content);


		var tag = new Photos.Tag({
			xco: percentX,
			yco: percentY
		});

	});

	$('#photos_window').on('click', '#back-link', function (event) {
		event.preventDefault();
		Photos.View.render();
	});

})