let x = 200;
let y = 200;
let sprite;
let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor;
let debug = true;
function preload(){
  sprite = loadImage('https://razerjdog.github.io/creative-coding/week3/3.2.follower/Clyde.jpg');
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if (debug){
    text("width: " + width, 30, 30);
    text("height: " + height, 30, 45);
    text("mouseX: " + mouseX, 30, 60);
    text("mouseY: " + mouseY, 30, 75);
  }

  let d = sqrt((x - mouseX)**2 + (y - mouseY)**2);

  image(sprite, x - 25, y - 25, 50, 50);

  if (mouseX > x){
   xspeed = speedfactor;
  }
  else{
   xspeed = -speedfactor;
  }

  if (mouseY > y){
   yspeed = speedfactor;
  }
  else{
   yspeed = -speedfactor;
  }
  x = x + xspeed;
  y = y + yspeed;
}