const timeHeader = document.querySelector('h1');
let timeSecond = 80;

displayTime(timeSecond)      //this prevents the actual number from timeSecond from appearing
//timeHeader.innerHTML = `00:${timeSecond}`;    //not ' ' it's ` `

const countDown = setInterval ( ()=> {
    timeSecond--;
    displayTime(timeSecond);
    if(timeSecond < 0 || timeSecond < 1){        //prevents going beyond zero into negative
        clearInterval(countDown)
    }
}, 1000)

function displayTime(second){
    const min = Math.floor(second / 60);        //Math.floor removes decimals
    const sec = Math.floor(second % 60);
    timeHeader.innerHTML = `${min < 10 ? '0': ''}${min}:${sec < 10 ? '0': ''}${sec}`
}