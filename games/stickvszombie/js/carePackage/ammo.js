
function ammoComponnent(speed,size,direction){
    this.speed = speed;
    this.timer = 0;
    this.ammoSize = size;
    this.type = "ammo";
    this.direction = direction;
    if(direction == "left"){
        this.x = squareWidth*7;
        this.y = squareHeight*.5;
    }else if(direction == "right"){
        this.x = squareWidth*-1;
        this.y = squareHeight*.5;
    }
    
    this.xGrid = Math.round(this.x / squareWidth); 
    this.yGrid = 2;

    this.playerImage = new Image(); //player img with src
    this.playerImage.src = "projectAssets/ammo.png";

    carePackageArray.push(this);//push to array to be updated and rendered

    this.update = function(){
        var parentThis = this;
        checkForPlayer(parentThis);
        movePackage(parentThis);
        drawPackage(parentThis);
    }//end of update function
}

//this function is called from carePackage.js doSomething method
function ammoDoSomething(thisPackage){
    //console.log("something was did: ammo style");
    player1.ammo += thisPackage.ammoSize;
}

