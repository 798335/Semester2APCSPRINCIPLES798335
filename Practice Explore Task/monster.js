class Monster{
  constructor(x, y){
    this.loc = createVector(x, y);
    this.vel = createVector(0, 0);
    //this.acc = createVector(0,0);
    this.clr = color(255, 0, 0);
  }

  run(){
    this.render();
  }

  // update(){
  //   this.vel.add(this.acc);//adds acceleration to velocity
  //   this.vel.limit(7);//limites how fast the particles can go
  //   this.loc.add(this.vel);//makes the particles move
  // }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 50, 50);//creates the particles
  }
}
