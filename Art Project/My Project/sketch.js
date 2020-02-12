//Gabby Melamed
//Art Project

var squares = [];//declares the squares array
function setup() {//sets up the canvas
	createCanvas(windowWidth, windowHeight);
	background('white');
}

function draw() {//runs 30 times per second
	background(255, 255, 255, 20);//refills the backgriund everytime to make it transparent
	textSize(25);
	text('If you do not hold down the up arrow, bubbles will follow your mouse around the screen.', 300, 650);
	text('Hold down the up arrow to draw squares that follow your mouse on the screen. The colors will change every 10 seconds', 300, 700);//displays the directions on the screen
	fill(random(0, 20), random(0, 20), random(0, 20), random(10, 100));//color of the bubbles
	noStroke();
	ellipse(random(mouseX-80, mouseX+80), random(mouseY-80, mouseY+80), random(10, 40));//creates random sized bubbles that follow the mouse
	drawSquares();//calls the drawSquares function
}

function drawSquares(){//makes squares appear and follow the mouse
	var time = second();//sets the time variable to the second function which counts seconds from 0-59 and after 59, goes back to 0
	var c;//declare square color variable

//+++++++++++++++++++++++the color range of the squares will change at different second intervals

	if (time < 10){
		c = color(random(0, 255), 0, 0);
	}else if(time >= 10 && time < 20){
		c = color(random(200, 255), random(100, 140), 0);
	}else if(time >= 20 && time < 30){
		c = color(random(200, 255), random(200, 255), 0);
	}else if(time >=30 && time < 40){
		c = color(0, random(0, 255), 0);
	}else if(time >=40 && time < 50){
		c = color(0, 0, random(0, 255));
	}else if(time >=50 && time <= 59){
		c = color(random(100, 150), 0, random(100, 255));
	}

//+++++++++++++++++++++

	if(keyIsPressed === true && keyCode === UP_ARROW){//when the up arrow key is pressed, sqaures will follow the mouse
		for(var i = 0; i < 5; i++){//creates the squares
    	squares[i] = new Square(random(mouseX-80, mouseX+80), random(mouseY-80, mouseY+80), c);//squares follow the mouse within a certain range and have a range of color depending on the time
  	}
		for(var i = 0; i < squares.length; i++){//makes the squares appear
    	squares[i].run();
		}
	}
}
