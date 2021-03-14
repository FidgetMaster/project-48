const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var player;
var ground;
var engine,world;
var move = 300;


function setup() {
  createCanvas(1600,800);
  engine = Engine.create();
  world = engine.world;
 player = new Player(400,200,50,50);
 ground = new Ground(800,height,1600,50);
 platform1 = new Platform(400,300,200,20);
 platform2 = new Platform(800,300,200,20);
 platform3 = new Platform(1200,300,200,20);
 platform4 = new Platform(1500,600,200,400);
 enemy1 = new Enemy(800,250,40,40);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  ground.display();
  player.display();
  platform1.display();
  platform2.display();
  platform3.display();
  platform4.display();
  enemy1.display();
  if(move >= 700){
     move = move - 3;
  }
  else if(move <= 700){
    move = move + 3;
  }
  console.log(move);
  Matter.Body.setPosition(platform1.body,{x:400,y:move});
}
function keyPressed(){
  if(keyCode == 32){
  }
  
  if(keyCode == UP_ARROW){
    Matter.Body.applyForce(player.body,player.body.position,{x:0.000,y:-0.1})
  }
  
    if(keyCode == RIGHT_ARROW){
    Matter.Body.applyForce(player.body,player.body.position,{x:0.05,y:0})
  }
  
    if(keyCode == LEFT_ARROW){
    Matter.Body.applyForce(player.body,player.body.position,{x:-0.05,y:0 })
  }
}