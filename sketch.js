var wall, bullet;
var speed, thickness, weight;


function setup() {
  createCanvas(1600, 400);

speed = random (1, 30);
width = random (25, 30);

  bullet = createSprite(500, 200, 80, 10);
  bullet.velocityX = speed;

  wall = createSprite(1200, 200, thickness, height/2);

  thickness = random (22, 83);
}

function draw() {
  background("black");  
  
  colliding(bullet, wall);

  drawSprites();
}

function colliding(object1, object2){

  if (object1.isTouching(object2)){
    object1.velocityX = 0;
    var damage = speed;
   
   if(damage < 15){
    object2.shapeColor = "green";
   }
   
   if(damage > 15){
    object2.shapeColor = "red";
   }
   } 

}