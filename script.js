const jokeBody=document.getElementById("joke");const clickBtn=document.getElementById("btn");let getJoke=()=>{const url="https://v2.jokeapi.dev/joke/Any";jokeBody.classList.remove("fade");fetch(url).then(response=>response.json()).then(result=>{jokeBody.textContent=result.joke;jokeBody.classList.add("fade")}).catch(error=>console.log("Ooops! There was an error",error))
console.log("Fetching you a JOKE")}
function handleButtonClick(){getJoke()}
clickBtn.addEventListener("click",handleButtonClick);getJoke()