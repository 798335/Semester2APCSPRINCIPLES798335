//  Gabby Melamed
// 	09/16/19

class Paddle {

  //passes in the values of the paddles

  constructor(x, y, w, h) {
    this.loc = createVector(x, y);
    this.w = w;
    this.h = h;
    //this.loc2 = createVector(w, h);
    this.clr = color(random(255), random(255), random(255));
  }

//shows the paddle on the screen and allows movement

  run() {
    this.render();
    this.update();
  }

//creates the paddle

  render() {
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }

//allows the mouse to move the x location of the paddle

  update() {
    var paddleMouseLoc = createVector(mouseX, 700);
    this.loc = p5.Vector.lerp(this.loc, paddleMouseLoc, 0.09);
  }
}
