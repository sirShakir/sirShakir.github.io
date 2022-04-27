var imgP = new Image(); //player img with src
this.imgP.src = "projectAssets/stickShootR.png";

var imgZ1 = new Image(); //player img with src
this.imgZ1.src = "projectAssets/zWalkLeft/zWalk1.png";
var imgZ2 = new Image(); //player img with src
this.imgZ2.src = "projectAssets/zWalkLeft/zWalk1.png";

function mainMenuScreen(){
    ctx.clearRect(0,0, 2000, 5000);
    ctx.font = "2vw Arial";
    ctx.fillText("Inspired by Square's Revenge. This dont die survival game has no rules.",squareWidth*1.3,squareHeight*.5);
    ctx.fillText("Just dont die by using the left/right/up/center keys to move, jump and shoot.",squareWidth*1.2,squareHeight*.8);

    ctx.font = "5vw Arial";
    ctx.fillText("Stickman vs Zombies",squareWidth*1.8,squareHeight*1.3);
    ctx.fillText("Click to begin",squareWidth*2.3,squareHeight*2);
    
    ctx.drawImage(imgP,squareWidth*3,squareHeight*2.7,squareWidth,squareHeight);

    ctx.drawImage(imgZ1,squareWidth*2,player1.y,squareWidth,squareHeight); 
    ctx.drawImage(imgZ2,squareWidth*4,player1.y,squareWidth,squareHeight); 
    
}