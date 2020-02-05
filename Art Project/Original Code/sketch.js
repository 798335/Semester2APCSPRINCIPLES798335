function setup() {
	createCanvas(windowWidth, windowHeight);
	background('white');
}

function draw() {
	fill(random(255), random(0), random(255), random(10, 100));
	noStroke();
	ellipse(random(mouseX-80, mouseX+80), random(mouseY-80, mouseY+80), random(10, 40));
}
