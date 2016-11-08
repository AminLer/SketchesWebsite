
var x = 100;
  var y = 100;
  var speed = 4;
function setup() {

  createCanvas(500, 500);
  
}

function draw() {
  background(0);
  fill(255);
  
  if(x < 400-x && y < 400-y){
    x+=speed;
  }else if(y < 400-y && x == 400-x){
    y+=speed;
  }else if(x > 100-x && y == 400-y){
    x-=speed;
  }else if(y > 100-y && x == 100){
    y-=speed;
  }
  
  rect(x, y, 50,50);
}
