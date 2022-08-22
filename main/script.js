let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

generateTarget = () => {
   return Math.floor(Math.random() * 10);
  }

function advanceRound(){
   currentRoundNumber++;
}


function updateScore(winner){
   if (winner === 'human'){
      humanScore++;
   } else if (winner === 'computer'){
      computerScore++;
   } else {
      console.log('Somethings not right');
      computerScore++;
   }
}

function compareGuesses(humanGuess, computerGuess, secretTargetNumber){
   getHumanGuess = Math.abs(humanGuess - secretTargetNumber);
   getComputerGuess = Math.abs(computerGuess - secretTargetNumber);

      if(getHumanGuess < getComputerGuess){  
         return true;
      } else if(getHumanGuess > getComputerGuess){
         return false;
      }else if(getHumanGuess === getComputerGuess){
         return true;
      }else {
         window.alert('Wrong number!');
      }

  }
