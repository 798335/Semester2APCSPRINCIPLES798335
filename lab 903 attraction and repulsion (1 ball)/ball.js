//Gabrielle Melmamed
//August 28, 2019

class Ball {
  constructor(x, y, dx, dy, id){
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.acc = createVector(0,0);
   this.clr = color(random(255), random(255), random(255));
   this.id = id;

  }

  run(){
    this.checkedges();
    this.update();
    this.render();
  }

  checkedges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
      this.loc.x = 800; //when it hits side, warps to come out of other side
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
    
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
      this.loc.y = 800;//when it hits side, warps to come out of other side
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
      this.loc.y = height - 2;

    }


  }
  update(){
    var distToMainBall;
    var distToMainBall2;
    if(this.id > 2){
     distToMainBall = this.loc.dist(mainBall.loc);

     if(distToMainBall < 300){
       //add attraction to the ball
       this.acc = p5.Vector.sub(mainBall.loc, this.loc);
       this.acc.normalize();
       this.acc.mult(0.1);
     }
     if(distToMainBall < 200){ // add repulsion to the ball
       this.acc = p5.Vector.sub(this.loc, mainBall.loc);
       this.acc.normalize();
       this.acc.mult(0.5);
     }

     //if(distToMainBall2 < 300){
       //add attraction to the ball
       //this.acc = p5.Vector.sub(mainBall2.loc, this.loc);
       //this.acc.normalize();
       //this.acc.mult(0.1);
     //}
     //if(distToMainBall2 < 200){ // add repulsion to the ball
       //this.acc = p5.Vector.sub(this.loc, mainBall2.loc);
       //this.acc.normalize();
       //this.acc.mult(0.5);
     //}

    }
    this.vel.limit(5);
     this.vel.add(this.acc);
   this.loc.add(this.vel);


  }

  render(){
    fill(this.clr);
    if (this.id < 3 ){
      ellipse (this.loc.x, this.loc.y, 40, 40);
    } else {
    ellipse(this.loc.x, this.loc.y, 15, 15);
  }
  }
}//  +++++++++++++++++++++++++++++++++++  End Ball Class
