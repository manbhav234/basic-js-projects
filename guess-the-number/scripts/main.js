const userGuess = document.querySelector('#userGuess')
const submit = document.querySelector('#submitButton')
const hiLow = document.querySelector('.hi-low')
const remGuess = document.querySelector('#remGuess')
const form = document.querySelector('form')
const result = document.querySelector('.result')
const prevGuess = document.querySelector('#prevGuess')

const randomNumber = Math.floor(Math.random() * 100 + 1)
const guesses = []

form.addEventListener('submit', function(e){
    e.preventDefault()
    const number = parseInt(userGuess.value)
    let remainingGuesses = parseInt(remGuess.textContent)
    let already = false;
    for (let i of guesses){
        if (number === i){
            already = true;
        }
    }
    if (already){
        hiLow.textContent = 'You have already guessed this number'
    }else if (number === randomNumber){
        hiLow.textContent = ""
        result.textContent = `Congratulations ! You guessed the random number ${randomNumber} in ${10-remainingGuesses+1} guesses`
    }
    else if (remainingGuesses === 0){
        hiLow.textContent = ""
        result.textContent = `You Lost ! You couldn't guess in 10 attempts. The number was ${randomNumber}`
    }
    else{
        if (number > randomNumber){
            hiLow.textContent = "Your guess was higher"
        }
        else {
            hiLow.textContent = "Your guess was lower"
        }
        remainingGuesses--;
        remGuess.textContent = remainingGuesses;
        guesses.push(number)
        prevGuess.textContent = guesses.join(' ')
    }

})