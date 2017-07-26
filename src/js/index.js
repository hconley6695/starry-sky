// Javascript Entry Point
// my code
import $ from 'jquery';
import Star from './star';


// var littleStar = new Star();
// console.log(littleStar);

function createStar() {
	var littleStar = new Star();

	var left = littleStar.coordinates.x + 'px';
	var top = littleStar.coordinates.y + 'px';
	var width = littleStar.size.w + 'px';
	var height = littleStar.size.h + 'px';

	var $div = $('<div class="color star"></div>');

	$($div).css("background-color", "white");
	$($div).css("height", height);
	$($div).css("width", width);
	$($div).css("left", left);
	$($div).css("top", top);

	$('.night-sky').append($div);
}


for (var i = 0; i <= 100; i++) {

	createStar();
}



