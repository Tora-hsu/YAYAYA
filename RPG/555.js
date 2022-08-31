let mapArray, ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy;
//mapArray - 決定地圖中每個格子的元素
//ctx - HTML5 Canvas用
//currentImgMainX, currentImgMainY - 決定主角所在座標
// imgMountain, imgMain, imgEnemy - 障礙物, 主角, 敵人的圖片物件
const gridLength = 80;
// 網頁載入完成後初始化動作
$(function(){
    mapArray = [ //0-可走,1-障礙,2-終點,3-敵人
        [0,0,0,0,3,0,1,1,3,0],
        [1,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,3,0,1,1,1,0],
        [1,0,1,0,3,0,1,1,3,1],
        [0,0,0,0,3,0,1,0,0,0],
        [0,1,0,0,3,0,1,0,3,0],
        [0,1,0,0,3,0,0,0,3,0],
        [0,0,0,0,3,0,1,0,3,1],
        [0,1,0,0,0,0,1,0,0,0],
        [3,1,2,1,0,1,1,1,3,0]
    ];
    ctx = $("#myCanvas")[0].getContext("2d");

    imgMain = new Image();
    imgMain.src = "RPG/images/spriteSheet.png";
    currentImgMain = {
        "x":0,
        "y":0
    };
    imgMain.onload = function(){
        ctx.drawImage(imgMain,0,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
    };
    imgMountain = new Image();
    imgMountain.src = "RPG/images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "RPG/images/Enemy.png";
    imgMountain.onload = function(){
        imgEnemy.onload = function(){
            for(var x in mapArray){
                for(var y in mapArray[x]){
                    if(mapArray[x][y]==1){
                        ctx.drawImage(imgMountain,32,65,32,32,y*gridLength,x*gridLength,gridLength,gridLength);
                    }else if(mapArray[x][y]==3){
                        ctx.drawImage(imgEnemy,7,40,103,135,y*gridLength,x*gridLength,gridLength,gridLength);
                    }
                }
            }
        }
    }
});

//處理使用者按下按鍵
$(document).on("keydown",function(event){
    let targetImg, targeBlock, cutImagePositionX;
    // cutImagePositionX - 決定主角臉朝向哪個方向
    targetImg = { //主角的目標座標 
        "x":-1,
        "y":-1
    };
    targeBlock = { //主角的目標(對應2維陣列)
        "x":-1,
        "y":-1
    }
    event.preventDefault();
    //避免鍵盤預設行為發生，如卷動/放大/換頁
    //判斷使用者按下甚麼並推算目標座標
    console.log(event)
    switch(event.originalEvent.code){
        case "ArrowLeft":
            targetImg.x = currentImgMain.x - gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 175;//臉朝左
            break;
        case "ArrowUp":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y - gridLength;
            cutImagePositionX = 355;//臉朝上
            break;
        case "ArrowRight":
            targetImg.x = currentImgMain.x + gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 540;//臉朝右
            break;
        case "ArrowDown":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y + gridLength;
            cutImagePositionX = 5;//臉朝下
            break;
            default://其他按鍵不處理
            return; 
    }
    if(targetImg.x<=720 && targetImg.x>=0 && targetImg.y <=720 && targetImg.y>=0){
        targeBlock.x = targetImg.y/gridLength;
        targeBlock.y = targetImg.x/gridLength;
    }else{
        targeBlock.x = -1;
        targeBlock.y = -1;
    }

    //清空主角原本所在的位置
    ctx.clearRect(currentImgMain.x,currentImgMain.y,gridLength,gridLength);

    if(targeBlock.x!=-1 && targeBlock.y!=-1){

        switch(mapArray[targeBlock.x][targeBlock.y]){
            case 0: //一般道路(可移動)
                $("#talkBox").text("");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 1: //有障礙物(不可移動)
                $("#talkBox").text("有山");
                break;
            case 2: //終點(可移動)
                $("#talkBox").text("抵達終點");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 3: //敵人(不可移動)
                $("#talkBox").text("哈摟");
                break;
        }
    }else{
        $("#talkBox").text("邊界");
    }

    //重新繪製主角
    ctx.drawImage(imgMain, cutImagePositionX,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
});