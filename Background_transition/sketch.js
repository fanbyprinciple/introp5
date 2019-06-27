var r = 0
var b = 255

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //col = mouseX
  r = map(mouseX,0,400,0,255)
  
  b = map(mouseY,0,400,255,0)
  fill(250,118,222)
  background(r,0,b)
  ellipse(mouseX, mouseY, 64, 64)
}