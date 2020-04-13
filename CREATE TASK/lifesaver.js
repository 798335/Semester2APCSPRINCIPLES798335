class LifeSaver {

  constructor(x, y, dx, dy){//constructs values to pass into the lifesavers
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, 0);
    this.clr = color(random(100, 255), 0, 0);
  }

  run() {//runs all of the lifesaver functions
    this.render();
    this.update();
    this.isColliding();
    this.checkEdges();
  }

  render() {//creates each lifesaver
    fill(this.clr);
    rect(this.loc.x, this.loc.y, 50, 50)
  }

  isColliding(){//detects when a lifesaver hits the paddle
    if( this.loc.x + 50 > paddle.loc.x &&
        this.loc.x < paddle.loc.x + paddle.w &&
        this.loc.y + 50 > paddle.loc.y &&
        this.loc.y < paddle.loc.y + paddle.h){
          return true;
        }else{
          return false;
        }
  }

  //changes x velocity to the opposite sign when a lifesaver hits the left or right of the screen
  //changes y velocity to the opposite sign when a lifesaver hits the top or bottom of the screen
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

  update(){

    this.vel.limit(7);//makes the velocity have a limit so the lifesavers don't get too fast
    this.vel.add(this.acc);//adds acceleration to velocity
    this.loc.add(this.vel);//adds velocity to position

    if(lifeSaver1.isColliding()){//enters if lifesaver1 is colliding with the paddle
      if(this.vel.y > 0){//increase lives by 1 if lifesaver1 hits the top of the paddle
        lives = lives + 1;
        this.loc.x = random(0, 800);//lifesaver1 changes location once it collides with the top of the paddle
        this.loc.y = random(0, 800);
      }else if(this.vel.y < 0){//if lifesaver1 hits the paddle from the bottom, the amount of balls will double depending on the game level
        if(gameLevel === 'easy'){
          loadBalls(numBallsEasy * 2);
        }
        if(gameLevel==='medium'){
          loadBalls(numBallsMedium * 2);
        }
        if(gameLevel==='hard'){
          loadBalls(numBallsHard * 2);
        }
      }
    }

    if(gameLevel === 'medium' || gameLevel === 'hard'){//enters if the game level is medium or hard
      if(lifeSaver2.isColliding()){//enters if lifesaver2 is colliding with the paddle
        if(this.vel.y > 0){//increase lives by 1 if lifesaver2 hits the top of the paddle
          lives = lives + 1;
          this.loc.x = random(0, 800);//lifesaver2 changes location once it collides with the top of the paddle
          this.loc.y = random(0, 800);
        }else if(this.vel.y < 0){//if lifesaver2 hits the paddle from the bottom, the amount of balls will double depending on the game level
          if(gameLevel === 'easy'){
            loadBalls(numBallsEasy * 2);
          }
          if(gameLevel==='medium'){
            loadBalls(numBallsMedium * 2);
          }
          if(gameLevel==='hard'){
            loadBalls(numBallsHard * 2);
          }
        }
      }
    }

    if(gameLevel === 'hard' && lifeSaver3.isColliding()){//enters if lifesaver3 is colliding with the paddle and the game level is hard
      if(this.vel.y > 0){//increase lives by 1 if lifesaver3 hits the top of the paddle
        lives = lives + 1;
        this.loc.x = random(0, 800);//lifesaver3 changes location once it collides with the top of the paddle
        this.loc.y = random(0, 800);
      }else if(this.vel.y < 0){//if lifesaver3 hits the paddle from the bottom, the amount of balls will double depending on the game level
        if(gameLevel === 'easy'){
          loadBalls(numBallsEasy * 2);
        }
        if(gameLevel==='medium'){
          loadBalls(numBallsMedium * 2);
        }
        if(gameLevel==='hard'){
          loadBalls(numBallsHard * 2);
        }
      }
    }

  }
}/////////end of lifesaver class
