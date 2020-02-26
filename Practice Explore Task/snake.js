class Snake {
  constructor(x, y, w, h) {
    this.head = createVector(x, y);
    this.w = w;
    this.h = h;
    this.body = [];
    this.vel = createVector(0, 0);
  }

  run() {
    this.renderhead();
    this.update();
    this.checkEdges();
  }

  loadBody(){
        this.body.push(createVector(this.head.x + 15, this.head.y + 15));
      }

  renderhead() {
    fill(255, 97, 181);
    rect(this.head.x, this.head.y, this.w, this.h);
  }

  renderbody() {
    fill(255, 97, 181);
    for(var i = 0; i < this.body.length; i++){
      rect(this.body[i].x, this.body[i].y, this.w, this.h);
    }
  }

  update() {
    this.keyReleased();

    for(var i = this.body.length - 1; i >= 0; i--){
      if (i === 0){
      this.body[i].x = this.head.x;
      this.body[i].y = this.head.y;
    }else if(i > 0){
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }
      //this.renderbody();
    }
    this.head.add(this.vel);
    this.renderbody();
  }

  tangled(){
    //for loop that checks to see where each segment in the array is;
    for(var i = 1; i < this.body.length; i++){
      if(this.head.x == this.body[i].x && this.head.y == this.body[i].y){
        return true;
      }
    }
  }

  keyReleased() {
  if(keyCode === UP_ARROW) {
    this.vel.x = 0;
    this.vel.y = -5;
    //this.head.y = this.head.y - this.h;
  }
  if(keyCode === DOWN_ARROW) {
    this.vel.x = 0;
    this.vel.y = 5;
    //this.head.y = this.head.y + this.h;
    }
  if(keyCode === LEFT_ARROW) {
    this.vel.x = -5;
    this.vel.y = 0;
    //this.head.x = this.head.x - this.w;
  }
if(keyCode === RIGHT_ARROW) {
  this.vel.x = 5;
  this.vel.y = 0;
  //this.head.x = this.head.x + this.w;
    }
  }

  checkEdges() {
    if(this.head.x > 800 ||
      this.head.x < 0 ||
      this.head.y > 800 ||
      this.head.y < 0){
        gameState = 3;
      }
  }
}
