

//DOM selectors
let input = document.querySelector('.input-value')
let submitButton = document.querySelector('.submit')
let discardedLettersArea = document.querySelectorAll('.lr')
let correctWord = document.querySelectorAll('.la')
let hangman = document.querySelectorAll('.hm')
let newGame = document.querySelector('.new-game-button')
let modal = document.querySelector('.modal')
let modalBackground = document.querySelector('.modal-overlay')
let exit = document.querySelector('.exit')
let winningWord = document.querySelector('.winningWord')
let winningModal = document.querySelector('#you-win')
let playAgain = document.querySelector('.play-again')
let alreadyGuessedLetterModal = document.querySelector('.already-guessed')
let tryAgain = document.querySelector('.try-again')
let hint = document.querySelector('.hint')

//counter for the rejected letters
let counter =0;
let lettersAlreadyGuessed = [];
let currentLetter = '';


//create the word that the person is guessing
let wordBank = ['FLAPJACK', 'FUZZIEST', 'JOYFULLY', 'ZUCCHINI', 'CARJACKS', 'SIZZLERS', 'SNAZZIER', 'BACKFLIP', 'VOLUMIZE', 'GLOVEBOX', 'JAGGEDLY', 'QUICKEST', 'QUENCHED']
//empty array that the getRandomWord function is going to push into
let randomWord = []
submitButton.addEventListener('click', (e)=>{
    e.preventDefault()
    getInput()
    //delayed check for winner so that the last letter can populate first
    setTimeout(checkForWinner, 1000)
    input.focus()
    //reset current letter to empty each time
    currentLetter = ""
    //empty input area
    return input.value = ""
})



//create a function to get the input and capatalize input if not done
function getInput(){
    if(input.value == ''){
        alert('Please Enter a Letter')
    }else{
        currentLetter = input.value
        return currentLetter, takeWordBank()
    }
}
//create a function that is populating the rejected letter box
function letterRejected(){
    //write a loop to see if there is already a letter in each spot and put it in next available spot
    if(counter > 6){
        displayLosingModal()
    }else{
        for(let i = 0; i<discardedLettersArea.length; i++){
            if(discardedLettersArea[i].textContent == ""){
                discardedLettersArea[i].textContent = currentLetter;
                lettersAlreadyGuessed.push(currentLetter)
                counter ++
                break
            }
        }
    }
}

//create function that populates the wordBank into the 
function takeWordBank(){
    // console.log('here')
    // let letterGuessed = getInput()
    let thisCounter = 0;
    for(let i =0; i<correctWord.length; i++){
        if(currentLetter == correctWord[i].textContent){
            correctWord[i].style.color = '#FEF7AE'
            correctWord[i].style.display = 'flex'
        }else if(currentLetter == lettersAlreadyGuessed[i]){
            // alert('You already guessed that!')
            displayAlreadyGuessedModal()
        }
        else{
            thisCounter ++
        }

    }
    if(thisCounter >7){
        letterRejected()
        displayHangman()
    }
}
//function checks for winner
function checkForWinner(){
    let winnerCounter = 0;
    correctWord.forEach(element => {
        if(element.style.display == 'flex'){
            winnerCounter ++
        }
    })
    if(winnerCounter > 7){
        // alert('YOU WIN! PRESS NEW GAME TO PLAY AGAIN!')
        displayWinningModal()
    }
}

//this turns all players inputs into capitalized letters for comparisons
function upperCaseF(a){
    setTimeout(function(){
        a.value = a.value.toUpperCase();
    }, 1);
}

function displayHangman(){
    for(let i = 0; i <hangman.length; i++){
        if(!hangman[i].classList.contains('active')){
            hangman[i].classList.add('active')
            break
        }
    }
}

//create a function so that are filling the correctWord area from the array abovd
function createWords(){
    //split up the words in the array
    let splitWordBank = randomWord[0].split('');
    console.log(splitWordBank)
    //loop through each element of the array that contains correct word
        for(let i =0; i<splitWordBank.length; i++){
            correctWord[i].textContent = splitWordBank[i]
        }
}

function getRandomWord(){
   let rando = wordBank[Math.floor(Math.random() * wordBank.length)]
   randomWord.push(rando)
}

//RUNS THE CODE TO GET THE GAME READY TO PLAY COULD PROBABLY BE USED AS A RESTART BUTTON
function gameInitialization(){
    //set array back to empty, so not pulling same thing that got pushed in on page refresh
    randomWord = [];
    getRandomWord();
    createWords();
}
//gets the game going the first
gameInitialization()

//event listener for new game
newGame.addEventListener('click', () => {
    //refreshes the page, can't use in gameInitializtion bc the it becomes recursive
    location.reload()
    gameInitialization()
})


function displayLosingModal(){
    modal.style.display = 'flex';
    modalBackground.style.display = 'flex'
    winningWord.textContent = randomWord
}


//exit functionality
exit.addEventListener('click', () =>{
    goAwayModal()
    location.reload()
})

playAgain.addEventListener('click', () => {
    goAwayModal()
    location.reload()
})
tryAgain.addEventListener('click', () => {
    alreadyGuessedLetterModal.style.display = 'none'

})

function goAwayModal(){
    modalBackground.style.display = 'none'
    modal.style.display = "none"
}

function displayWinningModal(){
    winningModal.style.display = 'flex';
    modalBackground.style.display = 'flex';
}
function displayAlreadyGuessedModal(){
    alreadyGuessedLetterModal.style.display = 'flex'
}

function giveALetter(){
    for(let i =0; i<correctWord.length; i++){
        if(correctWord[i].textContent == ''){
            console.log('hey')
            correctWord[i].style.color = '#FEF7AE'
            correctWord[i].style.display = 'flex'
            break
        }
        break
    }
}
hint.addEventListener('click', () =>{
    giveALetter()
    hint.style.display = 'none'
})



//won't clear the first element in the array
//tried a for each loop as well and won't clear bc the first element is being called one extra time from display hangman
//can't find reason that displayHangman is being called one more time bc it is only called in takeWordBank
//when i tried to console log to see it was being called from takeword bank nothing is showing up
// function clearHangman(){
//    hangman.forEach(element => {
//        console.log(element.classList)
//        element.classList.remove('active')
//        console.log(element.classList)

//    })
// 
   


