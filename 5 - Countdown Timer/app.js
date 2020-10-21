const timeHeader = document.querySelector('h1');
let timeSecond = 5;

timeHeader.innerHTML = `00:${timeSecond}`;    //not ' ' it's ` `

const countDown = setInterval ( ()=> {
    timeSecond--;
    displayTime(timeSecond);
    if(timeSecond < 0 || timeSecond < 1){        //prevents going beyond zero into negative
        clearInterval(countDown)
    }
}, 1000)

function displayTime(second){
    const min = second / 60;
    const sec = second % 60;
    timeHeader.innerHTML = `${min}:${sec}`
}