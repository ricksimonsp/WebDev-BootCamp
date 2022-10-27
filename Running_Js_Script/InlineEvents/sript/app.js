/*const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log('You Clicked me!')
    console.log('I hope it worked!!')
}

btn.onmouseenter = scream;

function scream() {
    console.log('AHHHHHHHHHH!!!');
    console.log('STOP TOUCHING ME!!!');
}*/

document.querySelector('h1').onclick = () => {
    alert('This is a H1!')
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function() {
    alert('CLICKED!')
})