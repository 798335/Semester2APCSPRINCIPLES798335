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

    for(var i = 0; i < monsters.length; i++){

    }
    if(monster.loc.x + 25 >= snake.head.x &&
        monster.loc.x - 25 <= snake.head.x + 15 &&
        monster.loc.y + 25 >= snake.head.y &&
        monster.loc.y - 25 <= snake.head.y + 15){
          lives = lives - 1;
          console.log(lives);
          return false;
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
