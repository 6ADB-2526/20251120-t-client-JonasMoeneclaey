/**
 * 
 */

const kindSelector = document.querySelector("#kinderen")
const SelGeschenk = document.querySelector("#geschenken")
const DelGeschenk = document.querySelector("#DelGeschenken")

fetch("https://o-apiandclient-render.onrender.com/kinderen")
  .then((info) => info.json()).then((kinderen) => {
    kinderen.forEach(kind => {
        const newOption = document.createElement("option")
        newOption.value = kind.id
        newOption.innerHTML = `${kind.voornaam} ${kind.achternaam}`
        kindSelector.appendChild(newOption)
        
    });
  })

fetch("https://o-apiandclient-render.onrender.com/geschenken")
  .then((info) => info.json()).then((geschenken) => {
    geschenken.forEach(geschenk => {
        const newOption = document.createElement("option")
        newOption.value = geschenk.id
        newOption.innerHTML = geschenk.naam
        SelGeschenk.appendChild(newOption)
        
    });
  })

  SelGeschenk.addEventListener("change", (e) => {
    console.log(e.target.value)
  })

  kindSelector.addEventListener("change", (e) => {
      const options = {
        method: "...",
        headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  };

  })

fetch("https://o-apiandclient-render.onrender.com/geschenken")
  .then((info) => info.json()).then((geschenken) => {
    geschenken.forEach(geschenk => {
        const newOption = document.createElement("option")
        newOption.value = geschenk.id
        newOption.innerHTML = geschenk.naam
        DelGeschenk.appendChild(newOption)
        
    });
  })