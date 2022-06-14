async function fetchPokemon(){
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${111}`);
  const result = await response.json();
  //console.log(result)
  const card = `
  <h2 class="title">PokeCard</h2>
  <div class="card">
    <div class="image"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${111}.png" alt=""></div>
    <h2 class="pokemonName">${result.name}</h2>
    <div class="stats">
      <div class="stats-content">
        <span>Type: <span class="grass">${result.types[0].type.name}</span> <span class="poison">${result.types[1].type.name}</span></span>
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