var carePackageArray = [];
//var ammo1 = new ammoComponnent(1,1,"left");

/////////////Functions below should be same for all carePackages
function drawPackage(thisPackage){
    ctx.drawImage(thisPackage.playerImage,thisPackage.x,thisPackage.y,squareWidth,squareHeight); 
}

function movePackage(thisPackage){
    if(thisPackage.timer >= 20){
        if(thisPackage.direction == "right"){
            thisPackage.x+= squareWidth;
            thisPackage.xGrid++; 
        }else{
            thisPackage.x-= squareWidth;
            thisPackage.xGrid--;
        }
 
        thisPackage.timer = 0;
    }
    thisPackage.timer+=thisPackage.speed;
}

function checkForPlayer(thisPackage){
    if(thisPackage.xGrid == player1.xGrid && thisPackage.yGrid == player1.yGrid){
        //console.log("care package has been picked up by player");
        package2PlayerDoSomething(thisPackage);  
        removeCarePackageFromArray(thisPackage);
    }
}

// this method determines how a particular package will respawn to being picked up
function package2PlayerDoSomething(thisPackage){
    if(thisPackage.type == "ammo"){
        ammoDoSomething(thisPackage);
    }
    else if(thisPackage.type == "health"){
        healthDoSomething(thisPackage);
    }
    else if(thisPackage.type == "nuke"){
        nukeDoSomething(thisPackage);
    }
}

function removeCarePackageFromArray(thisPackage){
    if( carePackageArray.includes(thisPackage) ){
        var tempRemove = carePackageArray.indexOf(thisPackage);
        //console.log('Care Package was removed from game: ' +  thisPackage.type);
        carePackageArray.splice(tempRemove,1);
    }
}

