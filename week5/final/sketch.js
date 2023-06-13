function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  strokeWeight(1);
  circle(400, 400, 10);
  noFill();
  strokeWeight(1850);
  circle(mouseX, mouseY, 2000);
}