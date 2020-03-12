// eettlin
// March 10, 2020

class Ball{
 //  Ball Properties  +++++++++++++++++++++++++++++++++++++++++++++
 constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0.016);
    //this.clr = this.getColor();//random(255), random(255),random(255));
    this.w = 15;
    this.id = id;
    if(this.id < 0) {this.w = 50;}
 }

 // getColor(){
 //   if(this.id%2 === 0) {
 //
 //   }else{
 //
 //   }
 // }

 run(){
   this.checkEdges();
 }

  checkEdges(){//+++++++++++++++++++++++++++++++++++++++++++++++++++
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
      this.loc.y = height-2;
    }
     this.update();
  } //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  update(){//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var distToMainBall;

    this.vel.add(this.acc);
    this.vel.limit(5);
    this.loc.add(this.vel);
    this.render();

    this.removeBall();
  }//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 render(){
  //  **************************************************************
   if(this.id < 0){
    //mainBall === blue
    fill(0,0,255)
    c = 'blue';
  }else if(this.id%2 === 0){
     //green
     fill(0,255,0);
     c = 'green';
   }else{
     // red
     fill(255,0,0);
     c = 'red';
   }
   ellipse(this.loc.x, this.loc.y, this.w, this.w);
 }//***************************************************************

 isColliding(){//detects when the balls hit the paddle
   if(this.loc.x > paddle.loc.x &&
   this.loc.x < paddle.loc.x + paddle.w &&
  this.loc.y > paddle.loc.y &&
  this.loc.y < paddle.loc.y + paddle.h){
    return true;
  }else{
    return false
  }
 }

 removeBall(){
   for(var i = balls.length - 1; i > 0; i--){//removes balls from the array if they hit the paddle
     if(balls[i].isColliding() && this.vel.y > 0 && c === 'green'){
       balls.splice(i, 1);
     }else if(balls[i].isColliding() && this.vel.y < 0 && c === 'red'){
       balls.splice(i, 1);
     }
   }
 }
}//  end Ball class
