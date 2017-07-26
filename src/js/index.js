// Javascript Entry Point
// my code
import $ from 'jquery';
import Star from './star';
import ShootingStar from './shootingstar';
import TwinklingStar from './twinklingstar';


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


// function createShootingStar() {
// 	var shooter = new ShootingStar();
// 	console.log(shooter);
// }

// createShootingStar();

function createTwinkle() {
	var twinkle = new TwinklingStar();
	console.log(twinkle);	

	var left = twinkle.coordinates.x + 'px';
	console.log(left);
	var top = twinkle.coordinates.y + 'px';
	var width = twinkle.size.w + 'px';
	var height = twinkle.size.h + 'px';
	var color = twinkle.color;
	console.log(color);
	var time = twinkle.time;

	var $div = $('<div class="twinkle-color star"></div>');
	// $($div).css("display", "none");
	$($div).css("background-color", color);
	$($div).css("height", height);
	$($div).css("width", width);
	$($div).css("left", left);
	$($div).css("top", top);


	$('.night-sky').append($div);


	$($div).fadeOut(200);
	$($div).fadeIn(time);

}

for (var i = 0; i <= 100; i++) {
	createTwinkle();
	createStar();
}
