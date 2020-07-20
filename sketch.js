const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var object;
var world;
var slingShot;
var score = 0;
var engine,world;
var polygon;
var stand;
function preload()
{
	polygon_img = loadImage("Images/hexagon.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
	//level two
	block8 = new box(330,235,30,40);
	block9 = new box(360,235,30,40);
	block10 = new box(390,235,30,40);
	block11 = new box(420,235,30,40);
	block12 = new box(450,235,30,40);
	//level three
	block13 = new box(360,195,30,40);
	block14 = new box(390,195,30,40);
	block15 = new box(420,195,30,40);
	//top
	block16 = new box(390,155,30,40);

	

  
    //ground
	stand = new ground();
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
 
 slingShot = new Launcher(this.polygon,{x:100,y:200});


}


function draw() {
  background("green");
  textSize(35)
  fill("white")
  text("Score  " + score,500,40)
 // Engine.update(engine);
  stand.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
  slingShot.display();


//score

block8.Score();
block9.Score();
block10.Score();
block11.Score();
block12.Score();
block13.Score();
block14.Score();
block15.Score();
block16.Score();

 
}


function mouseDragged(){
	Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
	}
	
	function mouseReleased(){
		slingShot.fly();
	}



function keyPressed(){
    if(keyCode===32){
      slingshot.attach(this.polygon);
    }
}
