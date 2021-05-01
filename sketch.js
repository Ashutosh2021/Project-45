var man , manImg;
var bgImg;
var bg;
var  corona , coronaImg;
var mask,maskImg,maskG;

function preload(){

  manImg=loadAnimation("images/Transparent img/man1.png","images/Transparent img/man2.png"
                      ,"images/Transparent img/man3.png","images/Transparent img/man4.png",
                      "images/Transparent img/man5.png","images/Transparent img/man6.png"
                      ,"images/Transparent img/man7.png","images/Transparent img/man8.png");
  bgImg=loadImage("images/bg.jpg");
  coronaImg=loadImage("images/corona.png");
  maskImg=loadImage("images/mask.png");
}

function setup(){

  createCanvas(1200,600);

  bg=createSprite(900,250);
  bg.addImage(bgImg);
  bg.scale=2.2;
  bg.velocityX=-10;

  man=createSprite(400,385,40,30);
  man.addAnimation("running",manImg);

  corona=createSprite(150,390,50,50);
  corona.addImage(coronaImg);
  corona.scale=0.5;
  
  maskG=new Group();
  mask=createSprite(1500,370,30,40);
  mask.addImage(maskImg);
  mask.scale=0.3;
  mask.setLifetime=20;
  mask.velocityX=-3;
  maskG.add(mask);

}

function draw(){
  background(255);

  if(bg.x<350){
    bg.x=900;
  }

  drawSprites();
}

function spawnItems(){

  if(frameCount%20==0){
    mask1();
  }

}
function mask1(){

  mask=createSprite(200,370,30,40);
  mask.addImage(maskImg);
  mask.scale=3;
  mask.setLifetime=250;
  mask.velocityX=-3;
  maskG.add(mask);
}