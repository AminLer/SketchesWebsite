
var x = 100;
  var y = 100;
  var speed = 4;
function setup() {

  createCanvas(500, 500);
  
}

function draw() {
  background(0);
  fill(255);
  
  if(x < 400 || y < 400){
    x+=speed;
  }else if(y < 400){
    y+=speed;
  }else if(x > 400){
    x-=speed;
  }else if(y > 400){
    y-=speed;
  }
  
  rect(x, y, 50,50);
}
