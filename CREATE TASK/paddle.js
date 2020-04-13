class Paddle {

  constructor(x, y, w, h) {//passes in the values of the paddles
    this.loc = createVector(x, y);
    this.w = w;
    this.h = h;
    this.clr = color(random(255), random(255), random(255));
  }

  run() {//shows the paddle on the screen and allows movement
    this.render();
    this.update();
  }

  render() {//creates the paddle
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }

  update() {//allows the mouse to move the x location of the paddle
    var paddleMouseLoc = createVector(mouseX, 700);
    this.loc = p5.Vector.lerp(this.loc, paddleMouseLoc, 0.09);
  }
}/////end of paddle class
