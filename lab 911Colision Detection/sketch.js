//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var paddle;
var ball;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  drawPaddle();
  drawBall();

}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5, 50);
  runPaddle();
  runBall();
}

function drawPaddle() {
  paddle = new Paddle(250, 500, 300, 50);
}

function drawBall() {
  ball = new Ball(random(25, 775), 50, 50, 50);
}

function runPaddle() {
  paddle.run();
}

function runBall() {
  ball.run();
}
