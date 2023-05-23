function setup() {
  createCanvas(1200, 1200);
  noLoop();
}

function draw() {
  background(220);
  translate(100,100);
   for(let x=0; x<8;x++){
     for(let y=0;y<8;y++){
      let r1 = random(0, 9);
      let r2 = random(0, 9);
      push();
      translate(r1 * 100, r2 * 100);
      fill("purple");
      ellipse(0,0,100,100);
      fill("yellow");
      triangle(0,-50,-43,25,43,25);
      pop();
     }
  }
}