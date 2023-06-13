let img;
let crumbs = [];

class crumb {
  constructor (x, y){
    this.x = x,
    this.y = y,
    this.d = 10
  }
  draw(){
    push();
    fill("red");
    strokeWeight(1);
    circle(this.x, this.y, this.d);
    pop();
  }
}
function preload(){
  img = loadImage('https://razerjdog.github.io/creative-coding/week5/final/maze1.jpg');
}
function setup() {
  createCanvas(680, 725);
  img.loadPixels();
}

function draw() {
  background(220);
  image(img, 0, 0);
  for (let i = 0; i < crumbs.length; i++){
    crumbs[i].draw();
  }
  triangle(0,50, 0, 70,)
  noFill();
  strokeWeight(1850);
  circle(mouseX, mouseY, 2000);
  fill("red");
  strokeWeight(1);
  triangle(0,70, 0, 90, 20, 80);
  textSize(20);
  text("Start at the red Triangle", 375, 20);
  text("Left click to leave a bread crumb", 375, 40);
  img.updatePixels();
  
}
function mousePressed(){
  crumbs.push(new crumb(mouseX, mouseY));
}