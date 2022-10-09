// Global Variables===============================================================
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const start = document.getElementsByClassName('btn__reset');
let missed = 0;
const overlay = document.getElementById('overlay');
// Returns a random phrase from the phrases array
function getRandomPhraseAsArray(){   
    let phraseNum = Math.floor(Math.random()*(phrases.length))
    return phraseNum;
}
//================================================================================

// Functions======================================================================

// Add the leteters of a string to the display
function addPhraseToDisplay(){
    const phraseArray = phrases[getRandomPhraseAsArray(phrases)];
    phraseArray.split('');   
    for(let i = 0;i < phraseArray.length;i++){
    const letter = document.createElement('li');
    letter.textContent = phraseArray[i];
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
        if(letter[i].textContent === button){
            letter[i].className = 'letter show';
            match = button.textContent;
        }
    }
    return match;
}

// Check if the game has been won or lost
function checkWin(){
    let remain = document.getElementsByClassName('letter');
    let correct = document.getElementsByClassName('show');
    if(remain.length === correct.length){
        overlay.className = 'win';
        overlay.firstElementChild.innerHTML = 'You Win!';
        overlay.style.display = 'flex'
    }else if(missed >= 5){
        overlay.className = 'lose';
        overlay.firstElementChild.innerHTML = 'Better Luck Next Time!';
        overlay.style.display = 'flex';


    }
    
    }
// ===============================================================================

// Listens for the start game button to be pressed to hide the overlay
start[0].addEventListener('click', () => {
    overlay.style.display = 'none';
});
const phrases = ['the best of both worlds','let the cat out of the bag','to cost an arm and a leg','getting a taste of your own medicine','to hit the nail on the head'];


getRandomPhraseAsArray();
addPhraseToDisplay();
//Listens for QWERTY keyboard buttons to be pressed
qwerty.addEventListener('click', (e) => {
    if(e.target.className !== 'chosen'&& e.target.className === ''){
        e.target.className = 'chosen';
        let guess = e.target.textContent
        let result = checkLetter(guess);
        if(result === null){
            let lives = document.getElementsByClassName('tries');
            lives.item(0).remove();
            missed++;
        }

    }
    checkWin();

}
)
