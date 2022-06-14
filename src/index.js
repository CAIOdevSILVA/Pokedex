async function fetchPokemon(){
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${12}`);
  const result = await response.json();
  console.log(result)
  
  const numberOfTypes = () => {
    arrayOfTypes = [];
    result.types.forEach((element) => {
      arrayOfTypes.push(element.type.name)
    } )
    return arrayOfTypes.length === 1 ? `${arrayOfTypes[0]}`: `${arrayOfTypes[0]} | ${arrayOfTypes[1]}`;
  }
  
  const card = `
  <h2 class="title">Pokedex</h2>
  <div class="card">
    <div class="image"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${12}.png" alt=""></div>
    <h2 class="pokemonName">${result.name}</h2>
    <div class="stats">
      <div class="stats-content">
        <span>Type: ${numberOfTypes()}</span>
        <span>${result.stats[1].stat.name}: ${result.stats[1].base_stat}</span>
        <span>${result.stats[2].stat.name}: ${result.stats[2].base_stat}</span>
        <span>${result.stats[3].stat.name}: ${result.stats[3].base_stat}</span>
        <span>${result.stats[4].stat.name}: ${result.stats[4].base_stat}</span>
      </div>
    </div>
  </div>
  `
  const container = document.querySelector(".container");
  container.innerHTML = card
}

fetchPokemon()

