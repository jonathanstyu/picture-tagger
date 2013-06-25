Photos.TaggingViewController.initialize = function (photo) {
	Photos.Store.currentPhoto = photo;
	this.renderPhoto(photo);
	this.renderTags();
}

Photos.TaggingViewController.renderPhoto = function(photo) {
	var rend_method = JST['templates/photo-show']
	var rend_content = rend_method({
		photo: photo
	});
	$("#photos_window").html(rend_content);
}

Photos.TaggingViewController.renderTags = function() {
	Photos.User.friends(function () {
		tags = Photos.Store.currentPhoto.tags;
		var tagRend = JST['templates/tag'];
		for (i = 0; i < tags.length; i++) {
			var friend = _(Photos.Store._allFriends).findWhere({ id: +tags[i].friend_id });
			var rendTag = tagRend({
				friend: friend,
				tag: tags[i]
			});

			$("#image-wrapper").append(rendTag);
		}
	});
}

$(function () {

	$('#photos_window').on("click", ".img-enlarged", function (event) {
		event.preventDefault();

		var tagX = event.offsetX;
		var tagY = event.offsetY;

		var rend_method = JST['templates/friend-select'];


		var content = rend_method({
			tagX: tagX,
			tagY: tagY,
			friends: Photos.Store._allFriends
		});

		$("#image-wrapper").append(content);
	});

	$('#photos_window').on('click', '#back-link', function (event) {
		event.preventDefault();
		Photos.View.render();
	});

	$('#photos_window').on('change', '#select-friends', function (event) {
		var tag = new Photos.Tag({
			friend_id: $(this).val(),
			xco: $(this).attr("data-tagx"),
			yco: $(this).attr("data-tagy")
		});
		$(".select-wrapper").remove();
		tag.save(function (tag) {
			Photos.TaggingViewController.initialize(Photos.Store.currentPhoto)
		})
	});

})