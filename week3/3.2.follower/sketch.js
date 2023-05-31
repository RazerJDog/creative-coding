let x = 200;
let y = 200;
let sprite;
function preload(){
  sprite = loadImage('https://razerjdog.github.io/creative-coding/week3/3.2.follower/Clyde.jpg');
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  text("width: " + width, 30, 30);
  text("height: " + height, 30, 45);
  text("mouseX: " + mouseX, 30, 60);
  text("mouseY: " + mouseY, 30, 75);

  let d = sqrt((x - mouseX)**2 + (y - mouseY)**2);


}