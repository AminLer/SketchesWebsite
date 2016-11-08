
var x = 100;
  var y = 100;
  var speed = 4;
function setup() {

  createCanvas(500, 500);
  
}

function draw() {
  background(0);
  fill(255);
  
  if(x < 400 && x > 100){
    -speed;
  }else{
    +speed;
  }
  x += speed;
  rect(x, y, 50,50);
}
