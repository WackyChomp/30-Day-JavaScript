const form = document.querySelector('form');
const factDiv = document.querySelector('.number-fact');

form.addEventListener('submit', (e)=>{
    e.preventDefault();       //prevents refreshing the page after pressing submit (before number API exists)
    const number = e.target.querySelector('input[type = "number"]').value;
    const loadText = "Wait for a moment...";
    factDiv.innerHTML = loadText;       //shows loadText when API fetches the data
    const numURL = "https://cors-anywhere.herokuapp.com/http://numbersapi.com/";
    fetch(numURL + number, {
        method: "GET",
        headers: {
            'x-requested-with': 'text/plain'
        }})
        .then(response => response.text())      /*console.log(response) */
        .then(text => factDiv.innerHTML = text);      /*console.log(text) */
    //console.log(number);    //shows number input in console
})

/*
Using   https://cors-anywhere.herokuapp.com/  it doesn't work in html "open with live server".
Removing this URL extension works but it will not be secure
*/