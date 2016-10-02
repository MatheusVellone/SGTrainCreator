var baseAjaxUrl = 'https://www.steamgifts.com/ajax.php';
var newGiveawayUrl = 'https://www.steamgifts.com/giveaways/new';
var request = require('request');
var utils = require('./src/js/Utils');

$(function () {
	var train = new Train();
	setInputValidators();
	document.getElementById('search-games').addEventListener('keyup', function () {
		delay(function (){
			steamGiftsRequest('post', {
				url: baseAjaxUrl,
				form: {
					search_query: document.getElementById('search-games').value,
                    page_number: 1,
                    do: "autocomplete_game"
				}
			}, function (data) {
				data = JSON.parse(data);
				var searchResult = {};
				searchResult.gamesResult = [];

				var $html = $(data.html);
				var $gamesList = $('<div>').addClass('games-list');
				var result = $('#search-games-result').empty();
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
						.addClass('game-item text-center result-column')
						.attr('data-game-id', gameData.id)
						.append($gameImage)
						.append($gameTitle);

					result.append($gameItem);
				});

				// no paginator for now

				// var $paginator = $('<ul>').addClass('paginator result-column');
				// var currentPage = $html.find('div.pagination__navigation > a.is-selected').data('page-number');
				// $html.find('div.pagination__navigation > a').each(function (index, element) {
				// 	if (element.children.length === 1) {
				// 		var pageNumber = element.getAttribute('data-page-number');
				// 		var $page = $('<li>').html(
				// 			$('<a>').addClass('page-number').text(pageNumber)
				// 		);
				// 		if (currentPage == pageNumber) {
				// 			$page.addClass('current-page');
				// 		}
				// 		$paginator.append($page);
				// 	}
				// });
				// result.append($paginator);
			});
		}, 500)
	});
	$(document).on('click', '.game-item', function (event) {
		//Selected game. Game ID on data-id attribute
		document.getElementById('game-id').value = this.getAttribute('data-game-id');
		$('.game-item.selected').removeClass('selected');
		$(this).addClass('selected');
	});
	$('#cookie').on('input', updateCookieInformation);
	$('#train-item').on('submit', function (event) {
		event.preventDefault();
		var formData = {};
		$(this).serializeArray().map(function(x){formData[x.name] = x.value;});
		train.addGiveaway(formData);
	})
	getTestCookie();
});

var delay = (function(){
	var timer = 0;
	return function(callback, ms){
		clearTimeout (timer);
		timer = setTimeout(callback, ms);
	};
})();

function setInputValidators () {
	var validator = {
		region: 'Giveaway region is required',
		start_time: 'Must choose a start time'
	}
	Object.keys(validator).forEach(function (id) {
		InvalidInputHelper(document.getElementById(id + '-input'), validator[id]);
	});
}

function steamGiftsRequest(method, obj, callback, errorCallback) {
	method = method || 'get';
	obj = $.extend({
		headers: {
			"Cookie": document.getElementById('cookie').value,
			"User-Agent": navigator.userAgent
        },
	}, obj);

	return request[method](obj, function (error, response, data) {
		if (!error && response.statusCode === 200) {
			callback(data);
		} else {
			if (errorCallback) {
				errorCallback(error, response);
			} else {
				console.error(error, response);
			}
		}
	});
}

function getTestCookie() {
	$.ajax('../cookie.json', {
		dataType: 'json',
		success: function (data){
			document.getElementById('cookie').value = data.cookie;
		}
	});
}

var updateCookieInformation = (function() {
	var cookieAjaxRequest;
	return function () {
		if (cookieAjaxRequest) {
			cookieAjaxRequest.abort();
		}
		$('.avatar-loading').fadeIn();
		$('#xsrf_token').val('');
		$('#username').text('Loading cookie session');
		$('#user-avatar img').attr('src', '');
		cookieAjaxRequest = steamGiftsRequest('get', {url: newGiveawayUrl}, function (data) {
			$('.avatar-loading').hide();
			var $html = $(data);
			$('#xsrf_token').val($html.find('input[name=xsrf_token]').val());

			var usernameLink = $html.find('.nav__avatar-outer-wrap').attr('href');
			var cookieUsername = usernameLink.substr(usernameLink.lastIndexOf('/') + 1);
			$('#username').text(cookieUsername);

			var userAvatar = $html.find('.nav__avatar-inner-wrap').css('background-image');
			userAvatar = utils.stringBetween(userAvatar, 'url(', ')');
			$('#user-avatar img').attr('src', userAvatar);
		}, function (error, response) {
			$('.avatar-loading').hide();
			$('#xsrf_token').val('');
			$('#username').text('Invalid cookie');
			$('#user-avatar img').attr('src', '');
		});
	};
})();

function InvalidInputHelper(input, defaultText) {
    input.setCustomValidity(defaultText);
}