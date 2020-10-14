//DOM selectors
let input = document.querySelector('.input-value')
let submitButton = document.querySelector('.submit')
let discardedLettersArea = document.querySelectorAll('.lr')
let correctWord = document.querySelectorAll('.la')

//counter for the rejected letters
let counter =0;


//create an array of letters
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

//create the word that the person is guessing
let wordBank = ['flapjack']

submitButton.addEventListener('click', ()=>{
    getInput()
    // letterRejected()
    takeWordBank()
    return input.value = ""
})



//create a function to get the input and capatalize input if not done
function getInput(){
    return input.value
}

//create a function that is populating the rejected letter box
function letterRejected(){
    let letterInput = getInput();
    //write a loop to see if there is already a letter in each spot and put it in next available spot
    if(counter > 6){
         console.log("game over")
    }else{
        for(let i = 0; i<discardedLettersArea.length; i++){
            if(discardedLettersArea[i].textContent == ""){
                counter ++
                discardedLettersArea[i].textContent = letterInput;
                counter ++
                break
            }
        }
    }
}






//create function that populates the wordBank into the 
function takeWordBank(){
    let letterGuessed = getInput()
    for(let i =0; i<correctWord.length; i++){
        if(letterGuessed == correctWord[i].textContent){
            correctWord[i].style.display = 'flex'
            break
        }
    }
    letterRejected()
    }
// }

function upperCaseF(a){
    setTimeout(function(){
        a.value = a.value.toUpperCase();
    }, 1);
}


// if(discardedLettersArea[0].textContent == "" ){
//     discardedLettersArea[0].textContent = letterInput;
// }else if(discardedLettersArea[1] == ""){
//     discardedLettersArea[1].textContent = letterInput;
// }else if(discardedLettersArea[2] == ""){
//     discardedLettersArea[2].textContent = letterInput;
// }else if(discardedLettersArea[3] == ""){
//     discardedLettersArea[3].textContent = letterInput;
// }else if(discardedLettersArea[4] == ""){
//     discardedLettersArea[4].textContent = letterInput;
// }else if(discardedLettersArea[5] == ""){
//     discardedLettersArea[5].textContent = letterInput;
// }else if(discardedLettersArea[6] == ""){
//     discardedLettersArea[6].textContent = letterInput;
// }
// else{
//     alert('You lost, try again!')
// }