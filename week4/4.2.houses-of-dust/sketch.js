let poem = "";
let poem1 = "";
let poem2 = "";
let poem3 = "";
let y = 20;
let grammar = tracery.createGrammar({
  "origin" : "A HOUSE OF #material#\n    #place#\n        USING #light_source#\n            INHABITED BY #inhabitants#",
  "material" : ["GALAXY","METEOR CLUSTER","BLACK HOLE", "NEBULA", "STARS"],
  "place" : ["SOLAR SYSTEM", "MILKY WAY", "ANDROMEDA", "ALPHA CENTAURI"],
  "light_source" : ["SUNLIGHT", "STARLIGHT","MOONLIGHT"],
  "inhabitants" : ["ALIENS", "COSMIC PARTICLES", "ELEMENTS", "PLANETS", "NATURE"]
});
function setup() {
  createCanvas(800, 800);
  frameRate(1);
  // noLoop();
}

function draw() {
  background(220);
  textSize(20);
  for(let i = 0; i < 1; i++){
    poem = grammar.flatten("#origin#");
    text(poem, 10, 20);
  }
}