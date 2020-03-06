//  Gabby Melamed
// 	Practice Create Task
var snake;//global variables declared
var monsters = [];
var food;
var gameState = 1;
var buttonStart;
var x = 0;
var numOfMonsters, monButColor;
var startButton, monster1Button, monster2Button, monster3Button;
var lives = 50;//declares 50 lives
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(114, 100, 100);
  loadObjects();//calls the load objects function
}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);
  runObjects();
  fill(255, 105, 180);
  textSize(15);
  text('You have ' + lives + ' lives.', 50, 50);//writes a sentence during the game that shows how many lives the user has left
  if(lives === 0){
    gameState = 3;
  }//end the game when the player looses all their lives
  if(gameState === 1){//declares the game states corresponding to the numbers
    startGame();
  }else if(gameState === 2){
    gameMode();
  }else if(gameState === 3){
    endGame();
  }
}

function makeButtons(){//creates the start button
  startButton = new Button(300, 500, 'START', color(random(255), random(255), random(255)));
}

function startGame(){
  clear();
  fill(0);
  makeButtons();
  startButton.run();//makes start button appear on the beginning game screen
  fill(255, 105, 180);
  textSize(75);
  text('SKINNY SNAKE', 150, 150);//game title
  textSize(15);
  text('Welcome to Skinny Snake! The snake is the pink square. Try to eat the red food by moving the snake ', 60, 225);//game instructions
  text('with the arrow keys. Everytime you eat the food, your snake will grow a little bit. But NOT ', 60, 250);
  text('too much because it is a SKINNY SNAKE! If the snake goes off the screen the game will end.', 60, 275)
  text("One monster will appear on the screen. If you hit the edge, another monster will appeat.", 60, 300);
  text('When the snake goes off the screen, the second monster will momentarily stop until the snake goes back on the screen.', 60, 325);
  text('Depending on how long the snake is in contact with the monster, it will loose a different amount of lives.', 60, 350);
  text('Once the lives gets to 0, the game will end. Good luck!', 60, 375);
  if(mouseIsPressed && //when start button is pressed, the game begins
    mouseX > 300 &&
    mouseX < 450 &&
    mouseY > 500 &&
    mouseY < 650){
      gameState = 2;
    }
}

function gameMode(){//gameState while the player is playing
  fill(0);
  checkTangled();//calls the checkTangled function
}

function endGame(){//gameState when the player looses
  clear();
  fill(0);
  rect(100, 500, 600, 200);
  fill(255);
  textSize(50);
  text("GAME OVER", 250, 600);
}

function loadObjects(){//creates the snake, food, and first monster
  snake = new Snake(20, 20, 15, 15);
  food = new Food(random(100, 700), random(100, 700));
  monster = new Monster(random(50, 750), 25, 2, 2);
}

function runObjects(){//runs the snake, food, and first monster
  snake.run();
  food.run();
  monster.run();
}

function checkTangled(){//game ends if the snake's head hits its body
  if(snake.tangled() === true){
    gameState = 3;
  }
}
