var liveBulletsArray = [];

var bulletSrcOne = "projectAssets/bulletRight.png"
var bulletSrcTwo = "projectAssets/bulletMiddle.png";
var bulletSrcThree = "projectAssets/bulletLeft.png";

var bullet1 = new bulletComponnent("right");

function bulletComponnent(direction){
    this.type = "bullet";


    this.y = squareHeight*player1.yGrid;
    
    if(direction == "left"){
        this.picNumber = 1;
        this.x = squareWidth*(player1.xGrid-1);
    }else if (direction == "right"){
        this.picNumber = 3;
        this.x = squareWidth*(player1.xGrid+1);
    }
    
    this.xGrid = Math.round(this.x / squareWidth); 
    this.yGrid = Math.round(this.y / squareHeight);

    this.timer = 0;
    this.direction = direction;
    
    this.bulletImage = new Image(); //player img with src
    //this.bulletImage.src = "projectAssets/bulletRight.png";

    liveBulletsArray.push(this);//push to array to be updated and rendered

    this.update = function(){
        var parentThis = this;
        //findBulletImage(parentThis);
       moveBullet(parentThis);
        drawBullet(parentThis);
    }//end of update function
}

function drawBullet(thisBullet){
    ctx.drawImage(thisBullet.bulletImage,thisBullet.x,thisBullet.y,squareWidth,squareHeight); 
}

function moveBullet(thisBullet){
    if(thisBullet.timer > 20){
        if(thisBullet.direction == "right"){
            thisBullet.picNumber = 3;
            thisBullet.x+= squareWidth;
            thisBullet.xGrid++;
        }else{
            thisBullet.picNumber = 1;
            thisBullet.x-= squareWidth;
            thisBullet.xGrid--;
        }
        thisBullet.timer = 0;     
    }
    else if(thisBullet.timer == 14){
        bulletImageDoesMath(thisBullet);
    }
    else if (thisBullet.timer == 7){
        bulletImageDoesMath(thisBullet);
    }
    findBulletImage(thisBullet);
    thisBullet.timer++;
}

function findBulletImage(thisBullet){
    if(thisBullet.picNumber == 1){
        thisBullet.bulletImage.src = bulletSrcOne;
    }
    else if(thisBullet.picNumber == 2){
        thisBullet.bulletImage.src = bulletSrcTwo;
    }
    else if(thisBullet.picNumber == 3){
        thisBullet.bulletImage.src = bulletSrcThree;
    }
}

function bulletImageDoesMath(thisBullet){
    if(thisBullet.direction == "right"){
        if(thisBullet.picNumber == 1)
            thisBullet.picNumber = 3;
        else    
            thisBullet.picNumber--;
    }
    else if (thisBullet.direction == "left"){
        if(thisBullet.picNumber == 3)
            thisBullet.picNumber = 1;
        else    
            thisBullet.picNumber++;
    }
}
