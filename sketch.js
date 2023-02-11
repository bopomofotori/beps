var t;
var c1, c2;

function setup() {
  createCanvas(500, 500);
  stroke(0, 20);
  t = 0;
   // Define colors
  c1 = color(254, 50, 2);
  c2 = color(255);
  setGradient(c1, c2);
  // frameRate(80);
}

//set gradient 
function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

//draw moving green rectangles
function draw() {
   fill(160, 229, 1, 70);
  var x5 =  width * noise(t+500);
  var y5 = height * noise(t+40);
 rect (x5, y5, 40, 40);
  
  
//draw white beziers 
   noFill();
  var x1 = width * noise(t + 100);
  var x2 = width * noise(t + 55);
  var x3 = width * noise(t + 135);
  var x4 = width * noise(t + 250);
  var y1 = height * noise(t + 65);
  var y2 = height * noise(t + 65);
  var y3 = height * noise(t + 400);
  var y4 = height * noise(t + 125);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t += 0.006;

  // clear the background every 1800 frames using mod (%) operator
  if (frameCount % 1800 == 0) {
    background(c1);
  }
 
   //background white random circles  
  push()
  fill(40, 20, 250);
  let x6 = random (width);
  let y6 = random (height);
  circle(x6, y6, 2);
  pop()
  
//pink moving rectangles
  push();
 fill(245, 28, 161, 50);
  var x7 =  400 * noise(t+500);
  var y7 = height * noise(t+30);
  rect (mouseX, y7, 100, 100);
  pop();
  
//white big circle
  push();
  noStroke();
 fill(255, 255, 255, 10);
  circle (mouseX, mouseY, 190);
  pop();
  
 //small blue rectangles   
  push();
  noStroke();
  fill(20, 24, 250,15);
  rect (mouseX, mouseY, 50, 80);
  pop();
}