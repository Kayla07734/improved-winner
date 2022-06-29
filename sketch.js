var canvas;
var backgroundImage;
var bgImg;
var database;
var myGameState,myPlayerCount
var car1,car2,cars,car1Img,car2Img,trackImg
var allPlayers

// mine >:)
var myForm,Mygame,myPlayer

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Img= loadImage("./assets/car1.png");
  car2Img= loadImage("./assets/car2.png");
  trackImg= loadImage("./assets/track.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  Mygame = new Game()
  Mygame.start()
  Mygame.getState()
}

function draw() {
  background(backgroundImage);
  if(myPlayerCount === 2){

    Mygame.updateState(1)
  }
  if(myGameState === 1){
Mygame.play()
  }



}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
