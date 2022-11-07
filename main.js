// Rock Paper Scissors Project //

let userInput = 'paper'

function getUserChoice(userInput){

    userInput = userInput.toLowerCase();

    if(userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb"){
        return userInput
    } else{
        console.log("Error, invalid user input.")
    }
}

function getComputerChoice(){
    let choice = ''
    let num = Math.floor(Math.random() * 3)
    //console.log(num)

    if (num === 0){
        choice = "rock"
    } else if( num === 1) {
        choice = "paper"
    } else {
        choice = "scissors"
    }

    return choice
}

function determineWinner(userChoice, computerChoice){

    if (userChoice === computerChoice){
        return "Draw!"
    }

    if (userChoice === "rock"){
        if(computerChoice === "paper"){
            return "Computer Wins!"
        } else { return "You Win!"}
    }

    if (userChoice === "paper"){
        if(computerChoice === "scissors"){
            return "Computer Wins!"
        } else { return "You Win!" }
    }

    if (userChoice === "scissors"){
        if(computerChoice === "rock"){
            return "Computer Wins!"
        } else { return "You Win!"}
    }

}

function playGame(){

    let userChoice = getUserChoice(userInput)
    let computerChoice = getComputerChoice()

    console.log(`You throw a ${userChoice}`)
    if (getUserChoice(userInput) === "bomb"){
        return "You have blown Up The Computer! You Win!"
    }
    console.log(`The computer throws a ${computerChoice}`)

    console.log(determineWinner(userChoice, computerChoice))
}
