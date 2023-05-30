let x = 50;
let y = 50;
let xspeed = 1;
let yspeed = 1;
let r = 0;
let g = 0;
let b = 0;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  if (x - 25 < 0){
    xspeed = xspeed * -0.25;
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
    fill(r,g,b);
  }
  if (x + 25 > width){
    xspeed = xspeed * -4;
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
    fill(r,g,b);
  }
  if (y - 25 < 0){
    yspeed = yspeed * -0.25;
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
    fill(r,g,b);
  }
  if (y + 25 > height){
    yspeed = yspeed * -4;
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
    fill(r,g,b);
  }

  x = x + xspeed;
  y = y + yspeed;
  circle(x, y, 50);
}