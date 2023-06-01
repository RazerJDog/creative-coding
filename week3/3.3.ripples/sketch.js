let ripple_x = 0;
let ripple_y = 0;
let ripple_d = 0;
let distanceX = 0;
let distanceY = 0;
let ripplers = [];

class Rippler {
  constructor (x, y){
    this.x = x,
    this.y = y,
    this.d = 0
  }

  draw(){
    push();
    this.d += 1;
    if (this.d > 200){
      strokeWeight(3);
    }
    if (this.d > 400){
      strokeWeight(2);
    }
    if (this.d > 600){
      strokeWeight(1);
    }
    if (this.d > 800){
      strokeWeight(0.5);
    }


    circle(this.x, this.y, this.d);
    

    circle(this.x * -1, this.y, this.d);
    circle(this.x, this.y * -1, this.d);
    distanceX = 800 - this.x;
    circle(this.x + distanceX * 2, this.y, this.d);
    distanceY = 800 - this.y;
    circle(this.x, this.y + distanceY * 2, this.d);
    if(this.d > 60){
      circle(this.x, this.y, this.d -60);
      circle(this.x * -1, this.y, this.d - 60);
      circle(this.x, this.y * -1, this.d - 60);
      circle(this.x + distanceX * 2, this.y, this.d - 60);
      circle(this.x, this.y + distanceY * 2, this.d - 60);
    }
    if(this.d > 120){
      circle(this.x, this.y, this.d -120);
      circle(this.x * -1, this.y, this.d - 120);
      circle(this.x, this.y * -1, this.d - 120);
      circle(this.x + distanceX * 2, this.y, this.d - 120);
      circle(this.x, this.y + distanceY * 2, this.d - 120);
    }
    pop();
  }
}
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(80,80,150);
  stroke("white");
  strokeWeight(5);
  noFill();

  for (let i = 0; i < ripplers.length; i++){
    ripplers[i].draw();
  }

  strokeWeight(5);
  // ripple_d += 1;
  // circle(ripple_x, ripple_y, ripple_d);

  // push();
  // fill("white");
  // strokeWeight(1);
  // text("ripple_x: " + ripple_x,50,50);
  // text("ripple_y: " + ripple_y,50,70);
  // pop();
}

function mousePressed(){
  ripple_x = mouseX;
  ripple_y = mouseY;
  ripple_d = 0;

  ripplers.push(new Rippler(mouseX, mouseY));
  wait(300);
  ripplers.push(new Rippler(mouseX, mouseY));
  wait(300);
  ripplers.push(new Rippler(mouseX, mouseY));
  
}