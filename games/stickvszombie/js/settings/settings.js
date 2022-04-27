function drawHealth(){
    ctx.font = "4vw Arial";
    ctx.fillText("Health: " + player1.health,squareWidth*.2,squareHeight/3);
}

function drawScore(){
    ctx.font = "4vw Arial";
    ctx.fillText("Body Count: " + player1.score,squareWidth*2.5,squareHeight/3);
}

function drawMagz(){
    ctx.font = "4vw Arial";
    ctx.fillText("Ammo: " + player1.ammo,squareWidth*5,squareHeight/3);
}