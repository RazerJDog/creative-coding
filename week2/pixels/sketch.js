let img;
function preload(){
  img = loadImage('https://razerjdog.github.io/creative-coding/week2/pixels/black-hole.jpg');
}
function setup() {
  createCanvas(800, 800);
  img.loadPixels();
}

function draw() {
  background(220);
  for(let x=0; x<width;x++){
    for(let y=0;y<height;y++){
      var index = (x + y * width)*4;
      if(x<200 && y<200){
        img.pixels[index+0]= 0;
        img.pixels[index+1]= 0;
        img.pixels[index+3]= 0;
        img.pixels[index+4]= 100.0;
      }
      else if(x>=199 && x<=201 || y>=199 && y<=201 || x>=399 && x<=401 || y>=399 && y<=401 || x>=599 && x<=601 || y>=599 && y<=601){
        img.pixels[index+0]= 0;
        img.pixels[index+1]= 0;
        img.pixels[index+3]= 0;
        img.pixels[index+4]= 100.0;
      }
    }
  }
  img.updatePixels();
  image(img, 0, 0);
  filter(INVERT);
}