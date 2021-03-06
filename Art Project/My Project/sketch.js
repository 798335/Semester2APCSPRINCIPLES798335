//Gabby Melamed
//Art Project

var squares = [];//declares the squares array
var c;//declare color variable
function setup() {//sets up the canvas
	createCanvas(windowWidth, windowHeight);
	background('white');
}

function draw() {//runs 30 times per second
	background(255, 255, 255, 20);//refills the backgriund everytime to make it transparent
	textSize(25);// size of the text
	fill(0);//color of text (black)
	text('If you do not hold down the up arrow, bubbles will follow your mouse around the screen.', 300, 650);
	text('Hold down the up arrow to draw rectangles that follow your mouse on the screen. The colors will change every 10 seconds.', 300, 700);//displays the directions on the screen
	drawSquares();//calls the drawSquares function
	fill(c);
	noStroke();
	ellipse(random(mouseX-80, mouseX+80), random(mouseY-80, mouseY+80), random(10, 40));//creates random sized bubbles that follow the mouse
}

function drawSquares(){//makes squares appear and follow the mouse
	var time = second();//sets the time variable to the second function which counts seconds from 0-59 and after 59, goes back to 0

//+++++++++++++++++++++++the color range of the squares will change at different second intervals

	if (time < 10){
		c = color(random(0, 255), 0, 0);//red
	}else if(time >= 10 && time < 20){
		c = color(random(200, 255), random(100, 140), 0);//orange
	}else if(time >= 20 && time < 30){
		c = color(random(200, 255), random(200, 255), 0);//yellow
	}else if(time >=30 && time < 40){
		c = color(0, random(0, 255), 0);//green
	}else if(time >=40 && time < 50){
		c = color(0, 0, random(0, 255));//blue
	}else if(time >=50 && time <= 59){
		c = color(random(100, 150), 0, random(100, 255));//purple
	}

//+++++++++++++++++++++++++++++++++

	if(keyIsPressed === true && keyCode === UP_ARROW){//when the up arrow key is pressed, sqaures will follow the mouse
		for(var i = 0; i < 5; i++){//creates the squares
    	squares[i] = new Square(random(mouseX-80, mouseX+80), random(mouseY-80, mouseY+80), c);//squares follow the mouse within a certain range and have a range of color depending on the time
  	}
		for(var i = 0; i < squares.length; i++){//makes the squares appear
    	squares[i].run();//calls the run method in the square class
		}
	}
}
