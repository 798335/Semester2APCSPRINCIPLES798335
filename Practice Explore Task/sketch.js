//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var snake;
var monsters = [];
var food;
var gameState = 1;
var buttonStart;
var x = 0;
var numOfMonsters, monButColor;
var startButton, monster1Button, monster2Button, monster3Button;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(114, 100, 100);
  loadObjects();
}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);
  runObjects();
  if(gameState === 1){
    startGame();
  }else if(gameState === 2){
    gameMode();
  }else if(gameState === 3){
    endGame();
  }
}

function makeButtons(){
  monButColor = color(0);
  startButton = new Button(300, 300, 'START', color(random(255), random(255), random(255)));
  //replayButton = new Button(100, 100, 'REPLAY');
  monster1Button = new Button(100, 550, '1', monButColor);
  monster2Button = new Button(300, 550, '2', monButColor);
  monster3Button = new Button(500, 550, '3', monButColor);
}

function startGame(){
  clear();
  fill(0);
  makeButtons();
  startButton.run();
  monster1Button.run();
  monster2Button.run();
  monster3Button.run();
  if(mouseIsPressed &&
    mouseX > 100 &&
    mouseX < 250 &&
    mouseY > 550 &&
    mouseY < 700){
      numOfMonsters = 1;
      monButColor = color(100, 100, 100);
      monster1Button.run();
    }
  if(mouseIsPressed &&
      mouseX > 300 &&
      mouseX < 450 &&
      mouseY > 550 &&
      mouseY < 700){
        numOfMonsters = 2;
        monButColor = color(50, 50, 50);
        monster2Button.run();
      }
  if(mouseIsPressed &&
        mouseX > 500 &&
        mouseX < 650 &&
        mouseY > 550 &&
        mouseY < 700){
          numOfMonsters = 3;
          monButColor = color(50, 50, 50);
          monster3Button.run();
        }
  fill(255, 105, 180);
  textSize(75);
  text('SKINNY SNAKE', 150, 150);
  textSize(15);
  text('Welcome to Skinny Snake! The snake is the pink square. Try to eat the red food by moving the snake ', 60, 225);
  text('with the arrow keys. Everytime you eat the food, your snake will grow a little bit. But NOT ', 60, 250);
  text('too much because it is a SKINNY SNAKE! If the snake goes off the screen the game will end. Good luck!', 60, 275)
  text("Choose how many monsters you would like in your game.", 250, 500);
  if(mouseIsPressed &&
    mouseX > 300 &&
    mouseX < 450 &&
    mouseY > 300 &&
    mouseY < 450){
      gameState = 2;
    }
}

function gameMode(){
  fill(0);
  checkTangled();
}

function endGame(){
  clear();
  fill(0);
  rect(100, 500, 600, 200);
  fill(255);
  textSize(50);
  text("GAME OVER", 250, 600);
}

function loadObjects(){
    snake = new Snake(20, 20, 15, 15);
    food = new Food(random(100, 700), random(100, 700));
    for(var i = 0; i < numOfMonsters + 1; i++){
      monsters[i] = new Monster(random(50, 750), 50);
    }
}

function runObjects(){
  snake.run();
  food.run();
  for(var i = 0; i < monsters.length; i++){//draws the particles
    monsters[i].run();
  }
}

function checkTangled(){
  if(snake.tangled() === true){
    gameState = 3;
  }
}
