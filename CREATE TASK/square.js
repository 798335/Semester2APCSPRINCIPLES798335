class Square {

  //constructs values to pass into the buttons

  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0);
    this.clr = color(random(255), 0, 0);
  }

  //displays the buttons on the screen

  run() {
    this.render();
    this.update();
    this.isColliding();
    this.checkEdges();
  }

  //creates the button with the words in it

  render() {
    fill(this.clr);
    rect(this.loc.x, this.loc.y, 50, 50)
  }

  isColliding(){
    if( this.loc.x + 200 > paddle.loc.x &&
        this.loc.x < paddle.loc.x + paddle.w &&
        this.loc.y + 100 > paddle.loc.y &&
        this.loc.y < paddle.loc.y + paddle.h){
          return true;
        }else{
          return false;
        }
  }

  checkEdges(){
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
    this.vel.limit(7);
    this.vel.add(this.acc);
    this.loc.add(this.vel);

    if(lifeSaver.isColliding()){
      if(this.vel.y > 0){
        lives = lives + 1;
        this.loc.x = random(0, 800);
        this.loc.y = random(0, 800);
      }else if(this.vel.y < 0){
        gameState = 3;
      }
  }
}
}
