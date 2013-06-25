Photos.Tag = function (attrs) {
	this.setAttributes(attrs)
}

Photos.Tag.prototype.setAttributes = function (attrs) {
	var that = this;
	_(attrs).each(function (value, key) {
		that[key] = value;
	})
}

Photos.Tag.prototype.save = function () {

}

Photos.Tag.prototype.fetch = function () {

}

Photos.Tag.prototype.destroy = function (callback) {

}
