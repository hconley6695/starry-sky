
export const MX_WIDTH = 1200;
export const MX_HEIGHT = 800;

class Star {
	constructor() {
		let x = Math.round(Math.random() * MX_WIDTH);
		let y = Math.round(Math.random() * MX_HEIGHT);
		let w = Math.random() * 10;
		let h = w;
		this.size = {w, h};
		this.coordinates = {x, y};
	}
}

export default Star;