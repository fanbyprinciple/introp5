var x =10;
var speed = 3;
var times = 1;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  stroke(0)
  strokeWeight(4)
  noFill()
  
  if(mouseX > 300) {
    fill(255,0,200)
  }
  ellipse(x,200,100,100)
  x+= speed
  
  if(x > width ){
    speed = speed*-1* times 
    times = times +1
  }
  
  
  if(x < 0 ){
    speed = speed*-1* times 
    times = times +1
  }
  

    
}