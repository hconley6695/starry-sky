import Star,{ MX_WIDTH, MX_HEIGHT } from './star';


let colors = ['#e0ffba', '#fffc56', '#70e4ff', ];
let timing = [2000, 4000, 6000, 8000, 10000];


export default class TwinklingStar extends Star {
	constructor() {
		super();
		let oneColor = colors[Math.floor(Math.random() * colors.length)];
		let time = timing[Math.floor(Math.random() * timing.length)];
		console.log(oneColor);
		this.color = oneColor;
		this.time = time;

	}
}