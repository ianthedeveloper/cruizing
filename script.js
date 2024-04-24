// const emojiBody = document.getElementById("emoji");
// const jokeBody = document.getElementById("joke");
// const clickBtn = document.getElementById("btn");

// let getValue = () => {
//     fetch("https://v2.jokeapi.dev/joke/Any")
//     .then(response => response.json())
//     .then(result => emojiBody = `${result.joke}`)
// } 

// clickBtn.addEventListener("click", getValue);
// getValue();




const emojiBody = document.getElementById("emoji");
const jokeBody = document.getElementById("joke");
const clickBtn = document.getElementById("btn");

let getValue = () => {
    fetch("https://v2.jokeapi.dev/joke/Any")
    .then(response => response.json())
    .then(result => {
        emojiBody.textContent = result.joke;
    })
    .catch(error => {
        console.error('Error fetching joke:', error);
    });
}; 

clickBtn.addEventListener("click", getValue);
getValue();