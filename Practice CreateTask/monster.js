//  Gabby Melamed
// 	Practice Create Task
class Monster{////////////////////////////////start of Monster class
  constructor(x, y, dx, dy){//constructors for the Monster class
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0);
    this.clr = color(255, 0, 0);
  }

  run(){//calls the Monster functions
    this.render();
    this.update();
    this.checkEdges();
  }

  update(){
    this.vel.add(this.acc);//adds acceleration to velocity
    this.vel.limit(7);//limites how fast the particles can go
    this.loc.add(this.vel);//makes the particles move
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 50, 50);//creates the monsters
  }

  checkEdges(){//makes monsters bounce if they hit the edge of the screen
    if(this.loc.x > width ||
      this.loc.x < 0){
        this.vel.x = -this.vel.x;
      }
      if(this.loc.y > height ||
      this.loc.y < 0){
        this.vel.y = -this.vel.y;
    }
  }
}//////////////////////////////////end of Monster class
