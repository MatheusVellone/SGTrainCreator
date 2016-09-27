var baseAjaxUrl = 'https://www.steamgifts.com/ajax.php';
var request = require('request');
var utils = require('./src/js/Utils');

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
				var searchResult = {};
				searchResult.gamesResult = [];
				console.log($(data.html));
				var $html = $(data.html);
				$html.find('.table__rows > div').each(function (index, game) {
					var $game = $(game);
					var game = {
						title: $game.data('autocomplete-name'),
						id: $game.data('autocomplete-id'),
						image: utils.stringBetween($game.find('.global__image-inner-wrap').css('background-image'), 'url(', ')')
					};
					searchResult.gamesResult.push(game);
				});

				searchResult.pagination = {
					currentPage: $html.find('div.pagination__navigation > a.is-selected').data('page-number'),
					resultsCount: parseInt($html.find('div.pagination__results > strong:nth-child(3)').text().replace(',', '')),
					availablePages: []
				};
				$html.find('div.pagination__navigation > a').each(function (index, element) {
					if (element.children.length === 1) {
						searchResult.pagination.availablePages.push(element.getAttribute('data-page-number'))
					}
				});

				$('<div></div>').addClass('game');

				console.log(searchResult);

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
			var json = JSON.parse(data);
			callback(json);
		} else {
			console.error(error, response);
		}
	});
}