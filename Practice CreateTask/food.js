//  Gabby Melamed
// 	Practice Create Task
class Food {//////////////////////////end of Food class
  constructor(x, y){//constructors for food class
    this.food = createVector(x, y)
    this.w = 30;
    this.h = 30;
    this.clr = color(255, 0, 0);
  }

  run() {//calls the Food functions
    this.render();
    this.update();
  }

  render() {//creates the food
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
        this.food.x = random(100, 700);//moves the food once the snake hits it
        this.food.y = random(100, 700);
        this.render();
        snake.loadBody();
      }
    }

  }////////////////////////////end of Food class
