var submit = document.getElementById('submit');
var playerArray = [];
var computerArray = [];
var playerScore = 0;
var computerScore = 0;

submit.addEventListener('click', function () {
  if(playerScore < 5 && computerScore < 5){
    var playerNumber = document.getElementById('playerNumber').value;
    if(playerNumber > 10 || playerNumber < 0){
      alert('Please choose a number between 1 and 10.')
    } else if (playerArray.indexOf(Number(playerNumber)) >= 0){
      alert('Please choose a number that you have not chosen before.')
    } else {
      playerArray.push(Number(playerNumber));
      var computerNumber = getComputerNumber();
      computerArray.push(computerNumber);
      addScore(playerNumber, computerNumber);
      document.getElementById('compNumber').innerHTML = 'Computer Number: ' + computerNumber;
      document.getElementById('playerScore').innerHTML = 'Player Score: ' + playerScore;
      document.getElementById('computerScore').innerHTML = 'Computer Score: ' + computerScore;
      document.getElementById('playerArray').innerHTML = "Player Numbers Used: " + playerArray.join(', ');
      document.getElementById('computerArray').innerHTML = "Computer Numbers Used: " + computerArray.join(', ');
    }
  } else {
    if(playerScore === 5){
      alert('Player Won!')
    } else {
      alert('Computer Won!')
    }
  }
})

var getComputerNumber = function () {
  var compNumber = Math.floor(Math.random() * 9) + 1;
  if(computerArray.indexOf(compNumber) < 0){
    return compNumber;
  } else {
    console.log('hello');
    getComputerNumber();
  }
}

var addScore = function (playerNumber, computerNumber) {
  var score = playerNumber - computerNumber;
  if(score >= 2){
    computerScore += 1;
  } else if(score === 1) {
    playerScore += 2;
  } else if(score <= -2){
    playerScore += 1;
  } else if(score === -1) {
    computerScore += 2;
  }
}
