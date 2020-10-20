const form = document.querySelector('form');
const factDiv = document.querySelector('.number-fact');

form.addEventListener('submit', (e)=>{
    e.preventDefault();       //prevents refreshing the page after pressing submit (before number API exists)
    const number = e.target.querySelector('input[type = "number"]').value;
    const loadText = "Wait for a moment...";
    factDiv.innerHTML = loadText;       //shows loadText when API fetches the data
    const numURL = "http://numbersapi.com/";       //https://cors-anywhere.herokuapp.com/
    fetch(numURL + number)
        .then(response => response.text())      /*console.log(response) */
        .then(text => factDiv.innerHTML = text);      /*console.log(text) */
    //console.log(number);    //shows number input in console
})