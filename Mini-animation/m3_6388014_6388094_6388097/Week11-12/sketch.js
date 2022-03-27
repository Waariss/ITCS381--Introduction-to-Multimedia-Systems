let xi = 0;
let y = 0;
let xx = 0;
let yy = 0;
let s, q, s2, q2;
function setup() {
  createCanvas(400, 400); //create canvas 400*400
  background(60, 540, 42);  // set base gb color
}
function draw() {
  drawbg();
  drawhat();
  drawear();
  drawshirts();
  drawneck();
  drawbuttons();
  drawface();
  drawnose();
  drawmouth();
  draweye();
  blackeye();
  drawleftmoustache();
  drawrightmoustache();
}
function drawbg(){
  x = map(mouseX, 0, 100, 200, 200); // set x map mousex
  r = map(mouseX, 0, 100, 200, 200); // set r map mousex
  background(mouseX, x, r); // set bg color with mouseX that can change by silde mouse
  fill(51);// set table color
  rect(0, 260, 400, 300)// draw table
}
function drawhat(){
  strokeWeight(3) // set strokeWeight
  fill("red"); // fill red color
  ellipse(204, 105, 30, 160); // draw hat 1
  fill(255,random(220,255),random(0,255)); // set tail color
  ellipse(204, 110, 70, 150); // draw hat 2 
  fill("red"); // fill red color
  ellipse(204, 105, 87, 90); // draw hat 3
}
function drawear(){
  strokeWeight(3) // set strokeWeight
  fill('#E2C58F'); // set left ear color
  ellipse(130,90,80,90);// draw left ear
  fill("pink"); // set inner left ear color
  ellipse(130,100,50,90);// draw inner left ear
  fill('#000000'); // set right ear color
  ellipse(280,90,80,90);// draw right ear
  fill("pink");// set inner right ear color
  ellipse(280,100,50,90);// draw inner right ear
}
function drawshirts(){
  strokeWeight(3) // set strokeWeight
  fill("red") // set red color
  ellipse(202, 350, 300, 400) // draw Shirts
}
function drawneck(){
  strokeWeight(3) // set strokeWeight
  fill(255, 202,2) // set color of neck
  ellipse(200, 200, 210) // draw neck
}
function drawbuttons(){
  strokeWeight(3) // set strokeWeight
  fill(255, 202,2) // set Buttons
  ellipse(204, 320, 25) // draw Buttons
  ellipse(204, 370, 25) // draw Buttons
}
function drawface(){
  strokeWeight(3) // set strokeWeight
  fill(192) // set face color 
  arc(201, 180, 220, 220, 0, PI * 2); // draw face
}
function drawnose(){
  strokeWeight(3) // set strokeWeight
  fill(255, 204, 229, 130) // nose color
  triangle(180, 175, 220, 175, 200, 200); // draw nose
  point(230, 190)
  point(220, 190)
  point(225, 200)
  point(175, 190)
  point(170, 200)
  point(181, 198)
}
function drawmouth(){
  strokeWeight(3) // set strokeWeight
  line(195, 198, 170, 220)
  line(205, 198, 230, 220)
}
function draweye(){
  if(mouseIsPressed){ // if mouse is pressed
    strokeWeight(3) // set strokeWeight
    fill(192) // set color while mouse is pressed
    ellipse(173, 135, 30, 50) // draw while mouse is pressed
    ellipse(225, 135, 30, 50) // draw while mouse is pressed
  }
  else{
    strokeWeight(3) // set strokeWeight
    fill(204, 255, 255); // set color
    ellipse(173, 135, 30, 50) // draw
    ellipse(225, 135, 30, 50) // draw
  }
}
function blackeye(){
  if(mouseIsPressed){ // if mouse is pressed
    strokeWeight(0) // set strokeWeight
    fill(192) // set color while mouseispressed
    ellipse(172, 137, 10) // draw while mouse is pressed
    ellipse(224, 137, 10) // draw while mouse is pressed
  }
  else{ // if not mouse is pressed ////animations
    strokeWeight(3) // set strokeWeight
    fill('#E2C58F')// set color
    ellipse(xi, y, 10) // draw left eye
    xi = 172;
    y = 137;
    s = (mouseX - xi) / 30
    q = (mouseY - y) / 30
    xi = xi + s
    ellipse(xx, yy, 10) // draw right eye 
    xx = 224;
    yy = 137;
    s2 = (mouseX - xx) / 30
    q2 = (mouseY - yy) / 30
    xx = xx + s2
  }
}
function drawleftmoustache(){
  //left moustache
  strokeWeight(3) // set strokeWeight
  line(120, 193, 52, 170)
  line(120, 199, 50, 200)
  line(120, 205, 60, 230)
}
function drawrightmoustache(){
  //right moustache
  strokeWeight(3) // set strokeWeight
  line(280, 193, 353, 170)
  line(280, 200, 358, 200)
  line(280, 206, 352, 225)
}