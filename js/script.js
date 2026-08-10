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

        playRound(humanSelection, computerSelection) // We are calling the function playRound
        checkScore() // We are calling the function checkScore()
    }

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
        return person.toLowerCase(); // This is important so that we actually get a response and not null
    }
    }

    function playRound(humanChoice, computerChoice) {

        console.log(`You chose ${humanChoice}`);
        console.log(`Computer chose ${computerChoice}`);

        if (humanChoice === computerChoice){
            console.log("It's a Tie")
        }
        else if (humanChoice == 'rock'){
            if(computerChoice == 'paper'){
                console.log("Computer Won")
                computerScore++;
            } else {
                console.log("Player Won")
                humanScore++;
            }
        }
        else if (humanChoice  == 'scissors'){
            if(computerChoice == 'rock'){
                console.log("Computer Won")
                computerScore++;
            } else {
                console.log("Player Won")
                humanScore++;
            }
        }
        else if (humanChoice  == 'paper'){
            if(computerChoice == 'scissors'){
                console.log("Computer Won")
                computerScore++;
            } else {
                console.log("Player Won")
                humanScore++;
            }
        }

        console.log(`Score: Player ${humanScore} - Computer ${computerScore}`);
    }

    function checkScore(playerScore, computerScore){
            
        if(playerScore > computerScore){
            console.log(`You won! Your score is ${playerScore} out of ${playerScore + computerScore}`)
        }
        else if (playerScore < computerScore)
        {
            console.log(`You Lose!. Your score is ${playerScore} out of ${playerScore + computerScore}.`)
        }
        else
        {
            console.log("Its a Tie")
        }
    }




    // This actually starts the game
    // This is what we refer to as Calling the function
    playGame();

}

