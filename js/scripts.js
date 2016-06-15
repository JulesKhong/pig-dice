// Back-end
var upper = 6;
var getRandomNumber = function (){
  var number = Math.floor(Math.random() * upper)+1;
  alert(number);
}






// Front-end
$(document).ready(function(){
 $("#roll-player1").click(function(event){
   event.preventDefault();
   getRandomNumber();

 });
});
