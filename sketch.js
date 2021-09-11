const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world; 


var snow; 
var santa; 
var rope;

var snowflake, snowflakeImg; 
var ground; 
var ball1, ball2, ball3 , ball4, ball5, ball6, ball7, ball8, ball9, ball10, ball11, ball12, ball13 , ball14, ball15, ball16, ball17, ball18, ball19, ball20, ball21, ball22, ball23 , ball24, ball25, ball26, ball27, ball28, ball29, ball30  


function preload(){
  snow= loadImage("hoho1.png"); 
  snowflakeImg= loadImage("snowflake1.png")
 
}

function setup() {
  createCanvas(1400,800);
  engine= Engine.create();
  world= engine.world; 

  ground= new Ground(600,600,1700,20); 
 santa= new Santa(1500,500,250); 
rope= new Rope(santa.body, {x:700, y:400});
ball1= new Ball(600, 50, 50); 
ball2= new Ball(500, 50, 50); 
ball3= new Ball(400, 50, 50); 
ball4= new Ball(300, 50, 50); 
ball5= new Ball(100, 50, 50); 
ball6= new Ball(200, 50, 50); 
ball7= new Ball(450, 50, 50); 
ball8= new Ball(550, 50, 50); 
ball9= new Ball(650, 50, 50); 
ball10= new Ball(350, 50, 50); 
ball11= new Ball(600, 50, 50); 
ball12= new Ball(500, 50, 50); 
ball13= new Ball(400, 50, 50); 
ball14= new Ball(300, 50, 50); 
ball15= new Ball(100, 50, 50); 
ball16= new Ball(210, 50, 50); 
ball17= new Ball(460, 50, 50); 
ball18= new Ball(590, 50, 50); 
ball19= new Ball(610, 50, 50); 
ball20= new Ball(530, 50, 50); 
ball21= new Ball(600, 50, 50); 
ball22= new Ball(500, 50, 50); 
ball23= new Ball(400, 50, 50); 
ball24= new Ball(300, 50, 50); 
ball25= new Ball(100, 50, 50); 
ball26= new Ball(210, 50, 50); 
ball27= new Ball(460, 50, 50); 
ball28= new Ball(590, 50, 50); 
ball29= new Ball(610, 50, 50); 
ball30= new Ball(530, 50, 50); 




//Engine.run(engine); 
}


function draw() {
  background(snow);  
 Engine.update(engine);

 textSize(1005)
 text("Hello, 700,500"); 
fill("white")


 ground.display(); 
 santa.display(); 
 rope.display(); 
 ball1.display(); 
 ball2.display(); 
 ball3.display(); 
 ball4.display(); 
 ball5.display(); 
 ball6.display(); 
 ball7.display(); 
 ball8.display(); 
 ball9.display(); 
 ball10.display(); 
 ball11.display(); 
 ball12.display(); 
 ball13.display(); 
 ball14.display(); 
 ball15.display(); 
 ball16.display(); 
 ball17.display();     
 ball18.display(); 
 ball19.display(); 
 ball20.display(); 
 ball21.display(); 
 ball22.display(); 
 ball23.display(); 
 ball24.display(); 
 ball25.display(); 
 ball26.display(); 
 ball27.display(); 
 ball28.display();     
 ball29.display(); 
 ball30.display(); 
 


 drawSprites(); 
 createSnowflake();
}

function mouseDragged(){
  Matter.Body.setPosition(santa.body, {x:mouseX, y:mouseY});

}

function createSnowflake(){
  if(frameCount%10===0){
    snowflake= createSprite(random(0,4000),0,50,50);
    snowflake.velocityX= -2; 
    snowflake.velocityY= 4
    snowflake.addImage(snowflakeImg);
    snowflake.scale= 0.5; 
  }
}