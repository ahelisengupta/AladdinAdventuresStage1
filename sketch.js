var bg;
var aladdin,aladdinImg;
var genie,genieImg;
var carpet,carpetImg;
var playButton,playButtonImg;

function preload(){
    bg= loadImage("Images/bg0.jpg");
    aladdinImg=loadImage("Images/aladdin.png");
    genieImg=loadImage("Images/genie.png");
    carpetImg=loadImage("Images/Carpet.png");
    playButtonImg=loadImage('Images/PlayButton.png');
}
function setup() {
  createCanvas(windowWidth,windowHeight);

  carpet=createSprite(width/2-400, height/2+250);
  carpet.addImage(carpetImg);
  carpet.scale=0.8;

  aladdin=createSprite(width/2-425, height/2);
  aladdin.scale=0.5;
  aladdin.addImage(aladdinImg);

  genie=createSprite(width/2+400, height/2);
  genie.scale=0.8;
  genie.addImage(genieImg);

  playButton=createSprite(width/2,height/2+125);
  playButton.addImage(playButtonImg);
  playButton.scale=0.15;
}

function draw() {
  background(bg);  
  textSize(25);
  fill(254,182,21);
  stroke("white");
  text("Instructions :\n 1) Use arrow keys to move Aladdin \n 2) Avoid hurdles to reach the final level \n 3) You have 3 lives to save Jasmine from Jafar",width/2-250,height/2-50);

  drawSprites();
}