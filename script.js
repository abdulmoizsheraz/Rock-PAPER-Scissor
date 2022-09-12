console.log("Welcome to the GAME")
let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn = document.querySelector('.btn')
let AI_turn = document.querySelector('.AI_turn')
 let results_sub =document.querySelector('.results_sub')
let UserEntry;
let btn3 = document.querySelector('#btn3')
let reset = document.querySelector('#reset')
reset.addEventListener('click', () => {
  location.reload();
})
let Game = ['ROCK', 'PAPER', 'SCISSOR'];
let Game_Guess = Game[Math.floor(Math.random() * Game.length)];
console.log(Game_Guess)
btn1.addEventListener('click', () => {
  AI_turn.innerText=Game_Guess;
  UserEntry = "ROCK"
  Decide();
})
btn2.addEventListener('click', () => {
  UserEntry = "PAPER"
  Decide();
  AI_turn.innerText=Game_Guess;
})
btn3.addEventListener('click', () => {
  UserEntry = "SCISSOR"
  AI_turn.innerText=Game_Guess;
  Decide();
})


function Decide() {

  if (UserEntry == Game_Guess) {
    results_sub.innerText="Game Draw"
  }

  else if (Game_Guess == 'ROCK' && UserEntry == "PAPER") {

    results_sub.innerText="You are Winner"
  }
  else if (Game_Guess == 'PAPER' && UserEntry == "ROCK") {
    results_sub.innerText="You are Loser "
  }
  else if (Game_Guess == 'ROCK' && UserEntry == "SCISSOR") {
    results_sub.innerText="Sorry you  lose Try again!"
  }
  else if (Game_Guess == 'PAPER' && UserEntry == "SCISSOR") {
    results_sub.innerText="You Won"
  }
  else if (Game_Guess == 'SCISSOR' && UserEntry == "ROCK") {
    results_sub.innerText="You WON"
  }
  else if (Game_Guess == 'SCISSOR' && UserEntry == "PAPER") {
    results_sub.innerText="You LOSS"
  }
}

