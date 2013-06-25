Photos.Tag = function (attrs) {
	this.setAttributes(attrs)
}

Photos.Tag.prototype.setAttributes = function (attrs) {
	var that = this;
	_(attrs).each(function (value, key) {
		that[key] = value;
	})
}

Photos.Tag.prototype.save = function (callback) {
	$.ajax({
		type: "post",
		url: "/photos/"+Photos.Store.currentPhoto.id + "/tags",
		data: {
			tag: {
				friend_id: this.friend_id,
				xco: this.xco,
				yco: this.yco
			}
		},
		success: function (data) {
			var saved_tag = new Photos.Tag(data);
			Photos.Store.currentPhoto.tags.push(saved_tag);
			callback(data);
		}
	})
}

Photos.Tag.prototype.fetch = function () {

}

Photos.Tag.prototype.destroy = function (callback) {

}
