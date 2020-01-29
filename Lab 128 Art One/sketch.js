//  Gabby Melamed
// 	Lab 128 Art One
//  This is a comment
//  The setup function function is called once when your program begins
var boids = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBoids(10);

}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);
  runBoids();
}

function loadBoids(x){
  for(var i = 0; i < x; i++){//creates the ship(s)
    boids[i] = new Boid(random(100, 700), random(100, 700), random(-2, 2), random(-2, 2));
  }
}

function runBoids(){
  for(var i = 0; i < boids.length; i++){//makes the ship(s) appear
    boids[i].run();
  }
}
