//  Gabby Melamed
// 	Lab 128 Art One
class Boid {
  constructor(x, y, vx, vy, ax, ay){
    this.loc = createVector(x, y);
    this.vel = createVector(vx, vy);
    this.acc = createVector(ax, ay);
    this.clr = color(5, 5, 5);
  }

  run(){
    this.update();
    this.checkEdges();
    this.render();
  }

  update(){
    // this.acc = p5.Vector.sub(planet.loc, this.loc);
    // this.acc.normalize();
    // this.acc.mult(0.1);

    this.vel.limit(3);//limits the velocity
    this.vel.add(this.acc);//adds acceleration to velocity
    this.loc.add(this.vel);//adds velocity to location
  }

  checkEdges(){

  }

  render(){

  }
}
