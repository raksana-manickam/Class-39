var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1Ig, car2Ig, car3Ig, car4Ig, trackIg;

function preload(){

  car1Ig = loadImage("car1.png");
  car2Ig = loadImage("car2.png");
  car3Ig = loadImage("car3.png");
  car4Ig = loadImage("car4.png")
  trackIg = loadImage("track.jpg")

}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
}
