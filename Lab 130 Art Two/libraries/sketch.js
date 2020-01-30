//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  fill(255, 255, 255);
  rect(185, 200, 50, 50);
  ellipse(100, 100, 50, 50);
  ellipse(300, 100, 50, 50);
  fill(255, 0, 0);
  arc(210, 300, 200, 75, 0, PI);
  fill(0 , 0, 0);
  ellipse(100, 100, 25, 25);
  ellipse(300, 100, 25, 25);
}
