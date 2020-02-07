var squares = [];
var triangles = [];
function setup() {
	createCanvas(windowWidth, windowHeight);
	background('white');
}

function draw() {
	background(0, 0, 0, 5)
	fill(random(255), random(0), random(255), random(10, 100));
	noStroke();
	ellipse(random(mouseX-80, mouseX+80), random(mouseY-80, mouseY+80), random(10, 40));
	drawSquares();
	drawTriangles();
}

function drawSquares(){
	if(keyIsPressed === true && keyCode === UP_ARROW){
		for(var i = 0; i < 5; i++){//creates the ship(s)
    	squares[i] = new Square(random(mouseX-80, mouseX+80), random(mouseY-80, mouseY+80));
  	}
		for(var i = 0; i < squares.length; i++){//makes the ship(s) appear
    	squares[i].run();
		}
	}
}

function drawTriangles(){
	if(keyIsPressed === true && keyCode === DOWN_ARROW){
		for(var i = 0; i < 5; i++){//creates the ship(s)
    	triangles[i] = new Triangle(random(mouseX-80, mouseX+80), random(mouseY-80, mouseY+80), random(mouseX-40, mouseX+40), random(mouseY-40, mouseY+40), random(mouseX-10, mouseX+10), random(mouseY-10, mouseY+10));
  	}
		for(var i = 0; i < triangles.length; i++){//makes the ship(s) appear
    	triangles[i].run();
		}
	}
}
