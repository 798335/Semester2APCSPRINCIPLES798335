class Ball {

  constructor(x, y, dx, dy){//constructs values to pass into the balls
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.acc = createVector(0,0);
   this.clr = color(random(255), random(255), random(255));
  }

  run(){//runs all of the ball functions
    this.render();
    this.checkedges();
    this.update();
  }

//changes x velocity to the opposite sign when a ball hits the left or right of the screen
//changes y velocity to the opposite sign when a ball hits the top or bottom of the screen
  checkedges(){
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

    this.vel.limit(7);//makes the velocity have a limit so the balls don't get too fast
    this.vel.add(this.acc);//adds acceleration to velocity
    this.loc.add(this.vel);//adds velocity to position

    for(var i = balls.length - 1; i >= 0; i--) {
      if(balls[i].isColliding() && this.vel.y > 0) {
          balls.splice(i, 1);//deletes a ball out of the array everytime it hits the paddle coming down only
          score = score + 1;//increases the score by 1 when the ball hits the top of the paddle
        }else if(balls[i].isColliding() && this.vel.y < 0) {
          loadBalls(20);//if the balls hit the bottom of the paddle, the balls will dissappear and more balls will appear
          lives = lives - 1;//lives will decrease by 1 if a ball hits the bottom of the paddle
        }
}

   //keeps velocity the same for the easiest level
   if(gameLevel === 'easy') {
     this.vel.x = this.vel.x * 1;
     this.vel.y = this.vel.y * 1;
   }

   //makes the balls faster than easy level
   if(gameLevel === 'medium') {
     this.vel.x = this.vel.x * 1.1;
     this.vel.y = this.vel.y * 1.1;
   }

   //makes the balls faster than medium level
   if(gameLevel === 'hard') {
     this.vel.x = this.vel.x * 1.2;
     this.vel.y = this.vel.y * 1.2;
   }
 }

  isColliding() {//detects when a ball hits the paddle
    if( this.loc.x + 13 > paddle.loc.x &&
        this.loc.x - 13 < paddle.loc.x + paddle.w &&
        this.loc.y + 13 > paddle.loc.y &&
        this.loc.y - 13 < paddle.loc.y + paddle.h){
          return true;
        }else{
          return false;
        }
      }

  render(){//creates each ball
    fill(this.clr);
    ellipse (this.loc.x, this.loc.y, 26, 26);
  }

}//////////end of Ball class
