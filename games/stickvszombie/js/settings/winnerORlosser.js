function winnerORlosserScreen(){
    ctx.clearRect(0,0, 2000, 5000);
    ctx.font = "4vw Arial";
    ctx.fillText("Aww you died, too bad",squareWidth*2.1,squareHeight);
    ctx.fillText("You scored: " + player1.score,squareWidth*2.6,squareHeight*2);
    ctx.fillText("Click to play again" ,squareWidth*2.3,squareHeight*3);
}

function restartVarablies(){
    player1 = new playerComponnent();
    liveZombiesArray = [];
    liveBulletsArray = [];
    carePackageArray = [];
}
