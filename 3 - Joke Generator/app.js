const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');
document.addEventListener('DOMContentLoaded', getJoke);   /*display joke instead of default text from HTML*/

button.addEventListener('click', getJoke);

//Method 1
function getJoke(){
    fetch('https://icanhazdadjoke.com/', {
        headers:{
            'Accept' : 'application/json'
        }
    }).then(data => data.json())
        .then(object => jokeText.innerHTML = object.joke);
}

/*    //Alternative Method: using async and await to fetch data
async function getJoke(){
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept' : 'application/json'
        }
    });
    const jokeObject = await jokeData.json();
    jokeText.innerHTML = jokeObject.joke;        /*the joke being fetch replaces default text in index.html*/
    /*console.log(jokeObject.joke)*/       /*the joke data is being fetch and displayed in console log*/
    //};

