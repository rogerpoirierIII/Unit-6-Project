var qwerty = document.getElementById('qwerty');
var phrase = document.getElementById('phrase');
var start = document.getElementsByClassName('btn__reset');
var missed = 0;

start[0].addEventListener('click', () => {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});
