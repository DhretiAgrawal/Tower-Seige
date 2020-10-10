const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground , ground2 ; 
var block8  , block8 , block9 , block10 , block11 , block12 , block13 , block14 , block15 , block16 ; 
var ball, slingshot , ball_img ; 
var gameState;

function preload(){
  ball_img = loadImage("ball.jpg");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  createSprite(400, 200, 50, 50);
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
 // ball.addImage(ball_img);

  slingshot = new SlingShot(ball,{x:100,y:200});
  ground = new Ground (400 , 400 , 800 , 50);
  ground2 = new Ground (400, 300 , 200 , 20);
  block8 = new Box (330 , 235 ,30,40);
  block9 = new Box (360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  block16 = new Box(390,155,30,40);
}

function draw() {
  background(255); 
  Engine.update(engine);
  
  imageMode(CENTER);
  image(ball_img,ball.x,ball.y,150,40);

  ground.display();
  ground2.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  slingshot.display();
  
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
 // gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(ball, {x: 220 , y: 50});
      //ball.trajectory = [] ; 
      ball.speed = 0;
      slingshot.attach(ball);
  }
}