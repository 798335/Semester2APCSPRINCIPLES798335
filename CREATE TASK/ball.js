//  Gabby Melamed
// 	09/16/19
class Ball {

  //constructs values to pass into the balls

  constructor(x, y, dx, dy){
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.acc = createVector(0,0);
   this.clr = color(random(255), random(255), random(255));

  }

//runs all of the ball functions

  run(){
    this.render();
    this.checkedges();
    this.update();
  }

//makes each ball bounce when it reaches any edge of the canvas
//changes x velocity to the opposite sign when it hits the left or right
//changes y velocity to the opposite sign when it hits the top or bottom

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

//deletes a ball out of the array everytime it hits the paddle coming down only
//increases the score by 1 when the ball hits the paddle

  update(){
    //makes the velocity have a limit so the balls don't get too fast

    this.vel.limit(7);
    this.vel.add(this.acc);
    this.loc.add(this.vel);

    //if the balls are colliding the paddle at the top, they will dissappear
    //if they collide at the bottom, the balls should dissappear and more balls will appear

    for(var i = balls.length - 1; i >= 0; i--) {
      if(balls[i].isColliding() && this.vel.y > 0) {
          balls.splice(i, 1);
          score = score + 1;
        }else if(balls[i].isColliding() && this.vel.y < 0) {
          loadBalls(20);
          lives = lives - 1;
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

//makes the ball know when it hits the paddle

  isColliding() {
    if( this.loc.x + 13 > paddle.loc.x &&
        this.loc.x - 13 < paddle.loc.x + paddle.w &&
        this.loc.y + 13 > paddle.loc.y &&
        this.loc.y - 13 < paddle.loc.y + paddle.h)
        {
          //this.vel.y = -this.vel.y;
          return true;

        } else {
          return false;
        }
      }

//creates the ball

  render(){
    fill(this.clr);
    ellipse (this.loc.x, this.loc.y, 26, 26);
  }

}//  +++++++++++++++++++++++++++++++++++  End Ball Class
