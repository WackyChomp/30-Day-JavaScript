const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');

button.addEventListener('click', getJoke);

async function getJoke(){
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept' : 'application/json'
        }
    });
    const jokeObject = await jokeData.json();
    jokeText.innerHTML = jokeObject.joke;        /*the joke being fetch replaces default text in index.html*/
    /*console.log(jokeObject.joke)       /*the joke data is being fetch and displayed in console log*/
}