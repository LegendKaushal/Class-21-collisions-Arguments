
var movingRect,fixedRect;

var gameObject1,gameObject2,gameObject3,gameObject4



function setup() {
  createCanvas(800,400);
  movingRect=createSprite(200, 200, 50, 80);
  movingRect.shapeColor="green"
  
  //movingRect.debug = true

  fixedRect=createSprite(400, 200, 80, 50);
  fixedRect.shapeColor="green"

 // fixedRect.debug = true

  gameObject1 = createSprite(100,100,20,20)
  gameObject1.shapeColor="green"

  gameObject2 = createSprite(200,100,20,20)
  gameObject2.shapeColor="green"

  gameObject3 = createSprite(300,100,20,20)
  gameObject3.shapeColor="green"

  gameObject4 = createSprite(400,100,20,20)
  gameObject4.shapeColor="green"


}

function draw() {
 
  background("black");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

 //true--red//false--green
  if(isTouching(movingRect,gameObject1))
  {
    movingRect.shapeColor="red"
    gameObject1.shapeColor="red"
  }
  else
  {
    movingRect.shapeColor="green"
    gameObject1.shapeColor="green"
  }

  if(isTouching(movingRect,gameObject2))
  {
    movingRect.shapeColor="red"
    gameObject2.shapeColor="red"
  }
  else
  {
    movingRect.shapeColor="green"
    gameObject2.shapeColor="green"
  }

  drawSprites();

}
//Boolean functions -- True/False
