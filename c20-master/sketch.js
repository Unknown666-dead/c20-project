
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b

var point;

function setup(){

  createCanvas(400,400);

point = createSprite(200,200,10,10);

}


function draw(){
background(rgb(r,g,b))
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  point.x=World.mouseX
  point.y=World.mouseY
  
r= point.y
g=point.x
b= point.x + point.y


  // Use the map() function to do so. 
  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.

  drawSprites();
}



