class Particle{
  constructor(x, y){
    this.loc = createVector(x, y);
    this.vel = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
    this.acc = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
    this.rad = random(11, 22);
    // var r = random(255);
    // var g = random(255);
    // var b = random(255);
    this.clr = color(random(255), random(255), random(255));
    //this.fclr = color(random(255), random(255), random(255), 10);
    
  }
}
