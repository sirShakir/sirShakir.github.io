var liveZombiesArray= [];
//var finalX = zombies x value start -1 or 7
//var finalY = zombies y value must be between 2.4 - 2.8
//var finalDirection = zombie direction can be left or right

/*var zombie6 = new zombieComponnent(1,squareWidth*6,squareHeight*2.8,"left");
var zombie37 = new zombieComponnent(squareWidth*1,squareHeight*2.5,"right");
var zombie1 = new zombieComponnent(squareWidth*6.2,squareHeight*2.7,"left");
var zombie2 = new zombieComponnent(squareWidth*6.5,squareHeight*2.6,"left");

var zombie23 = new zombieComponnent(squareWidth*6.3,squareHeight*2.8,"left");
var zombie24 = new zombieComponnent(squareWidth*7,squareHeight*2.5,"left");
var zombie52 = new zombieComponnent(squareWidth*8,squareHeight*2.4,"left");


var zombie37 = new zombieComponnent(squareWidth*1,squareHeight*2.5,"right");
var zombie66 = new zombieComponnent(squareWidth*0,squareHeight*2.4, "right");
var zombie4 = new zombieComponnent(squareWidth*-1,squareHeight*2.4, "right");

var zombie48 = new zombieComponnent(squareWidth*-1,squareHeight*2.5, "right");
var zombie49 = new zombieComponnent(squareWidth*-4,squareHeight*2.6, "right");
var zombie40 = new zombieComponnent(squareWidth*-0,squareHeight*2.7, "right");
var zombie400 = new zombieComponnent(squareWidth*-2,squareHeight*2.4, "right");*/


function zombieComponnent(health,x,y,direction){
    this.health = health;
    this.x = x;
    this.y = y;
    this.xGrid = Math.round(this.x / squareWidth); 
    this.yGrid = 3;

    this.timer = 0;
    this.focus = direction;

    this.dead = false;

    this.zombieImage = new Image(); //player img with src
    getZombieImage(this);

    liveZombiesArray.push(this);

    this.update = function(){
        var parentThis = this;
        if(parentThis.health > 0){
           zombieWalks(parentThis); 
        }
        else{

        }
        touchedByZombie(parentThis); 
        drawZombie(parentThis);
    }//end of update function
}

function drawZombie(thisZombie){
    ctx.drawImage(thisZombie.zombieImage,thisZombie.x,thisZombie.y,squareWidth,squareHeight); 
}

function zombieWalks(thisZombie){
    if(thisZombie.focus == "left"){
       thisZombie.x--; 
    }
    else if(thisZombie.focus == "right"){
        thisZombie.x++;
    }
    
    thisZombie.xGrid = Math.round(thisZombie.x/squareWidth);

    if(thisZombie.timer > 10){
       getZombieImage(thisZombie); 
       thisZombie.timer = 0;
    }
    thisZombie.timer++;
}

function getZombieImage(thisZombie){
    var randomNumber = Math.floor(Math.random() * 5) + 1; 
    if(thisZombie.focus == "left"){
        if( randomNumber == 1)
            thisZombie.zombieImage.src = "projectAssets/zWalkLeft/zWalk1.png";
        if( randomNumber == 1)
            thisZombie.zombieImage.src = "projectAssets/zWalkLeft/zWalk2.png";
        if( randomNumber == 3)
            thisZombie.zombieImage.src = "projectAssets/zWalkLeft/zWalk3.png";
        if( randomNumber == 4)
            thisZombie.zombieImage.src = "projectAssets/zWalkLeft/zWalk4.png";
        if( randomNumber == 5)
            thisZombie.zombieImage.src = "projectAssets/zWalkLeft/zWalk5.png"; 
    }
    else if( thisZombie.focus == "right"){
        if( randomNumber == 1)
            thisZombie.zombieImage.src = "projectAssets/zWalkRight/zWalk10.png";
        if( randomNumber == 1)
            thisZombie.zombieImage.src = "projectAssets/zWalkRight/zWalk11.png";
        if( randomNumber == 3)
            thisZombie.zombieImage.src = "projectAssets/zWalkRight/zWalk13.png";
        if( randomNumber == 4)
            thisZombie.zombieImage.src = "projectAssets/zWalkRight/zWalk14.png";
        if( randomNumber == 5)
            thisZombie.zombieImage.src = "projectAssets/zWalkRight/zWalk15.png"; 
    }

 
}

function zombieLoseHealth(thisZombie){
    if(thisZombie.health >= 1){
       thisZombie.health--; 
    }
    if ( thisZombie.health < 1){
        thisZombie.dead = true; 
        zombieDeath(thisZombie);
        player1.score++;
    }
}

function zombieDeath(thisZombie){
    var randomNumber = Math.floor(Math.random() * 200) - squareHeight/3; 
    var numRan = Math.floor(Math.random() * 3) + 1; 

    if(thisZombie.focus == "left"){
        if(numRan == 1)
        thisZombie.zombieImage.src = "projectAssets/zWalkLeft/zDIE.png";
        else if(numRan == 2)
        thisZombie.zombieImage.src = "projectAssets/zWalkLeft/die5.png";
        else if(numRan == 3)
        thisZombie.zombieImage.src = "projectAssets/zWalkLeft/die6.png";

        thisZombie.y = thisZombie.y + randomNumber;
    }  
    else if(thisZombie.focus == "right"){
        if(numRan == 1)
        thisZombie.zombieImage.src = "projectAssets/zWalkRight/zDIE.png";
        else if(numRan == 2)
        thisZombie.zombieImage.src = "projectAssets/zWalkRight/die2.png";
        else if(numRan == 3)
        thisZombie.zombieImage.src = "projectAssets/zWalkRight/die3.png";
        thisZombie.y = thisZombie.y + randomNumber;
    } 

}

function touchedByZombie(thisZombie){
    if(thisZombie.xGrid == player1.xGrid && thisZombie.dead == false && thisZombie.yGrid == player1.yGrid){
        player1.health--;
    }
}
