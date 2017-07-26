import  Star, {MX_WIDTH, MX_HEIGHT } from './star';

export default class ShootingStar extends Star {
	constructor(props) {
		super(props);
		// this.direction = x;
		console.log(props);
		this.speed = Math.floor((Math.random() * 4) + 1) * 83;

	}
}
