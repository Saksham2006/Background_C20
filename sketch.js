
var r = 0;
var g = 0;
var b = 0;
//var ball;

function setup(){

  createCanvas(1020,510);
  fill("white");
  //ball = createSprite(200,200,20,20);
  //ball.shapeColor="black";
}


function draw(){
  background(r,g,b);
  r= mouseX/4;
  g= mouseX/4-1;
  b= mouseY/2;

  ellipse(mouseX,mouseY,20);
  strokeWeight(2);
  drawSprites();
}