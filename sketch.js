var gameState="PLAY";
var Dog,Road,Car,Obstacles,End;
var RoadImg;

function preload()
{
	//RoadImg=loadImage("images.jpg")
}

function setup() {
	createCanvas(1400, 600);
	Dog=createSprite(50,250,30,20)
    Road=createSprite(700,300,1400,50)
    //Road.addImage(RoadImg)
    End=createSprite(1370,300,50,150)
    End.shapeColor="Black"
}


function draw() {

  background('blue');
  if(Dog.collide(End)){
    stroke("Black")
text("CNGRATULATIONS YOU WON!, YOUR TOTAL SCORE IS",700,300)

  }
 if(gameState=="PLAY"){
   
  if (keyDown(LEFT_ARROW)) {
    Dog.x = Dog.x - 3
  }
  if (keyDown(RIGHT_ARROW)) {
    Dog.x = Dog.x + 3
  }


  SpawnCars();

  SpawnObstacles();

  
 }
 if(gameState==="END"){
 
    gameState=2;
 }
  
  drawSprites()
 
}

function SpawnCars(){

if(frameCount%120===0){

Car=createSprite(Math.round(random(100,1300)),0,50,50);
Car.velocityY+=8
Car.lifetime=600

}
}

function SpawnObstacles(){

if(frameCount%150===0){

  Obstacles=createSprite(1350,Math.round(random(250,300)),20,10)
Obstacles.shapeColor="Red"
	Obstacles.velocityX-=7

}

}




