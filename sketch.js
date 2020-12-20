const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const { Mouse, MouseConstraint, Constraint } = Matter;

var engine, world;
var box1, bird;
let mConstraint, slingshot;

function setup() {
  var canvas = createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;

  // boxes
  box1 = new Box(700, 320, 70, 70);
  box2 = new Box(920, 320, 70, 70);
  log1 = new Log(810, 260, 300, PI / 2);
  log2 = new Log(810, 180, 300, PI / 2);
  box3 = new Box(700, 240, 70, 70);
  box4 = new Box(920, 240, 70, 70);
  box5 = new Box(810, 160, 70, 70);
  log3 = new Log(760, 120, 150, PI / 7);
  log4 = new Log(870, 120, 150, -PI / 7);
  // ground
  ground = new Ground(200, height, 2000, 20);
  // bird
  bird = new Bird(100, 100, 20);
  // pigs
  pig1 = new Pig(810, 350, 30);
  pig2 = new Pig(810, 260, 30);
  //sling
  slingshot = new SlingShot(150, 300, bird.body);
  //mouse
  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse,
  };
  // A fix for HiDPI displays
  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}
function keyPressed() {
  if (key == " ") {
    World.remove(world, bird.body);
    bird = new Bird(150, 300, 25);
    slingshot.attach(bird.body);
  }
}
function mouseReleased() {
  setTimeout(() => {
    slingshot.fly();
  }, 100);
}
function draw() {
  background(0);
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  ground.display();
  pig1.show();
  pig2.show();
  bird.show();
  slingshot.show();
}
