class Bar {

  constructor(x, w, h){
    this.x = x;
    this.w = w;
    this.h = h;
    this.y = 800 - this.h;
    this.clr = color( 255, 105, 180);
  }

  run() {
    this.render();

  }

  render() {
    fill(this.clr);
    rect(this.x, this.y, this.w, this.h);
  }

}
