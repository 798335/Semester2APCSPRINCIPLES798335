class Monster{
  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0);
    this.clr = color(255, 0, 0);
  }

  run(){
    this.render();
    this.update();
    this.checkEdges();
  }

  update(){
    this.vel.add(this.acc);//adds acceleration to velocity
    this.vel.limit(7);//limites how fast the particles can go
    this.loc.add(this.vel);//makes the particles move

    if(monster.loc.x >= snake.head.x &&
        monster.loc.x <= snake.head.x &&
        monster.loc.y >= snake.head.y &&
        monster.loc.y <= snake.head.y){
          lives = lives - 1;
          console.log(lives);
          this.monster.x = random(100, 700);
          this.monster.y = random(100, 700);
          this.render();
      }
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 50, 50);//creates the particles
  }

  checkEdges(){
    if(this.loc.x > width || this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y > height || this.loc.y < 0){
      this.vel.y = -this.vel.y
    }
  }

}
