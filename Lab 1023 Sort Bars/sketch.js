//  Gabby Melamed
// 	Lab 1023 Sort Bars
//  This is a comment
//  The setup function function is called once when your program begins

var list = [];
var bars = [];
var numBars, barWidth;
function loadList(n){
  for(var i = 0; i < n; i++){//keeps adding numbers onto the array until i < n, the number of items in the array
    list.push(int(random(0, 10)));//pushes a random integer between 0 and 1000 into the array
  }
}//function generates a random array with as many numbers as the input is

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255, 182, 193);

  barWidth = 20;
  numBars = width/barWidth;

  loadList(numBars);//loads an unsorted list of numbers
  loadBars(numBars);//displays bars on the screen with heights that are in order of the array of numbers
  console.log(list);
  frameRate(5);
}

function draw() {
  background(255, 182, 193);
  runBars();//makes the bars appear
  bubbleSort();//sorts the bars and the list
}

function bubbleSort() {
    for(var j = 0; j < list.length; j++){
      if(list[j] > list[j + 1]){
        swap(list, j, j + 1);//swaps numbers in the list
        clear();
        background(255, 182, 193);
        swap(bars, j, j + 1);//swaps bars
        loadBars(numBars);
        runBars();
        }
    }
}

function loadBars(num) { //prepares the bars to show up
for(var i = 0; i < num; i++){
  var barHeight = list[i] * 80;
  var xpos = 0 + barWidth * i;
  bars[i] = new Bar(xpos, barWidth, barHeight);
  }
}

function runBars() { //makes the bars show up
  for(var i = 0; i < bars.length; i++){
    bars[i].render();
  }
}

function swap(list, a, b) {//swaps two values in array
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}
