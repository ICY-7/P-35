var dog, happyDog, database, foodS, foodStock

function preload() {
	happyImg = loadImage("images/dogImg.png")
  dogImg = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database()
  
  dog = createSprite(250, 250)
  dog.addImage(dogImg)
  dog.scale = 0.6

  foodStock = database.ref('Food');
  foodStock.on("value", readStock)
}


function draw() {  
  background((46, 139, 87))
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage = happyImg;
  }

  drawSprites();
}

function readStock (data) {
  foodS = data.val();
}

function writeStock (x) {
  database.ref('/').update({
    Food:x
  })
}