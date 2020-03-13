class Ship {
  constructor(x, y, dx, dy){//adds parameters to the ship(s)
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.acc = createVector(0,0);
   this.angle = 0;
   this.clr = color(random(255), random(255), random(255));
  }

  run(){//runs all of the ship functions
    this.checkedges();
    this.update();
    this.render();
  }

  checkedges(){//if the ship(s) hit the edge of the screen, they will bounce the opposite way back onto the scre
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;

    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0){
      this.vel.x = -this.vel.x;

    }
    if(this.loc.y > height){
      this.vel.x = -this.vel.x;
    }
  }

update(){
  this.angle = this.acc.heading() + PI/2;//makes the ship point towards the planet

  var distToPlanet;
  distToPlanet = this.loc.dist(planet.loc);//finds the distance from the ship(s) to the planet

  this.acc = p5.Vector.sub(planet.loc, this.loc);
  this.acc.normalize();
  this.acc.mult(0.1);

  this.vel.limit(3);//limits the velocity
  this.vel.add(this.acc);//adds acceleration to velocity
  this.loc.add(this.vel);//adds velocity to location



   if(distToPlanet < 100){//when the ship(s) get a certain disance to the planet, the planet disappears and relocates
     planet.loc.x = random(100, 700);
     planet.loc.y = random(100, 700);
   }

}

render(){
  fill(this.clr);//fills the color of the ship(s)
  push();
    translate(this.loc.x, this.loc.y);//makes ship(s) point to planet
    rotate(this.angle);
    triangle(-5, 8, 5, 8, 0, -8);
  pop();
}

}
