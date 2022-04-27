document.getElementById("gameCanvas").addEventListener("click", function(event){

    if(mainMenu == true && showTime == false && winnerORlosser == false){
        mainMenu = false;
        showTime = true;
        //console.log('main menu screen');
    }
    else if(mainMenu == false && showTime == true && winnerORlosser == false){
        //console.log('do nothing when clicked');
    }
    else if(mainMenu == false && showTime == false && winnerORlosser == true){
        //console.log("game variables restarting");
        mainMenu = true;
        showTime = false;
        winnerORlosser = false;
        restartVarablies(); 
    }

 });