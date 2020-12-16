const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300
function setup() {
  createCanvas(550,625);

  engine = Engine.create();
  world = engine.world;
  
  // Create the Bodies here.
  var border = createSprite(553,625,10,600)
  ground = new Ground(240,620,1200,10)
  //division1 = new Divisions(200,200,10,10)
  for (var k = 0; k<= width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight))
 }
 for (var j = 10; j <= width; j = j+40){
   plinkos.push(new Plinko(j,15))
 }
 for (var j = 15; j<=width-10; j = j+40){
   plinkos.push(new Plinko(j,55))
 }
 for (var j = 10; j<=width-20; j = j+40){
  plinkos.push(new Plinko(j,95))
}
for (var j = 15; j<=width-10; j = j+40){
  plinkos.push(new Plinko(j,135))
}

  Engine.run(engine);
}
function draw(){
background("black");  
  textSize(20)
  Engine.update(engine)
  ground.display();
  for(var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
  }
  if(frameCount%60=== 0 ){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10))
  }
  for(var j = 0; j<particles.length; j++){
    particles[j].display();
  }
  for(var k = 0; k<divisions.length; k++){
    divisions[k].display();
  }
  drawSprites();
}