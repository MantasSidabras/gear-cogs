const bgColor = 50;
let speed = 0.5;
const defaultAngle = 45;
let gears = [];

function setup() {
	createCanvas(400, 400);
	angleMode(DEGREES);
	gears.push(new Gear(50, 200, 50, false));
	gears.push(new Gear(125, 200, 70, true, 22.5));
	gears.push(new Gear(200, 128, 100, false));
	gears.push(new Gear(200, 247, 80, false, 28));
	gears.push(new Gear(310, 290, 120, true, 5, 30));
}

function draw() {
	background(bgColor);
	for (let i = 0; i < gears.length; i++) {
		gears[i].draw();
	}
}
