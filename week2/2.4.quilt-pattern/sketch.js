function setup() {
  createCanvas(1400, 1400);
  noLoop();
}

function draw() {
  background("maroon");
  angleMode(DEGREES);
  translate(100,100);
  for (let x=0;x<11;x++){
    for (let y=0;y<11;y++){
      push();
      translate(x * 100, y * 100);
      if (x%2==0 && y%2==0){
        fill("gray");
        rect(0, 0, 33, 100);
        fill("black");
        rect(33, 0, 33, 100);
      }
      else if(x%2==0 && y%2==1){
        fill("gray");
        rect(0,0,100,33);
        fill("black");
        rect(0,33,100,33);
      }
      else if(x%2==1 && y%2==0){
        fill("gray");
        rect(0,0,100,33);
        fill("black");
        rect(0,33,100,33);
      }
      else{
        fill("gray");
        rect(0, 0, 33, 100);
        fill("black");
        rect(33, 0, 33, 100);
      }
      pop();
    }
  }
}