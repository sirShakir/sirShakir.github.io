
function nukeComponnent(speed,direction){
    this.speed = speed;
    this.timer = 0;
    this.type = "nuke";
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
    this.playerImage.src = "projectAssets/nuke.png";

    carePackageArray.push(this);//push to array to be updated and rendered

    this.update = function(){
        var parentThis = this;
        checkForPlayer(parentThis);
        movePackage(parentThis);
        drawPackage(parentThis);
    }//end of update function
}

//this function is called from carePackage.js doSomething method
function nukeDoSomething(thisPackage){
    //console.log("something was did: nuke style");
    for(var z=0; z < liveZombiesArray.length; z++){
        liveZombiesArray[z].health = 0;
        liveZombiesArray[z].dead = true; 
        player1.score++;
        zombieDeath(liveZombiesArray[z]);
    }
}

