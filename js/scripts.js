open // Back-end
function Player (){ //change to a player object.**
  this.score = 0;
  this.rolls = [];
  this.totalScore = 0;
}

var randomNumber;
var upper = 6;
var rollValue;

function disableButton(){
  // debugger;
  var buttonSwitch = document.getElementById("roll-player1").disabled;
  if (buttonSwitch === false){
    document.getElementById("roll-player1").disabled = true;
    document.getElementById("hold-player1").disabled = true;
    document.getElementById("roll-player2").disabled = false;
    document.getElementById("hold-player2").disabled = false;
  } else {
    document.getElementById("roll-player1").disabled = false;
    document.getElementById("hold-player1").disabled = false;
    document.getElementById("roll-player2").disabled = true;
    document.getElementById("hold-player2").disabled = true;
  }
}
// CREATES A RANDOM NUMBER, AND ASSIGNS A POINTS VALUE TO IT. PUSHES ROLLS TO ROLL
Player.prototype.getRandomNumber = function() {
  randomNumber = Math.floor(Math.random() * upper) + 1;
  if (randomNumber === 1){
  this.score = 0;
  $("#myModalRolled").modal("show");
  // alert("You rolled a 1! Your turn is over!");
  this.rolls = [];
  disableButton();
  $(".scoreDisplay").text("");
  }
  else {
  rollValue = randomNumber;
  this.rolls.push(rollValue);
  }
}

Player.prototype.calculateScore = function() {
  for (var i=0 ; i < this.rolls.length ; i++ ){
    this.score += this.rolls[i];
    // this.rolls = [];
  } this.totalScore += this.score;
    this.score = 0;
    this.rolls = [];
}

Player.prototype.youWin = function(){
  if (this.totalScore >= 20){
    $("#myModal").modal("show");
    $(".modal-backdrop").removeClass();
    $(".modal-backdrop").addClass("blue-backdrop");
  }
}

// FRONT END LOGIC
$(document).ready(function(){
var playerOne;
var playerTwo;

// INITIATE PLAYER ONE AND PLAYER TWO OBJECTS
  $("#startGame").click(function(event){
    $("body").removeClass();
    $("body").addClass("gradient");
  var playerOne = new Player();
  var playerTwo = new Player();
  $("#startGame").hide();
  $(".gamePlay").show();
  $(".lead").text("");
  // $("#myModal").modal({ show: false});

// FRONT END LOGIC FOR PLAYER ONE
 $("#roll-player1").click(function(event){
   event.preventDefault();
   playerOne.getRandomNumber();

   $("#current-roll1").show();
   $("#current-roll1").text(playerOne.rolls[playerOne.rolls.length - 1]);
   $("#current-series1").text(playerOne.rolls);
 });

 $("#hold-player1").click(function(event){
   playerOne.calculateScore();
   $(".total-score1").text(playerOne.totalScore);
   $("#current-series1").text("");
   playerOne.youWin();
   disableButton();
   $(".scoreDisplay").text("");
 });

// FRONT END LOGIC FOR PLAYER TWO
 $("#roll-player2").click(function(event){
   event.preventDefault();
   playerTwo.getRandomNumber();
   $("#current-roll2").show();
   $("#current-roll2").text(playerTwo.rolls[playerTwo.rolls.length - 1]);
   $("#current-series2").text(playerTwo.rolls);
 });

 $("#hold-player2").click(function(event){
   playerTwo.calculateScore();
   $(".total-score2").text(playerTwo.totalScore);
   $("#current-series2").text("");
   playerTwo.youWin();
   disableButton();
   $(".scoreDisplay").text("");
 });

 $("#playAgain").click(function(event){
   location.reload();
 });

});
});
