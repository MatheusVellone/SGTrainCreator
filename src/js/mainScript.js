var baseAjaxUrl = 'https://www.steamgifts.com/ajax.php';
var request = require('request');
var utils = require('./Utils');

$(function () {
	document.getElementById('search-games').addEventListener('keyup', function () {
		delay(function (){
			customAjax({
				form: {
					search_query: document.getElementById('search-games').value,
                    page_number: 1,
                    do: "autocomplete_game"
				}
			}, function (data) {
				var cheerio = require('cheerio');
				var gamesResult = [];
				var html = $(data.html).find('.table__rows').each(function (game) {
					var $game = $(game);
					var game = {
						title: $game.data('autocomplete-name'),
						id: $game.data('autocomplete-id'),
						image: utils.stringBetween($game.find('.global__image-inner-wrap').css('background-image'), 'url(', ')')
					};

					gamesResult.push(game);
				});

				console.log(gamesResult);

				document.getElementById('search-games-result').innerHTML = data.html;
			});
		}, 500)
	});
});

var delay = (function(){
	var timer = 0;
	return function(callback, ms){
		clearTimeout (timer);
		timer = setTimeout(callback, ms);
	};
})();

var customAjax = function(obj, callback) {
	obj = $.extend({
		url: baseAjaxUrl,
		headers: {
			"Cookie": document.getElementById('cookie').value,
			"User-Agent": navigator.userAgent
        },
	}, obj);

	request.post(obj, function (error, response, data) {
		if (!error && response.statusCode === 200) {
			callback(JSON.parse(data));
		} else {
			console.error(error, response);
		}
	});
}