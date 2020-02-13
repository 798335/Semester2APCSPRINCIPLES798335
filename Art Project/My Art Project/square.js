//  Gabby Melamed
// 	Art Project

class Square {

  constructor(x, y, clr){//constructs values to pass into the squares (location and color)
    this.loc = createVector(x, y);
    this.clr = clr;
  }

  run() {//runs the methods in the Square class
    this.render();
  }

  render() {//creates the rectangles with random width and height and the chosen location in sketch
    fill(this.clr);
    rect(this.loc.x, this.loc.y, random(25, 100), random(25, 100))
  }
}
