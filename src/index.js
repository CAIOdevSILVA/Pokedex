async function fetchPokemon(){
  pokemons = []
  for(let i=1; i<=150; i++){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const result = await response.json();
    pokemons.push(result);
  }
  //console.log(pokemons)

  const numberOfTypes = (id) => {
    arrayOfTypes = [];
    pokemons[id].types.forEach((element) => {
      arrayOfTypes.push(element.type.name)
    } )
    return arrayOfTypes.length === 1 ? `<span class="type">${arrayOfTypes[0]}</span>` : `<span class="type">${arrayOfTypes[0]}</span> <span class="type2">${arrayOfTypes[1]}</span>`;
  }

  pokemons.forEach((element, index) => {
    const card = `
    <div class="card">
      <div class="image"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png" alt=""></div>
      <h2 class="pokemonName">${element.name}</h2>
      <div class="stats">
        <div class="stats-content">
          <span>Type: ${numberOfTypes(index)} </span>
          <span>${element.stats[1].stat.name}: ${element.stats[1].base_stat}</span>
          <span>${element.stats[2].stat.name}: ${element.stats[2].base_stat}</span>
          <span>${element.stats[3].stat.name}: ${element.stats[3].base_stat}</span>
          <span>${element.stats[4].stat.name}: ${element.stats[4].base_stat}</span>
        </div>
      </div>
    </div>
    `
    const container = document.querySelector(".container");
    const cardElements = document.createElement("div");
    cardElements.innerHTML = card
    container.appendChild(cardElements);
  })
}

fetchPokemon()

