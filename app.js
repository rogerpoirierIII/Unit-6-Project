const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let start = document.getElementsByClassName('btn__reset');
const missed = 0;

// Listens for the start game button to be pressed to hide the overlay
start[0].addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});
const phrases = ['The best of both worlds','Let the cat out of the bag','To cost an arm and a leg','Getting a taste of your own medicine','To hit the nail on the head'];

// Returns a random phrase from the phrases array
const getRandomPhraseAsArray = arr => {   
    let phraseNum = Math.floor(Math.random(phrases.length)*(phrases.length+1))
    return phraseNum;
}
// Add the leteters of a string to the display
const addPhraseToDisplay= arr =>{
    let currentPhrase = phrases[getRandomPhraseAsArray(phrases)].split('');   
    for(let i = 0;i < currentPhrase.length;i++){
    const letter = document.createElement('li');
    letter.textContent = currentPhrase[i];
    if(letter.textContent === " "){
        letter.className = 'space'
    }else{
        letter.className = 'letter'
    }
    phrase.appendChild(letter);
    console.log(letter)
    }
    return letter;
}

// Check if a letter is in the phrase
const checkLetter = button =>{
    let letter = documnet.getElementsByClassName('letter');
    let match = null;
    for (let i=0; i < letter.length; i++){
        if(button.textContent === letter[i].textContent){
            letter[i].className='show';
            match = button.textContent;

        }
    }
    return match;
}

qwerty.addEventListener('click', () => {
    
})

// Check if the game has been won or lost
const checkWin = () =>{}