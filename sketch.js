var balloon,background,height;


function preload()
{
bgImg=loadImage("images/1.png")
//baloonimg = loadAnimation("images/2.png");
balloonimg=loadAnimation("images/2.png","images/3.png","images/4.png")
}


function setup() 
{
  database = firebase.database();
  createCanvas(1200,700);
  
  balloon= createSprite(100,400,20,20)
  balloon.addAnimation("balloon",baloonimg);

  var b = database.ref('baloon/position');
  b.on("value",readHeight);
}

function draw() 
{
  background(bgImg);

  if(keyDown(LEFT_ARROW))
  {
    updateHeight(-10,0);
    baloonimg.addAnimation("3.png");
  }
  if(keyDown(RIGHT_ARROW))
  {
    updateHeight(10,0);
    baloonimg.addAnimation("3.png");
  }

  if(keyDown(UP_ARROW))
  {
    updateHeight(0,-10);
    baloonimg.addAnimation("3.png");
   
  drawSprites();

  if(keyDown(DOWN_ARROW)){
    updateHeight(0,10);
    baloonimg.addAnimation("3.png");
 }
}


function updateHeight(x,y){
  database.ref('balloon/height').set({
    'x': height.x + x ,
    'y': height.y + y
  })
}

function readHeight(data)
{
height=data.val();
balloon.x = height.x;
balloon.y = height.y;
}
  