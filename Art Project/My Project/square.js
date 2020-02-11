//  Gabby Melamed
// 	Art Project

class Square {

  //constructs values to pass into the squares

  constructor(x, y, clr){
    this.loc = createVector(x, y);
    this.clr = clr;
  }

  //displays the buttons on the screen

  run() {
    this.render();
  }

  //creates the button with the words in it

  render() {
    fill(this.clr);
    rect(this.loc.x, this.loc.y, random(25, 100), random(25, 100))
  }

}
