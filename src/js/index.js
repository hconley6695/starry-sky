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


function createShootingStar() {
	var shooter = new ShootingStar();

	var left = shooter.coordinates.x + 'px';
	var top = shooter.coordinates.y + 'px';
	var width = shooter.size.w + 'px';
	var height = shooter.size.h + 'px';
	var startingPosition = {left, top};
	console.log(startingPosition);

	var $div = $('<div class="shooting star"></div>');
	$($div).css("background-color", "bfaec9");
	$($div).css("height", height);
	$($div).css("width", width);
	$($div).css("left", left);
	$($div).css("top", top);

	$('.night-sky').append($div);

	// $($div).animate("left", left - )

}

// createShootingStar();

function createTwinkle() {
	var twinkle = new TwinklingStar();
	// console.log(twinkle);	

	var left = twinkle.coordinates.x + 'px';
	// console.log(left);
	var top = twinkle.coordinates.y + 'px';
	var width = twinkle.size.w + 'px';
	var height = twinkle.size.h + 'px';
	var color = twinkle.color;
	// console.log(color);
	var time = twinkle.time;

	var $div = $('<div class="twinkle-color star"></div>');

	$($div).css("background-color", color);
	$($div).css("height", height);
	$($div).css("width", width);
	$($div).css("left", left);
	$($div).css("top", top);

	$('.night-sky').append($div);

	$($div).fadeOut(200);
	$($div).fadeIn(time);


}

for (var i = 0; i <= 50; i++) {
	createTwinkle();
	createStar();
	createShootingStar();
}
