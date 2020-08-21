(function() {
	function $(id) {
	  return document.getElementById(id);
	}
	var card = $('card'),
		openB = $('open'),
		closeB = $('close'),
		timer = null;
	console.log('wat', card);
	openB.addEventListener('click', function () {
	  card.setAttribute('class', 'open-half');
	  if (timer) clearTimeout(timer);
	  timer = setTimeout(function () {
		card.setAttribute('class', 'open-fully');
		timer = null;
	  }, 1000);
	});
  
	closeB.addEventListener('click', function () {
	  card.setAttribute('class', 'close-half');
	  if (timer) clearTimerout(timer);
	  timer = setTimeout(function () {
		card.setAttribute('class', '');
		timer = null;
	  }, 1000);
	});
  }());

  // Hearts falling
var love = setInterval(function () {
	var r_num = Math.floor(Math.random() * 40) + 1;
	var r_size = Math.floor(Math.random() * 10) + 10;
	var r_left = Math.floor(Math.random() * 100) + 1;
	var r_bg = Math.floor(Math.random() * 25) + 100;
	var r_time = Math.floor(Math.random() * 3) + 20;

	$('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

	$('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

	$('.heart').each(function () {
		var top = $(this).css("top").replace(/[^-\d\.]/g, '');
		var width = $(this).css("width").replace(/[^-\d\.]/g, '');
		if (top <= -100 || width >= 150) {
			$(this).detach();
		}
	});
}, 1500);
  