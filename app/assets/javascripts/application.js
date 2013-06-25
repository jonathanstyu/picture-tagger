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
//= require ./models/photos-app
//= require_tree .
//= require_tree ./templates
//= require_tree ./models




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
	})

})

