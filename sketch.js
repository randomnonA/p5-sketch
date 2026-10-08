let bgColor;
let canvasWidth = 400;
let canvasHeight = 400;
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  bgColor = color (0, 255, 0);
  background(bgColor);
}

function draw() {
  fill('orange');
  ellipse(canvasWidth/2, canvasheight/2, 50, 50);
}