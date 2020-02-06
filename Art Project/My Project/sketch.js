var squares = [];
function setup() {
	createCanvas(windowWidth, windowHeight);
	background('white');
}

function draw() {
	fill(random(255), random(0), random(255), random(10, 100));
	noStroke();
	ellipse(random(mouseX-80, mouseX+80), random(mouseY-80, mouseY+80), random(10, 40));
	drawSquares();
}

function drawSquares(){
	if(keyIsPressed === true && keyCode === UP_ARROW){
		for(var i = 0; i < 100; i++){//creates the ship(s)
    	squares[i] = new Square(random(mouseX-80, mouseX+80), random(mouseY-80, mouseY+80));
  	}
		for(var i = 0; i < squares.length; i++){//makes the ship(s) appear
    	squares[i].run();
		}
	}
}
