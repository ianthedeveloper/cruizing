const emojiBody = document.querySelector(".emoji");
const jokeBody = document.getElementById("joke");
const clickBtn = document.getElementById("btn");

let getValue = () => {
    // Adding a cache-busting parameter to the url
    const url = "https://v2.jokeapi.dev/joke/Any";

    jokeBody.classList.remove("fade");
    fetch(url)
    .then(response => response.json())
    .then(result =>{ 
        // Updating the text content within jokeBody
        jokeBody.textContent = result.joke;
        jokeBody.classList.add("fade");
        })
    .catch(error => console.log("Error fetching code", error))
} 

clickBtn.addEventListener("click", getValue);
// Initial joke fetch when page loads
getValue();   




