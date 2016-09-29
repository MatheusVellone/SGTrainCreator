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
				var $gamesList = $('<div>').addClass('games-list');
				$html.find('.table__rows > div').each(function (index, game) {
					var $game = $(game);
					var gameData = {
						title: $game.data('autocomplete-name'),
						id: $game.data('autocomplete-id'),
						image: utils.stringBetween($game.find('.global__image-inner-wrap').css('background-image'), 'url(', ')')
					};

					var $gameTitle = $('<span>').text(gameData.title).addClass('h3');
					var $gameImage = $('<img>').attr('src', gameData.image).addClass('game-img img-responsive');

					var $gameItem = $('<div>')
						.addClass('game-item text-center')
						.data('game-id', gameData.id)
						.append($gameImage)
						.append($gameTitle);

					$gamesList.append($gameItem);
				});

				var $paginator = $('<span>').addClass('paginator');
				var currentPage = $html.find('div.pagination__navigation > a.is-selected').data('page-number');
				$html.find('div.pagination__navigation > a').each(function (index, element) {
					if (element.children.length === 1) {
						var pageNumber = element.getAttribute('data-page-number');
						var $page = $('<a>').addClass('page-number').text(pageNumber);
						if (currentPage == pageNumber) {
							$page.addClass('current-page');
						}
						$paginator.append($page);
					}
				});

				$('#search-games-result').html($gamesList).append($paginator);;
			});
		}, 500)
	});
	$(document).on('click', '.game-item', function () {
		//Selected game. Game ID on data-id attribute
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