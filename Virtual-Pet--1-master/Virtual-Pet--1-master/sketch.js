//Create variables here
var dog, dogImg, happydog, database, foodS, foodStock;

function preload()
{
	dogImg = loadImage("images/dogImg.png");
  happydog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250, 10, 10);
  dog.scale = .1
  dog.addImage('dog', dogImg);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
  
    writeStock(foodS)
    dog.addImage('happydog', happydog)
  }
  drawSprites();
  //add styles here
textSize(18);
fill('white');
text("Press Up Arrow to Feed the Dog", 130, 100)
text("Food Left: "+ foodS, 180, 150);
}

function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if (x<=0){
    x = 0;
  }else {
    x = x-1;
  }

  database.ref('/').update({
    Food:x
  })
}

