
Photos.User = function (attrs) {
	this.setAttributes(attrs);
}

Photos.User.findCurrentUser

Photos.User.prototype.setAttributes = function (attrs) {
	var that = this;
	_(attrs).each(function (value, key) {
		that[key] = value;
	})
}


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

Photos.User.fetchPhotos = function (callback) {
	if (Photos.Store._allPhotos) {
		callback(Photos.Store._allPhotos)
	} else {
		$.ajax({
			url: "/photos.json",
			success: function (data) {
				var photos = _(data).map(function (params) {
					return new Photos.Photo(params);
				});
				Photos.Store._allPhotos = photos;
				callback(Photos.Store._allPhotos);
			}
		});
	}
}

Photos.User.prototype.destroy = function () {

}

Photos.User.prototype.addPhoto = function (callback) {

}