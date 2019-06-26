function setup() {
  createCanvas(400, 400);
  background(0, 100, 100);
}

function draw() {
  
  
  
//   line(0, 50, 400, 300)
//   rectMode(CENTER)
//   rect(200,200,150,150)
  
  fill(250, 200, 200, 50)
  ellipse(mouseX,mouseY, 25, 25, 25)
  
}

function mousePressed() {
  background(Math.random()*100,Math.random()*100,Math.random()*100)
}