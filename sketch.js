var d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,0,0);
  frameRate(200);
  //doble slash sirve para dejar nota jeje me sirve para tomar apuntes asi q slay
}

function draw() {
  d = random (10,100);
  noStroke();
  // 1er numero es color y 2do opacidad, ambos el maximo es 255
  fill(255,d);
  ellipse(mouseX,mouseY,d,d);
  
}
