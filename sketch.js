var hours,minutes,seconds;
var scAngle,mAngle,hAngle;
var vertex;
hours = hour();
minutes = minute();
seconds = second();



function setup() {
  createCanvas(1200,600);
  vertex = createSprite(650, 300, 50, 50);
 }

function draw() {
  background(0); 

  angleMode(DEGREES);

  scAngle = map(seconds,0,60,0,360);
  mAngle = map(minutes,0,60,0,360);
  hAngle = map(hours,0,60%12,0,360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(650,300,650,30);
  
  pop();

  push();
  rotate(mAngle);
  stroke(0,255,0);
  strokeWeight(9);
  line(650,300,650,60);
  pop();

  pop();
  rotate(hAngle);
  stroke(0,0,255);
  strokeWeight(12);
  line(650,300,650,90);
  drawSprites();
}