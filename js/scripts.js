// Back-end
function Player (){ //change to a player object.**
  this.score = 0;
  this.rolls = [];
  this.totalScore = 0;
}

var randomNumber;
var upper = 6;
var rollValue;

// CREATES A RANDOM NUMBER, AND ASSIGNS A POINTS VALUE TO IT. PUSHES ROLLS TO ROLL
Player.prototype.getRandomNumber = function() { //this should be a prototype that runs on a player object
  randomNumber = Math.floor(Math.random() * upper) + 1;
  if (randomNumber === 1){
  this.score = 0;
  alert("You rolled a 1! Your turn is over!");
  this.rolls = [];
  }
  else {
  rollValue = randomNumber;
  this.rolls.push(rollValue);
  }
}

Player.prototype.calculateScore = function() {
  for (var i=0 ; i < this.rolls.length ; i++ ){
    this.score += this.rolls[i];
  } this.totalScore += this.score;
  this.rolls = [];
}
//
// Player.prototype.calculateScore = function() {
//   debugger;
//   this.rolls.forEach(function(roll){
//     this.score += roll;
//   });
// }



// Front-end
$(document).ready(function(){
var playerOne;
var playerTwo;


  $("#startGame").click(function(event){
  var playerOne = new Player(); //change to player and move to a click function "start game"
  var playerTwo = new Player();


 $("#roll-player1").click(function(event){
   event.preventDefault();
  //  debugger;
   playerOne.getRandomNumber();

   $("#current-roll1").show();
   $("#current-roll1").text(playerOne.rolls[playerOne.rolls.length - 1]);
   $("#current-series1").text(playerOne.rolls);
 });

 $("#hold-player1").click(function(event){
   playerOne.calculateScore();
   $("#total-score1").text(playerOne.totalScore);
   this.score = 0;
   $("#current-series1").text("");
 });
});
});
