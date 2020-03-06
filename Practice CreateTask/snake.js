//  Gabby Melamed
// 	Practice Create Task
var monster2 = 0;//declare 2nd monster equal to 0
class Snake {////////////////////////////////////start of Snake class
  constructor(x, y, w, h) {//constructor function for the snake
    this.head = createVector(x, y);
    this.w = w;
    this.h = h;
    this.body = [];//declares body array
    this.vel = createVector(0, 0);//snake starts from rest
  }

  run(){//calls the Snake class functions
    this.renderhead();
    this.update();
    this.checkEdges();
  }

  loadBody(){
        this.body.push(createVector(this.head.x + 15, this.head.y + 15));//adds a body segment to the snake when it eats the food
      }

  renderhead(){//creates the snake head
    fill(255, 97, 181);
    rect(this.head.x, this.head.y, this.w, this.h);
  }

  renderbody(){//renders the snake body segments
    fill(255, 97, 181);
    for(var i = 0; i < this.body.length; i++){
      rect(this.body[i].x, this.body[i].y, this.w, this.h);
    }
  }

  update() {
    this.keyReleased();//calls the keyReleased function

    for(var i = this.body.length - 1; i >= 0; i--){//makes the body segments follow behind each other
      if (i === 0){
      this.body[i].x = this.head.x;
      this.body[i].y = this.head.y;
    }else if(i > 0){
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }
      //this.renderbody();
    }
    this.head.add(this.vel);//adds velocity to the head
    this.renderbody();
  }

  tangled(){//for loop that checks to see where each segment in the array is;
    for(var i = 1; i < this.body.length; i++){
      if(this.head.x == this.body[i].x && this.head.y == this.body[i].y){
        return true;
      }
    }
  }

  keyReleased(){//makes arrow keys work
  if(keyCode === UP_ARROW){//up arrow makes snake go up
    this.vel.x = 0;
    this.vel.y = -5;
  }
  if(keyCode === DOWN_ARROW){//down arrow makes snake go down
    this.vel.x = 0;
    this.vel.y = 5;
    }
  if(keyCode === LEFT_ARROW){//left arrow makes snake go left
    this.vel.x = -5;
    this.vel.y = 0;
  }
if(keyCode === RIGHT_ARROW){//right arrow makes snake go right
  this.vel.x = 5;
  this.vel.y = 0;
    }
  }

  checkEdges(){//checks if the snake falls off the screen
    if(this.head.x + 15 > width || this.head.x < 0){//if the snake goes off the screen, text on the screen will tell the player they need to come back on the screen
        monster2 = new Monster(400, 750, 2, 2);//creates a 2nd monster when the snake goes off the screen
        textSize(20);
        fill(255, 105, 180);
        text('You fell of the screen!', 100, 300);
        if(this.vel.x === 5 && this.head.x + 15 > width){
          text('Click the left arrow', 200, 330);
        }if(this.vel.x === -5 && this.head.x < 0){
          text('Click the right arrow', 200, 330);
        }
      }
    if(this.head.y + 15 > height || this.head.y < 0){//if the snake goes off the screen, text on the screen will tell the player they need to come back on the screen
        monster2 = new Monster(400, 750, 2, 2);//creates a 2nd monster when the snake goes off the screen
        textSize(20);
        fill(255, 105, 180);
        text('You fell of the screen!', 100, 300);
        if(this.vel.y === 5 && this.head.y + 15 > height){
          text('Click the up arrow', 200, 330);
        }if(this.vel.y === -5 && this.head.y < 0){
          text('Click the down arrow', 200, 330);
        }
      }
      if (monster2 !== 0){//if the snake goes off the screen and the second monster is created, this if statemtn runs the 2nd monster
        monster2.run();
        if(monster2.loc.x + 25 >= snake.head.x &&
            monster2.loc.x - 25 <= snake.head.x + 15 &&
            monster2.loc.y + 25 >= snake.head.y &&
            monster2.loc.y - 25 <= snake.head.y + 15){//decreases the snake's lives when it makes contact with the 2nd monster
              lives = lives - 1;
            }else{
              lives = lives;//keeps the lives the same if the snake doesn't contact the 2nd monster
            }
      }
      if(monster.loc.x + 25 >= snake.head.x &&
          monster.loc.x - 25 <= snake.head.x + 15 &&
          monster.loc.y + 25 >= snake.head.y &&
          monster.loc.y - 25 <= snake.head.y + 15){//decreases the snake's lives if it comes in contact with the 1st monster
            lives = lives - 1;
            return false;
        }
  }
}///////////////////////////end of Snake class
