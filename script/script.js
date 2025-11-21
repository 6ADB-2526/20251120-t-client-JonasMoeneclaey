/**
 * 
 */

const kindSelector = document.querySelector("#kinderen")

fetch("https://o-apiandclient-render.onrender.com/kinderen")
  .then((info) => info.json()).then((kinderen) => {
    kinderen.forEach(kind => {
        const newOption = document.createElement("option")
        newOption.value = kind.id
        newOption.innerHTML = `${kind.voornaam} ${kind.achternaam}`
        kindSelector.appendChild(newOption)
        
    });
  })