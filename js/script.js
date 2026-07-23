function getComputerChoice () {
    let A = "rock"

    let B = "paper"

    let C = "scissors"

    let randomNumber = Math.floor(Math.random()*3)

    // Map each number to a variable
    switch(randomNumber){
        case 0:
            return A;
        case 1:
            return B;
        case 2:
            return C;
    }
}

function getHumanChoice(){
    let person = prompt("Please pick rock, paper or scissors")
      if (person != null) {
    console.log("Success! You Chose " + person + "!");
  }
}

let humanScore = 0;
let computerScore = 0;