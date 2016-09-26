console.log('loaded');

module.exports = {
	stringBetween: function (str, start, end){
		return str.substring(str.lastIndexOf(start) + 1, str.lastIndexOf(end));
	}
}