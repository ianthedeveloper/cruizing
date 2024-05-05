// const emojiBody = document.querySelector(".emoji");
const jokeBody = document.getElementById("joke");
const clickBtn = document.getElementById("btn");

let getEmoji = () => {
    const url2 = "https://robohash.org/set_set1.png?size=200x200";

    emojiBody.classList.remove("fade");
    fetch(url2)
    .then(response => response.blob())
    .then(blob =>{
        const imageUrl = URL.createObjectURL(blob);
        emojiBody.innerHTML = `<img src="${imageUrl}" alt="Emoji"/>`; // response.blob() is used to fetch images
        emojiBody.classList.add("fade");
    })
    .catch(error => console.log("Error fetching emoji", error))

    console.log("Fetching emoji");
}


let getJoke = () => {
    const url = "https://v2.jokeapi.dev/joke/Any";

    jokeBody.classList.remove("fade");
    fetch(url)
    .then(response => response.json())
    .then(result =>{ 
        // Updating the text content within jokeBody
        jokeBody.textContent = result.joke;
        jokeBody.classList.add("fade");
        })
    .catch(error => console.log("Ooops! There was an error", error))

    console.log("Fetching you a JOKE");
} 

function handleButtonClick (){
    getEmoji();
    getJoke();
}

clickBtn.addEventListener("click", handleButtonClick);
// Initial joke fetch when page loads
getEmoji();
getJoke();





