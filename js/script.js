var r = g = b = 0;

window.addEventListener('load', start)

function start() {
    var red = document.querySelector('#redRange');
    var green = document.querySelector('#greenRange');
    var blue = document.querySelector('#blueRange');

    red.addEventListener('input', changeRed);
    green.addEventListener('input', changeGreen);
    blue.addEventListener('input', changeBlue);


    changeRed()
    changeGreen()
    changeBlue()

}

function changeRed() {
    r = document.querySelector('#redLevel').value = document.querySelector('#redRange').value
    document.querySelector('#colorDisplay').style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    document.querySelector('body').style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    document.querySelector('#redLevel').style.backgroundColor = 'rgb(' + r + ', ' + 0 + ', ' + 0 + ')';
}

function changeGreen() {
g = document.querySelector('#greenLevel').value = document.querySelector('#greenRange').value
document.querySelector('#colorDisplay').style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
document.querySelector('body').style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
document.querySelector('#greenLevel').style.backgroundColor = 'rgb(' + 0 + ', ' + g + ', ' + 0 + ')';

}

function changeBlue() {
b = document.querySelector('#blueLevel').value = document.querySelector('#blueRange').value
document.querySelector('#colorDisplay').style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
document.querySelector('body').style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
document.querySelector('#blueLevel').style.backgroundColor = 'rgb(' + 0 + ', ' + 0 + ', ' + b + ')';

}