let bgColor;
let canvasWidth = 700;
let canvasHeight = 700;
let rectSize = 450;
let sColor = "#ffffff";
let hColor = "#000000";
let oColor = "#BA1E1E";
let nColor = "#BA621E";
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  bgColor = color (70, 130, 189);
  background(bgColor);
}

function draw() {
  fill(sColor);
  stroke(0);
  ellipse(canvasWidth/2, canvasHeight/2, 500, 500);
  fill(hColor);
  rect(canvasWidth/2 - 25, 0, 50, 75);
  fill(hColor);
  rect(canvasWidth/2 - 45, 50, rectSize/5 , rectSize/9);
  fill(oColor);
  rect(canvasWidth/2 - 25, 25, rectSize/9, rectSize/18);
  fill(hColor);
  strokeWeight(20);
  stroke(243, 124, 321);
  ellipse(canvasWidth/2 - 100, canvasHeight/2 - 150, 50, 50);
  fill(hColor);
  stroke(200);
  ellipse(canvasWidth/2 + 90, canvasHeight/2 - 100, 50, 50);
  line(400, 550, 590, 300);
  rotate(QUARTER_PI / 2);
  fill(nColor);
  stroke(0);
  strokeWeight(2);
  triangle(525, 375, 550, 225, 275, 275);
}