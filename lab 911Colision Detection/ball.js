//Gabrielle Melmamed
//August 28, 2019

class Ball {
  constructor(x, y, dx, dy){
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.acc = createVector(0,0);
   this.clr = color(random(255), random(255), random(255));
  //this.id = id;

  }

  run(){
    this.checkedges();
    this.update();
    this.render();
    this.isColliding();
  }

  checkedges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
      //this.loc.x = width; //when it hits side, warps to come out of other side
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
      //this.loc.x = 0;

    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
      //this.loc.y = height;//when it hits side, warps to come out of other side
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
      //this.loc.y = 0;

    }


  }
  update(){

    this.vel.limit(5);
     this.vel.add(this.acc);
   this.loc.add(this.vel);


  }

  render(){
    fill(this.clr);
    //if (this.id < 3 ){
      ellipse (this.loc.x, this.loc.y, 26, 26);
    //} else {
    //ellipse(this.loc.x, this.loc.y, 15, 15);
    //}
  }

  isColliding() {
    if(this.loc.x + 13 > paddle.loc.x &&
        this.loc.x - 13 < paddle.loc.x + paddle.w &&
        this.loc.y + 13 > paddle.loc.y &&
        this.loc.y - 13 < paddle.loc.y + paddle.h)
        {
          //return true;
          this.vel.y = -this.vel.y;
        } else {
          this.vel.y = this.vel.y;
          //return false;
        }

  }
}//  +++++++++++++++++++++++++++++++++++  End Ball Class
