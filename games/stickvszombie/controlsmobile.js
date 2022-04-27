function moveUP(){
    player1.isJumping = true; 
}

function moveLEFT(){
    player1.x-=squareWidth;
    player1.xGrid--;
    player1.focus = "left";
    player1.playerImage.src = "projectAssets/stickShootLEFT.png"; 
}

function moveRIGHT(){
    player1.x+=squareWidth;
    player1.xGrid++;
    player1.focus = "right";
    player1.playerImage.src = "projectAssets/stickShootR.png";
}

function moveSHOOT(){
    if(player1.focus == "right" && player1.ammo > 0){
        bullet1 = new bulletComponnent("right");
        player1.ammo--;
       }

    if(player1.focus == "left" && player1.ammo > 0){
        bullet1 = new bulletComponnent("left");
        player1.ammo--;
    }   
}