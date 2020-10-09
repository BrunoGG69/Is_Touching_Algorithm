var fixedRect, moveRect;


function setup() {
  createCanvas(800,400);
  moveRect = createSprite(400, 200, 50, 50);
  moveRect.shapeColor = "green";

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";

}

function draw() {
  background(255,255,255);

  if(moveRect.x - fixedRect.x < moveRect.width / 2 + fixedRect.width / 2 && 
   fixedRect.x - moveRect.x< moveRect.width / 2 + fixedRect.width / 2 &&
   moveRect.y - fixedRect.y < moveRect.height / 2 + fixedRect.height / 2 && 
   fixedRect.y - moveRect.y < moveRect.height / 2 + fixedRect.height / 2)
  {
    moveRect.shapeColor = "yellow";

    fixedRect.shapeColor = "yellow";
  }
  else
  {
    moveRect.shapeColor = "green";

    fixedRect.shapeColor = "green";
  }
  
  moveRect.x = mouseX;
  moveRect.y = mouseY;

  fixedRect.debug = true;
  moveRect.debug = true;

  drawSprites();
}