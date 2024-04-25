const emojiBody = document.querySelector(".emoji");
const jokeBody = document.getElementById("joke");
const clickBtn = document.getElementById("btn");

let getValue = () => {
    fetch("https://v2.jokeapi.dev/joke/Any")
    .then(response => response.json())
    .then(result =>{ 
        // Updating the text content within jokeBody
        jokeBody.textContent = result.joke;
        })
    .catch(error => console.log("Error fetching code", error))
} 

clickBtn.addEventListener("click", getValue);
// Initial joke fetch when page loads
getValue();   




