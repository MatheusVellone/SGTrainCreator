Train = function () {
	this.giveaways = [];
	return this;
}

Train.prototype.size = function() {
	return this.giveaways.length;
};

Train.prototype.addGiveaway = function () {
	var giveaway = {

	};
	this.giveaways.push(new Giveaway(giveaway));
}