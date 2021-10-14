let myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

async function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let pokemon
  if (inputValue === '') {
    alert("Enter Pokemon ID or Name!");
  } else {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}/`).then(response => response.json()).then((data) => {
    pokemon = data;
    console.log(pokemon);
  });
    document.getElementById("to-do-list").appendChild(li);
  }

  let t = document.createTextNode(pokemon.name);
  li.appendChild(t);

  document.getElementById("myInput").value = "";
  let img = document.createElement("IMG");
  img.src = pokemon.sprites.front_default
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(img)
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}
