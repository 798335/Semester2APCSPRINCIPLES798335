//  Gabby Melamed
// 	Lab 128 Art One
//  This is a comment
//  The setup function function is called once when your program begins
var boids = [];
//var mainBoid;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBoids(30);
  //rotateBoids();
}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5, 1);//makes black transparent background
  runBoids();//runs the boid function
}

function loadBoids(x){
  for(var i = 0; i < x; i++){//creates the boids
    boids[i] = new Boid(random(0, 800), 400, random(-1, 1), random(-1, 1));
  }
  //mainBoid = ellipse(400, 400, 100, 100);
}

function runBoids(){//runs the boids
  for(var i = 0; i < boids.length; i++){
    boids[i].run();
  }
  //ellipse(boids[i].loc.x, boids[i].loc.y, random(20, 150), random(20, 150))
}

// function rotateBoids(){
//   //fill(this.clr);//fills the color of the ship(s)
//   push();
//   translate(mainBoid.loc.x, mainBoid.loc.y);//makes ship(s) point to planet
//   rotate(PI/2);
//   //triangle(-5, 8, 5, 8, 0, -8);
// pop();
// }
