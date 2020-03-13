//  Gabrielle Melamed
// 09/03
//  This is a comment
//  The setup function function is called once when your program begins
var ships = []; //declares array
var planet; //declares the planet
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadObjects(1);//prepares the planet and ship(s)
}


function draw() {
  background(5, 5, 5, 25); //makes the background less transparent
  runObjects();//calls the run objects function
}

function loadObjects(x){
  planet = new Planet(100, 100, random (-2,2), random(-2, 2), 1); //creates a planet
  for(var i = 0; i < x; i++){//creates the ship(s)
    ships[i] = new Ship(100, 200, random(-5,5), random(-5,5), i + 3);
  }
}

function runObjects(){
  planet.run();//makes the planet appear
  for(var i = 0; i < ships.length; i++){//makes the ship(s) appear
    ships[i].run();
}
}
