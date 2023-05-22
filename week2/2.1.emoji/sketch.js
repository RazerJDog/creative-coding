function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  stroke("gold"); // set the stroke (line) color 
  strokeWeight(6); // set the stroke thickness
  fill("yellow"); // set the fill color

  // draw an ellipse with 250 pixel diameter
  // with its center at x position 200
  // and at y position 200
  ellipse(200,200,250,250);
  stroke("Gray");
  fill("white");
  ellipse(150,150,75,75);
  ellipse(250,150,75,75);
  fill("black");
  stroke("black");
  ellipse(150,130,25,25);
  ellipse(250,130,25,25);
  rect(150,250,100,12,10,10,10,10);
}