var canvas;
var music;
var box
var surface1,surface2,surface3,surface4
var edge1,edge2,edge3,edge4

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(860,600);

    //create 4 different surfaces
  surface1=createSprite(100,590,200,20)
  surface1.shapeColor="red"
  surface2=createSprite(320,590,200,20)
  surface2.shapeColor="yellow"
  surface3=createSprite(540,590,200,20)
  surface3.shapeColor="blue"
  surface4=createSprite(760,590,200,20)
  surface4.shapeColor="black"

    //create box sprite and give velocity
    box=createSprite(random(20,750),70,20,20)
    box.shapeColor="white"
    box.velocityX=3
    box.velocityY=3
    edge1=createSprite(857.5,300,5,600)
    edge2=createSprite(2.5,300,5,600)
    edge3=createSprite(430,2.5,860,5)
    edge4=createSprite(430,597.5,860,5)

}

function draw() {
    background("pink");
    box.bounceOff(edge2)
    box.bounceOff(edge1)
    box.bounceOff(edge3)
    box.bounceOff(edge4)
    
    //add condition to check if box touching surface and make it box
   if(surface1.isTouching(box) && box.bounceOff(surface1))
   {
       box.shapeColor="red"
   }

   if(surface2.isTouching(box) && box.bounceOff(surface2))
   {
       box.shapeColor="yellow"
       box.velocityX=0
       box.velocityY=0
       music.stop();
   }

   if(surface3.isTouching(box) && box.bounceOff(surface3))
   {
       box.shapeColor="blue"
   }

   if(surface4.isTouching(box) && box.bounceOff(surface4))
   {
       box.shapeColor="black"
       music.play();
   }
   

    drawSprites();
}
