var liveBulletsArray = [];

var bulletSrcOne = "projectAssets/bulletRight.png"
var bulletSrcTwo = "projectAssets/bulletMiddle.png";
var bulletSrcThree = "projectAssets/bulletLeft.png";



function bulletComponnent(direction){
    this.type = "bullet";

    this.bulletImage = new Image(); //player img with src
    
  
    if(direction == "left"){
        this.bulletImage.src = "projectAssets/bulletRight.png";
        this.x = squareWidth*(player1.xGrid-1);
        //console.log("bullet X is :" + this.x);
    }else if (direction == "right"){
        this.bulletImage.src = "projectAssets/bulletLeft.png";
        this.x = squareWidth*(player1.xGrid+1);
        //console.log("bullet X is :" + this.x);
    } 

    this.y = player1.y;
    this.xGrid = Math.round(this.x / squareWidth); 
    this.yGrid = Math.round(this.y / squareHeight);
    this.timer = 0;
    this.direction = direction;
    
    liveBulletsArray.push(this);//push to array to be updated and rendered

    this.update = function(){
        var parentThis = this;
        //doesBulletHitZombie(parentThis);
        moveBullet(parentThis);
        doesBulletHitZombie(parentThis);
        drawBullet(parentThis);
    }//end of update function
}

function drawBullet(thisBullet){
    ctx.drawImage(thisBullet.bulletImage,thisBullet.x,thisBullet.y,squareWidth,squareHeight); 
}

function moveBullet(thisBullet){
    if(thisBullet.timer > 2){
        if(thisBullet.direction == "right"){
            thisBullet.x+=(squareWidth/4);
            thisBullet.xGrid = Math.round(thisBullet.x/squareWidth);
  
        }else{
            thisBullet.x-=(squareWidth/4);
            thisBullet.xGrid = Math.round(thisBullet.x/squareWidth);
        }
        thisBullet.timer = 0;     
    }
    thisBullet.timer++;
}

function doesBulletHitZombie(thisBullet){
    
    
    for(var z = 0; z < liveZombiesArray.length; z++){
        
        var targetArea = liveZombiesArray[z].x;
        //if(thisBullet.x == liveZombiesArray[z].x && liveZombiesArray[z].dead == false){
        //if( thisBullet.xGrid == liveZombiesArray[z].xGrid && liveZombiesArray[z].dead == false){
        if( thisBullet.direction == "right" && thisBullet.x > targetArea && thisBullet.x < (targetArea + squareWidth) && liveZombiesArray[z].dead == false){
            //console.log("ok this is a good start");//need to kill zombie and remove the bullet
            removeBulletsFromArray(thisBullet);
            zombieLoseHealth(liveZombiesArray[z]);
            z = 1000;
            //console.log(z);
        }
        else if( thisBullet.direction == "left" && thisBullet.x > targetArea && thisBullet.x < (targetArea + squareWidth/4) && liveZombiesArray[z].dead == false){
            //console.log("ok this is a good start");//need to kill zombie and remove the bullet
            removeBulletsFromArray(thisBullet);
            zombieLoseHealth(liveZombiesArray[z]);
            z = 1000;
            //console.log(z);
        }
    }
    
}

function removeBulletsFromArray(thisBullet){
    if( liveBulletsArray.includes(thisBullet) ){
        var tempRemove = liveBulletsArray.indexOf(thisBullet);
        //console.log('Bullet was removed from game: ' +  thisBullet.type);
        liveBulletsArray.splice(tempRemove,1);
    }
}

