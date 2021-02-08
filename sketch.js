var fish1, fish2, fish3
var coin, score, background
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

function preload(){
    underTheSea = loadImage("Images/underTheSea.jpg")
}

function setup(){


var canvas, backgroundImage;


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game1 = new game();
  game1.getState();
  game1.start();
}


function draw(){
  if(playerCount === 4){
    game1.update(1);
  }
  if(gameState === 1){
    clear();
    game1.play();
  }
  if(gameState===2){
    game1.end();
  }
}


}
