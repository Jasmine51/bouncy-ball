const Engine = Matter.Engine; // creating constant for physics engine
const World = Matter.World; // creating constant for world
const Bodies = Matter.Bodies; // creating constant for bodies

var engine, world; // creatig variables
var ground, ball;




function setup() {
 var canvas =  createCanvas(400,600); // creating canvas

  engine = Engine.create(); // creating engine
  world = engine.world;

  var ground_options ={ // creating variable for ground options
    isStatic : true  // the ground is fixed
  }
  ground = Bodies.rectangle (200,590,200,20,ground_options); // properties to create the ground
  World.add(world,ground); // adding ground to the world

  var ball_options ={ //creating variable for ball options
    restitution : 2.0 // restitution for the ball
  }
  ball= Bodies.circle(200,100,20,ball_options); // properties to create the ball
  World.add(world,ball); // adding ball to the world

  
}

function draw() {
  background(0);
  Engine.update(engine); // updating the engine
  rectMode(CENTER); // object appears in the center
  rect(ground.position.x, ground.position.y,400,20); // proerties for the rect
  ellipseMode(RADIUS); // the circle depends on the radius
  ellipse(ball.position.x, ball.position.y,20,20); // properties of the ellipse

}