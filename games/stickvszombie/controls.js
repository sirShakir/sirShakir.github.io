var jumpTimer = 0;
var jumpEnd = 10;
var jumping = false;

document.body.onkeydown = function(e){
    if(e.keyCode == 79){
        player1.x-=squareWidth;
        player1.xGrid--;
        player1.focus = "left";
        player1.playerImage.src = "projectAssets/stickShootLEFT.png";
    }
    if(e.keyCode == 80){
        player1.x+=squareWidth;
        player1.xGrid++;
        player1.focus = "right";
        player1.playerImage.src = "projectAssets/stickShootR.png";
    }
    if(e.keyCode == 32){
        if(player1.focus == "right" && player1.ammo > 0){
         bullet1 = new bulletComponnent("right");
         player1.ammo--;
        }

        if(player1.focus == "left" && player1.ammo > 0){
         bullet1 = new bulletComponnent("left");
         player1.ammo--;
        }         
    }
    if(e.keyCode == 81){ 
        player1.isJumping = true; 
        //console.log(player1.score);
        //console.log(player1.ammo);
        //console.log(player1.jumpingCounter);
    }
}
var bullet1;
