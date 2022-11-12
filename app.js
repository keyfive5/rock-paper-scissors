const cpuChoiceDisplay = document.getElementById('cpu-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')
let userChoice
let CPUChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateCPUChoice()
    getResult()
  }))

function generateCPUChoice() {
    const rando = Math.floor(Math.random() * 3 + 1)
    console.log(rando)

    if (rando === 1) {
        CPUChoice = 'rock'
    } 
    if (rando === 2) {
        CPUChoice = 'paper'
    }
    if (rando === 3) {
        CPUChoice = 'scissors'
    }
    cpuChoiceDisplay.innerHTML = CPUChoice
}

function getResult() {
    if (CPUChoice === userChoice) {
        result = 'Draw!'
    }

    if (CPUChoice === 'rock' && userChoice == 'scissors') {
        result = 'You lost!'
    }

    if (CPUChoice === 'rock' && userChoice == 'paper') {
        result = 'You win!'
    }

    if (CPUChoice === 'paper' && userChoice == 'rock') {
        result = 'You lost!'
    }

    if (CPUChoice === 'paper' && userChoice == 'scissors') {
        result = 'You win!'
    }

    if (CPUChoice === 'scissors' && userChoice == 'rock') {
        result = 'You win!'
    }

    if (CPUChoice === 'scissors' && userChoice == 'paper') {
        result = 'You lost!'
    }

    resultDisplay.innerHTML = result;
}