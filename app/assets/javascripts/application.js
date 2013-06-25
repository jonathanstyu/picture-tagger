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

var Photos = {
	User: function () {},
	Photo: function () {},
	Tag: function () {},
	View: function () {}
};


Photos.User.prototype.save = function (params, callback) {
	if (this.id) {
		var method = "put";
		var url = "/user/" + this.id;
	} else {
		var method = "post";
		var url = "/users";
	}

	$.ajax({
		url: url,
		method: method,
		data: params,
		success: function (boomerang) {
			callback(boomerang);
		}
	})
}

Photos.User.prototype.fetch = function () {

}

Photos.User.prototype.destroy = function () {

}

Photos.Photo = function (attrs) {
	this.setAttributes(attrs);
}

Photos.Photo.fetch = function (callback) {
	$.ajax({
		url: "/photos.json",
		success: function (data) {
			Photos.Photo._all = _(data).map(function (params) {
				return new Photos.Photo(params);
			});
			callback(Photos.Photo._all);
		}
	})
}

Photos.Photo.find = function (id, callback) {
	var that = this;
	var result = _(Photos.Photo._all).findWhere({id: +id});
	if (callback) {
		callback(result);
	}
}

Photos.Photo.prototype.setAttributes = function (attrs) {
	var that = this;
	_(attrs).each(function (value, key) {
		that[key] = value;
	})
}

Photos.Photo.prototype.save = function () {

}


Photos.Photo.prototype.destroy = function () {

}

Photos.Tag.prototype.save = function () {

}

Photos.Tag.prototype.fetch = function () {

}

Photos.Tag.prototype.destroy = function () {

}

Photos.View.render = function () {
	Photos.Photo.fetch(function (photos) {
		var render_method = _.template($("#index_temp").html());
		var rendered_content = render_method({
			photos: photos
		});
		$("#photos_window").html(rendered_content);
	});

}

Photos.View.submit = function (element) {
	var that = this;
	var params = $(element).serialize();
	$.ajax({
		type: "post",
		url: "/photos",
		data: params,
		success: function (boomerang) {

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

