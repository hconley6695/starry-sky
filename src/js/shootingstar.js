import  Star, {MX_WIDTH, MX_HEIGHT } from './star';

export default class ShootingStar extends Star {
	constructor() {
		super();
		// this.direction = x;
		
		this.speed = Math.floor((Math.random() * 4) + 1) * 83;
		// this.direction = 
	}
}
