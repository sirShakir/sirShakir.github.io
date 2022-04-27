var player1 = new playerComponnent();

function playerComponnent(){
    this.health = 100;
    this.score = 0;
    this.ammo = 100;
    this.x = squareWidth*3;
    this.y = squareHeight*2.7;
    this.xGrid = Math.round(this.x / squareWidth); 
    this.yGrid = Math.round(this.y / squareHeight);


    this.isJumping = false;
    this.jumpingCounter = 0;
    this.jumpTimer = 0;
    this.focus = "right"; // this variable will be set to left or right

    this.playerImage = new Image(); //player img with src
    //this.playerImage.src = "projectAssets/stickShootLEFT.png";
    this.playerImage.src = "projectAssets/stickShootR.png";

    this.update = function(){
        var parentThis = this;
        checkForJump();
        checkHealth();
        drawPlayer();
    }//end of update function
}

function drawPlayer(){
    ctx.drawImage(player1.playerImage,player1.x,player1.y,squareWidth,squareHeight); 
}

function checkForJump(){ 

    if(player1.jumpTimer > 0){
        if(player1.isJumping == true && player1.jumpingCounter == 0){
            player1.yGrid--;
            player1.y -= squareHeight/2;
            player1.jumpingCounter+=0.5;
            player1.jumpTimer = 0;
         }
         else if(player1.isJumping == true && player1.jumpingCounter == 1){
             player1.y -= squareHeight/2;
             player1.jumpingCounter+=0.5;
             player1.jumpTimer = 0;
         }
         else if(player1.isJumping == true && player1.jumpingCounter == 2){
             player1.y -= squareHeight/2;
             player1.jumpingCounter+=0.5;
             player1.jumpTimer = 0;
         }
         else if(player1.isJumping == true && player1.jumpingCounter == 3){
             player1.y += squareHeight/2;
             player1.jumpingCounter+=0.5;
             player1.jumpTimer = 0;
         }
         else if(player1.isJumping == true && player1.jumpingCounter == 4){
             player1.y += squareHeight/2;
             player1.jumpingCounter+=0.5;;
             player1.jumpTimer = 0;
         }
         else if(player1.isJumping == true && player1.jumpingCounter == 5){
             player1.y += squareHeight/2;
             player1.y += squareHeight/2;
             /// have to double up on player.y becasue algorithms needs a 5.5 to even out
             player1.jumpingCounter+=0.5;
             player1.isJumping = false;
             player1.jumpingCounter = 0;
             player1.jumpTimer = 0;
             player1.yGrid++;
             landedOnZombie();
         }
         else if( player1.isJumping == true && player1.jumpingCounter < 3){
             player1.jumpingCounter+=0.5;
             player1.y -= squareHeight/2;
             player1.jumpTimer = 0;
         }
         else if(player1.isJumping == true && player1.jumpingCounter >= 3){
             player1.jumpingCounter+=0.5;
             player1.y += squareHeight/2;
             player1.jumpTimer = 0;
         }
    }
    
    player1.jumpTimer++;
}

function checkHealth(){
    if(player1.health < 1){
        showTime = false;
        winnerORlosser = true;
    }
}

function landedOnZombie(){
    for(var z=0; z < liveZombiesArray.length; z++){
        if(liveZombiesArray[z].xGrid == player1.xGrid && liveZombiesArray[z].dead == false && liveZombiesArray[z].yGrid == player1.yGrid){
            player1.health++;
            zombieLoseHealth(liveZombiesArray[z]);        
        } 
    }
}
