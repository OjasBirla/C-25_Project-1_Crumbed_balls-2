
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new Paper(50, 350, 40, 40);
  ground = new Ground(400, 690, 800, 20);
  dustbin = new Dustbin(650, 630, 100, 100);
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  
  ground.display();
  dustbin.display();
  paper.display();

  drawSprites();
 
}
function keyPressed(){
  if(keyCode = UP_ARROW){
    Body.applyForce(paper.body, paper.body.position, {x:85, y:-85});
  }
}