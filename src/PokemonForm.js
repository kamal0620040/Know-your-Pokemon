import React from "react";

function PokemonForm({pokemonName:externalPokemonName,initialPokemonName = externalPokemonName || '',onSubmit}){

    const[pokemonName,setPokemonName] = React.useState('');

    React.useEffect(()=>{
        if(typeof externalPokemonName === 'string'){
            setPokemonName(externalPokemonName);
        }
    },[externalPokemonName])

    function handleChange(e){
        // setPokemonName(e.target.value);
        setPokemonName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        onSubmit(pokemonName);
    }

    return (
        <form onClick={handleSubmit}>
            <input id="pokemonName-input" name="pokemonName" onChange={handleChange} placeholder="Pokemon Name..." value={pokemonName} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default PokemonForm;