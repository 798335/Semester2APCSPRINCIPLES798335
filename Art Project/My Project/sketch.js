var squares = [];
//var triangles = [];
function setup() {
	createCanvas(windowWidth, windowHeight);
	background('white');
}

function draw() {
	background(255, 255, 255, 20)
	// fill(random(255), random(0), random(255), random(10, 100));
	// noStroke();
	// ellipse(random(mouseX-80, mouseX+80), random(mouseY-80, mouseY+80), random(10, 40));
	drawSquares();
	//drawTriangles();
}

function drawSquares(){
	var time = second();
	var c;
	console.log(time);
	if (time < 5){
		c = color(random(0, 100), 0, 0);
	}else if(time >= 5 && time < 10){
		c = color(random(100, 255), 0, 0);
	}else if(time >= 10 && time < 15){
		c = color(random(200, 255), random(100, 140), 0);
	}else if(time >= 15 && time < 30){
		c = color(random(200, 255), random(200, 255), 0);
	}else if(time >=30 && time < 40){
		c = color(0, random(0, 255), 0);
	}else if(time >=40 && time < 50){
		c = color(0, 0, random(0, 255));
	}else if(time >=50 && time <= 59){
		c = color(random(100, 150), 0, random(100, 255));
	}

	// for(var i = 0; i < 59; i + 10){
	// 	c = color(random(0, 100 + i), 0, 0)
	// }

	if(keyIsPressed === true && keyCode === UP_ARROW){
		for(var i = 0; i < 5; i++){//creates the ship(s)
    	squares[i] = new Square(random(mouseX-80, mouseX+80), random(mouseY-80, mouseY+80), c);
  	}
		for(var i = 0; i < squares.length; i++){//makes the ship(s) appear
    	squares[i].run();
		}
	}
}

// function drawTriangles(){
// 	if(keyIsPressed === true && keyCode === DOWN_ARROW){
// 		for(var j = 0; j < 5; j++){//creates the ship(s)
//     	triangles[j] = new Triangle(random(mouseX-80, mouseX), random(mouseY-80, mouseY), random(mouseX-40, mouseX), random(mouseY-40, mouseY), random(mouseX-10, mouseX), random(mouseY-10, mouseY));
//   	}
// 		for(var i = 0; i < triangles.length; i++){//makes the ship(s) appear
//     	triangles[j].triangleRun();
// 		}
// 	}
// }
