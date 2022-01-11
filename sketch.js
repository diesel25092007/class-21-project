
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myengine,myworld
var ball
var bottomwall
var rightwall
var leftwall

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);
	myengine = Engine.create();
	myworld = myengine.world;

	var	ball_options = 
{
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}

bottomwall=new Ground(400,400,800,20)
leftwall = new Ground (550,400,10,170)
rightwall = new Ground (700,400,10,170)


	ball = Bodies.circle (200,200,15,ball_options)
	

	//Create the Bodies Here.
World.add(myworld,ball)




	Engine.run(myengine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  ellipse(ball.position.x,ball.position.y,15,15)
bottomwall.show()
leftwall.show()
rightwall.show()


}
function keyPressed(){
	if (keyCode==UP_ARROW)
		{
			Body.applyForce(ball,{x:0,y:0},{x:2,y:-1})
		}
}
