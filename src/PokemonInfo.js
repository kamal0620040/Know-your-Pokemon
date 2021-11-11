import React from "react";
import fetchPokemon from "./FetchPokemon";
import PokemonDataView from "./PokemonDataView";
import PokemonInfoFallback from "./PokemonInfoFallback";

function PokemonInfo({pokemonName}){
    const [state,setState] = React.useState({
        status : 'idle',
        pokemon : null,
        error : null
    })

    const {status,pokemon,error} = state;

    React.useEffect(()=>{
        if(!pokemonName){
            return;
        }
        setState({status:'pending'});
        fetchPokemon(pokemonName).then(
            pokemonData => {
                setState({pokemon:pokemonData,status:'resolved'})
            },
            err => {
                setState({error:err,status:'rejected'})
            }
        )
    },[pokemonName])

    if(status === 'idle'){
        return 'Submit a Pokemon.'
      }else if(status === 'pending'){
        return <PokemonInfoFallback name={pokemonName} />
      }else if(status === 'rejected'){
        return (
          <div role="alert">
            There was an error: <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
          </div>
        )
      }else if(status === 'resolved'){
        return <PokemonDataView pokemon={pokemon} />
      }
}

export default PokemonInfo;