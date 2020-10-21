const timeHeader = document.querySelector('h1');
let timeSecond = 5;

timeHeader.innerHTML = `00:${timeSecond}`;    //not ' ' it's ` `

const countDown = setInterval ( ()=> {
    timeSecond--;
    timeHeader.innerHTML = `00:${timeSecond}`;
}, 1000)