const cursor = document.querySelector('.cursor');

/*Everytime you move the cursor on page, the function runs */
window.addEventListener('mousemove', (e)=>{
    cursor.style.left = e.pageX + 'px';        /*Adding the 'px' causes the cursor to follow the mouse */
    cursor.style.top = e.pageY + 'px';
    console.log(e.pageX, e.pageY)    /*Shows the coordinates*/
});