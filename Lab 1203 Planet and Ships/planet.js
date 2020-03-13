//Gabrielle Melmamed
//August 28, 2019

class Planet {
  constructor(x, y, dx, dy){//adds parameters to the planet
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.acc = createVector(0,0);
   this.clr = color(random(255), random(255), random(255));
  }

  run(){//runs all of the planet functions
    this.checkedges();
    this.update();
    this.render();
    }

  checkedges(){//if the planet hits the edge of the screen, it will bounce the opposite way back onto the screen
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

  update(){
    this.vel.limit(5);//limites how fast the planet can move
     this.vel.add(this.acc);//adds acceleration to velocity
   this.loc.add(this.vel);//adds velocity to location


  }

  render(){//creates the planet
    fill(this.clr);
    ellipse (this.loc.x, this.loc.y, 40, 40);
  }

}//  +++++++++++++++++++++++++++++++++++  End Planet Class
