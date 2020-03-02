//  Gabby Melamed
// 	09/16/19
//  This is a comment
//  The setup function is called once when your program begins

//declares all of the global variables

var paddle;
var balls = [];
var moreBalls = [];
var gameState = 1;
var score = 0;
var gameLevel;
var lives = 5;
var buttonEasy;
var buttonMedium;
var buttonHard;
var buttonPlayAgain;
var buttonEndGame;
var buttonInstructions;
var buttonBack;
var numBallsEasy = 5;
var numBallsMedium = 10;
var numBallsHard = 15;

//create canvas and background

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
}

//The draw function is called automatically @ 30 fps
//associates a game screen with a gameState number
//calls a game screen when the gameState = the associated number

function draw() {
  background(5, 5, 5, 50);
  if (gameState === 1){
    startGame();
  } else if(gameState === 2){
    gameMode();
  } else if(gameState === 3){
    endGame();
  }else if(gameState === 4){
    instructions();
  }
}

//start screen of game
//displays buttons with different levels the player can choose from

function startGame() {
  lives = 5;
  clear();
  background(5, 5, 5);
  textSize(90);
  fill(255, 255, 255);
  text('The Paddle Game', 30, 200);

  //displays the buttons that have .run in makeButtons

  makeButtons();

  //sets game level to the level of the button the player pressed on
  //changes the gameState to gameState = 2 which calls the gameMode function

  if(mouseIsPressed) {
    if(mouseX > 120 &&
      mouseX < 220 &&
      mouseY > 600 &&
      mouseY < 700) {
        gameLevel = 'easy';
        gameState = 2;
      }else if(mouseX > 270 &&
      mouseX < 370 &&
      mouseY > 600 &&
      mouseY < 700) {
        gameLevel = 'medium';
        gameState = 2;
      }else if(mouseX > 420 &&
      mouseX < 520 &&
      mouseY > 600 &&
      mouseY < 700) {
        gameLevel = 'hard';
        gameState = 2;
      }

      //when the player presses on the instructions button, the gamescreen changes to the instructions screen

      else if(mouseX > 570 &&
      mouseX < 670 &&
      mouseY > 600 &&
      mouseY < 700) {
        gameState = 4;
      }
    }

    //loads a different amount of balls depending on the game level that is selected

    if(gameLevel === 'easy'){
      loadBalls(numBallsEasy);
    }
    if(gameLevel==='medium'){
      loadBalls(numBallsMedium);
    }
    if(gameLevel==='hard'){
      loadBalls(numBallsHard);
    }
}

//instruction screen
//displays the game instructions

function instructions() {
  clear();
  background(5, 5, 5);
  fill(255,192,203);
  textSize(30);
  text('INSTRUCTIONS', 290, 50);
  textSize(18);
  text('Welcome to The Paddle Game! Your score and lives are displayed in the top left corner.', 50, 100);
  text('The goal of this game is to collect all of the balls on the screen.', 50, 130);
  text('To collect the balls, move the paddle so that that ball(s) land on the paddle.', 50, 160);
  text('When the ball(s) hit the top of the paddle, they will disappear.', 50, 190);
  text('But, do not let the balls hit the bottom of the paddle.', 50, 220);
  text('If they do, the remaining balls on the screen will disappear and more balls will appear.', 50, 250);
  text('You will win the game when you have collected all of the balls on the screen', 50, 280);
  text('Everytime a ball hits the bottom of the paddle, you will lose a life.', 50, 310);
  text('You will start with 5 lives and once your lives = 0, you lose the game.', 50, 340);
  text('After you have won or lost the game, you will have the option to quit or play again.', 50, 370);
  text('Good luck!', 50, 400);

  //displays the back button
  //when the back button is pressed, the gameState = 1 again the screen changes back to the start screen

  buttonBack.run();
  if(mouseIsPressed &&
    mouseX > 570 &&
    mouseX < 670 &&
    mouseY > 450 &&
    mouseY < 550) {
      gameState = 1;
    }
}

//creates all of the buttons
//only runs the buttons that appear in startGame

function makeButtons() {
  buttonEasy = new Button(120, 600, 'EASY');
  buttonMedium = new Button(270, 600, 'MEDIUM');
  buttonHard = new Button(420, 600, 'HARD');
  buttonPlayAgain = new Button(500, 110, 'PLAY AGAIN?');
  buttonEndGame = new Button(200, 110, 'QUIT?');
  buttonInstructions = new Button(570, 600, 'INSTRUCTIONS');
  buttonBack = new Button(570, 450, 'BACK');
  buttonEasy.run();
  buttonMedium.run();
  buttonHard.run();
  buttonInstructions.run();

}

function gameMode(){

    //displays a score in the game screen

    fill(255, 0, 0);
    textSize(35);
    text('score:' + score, 30, 30);
    text('lives:' + lives, 30, 70);

    //drops the balls down from the top and displays the paddle

    runBalls();

    //when all of the balls have been collected for a level, screen switches to gameState = 3

    if (score === balls.length + score) {
      gameState = 3;
    }

    //when all of the lives have been used, screen switches to gameState = 3

    if(lives === 0) {
      gameState = 3;
    }
  }

//the end screen of the game

function endGame() {
    clear();
    background(5, 5, 5);

    //displays buttonPlayAgain and buttonEndGame

    buttonPlayAgain.run();
    buttonEndGame.run();

    //if player collected all of the balls, 'YOU WIN' is displayed on the screen

    if(score === balls.length + score)  {
      textSize(100);
      fill(255, 10, 10);
      text('YOU WIN!!!', 130, 500);
    }

    //if player runs out of lives, 'YOU LOST' is displayed on the screen

    if(lives === 0) {
      fill(255, 0, 0);
      textSize(100);
      text('YOU LOST!', 120, 400);
    }

      //if player pressed buttonPlayAgain, gameState is reset to one and the start screen will appear

      if(mouseIsPressed &&
        mouseX > 500 &&
        mouseX < 600 &&
        mouseY > 110 &&
        mouseY < 210) {
        score = 0;
        gameState = 1;
        balls = [];
        gameLevel = '';
        }

        //if player pressed buttonEndGame, everything on the screen is erased and the screen turns white

      if(mouseIsPressed &&
        mouseX > 200 &&
        mouseX < 300 &&
        mouseY > 110 &&
        mouseY < 210) {
          remove();
        }
}

//creates the paddle and the array of balls

function loadBalls(x) {
  paddle = new Paddle(250, 700, 300, 25);
  for(var i = 0; i < x; i++){
    balls[i] = new Ball(random(0, 800), random(0, 100), random(1, 5), random(1, 5));
  }
}

//displays the paddle and the array of balls

function runBalls(x) {
  paddle.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
