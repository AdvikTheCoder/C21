var fixedRect, movingRect;
var box, box1,box2,box3
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box=createSprite(200,100,50,50)
  box.shapeColor="yellow"
  box1=createSprite(400,100,50,50)
  box1.shapeColor="yellow"
  box2=createSprite(600,100,50,50)
  box2.shapeColor="yellow"
  box3=createSprite(800,100,50,50)
  box3.shapeColor="yellow"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 isTouching(box1,movingRect) 
    
  
  drawSprites();
}