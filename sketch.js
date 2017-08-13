
var x = 100;
  var y = 100;
  var speed = 250;
function setup() {

  createCanvas(500, 500);
  
}

function draw() {
  background(0, 150);
  
  fill(255, 0, 0, 150);
  rect(x, y, 50,50);
  rect(x+speed, y, 50,50);
  rect(x+speed, y+speed, 50,50);
  rect(x, y+speed, 50,50);
  
  
  
  fill(0, 0, 255, 100);
  ellipse(250, 250, 100, 100);
}
