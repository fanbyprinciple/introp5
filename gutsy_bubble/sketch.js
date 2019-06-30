let bubble

function setup() {
  createCanvas(400, 400);
  bubble = new Bubble() 
  
}

function mousePressed(){
  bubble.blow()
}
function draw() {
  background(0);
  bubble.show()
  bubble.move()
  
  
}

class Bubble{
  constructor(){
    this.x =200
    this.y =150
    this.diameter = 24
    
  }
  
  move(){
    
    if(this.x+this.diameter - 10 <width && this.y < height && this.x-this.diameter + 10 > 0 && this.y > 0){
    this.x = mouseX + random(-3,3)
    this.y =  mouseY + random(-3,3)
    } else {
    this.blow()
    }
  }
  
  blow () {
    this.diameter += 5
    if(this.diameter >= width){
    this.diameter = 10
    this.x =mouseX
    this.y =mouseY
    }
  }
  
  
  
  show () {
    stroke(255)
    strokeWeight(4)
    noFill()
    ellipse(this.x, this.y, this.diameter,this.diameter)
  }
}