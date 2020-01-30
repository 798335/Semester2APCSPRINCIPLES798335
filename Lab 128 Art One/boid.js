//  Gabby Melamed
// 	Lab 128 Art One
class Boid {
  constructor(x, y, vx, vy){
    this.loc = createVector(x, y);
    this.vel = createVector(vx, vy);
    this.acc = createVector(0, 0);
    this.clr = color(255, 0, 0);
  }

  run(){
    this.update();
    this.render();
    this.checkEdges();
  }

  update(){
    this.vel.limit(3);//limits the velocity
    this.vel.add(this.acc);//adds acceleration to velocity
    this.loc.add(this.vel);//adds velocity to location
  }

  render(){
    for(var i = boids.length - 1; i > 0; i--){
      if(this.loc.dist(boids[i].loc) < 200){
        stroke(this.clr);
        line(this.loc.x, this.loc.y, boids[i].loc.x, boids[i].loc.y);
      }
    }
      // fill(this.clr);
      // ellipse(this.loc.x, this.loc.y, 20, 20);
      // fill(255, 0, 0);
      // line(this.loc.x, this.loc.y, 10, 10);
  }

  checkEdges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
    }
  }

}
