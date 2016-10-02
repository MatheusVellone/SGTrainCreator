Train = function () {
	this.giveaways = [];
	return this;
}

Train.prototype.size = function() {
	return this.giveaways.length;
};

Train.prototype.addGiveaway = function (giveaway) {
    console.log(giveaway);
	this.giveaways.push(giveaway);
}

Train.prototype.render = function () {

}