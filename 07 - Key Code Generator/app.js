const displayKey = document.querySelector('.key h2');
const displayKeyCode = document.querySelector('.keyCode h2');
const keyCodeDiv = document.querySelector('.keyCode');
const overlay = document.querySelector('.overlay');

window.addEventListener('keypress' , (e)=>{
    overlay.classList.add('hide')
    displayKey.innerText = e.key;          /*display what key is being pressed*/
    displayKeyCode.innerText = e.keyCode;     /*keyCode is depricated*/
    if(e.keyCode === 32){                  /*makes the word "space" appear after pressing it*/
        displayKey.innerText = `"space"`;
    };
})

keyCodeDiv.addEventListener('click' , (e)=>{
    const textArea = document.createElement('textarea');
    textArea.setAttribute('readonly', '');      /*allows us to see it */
    textArea.style.position = 'absolute';
    textArea.value = keyCodeDiv.querySelector('h2').innerText;
    document.body.appendChild(textArea)
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea)       /*prevents text area from appearing*/
    keyCodeDiv.querySelector('p').innerText = 'Copied'     /*output says copied when clicked*/
    setTimeout(()=>{        /*reverts back to original text from 'Copied'*/
        keyCodeDiv.querySelector('p').innerText = 'Click to Copy'
    }, 1000)
})