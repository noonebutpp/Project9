var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  if (keyIsDown(RIGHT_ARROW)) 
  {background("red");
    
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    background("yellow");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("green");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("blue");
  }

  drawSprites();
}




