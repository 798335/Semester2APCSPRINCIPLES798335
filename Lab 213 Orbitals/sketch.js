//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadParticles(6);

}

//  The draw function is called @ 30 fps
function draw() {
  background(255, 255, 255, 10);
  for(var i = 0; i < particles.length; i++){
    particles[i].run();
  }
}

function loadParticles(x){
  for(var i = 0; i < x; i++){
    particles[i] = new Particle(random(10, 700), random(10, 700))
  }
}
