// Javascript Entry Point
// my code
import $ from 'jquery';
import Star from './star';


// var littleStar = new Star();
// console.log(littleStar);

// function createStar() {
// 	var littleStar = new Star();

// 	var left = littleStar.coordinates.x + 'px';
// 	console.log(left);
// 	var top = littleStar.coordinates.y + 'px';
// 	console.log(top);
// 	var width = littleStar.size.w + 'px';
// 	console.log(width);
// 	var height = littleStar.size.h + 'px';
// 	var $div = $('<div class="color"/>');
// 	$('.stars').append($div);
// 	$("div.color").css("background-color", "white");
// 	$("div.color").css("height", height);
// 	$("div.color").css("width", width);
// 	$("div.color").css("left", left);
// 	$("div.color").css("top", top);

// }


for (var i = 0; i <= 100; i++) {

	var littleStar = new Star();

	var left = littleStar.coordinates.x + 'px';
	console.log(left);
	var top = littleStar.coordinates.y + 'px';
	console.log(top);
	var width = littleStar.size.w + 'px';
	console.log(width);
	var height = littleStar.size.h + 'px';
	var $div = $('<div class="color"/>');
	$('.stars').append($div);
	$("div.color").css("background-color", "white");
	$("div.color").css("height", height);
	$("div.color").css("width", width);
	$("div.color").css("left", left);
	$("div.color").css("top", top);
	
	// var littleStar = new Star();

	// var $star = $('<div/>')
	// $(littleStar).addClass('star');
	// $('.stars').append($star);

	// var {x, y} = star.coordinates;
	// var {w, h} = star.size;
	// $star.css = ({
	// 	top: `${y}px`;
	// 	left: `${x}px`;
	// 	width: `${w}px`;
	// 	height: `${h}px`;
	// });
	// console.log(littleStar);
	// $('.app').append($star);
	// createStar();
}


