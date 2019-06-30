function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stem()
  pistil()
}

function stem(color=255,x=290,y=200,w=20,z=150) {

  fill (0,color,120)
  rect(x,y,w,z)
}

function pistil(color=120,x=300,y=200,w=110,z=80){
  fill(100,0,color)
  ellipse(x,y,w,z)
}
