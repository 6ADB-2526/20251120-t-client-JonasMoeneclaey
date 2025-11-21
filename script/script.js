

const kindSelector = document.querySelector("#kinderen")
const SelGeschenk = document.querySelector("#geschenken")
const DelGeschenk = document.querySelector("#DelGeschenken")
const geschenkenlijst = document.querySelector("#geschenkenlijst")

fetch("https://o-apiandclient-render.onrender.com/kinderen")
  .then((info) => info.json()).then((kinderen) => {
    kinderen.forEach(kind => {
        const newOption = document.createElement("option")
        newOption.value = kind.id
        newOption.innerHTML = `${kind.voornaam} ${kind.achternaam}`
        kindSelector.appendChild(newOption)
        console.log(kind)
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
      fetch("https://o-apiandclient-render.onrender.com/kinderen/" + e.target.value).then(info => info.json()).then(kind => {
        geschenkenlijst.innerHTML = ""
        
        const geschenkID = kind.forEach(kind => kind.geschenkID)
        .forEach(geschenk => geschenk.id).forEach(geschenk =>{
                const newList = document.createElement("li")
                newList.innerHTML = geschenk
                geschenkenlijst.appendChild(newList)
      })
        console.log(geschenkID);
        
        
      })
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