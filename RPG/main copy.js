let mapArray,ctx,currentImgMain;
let imgMountain,imgMain,imgEnemy;
//mapArray:遊戲地圖中的每個格子的元素
const gridLength =200;

$(function(){
   mapArray = [
      //0-可走,1-障礙,2-終點,3-敵人
      [0,1,1],
      [0,0,0],
      [3,1,2]
   ];
   ctx = $("#myCanvas")[0].getContext("2d");

   imgMain = new Image();
   imgMain.src = "images/spriteSheet.png";
   currentImgMain={
      "x":0,
      "y":0
   };

   
   imgMain.onload = function(){
      ctx.drawImage(imgMain,0,0,80,130,0,0,gridLength,gridLength)
   };
imgMountain = new Image();
imgMountain.src = "images/material.png";
imgEnemy = new Image();
imgEnemy.src = "images/Enemy.png";
imgMountain.onload = function(){
   imgEnemy.onload = function(){
      for(var x in mapArray){
         for(var y in mapArray[x]){
            if(mapArray[x][y]==1){
               //Draw Mountain
               ctx.drawImage(imgMountain,32,63,32,32,y*gridLength,x*gridLength,gridLength,gridLength)
            }else if(mapArray[x][y]==3){
               //Draw Enemy             
               ctx.drawImage(imgEnemy,7,40,104,135,y*gridLength,x*gridLength,gridLength,gridLength)
            }
         }
      }

   }
}


  });

  $(document).on("keydown",function(event){

  });