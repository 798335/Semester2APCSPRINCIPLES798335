
class Food {
  constructor(x, y){
    this.food = createVector(x, y)
    this.w = 30;
    this.h = 30;
    this.clr = color(255, 0, 0);
  }

  run() {
    this.render();
    this.update();
  }

  render() {
    fill(this.clr);
    rect(this.food.x, this.food.y, this.w, this.h);
  }

  update() {
    var i = 0;
//snake vs. food collision

    if(snake.head.x + 15 >= this.food.x &&
        snake.head.x <= this.food.x + this.w &&
        snake.head.y + 15 >= this.food.y &&
        snake.head.y <= this.food.y + this.h){
        this.food.x = random(100, 700);
        this.food.y = random(100, 700);
        this.render();
        snake.loadBody();
      }
    }

  }

//need to keep working
