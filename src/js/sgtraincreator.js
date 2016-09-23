var baseAjaxUrl = 'https://www.steamgifts.com/ajax.php';

$(function () {
	$('$search-game').keyUp(function () {
		delay(function {
			$.ajax({
				url: baseAjaxUrl,
				data: {
					search_query: e.val(),
                    page_number: 1,
                    do: 'autocomplete_game'
				}
			}).success(function (data) {
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