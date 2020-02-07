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

class Triangle {
  //constructs values to pass into the buttons

  constructor(x1, y1, x2, y2, x3, y3){
    this.loc1 = createVector(x1, y1);
    this.loc2 = createVector(x2, y2);
    this.loc3 = createVector(x3, y3);
    this.clr = color(random(255), random(255), random(255));
  }


  //displays the buttons on the screen

  run() {
    this.render();
  }


  //creates the button with the words in it

  render() {
    fill(this.clr);
    triangle(this.loc1.x1, this.loc1.y1, this.loc2.x2, this.loc2.y2, this.loc3.x3, this.loc3.y3)
  }

}
