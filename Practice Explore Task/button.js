//  Gabby Melamed
// 	09/16/19

class Button {

  //constructs values to pass into the buttons

  constructor(x, y, msg){
    this.loc = createVector(x, y);
    this.msg = msg;
    this.clr = color(random(255), random(255), random(255));
  }


  //displays the buttons on the screen

  run() {
    this.render();
  }


  //creates the button with the words in it

  render() {
    fill(this.clr);
    rect(this.loc.x, this.loc.y, 150, 150)
    fill(255, 0, 0);
    textSize(20);
    text(this.msg, this.loc.x, this.loc.y);
  }

}
