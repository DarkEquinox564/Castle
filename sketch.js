const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var wall1, wall2, wall3;
var tria;
var walltop,flag1;
var second, gaurd, guard2;
var trid;

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  

  wall1 = new castle(400,300,70,200);
  tria = new castle(400,200,110,20);
  wall2 = new castle(460,300,10,300);

  wall3 = new castle(340,300,10,300);
  walltop = new castle(400,155,10,70);
  second = new castle(515,350,100,100);
  trid = new castle(285,350,100,100);
  flag1 = new flag(440,105,90,60);
  gaurd =new castle(615,300,100,300);
  gaurd2 =new castle(185,300,100,300);
  
  
}

function draw() {
  background("black"); 
  Engine.update(engine); 
  
  wall1.display();
  tria.display();

  wall2.display();
  wall3.display();
  walltop.display();
  second.display();
  trid.display();
  flag1.display1();
  gaurd.display();
  gaurd2.display();
  
}