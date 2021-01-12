//teleportation - 1
function teleport(){
    player1.x=1000;
    player1.y=200;
}
//shield - 2
function shield(){
    if(keyDown(75)|| keyDown(107)){
        shieldtime = 300;
       
      }
      if (shieldtime>0){
        rectMode(CENTER);
        rect(1100,200,100,10);
        if(ball.x > 1040 && ball.y < 250){
          ball.velocityX=ball.velocityX*(-1);
        }
      }
      shieldtime--;
}
function shoot(){
    //X - 1066 - 1152 - BASKET
    ball.velocityY=-4;
    ball.velocityX=4;
    //  - 970 - 1160
}

function basket(){
    //BASKET (player 1)
  if (ball.x>1060 && ball.x<1152 && ball.y<220){
    //SCORE
    //TEXT FOR SCORE
  }
}

function miss(){
    if(ball.x>970 && ball.x<1060){
        //MISS
    }   
}