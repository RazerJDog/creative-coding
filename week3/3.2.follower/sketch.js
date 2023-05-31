let x = 400;
let y = 400;
let x1;
let x2;
let y1;
let y2;
let sprite;
let backgroundimg;
let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor;
let debug = true;
let score = 100;
function preload(){
  sprite = loadImage('https://razerjdog.github.io/creative-coding/week3/3.2.follower/Clyde.jpg');
  backgroundimg = loadImage('https://razerjdog.github.io/creative-coding/week3/3.2.follower/pac-maze.jpg');
}
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  image(backgroundimg, 0, 0);

  if (debug){
    fill("white");
    text("width: " + width, 30, 30);
    text("height: " + height, 30, 45);
    text("mouseX: " + mouseX, 30, 60);
    text("mouseY: " + mouseY, 30, 75);
    text("score: " + score, 30, 90);
  }

  let d = sqrt((x - mouseX)**2 + (y - mouseY)**2);

  image(sprite, x - 20, y - 20, 40, 40);

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
  x1 = x - 25;
  x2 = x + 25;
  y1 = y - 25;
  y2 = y + 25;

  if (mouseX > x1 && mouseX < x2 && mouseY > y1 && mouseY < y2){
    x = 400;
    y = 400;
    score = score - 1;
  }
}