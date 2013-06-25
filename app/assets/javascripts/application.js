// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require underscore
//= require_tree .

Photos = {}
Photos.View = {}

Photos.View.render = function () {
	var photos = JSON.parse($("#bootstrapped_photos").html());

	var render_method = _.template($("#index_temp").html());
	var rendered_content = render_method({
		photos: photos
	});
	$("#photos_window").html(rendered_content);
}

Photos.View.submit = function (element) {
	var that = this;
	var params = $(element).serialize();
	$.ajax({
		type: "post",
		url: "/photos",
		data: params,
		success: function (boomerang) {
			that.photos.push(boomerang);
			Photos.View.render();
		}
	});
}

$(function () {
	Photos.View.render();

	$('#photos_window').on("click", "#new_photo", function (event) {
		event.preventDefault();
		Photos.View.submit(this.form)
	})

})

