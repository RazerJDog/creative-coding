function setup() {
  createCanvas(700, 700);
  noLoop();
}

function draw() {
  background("#f9f1e0");
  translate(100,100);
  angleMode(DEGREES);
  for(let x=0;x<5;x++){
    for(let y=0;y<5;y++){
      push();
      translate(x*100,y*100);
      if(x%2==0 && y%2==0){
        fill("#aa2e32");
        rect(0,0,33,100);
        rect(33,33,33,33);
        rect(66,0,33,100);
      }
      if(x%2==0 && y%2==1){
        fill("#e24426");
        translate(100,0);
        rotate(90);
        rect(0,0,33,100);
        rect(33,33,33,33);
        rect(66,0,33,100);
      }
      else if(x%2==1 && y%2==0){
        fill("#e24426");
        translate(100,0);
        rotate(90);
        rect(0,0,33,100);
        rect(33,33,33,33);
        rect(66,0,33,100);
      }
      else{
        fill("#aa2e32");
        rect(0,0,33,100);
        rect(33,33,33,33);
        rect(66,0,33,100);
      }
      pop();
    }
  }
}