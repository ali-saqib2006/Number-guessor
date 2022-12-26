/*
game funtions:
player must guess a number between min max
certain amount of guesses
guesses remaining
notify the correct answer if loose
play again
*/


//game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(max),
    guessesLeft = 3;


const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');
//ui min max
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener('mouseup' , function(e){
  if(e.target.className === 'play-again')
  window.location.reload();
})

//submit button
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value)
  //validate
  if(isNaN(guess)|| guess < min || guess > max ){
   setMessage(`PLEASE! Enter a number between ${min} and ${max}` , 'green')
  }

  //check if won
  if(guess === winningNum){
   gameOver(true , `${winningNum} is correct!YOU WON`);
  } else{
    //wrong number
    guessesLeft = guessesLeft - 1;
    if(guessesLeft == 0){
     gameOver(false, `Game over , you lost . The correct number was ${winningNum}`)
    
    } else if(guess < winningNum){
     setMessage(`You Guessed too Low! ${guess} is not correct, ${guessesLeft} guesses left` , 'red')
     guessInput.value = ' '
    }
    if(guess > winningNum){
      setMessage(`You Guessed too High! ${guess} is not correct, ${guessesLeft} guesses left` , 'red')
    }
  }

});

function gameOver(won , msg){
let color;
won === true ? color = 'green' : color = 'red'
    //disable input
    guessInput.disabled = true;
    // border color
    guessInput.style.borderColor = color;
    // tedxt color
    message.style.color = color;
    //wining message
    setMessage(msg);
    //pllay again button
    guessBtn.value = 'Play Again';
    guessBtn.className = 'play-again' 
}


function getRandomNum(max){
  return (Math.floor(Math.random()*max + 1));
}

function setMessage(msg,color){
  message.style.color = color
message.textContent = msg;
}

