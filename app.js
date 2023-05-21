//Objects representing players
const playerOne =  {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const playerTwo =  {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

//Variables
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');
let winningScore = 3; //Initially, but can vary
let scoreP1 = 0;
let scoreP2 = 0;
let isGameOver = false;

//Function to update score
function updateScore(player, opponent){
    //If Player has not won yet
    if(!isGameOver)
    {
        player.score += 1;
        //If Player One wins
        if(player.score === winningScore)
        {
            isGameOver = true;      
            player.display.classList.add('has-text-success'); 
            opponent.display.classList.add('has-text-danger'); 
            //Disable buttons
            player.button.disabled = true;
            opponent.button.disabled = true;  
        }
        player.display.textContent = player.score;
    }
}

//When Clicking player one button
playerOne.button.addEventListener('click', function(e){
    updateScore(playerOne, playerTwo);
})

//When Clicking player two button
playerTwo.button.addEventListener('click', function(e){
    updateScore(playerTwo, playerOne)
})

//To select a different winning score
winningScoreSelect.addEventListener('change', function(e){
    winningScore = parseInt(this.value);
    resetGame();
})

//When clicking reset
resetButton.addEventListener('click', resetGame);

//Resets current game
function resetGame(){
    isGameOver = false;
    playerOne.score = 0;
    playerTwo.score = 0;
    playerOne.display.textContent = 0;
    playerTwo.display.textContent = 0;
    //Remove colors
    playerOne.display.classList.remove('has-text-success', 'has-text-danger');
    playerTwo.display.classList.remove('has-text-success', 'has-text-danger');
    //Enable buttons again
    //Disable buttons
    playerOne.button.disabled = false;
    playerTwo.button.disabled = false; 
} 