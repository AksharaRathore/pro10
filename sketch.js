var sea,ship;
var seaImg,shipImg;


function preload(){
  //uncomment the code to add animation to ship
  shipImg1 = loadAnimation("ship-1.png"); 
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-1.png", "ship-2.png")

  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(1300,600);
  background("blue");

  // Moving background
  sea=createSprite(1200,300);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.7;

  
  ship = createSprite(350,400,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.40;
 
}

function draw() {
  background(0);
  sea.velocityX = -3;
  console.log(sea.x);
 
  //uncomment code to reset the background
  if(sea.x < 0){
    sea.x = sea.width/8;
  }

 
  drawSprites();
}