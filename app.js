const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let start = document.getElementsByClassName('btn__reset');
const missed = 0;

start[0].addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});
const phrases = ['The best of both worlds','Let the cat out of the bag','To cost an arm and a leg','Getting a taste of your own medicine','To hit the nail on the head'];