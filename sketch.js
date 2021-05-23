var bg, bgImg;
var cat, catImg, catAni;
var mouse, mouseImg, mouseAni;


function preload() {
    //load the images here

    bgImg=loadImage("garden.png");
    catImg= loadImage("cat1.png");
    catImg2= loadImage("cat4.png");
    mouseImg= loadImage("mouse1.png");
    catAni=loadAnimation("cat2.png","cat3.png");
    mouseAni= loadAnimation("mouse2.png","mouse3.png");
}

function setup(){
    createCanvas(1000,800);

    bg=createSprite(500,400,50,20);
    bg.addImage("background",bgImg);

    //create tom and jerry sprites here
    cat= createSprite(900,650, 20,20);
    cat.addImage("cat",catImg);
    cat.scale=0.15;
    

    mouse= createSprite(100,650,20,20);
    mouse.addImage("mouse",mouseImg);
    mouse.scale=0.1;
   
}

function draw() {

    background(255);
    
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width-mouse.width)/2){
       cat.velocityX=0
       cat.addImage("happyCat", catImg2);
       cat.changeImage("happyCat");

       mouse.changeImage("mouse",mouseImg);
    }
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyDown("LEFT")){
     cat.velocityX= -4;
     cat.addAnimation("catRunning", catAni);
     cat.changeAnimation("catRunning");
     cat.frameDelay= 10;

     mouse.addAnimation("mouseTease", mouseAni);
     mouse.changeAnimation("mouseTease");
     mouse.frameDelay= 25;
}

  


}
