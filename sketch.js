const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground;
var pig1;
var log1;
var box3;
var pig2;
var box4;
var log2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(920,300,70,70);
    ground = new Ground(600,380,1200,20);
    pig1 = new Pig(810,300);
    log1 = new Log(810,180,300,PI/2);
    box3 = new Box(700,100,70,70);
    pig2 = new Pig(810,100);
    box4 = new Box(920,100,70,70);
    log2 = new Log(810,90,300,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
}