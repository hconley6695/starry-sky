// Javascript Entry Point
// my code
import $ from 'jquery';
import Star from './star';


// var littleStar = new Star();
// console.log(littleStar);

function createStar() {
	var littleStar = new Star();

	var left = littleStar.coordinates.x + 'px';
	console.log(left);
	var top = littleStar.coordinates.y + 'px';
	console.log(top);
	var width = littleStar.size.w + 'px';
	console.log(width);
	var height = littleStar.size.h + 'px';
	console.log(height);
	var $div = $('<div class="color star"></div>');

	// $('.night-sky').append($div);	
	console.log($div);

	$("div.color").css("background-color", "white");
	$("div.color").css("height", height);
	$("div.color").css("width", width);
	$("div.color").css("left", left);
	$("div.color").css("top", top);
	$('.night-sky').append($div);	

}
createStar();
createStar();
createStar();

// $('.night-sky').append($div);

for (var i = 0; i <= 5; i++) {

// 	var littleStar = new Star();

// 	var left = littleStar.coordinates.x + 'px';
// 	var top = littleStar.coordinates.y + 'px';
// 	var width = littleStar.size.w + 'px';
// 	var height = littleStar.size.h + 'px';
// 	var $div = $('<div class="color star"></div>');

// 	$('.stars').append(littleStar);
	
// 	$("div.color").css("background-color", "white");
// 	$("div.color").css("height", height);
// 	$("div.color").css("width", width);
// 	$("div.color").css("left", left);
// 	$("div.color").css("top", top);
// 	$('.stars').append($div);	

	// createStar();

}

