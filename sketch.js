var gamestate=0,starttime=180;
var player1,player2,ballimg;
var backgroundimg,shieldtime=0;
var ground, ball,time1=0;
var p1score=0,p2score=0;
function preload(){
  backgroundimg=loadImage("images/bg.jpg");
  ballimg=loadImage("images/ball.png");
}


function setup() {
  createCanvas(displayWidth-30,displayHeight-152);  //width, height
  
  ground=createSprite(width/2,height-75,width,20)
  player1=createSprite(600, height-130, 30, 90);
  player2=createSprite(700, height-130, 30, 90);
  ball=createSprite(650,380,50,50);
  ball.addImage(ballimg);

  player1.shapeColor="red";
  player2.shapeColor="yellow";
  ball.shapeColor="orange";
  ball.scale=0.20;
  
  player1.debug=true;
  player2.debug=true;
  ball.debug=true;
  ball.setCollider("circle",0,0,100)
}

function draw() {
  background(backgroundimg);
  fill("orange");
  rectMode(CENTER); 
  rect(1110,230,85,10)

  console.log("X: " + mouseX); //1066 1152
  console.log("Y: " + mouseY);//217 220

  
  

   

  if(gamestate===0){
    starttime--;
    textSize(55);
    fill("black")
    if(starttime>120){
      text("3",width/2-10,200);
    }
    else if(starttime>60 && starttime<=120){
      text("2",width/2-10,200);
    }
    else if(starttime>0 && starttime<=60){
      text("1",width/2-10,200);
    }
    else{
      gamestate=1;
    }
  }
  else if(gamestate===1){
    //MOVEMENT OF BALL  
    ball.bounceOff(ground);
    if(ball.y<=475){
      ball.velocityY=3;
    }

    //PLAYER 1 controls
    //Player 1 jump - W
    if((keyDown(87) || keyDown(119)) && player1.collide(ground)){
      player1.velocityY=-13 
    }
    //Left Move - A
    if(keyDown(65) || keyDown(97)){
      player1.x=player1.x-5;
    }
    //Right Move - D
    if(keyDown(68) || keyDown(100)){
      player1.x=player1.x+5;
    }
    //Power - Z
    if((keyDown(90)|| keyDown(122))&& time1<0){
      teleport();
      time1 = 1200;
    }
    time1--;
    //console.log(time1);

    //Gravity
    player1.velocityY=player1.velocityY+0.5;
    player1.collide(ground);  

    
    //PLAYER 2 controls
    //Player 2 jump - UP
    if(keyDown(UP_ARROW) && player2.collide(ground)){
      player2.velocityY=-13
    }
    //Left Move - LEFT
    if(keyDown(LEFT_ARROW)){
      player2.x=player2.x-5;
    }
    //Right Move - RIGHT
    if(keyDown(RIGHT_ARROW)){
      player2.x=player2.x+5;
    }
    //Power - K
    shield();


    player2.velocityY=player2.velocityY+0.5;
    player2.collide(ground);

    if(player1.isTouching(ball)){
      ball.x=player1.x+20;
    }
    else if(player2.isTouching(ball)){
      ball.x=player2.x+20;
    }
  }
  else{ //gamestate = 2

  }
   


  
 

  
  drawSprites();
}

function keyPressed(){
  //PLAYER 1 CONTRoLS
  
}