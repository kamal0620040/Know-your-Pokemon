import React from "react";
import PokemonForm from "./PokemonForm";
import PokemonInfo from "./PokemonInfo";

function App() {
  const [pokemonName,setPokemonName] = React.useState('');

  function handleSubmit(newPokemonName){
    setPokemonName(newPokemonName);
  }

  return (
    <div className="App">
      <h2>Know Your Pokemon</h2>
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <PokemonInfo pokemonName = {pokemonName} />
      </div>
    </div>
  );
}

export default App;
