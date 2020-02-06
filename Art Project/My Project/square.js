//  Gabby Melamed
// 	Art One

class Square {

  //constructs values to pass into the buttons

  constructor(x, y){
    this.loc = createVector(x, y);
    this.clr = color(random(255), random(255), random(255));
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
