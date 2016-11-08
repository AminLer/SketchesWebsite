
var x = 100;
  var y = 100;
  var speed = 4;
function setup() {

  createCanvas(500, 500);
  
}

function draw() {
  background(0);
  fill(255);
  
  if(x < 400 && y == 100){
    x+=speed;
    y = 101;
  }else{
    x-=speed;
  }
  
  rect(x, y, 50,50);
}
