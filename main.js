document.querySelector(".trueInput").addEventListener("keydown", handleInput);
function handleInput(event) {
  if (event.keyCode === 13) {
  }
}

fetch("https://pokeapi.co/api/v2/pokemon/" +
  (document.querySelector(".trueInput").value.toLowerCase() + "/"))
  console.log(document.querySelector(".trueInput").value.toLowerCase() + "/")
  
  .then(function(response){
    return response
  }
  .then(function(myJson){
console.log(myJson)
  })
  
  