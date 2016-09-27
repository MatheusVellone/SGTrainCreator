module.exports = {
	stringBetween: function (str, start, end){
		return str.substring(str.lastIndexOf(start) + start.length + 1, str.lastIndexOf(end) - 1);
	}
}