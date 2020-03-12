var moving , fixed;

function setup() {
  createCanvas(800,400);
  moving = createSprite(0,200, 50, 50);
  moving.debug = true;
moving.shapeColor = "green";
moving.velocityX = 3;

  fixed = createSprite (800,200,50,50);
  fixed.debug = true;
  fixed.shapeColor = "green";
  fixed.velocityX = -3;
}

function draw() {
  background(0);  

//moving.x = World.mouseX;
//moving.y = World.mouseY;

if (fixed.x - moving.x < fixed.width/2 + moving.width/2 && moving.x - fixed.x < fixed.width/2 + moving.width/2 && 
  moving.y - fixed.y < fixed.height/2 + moving.height/2 && fixed.y - moving.y < fixed.height/2 + moving.height/2){
   fixed
   
   
     fixed.shapeColor = "white";
    moving.shapeColor = "red";   
  }

  if (moving.y - fixed.y < fixed.height/2 + moving.height/2 && fixed.y - moving.y < fixed.height/2 + moving.height/2) {
    moving.velocityY = -1 * moving.velocityY;
    fixed.velocityY = -1 * fixed.velocityY;
  }

  if (fixed.x - moving.x < fixed.width/2 + moving.width/2 && moving.x - fixed.x < fixed.width/2 + moving.width/2) {
    moving.velocityX = -1 * moving.velocityX;
    fixed.velocityX = -1 * fixed.velocityX;
  }

  drawSprites();
}