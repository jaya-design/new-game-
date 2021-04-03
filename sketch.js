var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var l = 0; l <=160; l = l + 160) {
    divisions.push(new Divisions(l, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var m = 0; m <=240; m = m + 240) {
    divisions.push(new Divisions(m, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var n = 0; n <=320; n = n + 320) {
    divisions.push(new Divisions(n, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var o = 0; o <=400; o = o + 400) {
    divisions.push(new Divisions(o, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var p = 0; p <=480; p = p + 480) {
    divisions.push(new Divisions(p, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var q = 0; q <=560; q = q + 560) {
    divisions.push(new Divisions(q, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var r = 0; r <=640; r = r + 640) {
    divisions.push(new Divisions(r, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var s = 0; s <=720; s = s + 720) {
    divisions.push(new Divisions(s, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var t = 0; t <=800; t = t + 800) {
    divisions.push(new Divisions(t, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }




  //create particle objects
  if(frameCount%60 === 0){
    particles.push(new Paricles(random(width/2-10,width/2+10),10,10));
  }
 
  


  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  
  


  //display the paricles
  if(frameCount%60 === 0){
    particles.push(new Paricles(random(width/2-10,width/2+10),10,10));
  } 


}