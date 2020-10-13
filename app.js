//DOM selectors
let input = document.querySelector('.input-value')
let submitButton = document.querySelector('.submit')
let discardedLettersArea = document.querySelectorAll('#discarded-box')



//create an array of letters
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

//create the word that the person is guessing
let wordBank = ['flapjack']

submitButton.addEventListener('click', ()=>{
    getInput()
    letterRejected()
    input.value = ""
})



//create a function to get the input
function getInput(){
    return input.value
}

//create a function that is populating the rejected letter box
function letterRejected(){
    let letterInput = getInput();
    //write a loop to see if there is already a letter in each spot and put it in next available spot
    for(let i = 0; i<discardedLettersArea.length; i++){
        discardedLettersArea
        // if(discardedLettersArea[i].textContent == "" ){
        //     return discardedLettersArea[i].textContent = letterInput;
        // }else{
        //     console.log("full")
        // }
    }
}

