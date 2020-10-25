const displayKey = document.querySelector('.key h2');
const displayKeyCode = document.querySelector('.keyCode h2');
const keyCodeDiv = document.querySelector('.keyCode');

window.addEventListener('keypress' , (e)=> {
    displayKey.innerText = e.key;          /*display what key is being pressed*/
    displayKeyCode.innerText = e.keyCode;     /*keyCode is depricated*/
})