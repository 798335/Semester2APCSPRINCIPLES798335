class Button {

  constructor(x, y, msg){//constructs values to pass into the buttons
    this.loc = createVector(x, y);
    this.msg = msg;
    this.clr = color(random(255), random(255), random(255));
  }

  run() {//displays the buttons on the screen
    this.render();
  }

  render() {//creates the button with the words in it
    fill(this.clr);
    rect(this.loc.x, this.loc.y, 100, 100)
    fill(255, 0, 0);
    textSize(20);
    text(this.msg, this.loc.x, this.loc.y);
  }

}/////////end of Button class
