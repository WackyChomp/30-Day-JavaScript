const readMoreButton = document.querySelector('.read-more-button');
const text = document.querySelector('.text');

readMoreButton.addEventListener('click' , (e)=>{
    text.classList.toggle('show-more');
})