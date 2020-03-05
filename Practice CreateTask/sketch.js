//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var snake;
//var monster;
var monsters = [];
var food;
var gameState = 1;
var buttonStart;
var x = 0;
var numOfMonsters, monButColor;
var startButton, monster1Button, monster2Button, monster3Button;
var lives = 50;
console.log(lives);
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(114, 100, 100);
  loadObjects(2);
}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);
  runObjects();
  fill(255, 105, 180);
  textSize(15);
  text('You have ' + lives + ' lives.', 50, 50);
  if(lives === 0){
    gameState = 3;
  }
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
  startButton = new Button(300, 500, 'START', color(random(255), random(255), random(255)));
  replayButton = new Button(100, 100, 'REPLAY');
}

function startGame(){
  clear();
  fill(0);
  makeButtons();
  startButton.run();
  fill(255, 105, 180);
  textSize(75);
  text('SKINNY SNAKE', 150, 150);
  textSize(15);
  text('Welcome to Skinny Snake! The snake is the pink square. Try to eat the red food by moving the snake ', 60, 225);
  text('with the arrow keys. Everytime you eat the food, your snake will grow a little bit. But NOT ', 60, 250);
  text('too much because it is a SKINNY SNAKE! If the snake goes off the screen the game will end.', 60, 275)
  text("One monster will appear on the screen. If you hit the edge, another monster will appeat.", 60, 300);
  text('When the snake goes off the screen, the second monster will momentarily stop until the snake goes back on the screen.', 60, 325);
  text('Depending on how long the snake is in contact with the monster, it will loose a different amount of lives.', 60, 350);
  text('Once the lives gets to 0, the game will end. Good luck!', 60, 375);
  if(mouseIsPressed &&
    mouseX > 300 &&
    mouseX < 450 &&
    mouseY > 500 &&
    mouseY < 650){
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
  //replayButton.run();
}

function loadObjects(x){
  snake = new Snake(20, 20, 15, 15);
  food = new Food(random(100, 700), random(100, 700));
  monster = new Monster(random(50, 750), 25, 2, 2);
}

function runObjects(){
  snake.run();
  food.run();
  monster.run();
}

function checkTangled(){
  if(snake.tangled() === true){
    gameState = 3;
  }
}
