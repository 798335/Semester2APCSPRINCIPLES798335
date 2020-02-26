class Monster{
  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0);
    this.clr = color(255, 0, 0);
  }
}
