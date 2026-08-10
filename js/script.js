// Encompase Enitre Game Function inside a function

const game = () =>{
    let humanScore = 0;
    let computerScore = 0;
    let moves = 0


    //Game Logic to play game
    const playGame = () =>{
        // Were using DOM to map out buttons into the functions in our script tag
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const humanSelection = getHumanChoice() // We are calling the function getHumanChoice
        const computerSelection = getComputerChoice() // We are calling the function getComputerChoice()

        // Function to start playing game
        humanSelection.forEach(option => {
            option.addEventListener('click', function () {
                //This is how we update the text 
                const moveLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10 - moves}`;

                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];

                // Function to check who wins
                winner(this.innerText, computerChoice)

                // Calling gameOver function after 10 moves
                if (moves == 10) {
                    gameOver(playerOptions, movesLeft);
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

    function getHumanChoice(){
        // We dont worry about Error Handeling at this stage
        let person = prompt("Please pick rock, paper or scissors")
        if (person != null) {
            console.log("Success! You Chose " + person + "!");
        }
    }

    const winner = (humanChoice, computerChoice) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
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
                result.textContent = 'Playeer Won'
                humanScore++;
                playerScoreBoard.textContent = computerScore;
            }
        }
        else if (humanChoice  == 'scissors'){
            if(computerChoice == 'rock'){
                result.textContent = 'Computer Won'
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Playeer Won'
                humanScore++;
                playerScoreBoard.textContent = computerScore;
            }
        }
        else if (humanChoice  == 'paper'){
            if(computerChoice == 'scissors'){
                result.textContent = 'Computer Won'
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Playeer Won'
                humanScore++;
                playerScoreBoard.textContent = computerScore;
            }
        }
    }




    playGame();

}

// calling game fucntion
game();