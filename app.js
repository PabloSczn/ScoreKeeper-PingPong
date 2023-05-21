const playerOneButton = document.querySelector('#p1Button');
const playerTwoButton = document.querySelector('#p2Button');
const playerOneDisplay = document.querySelector('#p1Display');
const playerTwoDisplay = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');

let winningScore = 3; //Initially, but can vary
let scoreP1 = 0;
let scoreP2 = 0;
let isGameOver = false;

playerOneButton.addEventListener('click', function(e){
    //If Player One has not won yet
    if(!isGameOver)
    {
        scoreP1++;
        //If Player One wins
        if(scoreP1 === winningScore)
        {
            isGameOver = true;      
            playerOneDisplay.classList.add('has-text-success'); 
            playerTwoDisplay.classList.add('has-text-danger'); 
            //Disable buttons
            playerOneButton.disabled = true;
            playerTwoButton.disabled = true;  
        }
        playerOneDisplay.textContent = scoreP1;
    }

})

playerTwoButton.addEventListener('click', function(e){
    //If Player Two has not won yet
    if(!isGameOver)
    {
        scoreP2++;
        //If Player Two wins
        if(scoreP2 === winningScore)
        {
            isGameOver = true;
            playerTwoDisplay.classList.add('has-text-success'); 
            playerOneDisplay.classList.add('has-text-danger');
            //Disable buttons
            playerOneButton.disabled = true;
            playerTwoButton.disabled = true;             
        }
        playerTwoDisplay.textContent = scoreP2;
    }   
})

winningScoreSelect.addEventListener('change', function(e){
    winningScore = parseInt(this.value);
    resetGame();
})

resetButton.addEventListener('click', resetGame);

//Resets current game
function resetGame(){
    isGameOver = false;
    scoreP1 = 0;
    scoreP2 = 0;
    playerOneDisplay.textContent = 0;
    playerTwoDisplay.textContent = 0;
    //Remove colors
    playerOneDisplay.classList.remove('has-text-success', 'has-text-danger');
    playerTwoDisplay.classList.remove('has-text-success', 'has-text-danger');
    //Enable buttons again
    //Disable buttons
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false; 
} 