//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins

var list = [];
var temp;
var bswaps = 0;
var bcompares = 0;
var iswaps = 0;
var icompares = 0;
var sswaps = 0;
var scompares = 0;

function loadList(n){
  for(var i = 0; i < n; i++){//keeps adding numbers onto the array until i < n, the number of items in the array
    list.push(int(random(0, 100000)));//pushes a random integer between 0 and 1000 into the array
  }
}//function generates a random array with as many numbers as the input is

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadList(100);
  console.log('unsorted list: ' + list);
  bubbleSort();
  console.log('Bubble Sort sorted list: ' + list);
  list = [];
  loadList(100);
  console.log('unsorted list: ' + list);
  insertionSort();
  console.log('Insertion Sort sorted list: ' + list);
  list = [];
  loadList(100);
  console.log('unsorted list: ' + list);
  selectionSort();
  console.log('Selection Sort sorted list: ' + list);


}

//  The draw function is called @ 30 fps
function draw() {

}

function swap(list, a, b) {//swaps two variables
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}

function selectionSort() {
  var time1 = millis();
  for(var i = 0; i < list.length - 1; i++){
  var index = i;
  for(var j = i + 1; j < list.length; j++){
    scompares++;
    if(list[j] < list[index]){
      index = j;
    }
  }
  swap(list, index, i);
  sswaps++;
  var time2 = millis();
  }
  console.log('selection sort compares: ' + scompares);
  console.log('selection sort swaps: ' + sswaps);
  console.log('time for selection sort: ' + (time2 - time1)/1000); //converts time to seconds
}

function insertionSort() {
  var time1 = millis();
  for(var i = 1; i < list.length; i++){
    for(var j = i; j > 0; j--){
      icompares++;
      if(list[j] < list[j - 1]){
        swap(list, j, j - 1);
        iswaps++;
        var time2 = millis();
      }
    }
  }
  console.log('insertion sort compares: ' + icompares);
  console.log('insertion sort swaps: ' + iswaps);
  console.log('time for insertion sort: ' + (time2 - time1)/1000);
}

function bubbleSort() {
  var time1 = millis();
  for (var i = list.length - 1; i > 0; i--){
   for (var j = 0; j < i; j++){
    bcompares++;
     if (list[j] > list[j+1]) {
       swap(list, j, j+1)
       bswaps++;
       var time2 = millis();
     }
   }
 }
 console.log('bubble sort compares: ' + bcompares);
 console.log('bubble sort swaps: ' + bswaps);
 console.log('time for bubble sort: ' + (time2 - time1)/1000);
}
