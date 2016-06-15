// Back-end
function Game (score){
  this.score = score;
  this.roll = [];
}

var newGame = new Game;
var randomNumber;
var upper = 6;
var rollValue;

var getRandomNumber = function() {
  // debugger;
  randomNumber = Math.floor(Math.random() * upper)+1;
  if (randomNumber === 1){
  rollValue = 0;
  newGame.roll.push(rollValue);
  }
  else {
  rollValue = randomNumber;
  newGame.roll.push(rollValue);
  }
}



// Front-end
$(document).ready(function(){
 $("#roll-player1").click(function(event){
   event.preventDefault();
   getRandomNumber();
   var last = newGame.roll
   $("#current-roll1").show();
   $("#current-roll1").text(newGame.roll[newGame.roll.length - 1]);
   $("#current-series1").text(newGame.roll);

 });
});
