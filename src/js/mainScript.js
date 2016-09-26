var baseAjaxUrl = 'https://www.steamgifts.com/ajax.php';
var request = require('request');

$(function () {
	$('#search-games').on('keyup', function () {
		delay(function (){
			customAjax({
				data: {
					search_query: "bor",
                    page_number: 1,
                    "do": "autocomplete_game"
				}
			}, function (data) {
				$('#search-games-result').html(data);
			});
		}, 1000)
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
			"Cookie": $('#cookie').val(),
			"User-Agent": navigator.userAgent
        },
	}, obj);

	request.post(obj, function (error, response, html) {
		if (!error && response.statusCode === 200) {
			console.log(error, response, html);
			callback('-' + html + '-');
		} else {
			console.error(error, response);
		}
	});
}