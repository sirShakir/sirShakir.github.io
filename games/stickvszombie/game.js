var mainMenu = true;
var showTime = false;
var winnerORlosser = false;

function update(){
    if(mainMenu == true){
        mainMenuScreen();
    }
    else if(mainMenu == false && showTime == true ){
        ctx.clearRect(0,0, 2000, 5000);
        drawHealth();
        drawScore();
        drawMagz();
        //////////
        generatePackages();
        checkForCarePackages();
        generateZombies();
        checkForLiveZombies()
        /////////
        player1.update();
        checkForLiveBullets();
    }
    else if( mainMenu == false && showTime == false && winnerORlosser == true){
        winnerORlosserScreen();
    }
  

}

setInterval(update,40);

function checkForCarePackages(){
    for(var z = 0; z < carePackageArray.length; z++){
        carePackageArray[z].update();
    }
}

function checkForLiveBullets(){
    for(var z = 0; z < liveBulletsArray.length; z++){
        liveBulletsArray[z].update();
    }
}

function checkForLiveZombies(){
    for(var z = 0; z < liveZombiesArray.length; z++){
        liveZombiesArray[z].update();
    }
}

function generateZombies(){
    var chanceZombieSpawn = Math.floor(Math.random() * 1000);
    chanceZombieSpawn = chanceZombieSpawn + player1.score;
    var chanceHealth = Math.floor(Math.random() * 5) + 1;
    var chanceY = Math.floor(Math.random() * 5);
    if(chanceY == 0){
        chanceY = 2.4;
    }
    else if(chanceY == 1){
        chanceY = 2.5;
    }
    else if(chanceY == 2){
        chanceY = 2.6;
    }
    else if(chanceY == 3){
        chanceY = 2.7;

    }
    else if(chanceY == 4){
        chanceY = 2.8;

    }
    var chanceX;
    var chanceDirection = Math.floor(Math.random() * 2);
    if(chanceDirection == 0){
        chanceDirection = "left";
        chanceX = 7;

    }
    else{
        chanceDirection = "right";
        chanceX = -1;

    }

    if(chanceZombieSpawn > 990){
      var newZombie = new zombieComponnent(chanceHealth,squareWidth*chanceX,squareHeight*chanceY,chanceDirection);  
    }
    
}

var packageSpawnTimer = 0;
function generatePackages(){
    var chancePackage = Math.floor(Math.random() * 1000);
    var chanceDirection = Math.floor(Math.random() * 2);
    var chanceSpeed = Math.floor(Math.random() * 10) + 1;
    var chanceSize = Math.floor(Math.random() * 100);
    var chanceHealth = Math.floor(Math.random() * 30) + 1;
    if(chanceDirection == 0){
        chanceDirection = "left";

    }
    else{
        chanceDirection = "right";
    }
    if(chancePackage < 10){
        var chancePackageType = Math.floor(Math.random() * 10);
        if(chancePackageType <= 6 ){
            var newAmmoPack = new ammoComponnent(chanceSpeed,chanceSize,"left");
            //console.log("new package comming");
            packageSpawnTimer = 0; 
        }
        else if(chancePackageType == 7 || chancePackageType == 8){
            var newHealthPack = new healthComponnent(chanceSpeed,chanceHealth,"left");
            packageSpawnTimer = 0; 
        }
        else if(chancePackageType == 9){
            var newNuke = new nukeComponnent(chanceSpeed,"left");
            //console.log("new package comming");
            packageSpawnTimer = 0; 
        }
    }
    
}



