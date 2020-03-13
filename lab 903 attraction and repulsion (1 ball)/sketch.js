//  Gabrielle Melamed
// 09/03
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []; //declares array
var mainBall; //declares the main ball
//var mainBall2;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);

  loadBalls(200);

}


function draw() {
background(5, 5, 5, 60); //makes the background less transparent
  runBalls();
}

function loadBalls(x){
  mainBall = new Ball(random(width/2), random(height/2), random (-2,2), random(-2, 2), 1); //add main ball
  //mainBall2 = new Ball(random(width/2), random(height/2), random (-2,2), random(-2, 2), 1); //add 2nd main ball
  for(var i = 0; i < x; i++){
    balls[i] = new Ball(random(width), random(height), random(-5,5), random(-5,5), i + 3);
  }
}

function runBalls(){
  mainBall.run();
  //mainBall.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
}
}
