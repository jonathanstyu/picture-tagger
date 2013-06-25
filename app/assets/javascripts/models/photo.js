Photos.Photo = function (attrs) {
	this.setAttributes(attrs);
}

Photos.Photo.find = function (id, callback) {
	var that = this;
	var result = _(Photos.Store._allPhotos).findWhere({id: +id});
	if (callback) {
		callback(result);
	}
}


Photos.Photo.prototype.save = function (element, callback) {
	var that = this;
	var params = $(element).serialize();

	$.ajax({
		type: "post",
		url: "/photos.json",
		data: params,
		success: function (boomerang) {
			Photos.Store._allPhotos.push(new Photos.Photo(boomerang));
			callback(boomerang);
		}
	});
}

Photos.Photo.prototype.setAttributes = function (attrs) {
	var that = this;
	_(attrs).each(function (value, key) {
		that[key] = value;
	})
}

Photos.Photo.prototype.destroy = function (callback) {
	var that = this
	$.ajax({
		url: "/photos/" + this.id,
		type: "delete",
		success: function (data) {
			var index = _(Photos.Store._allPhotos).indexOf(that);
			Photos.Store._allPhotos.splice(+index, 1);

			callback(data);
		}
	});
}

