// Global Variables===============================================================
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const start = document.getElementsByClassName('btn__reset');
btn = document.getElementsByTagName('BUTTON')
let missed = 0;

// Returns a random phrase from the phrases array
function getRandomPhraseAsArray(){   
    let phraseNum = Math.floor(Math.random(phrases.length)*(phrases.length+1))
    return phraseNum;
}
//================================================================================

// Functions======================================================================

// Add the leteters of a string to the display
function addPhraseToDisplay(){
    let currentPhrase = phrases[getRandomPhraseAsArray(phrases)];
    currentPhrase.split('');   
    for(let i = 0;i < currentPhrase.length;i++){
    const letter = document.createElement('li');
    letter.textContent = currentPhrase[i];
    if(letter.textContent === " "){
        letter.className = 'space'
    }else{
        letter.className = 'letter'
    }
    phrase.appendChild(letter);
    }
}
// Check if a letter is in the phrase
function checkLetter(button){
    let letter = document.getElementsByClassName('letter');
    let match = null;

    for (let i=0; i < letter.length; i++){
        let text = letter[i].textContent;
        if(letter[i].innerHTML === btn.textContent){
            letter[i].className='show';
            match = button.textContent;
            letter[i].className = 'show';
        }
    }
    return match;
}
// ===============================================================================

// Listens for the start game button to be pressed to hide the overlay
start[0].addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});
const phrases = ['the best of both worlds','let the cat out of the bag','to cost an arm and a leg','getting a taste of your own medicine','to hit the nail on the head'];


getRandomPhraseAsArray();
addPhraseToDisplay();

qwerty.addEventListener('click', (e) => {
    if(e.target.className !== 'chosen'&& e.target.className !== 'keyrow'){
        e.target.className = 'chosen';
        let guess =checkLetter();
        if(guess === null){
            document.querySelector('ol').removeChild;
            missed++;
        }

    }
})

// Check if the game has been won or lost
const checkWin = () =>{}