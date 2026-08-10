// Encompase Enitre Game Function inside a function

function startGame () {
    let humanScore = 0;
    let computerScore = 0;
    let moves = 0


    //Game Logic to play game
    function playGame () {
        // Were using DOM to map out buttons into the functions in our script tag
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');

        const humanSelection = [rockBtn, paperBtn, scissorBtn];

        // Function to start playing game
        humanSelection.forEach(option => {
            option.addEventListener('click', function () {
                //This is how we update the text 

                const movesLeft = document.querySelector('.movesleft');

                moves++;

                movesLeft.innerText = `Moves Left: ${10 - moves}`;

                const computerChoice = getComputerChoice();

                // Function to check who wins
                determineWinner(this.innerText, computerChoice)

                // Calling gameOver function after 10 moves
                if (moves == 10) {
                    gameOver(humanSelection, movesLeft);
                }

            })
  
        });

    }


    function getComputerChoice () {

        let randomNumber = Math.floor(Math.random()*3)

        // Map each number to a variable
        switch(randomNumber){
            case 0:
                return "rock";
            case 1:
                return "paper";
            case 2:
                return "scissors";
        }
    }

    function determineWinner  (humanChoice, computerChoice) {
        const result = document.querySelector('.result');

        const humanScoreBoard = document.querySelector('.p-count');

        const computerScoreBoard = document.querySelector('.c-count');

        humanChoice = humanChoice.toLowerCase()

        computerChoice = computerChoice.toLowerCase()


        if (humanChoice === computerChoice){
            result.textContent = 'Tie'
        }
        else if (humanChoice == 'rock'){
            if(computerChoice == 'paper'){
                result.textContent = 'Computer Won'

                computerScore++;

                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won'

                humanScore++;

                humanScoreBoard.textContent = humanScore;
            }
        }
        else if (humanChoice  == 'scissors'){
            if(computerChoice == 'rock'){
                result.textContent = 'Computer Won'

                computerScore++;

                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won'

                humanScore++;

                humanScoreBoard.textContent = humanScore;
            }
        }
        else if (humanChoice  == 'paper'){
            if(computerChoice == 'scissors'){
                result.textContent = 'Computer Won'

                computerScore++;

                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won'

                humanScore++;

                humanScoreBoard.textContent = humanScore;
            }
        }
    };

    // Function to run when game is over
    function gameOver (humanSelection, movesLeft) {

        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        humanSelection.forEach(option => {
            option.style.display = 'none';
        })


        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';

        if (humanScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if (humanScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else {
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }

    playGame();

}

// calling game fucntion
startGame();