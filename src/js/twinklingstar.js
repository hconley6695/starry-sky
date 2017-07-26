import Star,{ MX_WIDTH, MX_HEIGHT } from './star';


let colors = ['#e0ffba', '#fffc56', '#70e4ff', ];


export default class TwinklingStar extends Star {
	constructor() {
		super();
		let oneColor = colors[Math.floor(Math.random() * colors.length)];
		console.log(oneColor);
		this.color = oneColor;

	}
}