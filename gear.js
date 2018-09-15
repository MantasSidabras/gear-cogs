class Gear {
	constructor(x, y, diameter, rotateClockwise = true, offset = 0, angle) {
		this.x = x;
		this.y = y;
		this.diameter = diameter;
		this.rotateClockwise = rotateClockwise;
		this.offset = offset;
		this.angle = angle ? angle: defaultAngle;

		this.teethWidth = 13;
		this.teethHegiht = diameter * 1.3;
	}

	draw() {
		push();
		translate(this.x, this.y);
		rotate((this.rotateClockwise ? 1 : -1) * this.offset);
		this.offset += speed * this.angle / defaultAngle;
		rectMode(CENTER);
		fill(220);
		noStroke();
		for (let i = 0; i < 360; i += this.angle) {
			rect(0, 0, this.teethWidth, this.teethHegiht, 3);
			rotate(this.angle);
		}

		ellipse(0, 0, this.diameter, this.diameter);
		fill(bgColor);
		ellipse(0, 0, this.diameter / 1.5, this.diameter / 1.5);
		pop();
	}

	switchDirection() {
		this.rotateClockwise = !this.rotateClockwise;
	}
}
