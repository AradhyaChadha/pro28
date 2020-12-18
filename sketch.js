
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dground,tree,treeing;
var boy,boying;
var stones;


function preload()
{
	treeing = loadImage("Plucking mangoes/tree.png");
	boying = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	dground=new Ground();
	stones=new Stone (100,460,23);
	mango1=new Mango (600,290,34);
	mango2=new Mango (855,325,35);
	mango3=new Mango (670,260,35);
	mango4=new Mango (730,200,35);
	mango5=new Mango (710,320,35);
	mango6=new Mango (780,250,35);
	mango7=new Mango (825,170,35);
	mango8=new Mango (880,260,35);
	mango9=new Mango (940,220,35);
	mango10=new Mango (980,305,35);

	attach=new Tree (stones.body,{x:100,y:465});

  tree = createSprite(775,368);
  tree.addImage(treeing);
  tree.scale=0.42;

  
  boy= createSprite(160,550);
  boy.addImage(boying);
  boy.scale=0.125;



	//Create the Bodies Here.
     

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  fill("black");
  textSize(18);

  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  detectCollision(stones,mango8);
  detectCollision(stones,mango9);
  detectCollision(stones,mango10);
  
  
  drawSprites();

  stones.display();
  dground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();


}


function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseRealeased(){
	attach.fly();
}

function detectCollision(Istones,Imango){
   if(Istones.body.position.x-Imango.body.position.x < Imango.diametre+Istones.diametre
	  && Imango.body.position.x-Istones.body.position.x< Imango. diametre + Istones.diametre
	  && Istones.body.position.y-Imango.body.position.y  < Imango. diametre + Istones.diametre
	  &&     Imango.body.position.y-   Istones.body.position.y  < Imango. diametre + Istones.diametre)
	  Matter.Body.setStatic(Imango.body,false);
   }


   function keyPressed(){
	   if (keyCode===32){
		   Matter.Body.setPosition(stones.body,{x:100,y:465});
		   attach.launch(stones.body);
	   }
   }
   

	 
	 
   
	 
	 
	 
	 
	 
	 
	  


