import React from 'react';

function PokeInfo({ pokemon }) {
    var pokemonType = ""
    var pokemonName = ""
    if(pokemon.types){
        const types = pokemon.types
        types.forEach(function(type){
         pokemonType += type.type.name + " ";
        })
        pokemonName = pokemon.name.split('');
        pokemonName[0] = pokemonName[0].toUpperCase();
        pokemonName = pokemonName.join('');
    }
    
    return (
        <div className="poke-info">
            <p>Number: {pokemon.id}</p>
            <p>Name: {pokemonName}</p>
            <p>Height (dm): {pokemon.height}</p>
            <p>Weight (hg): {pokemon.weight}</p>
            <p>Types: {pokemonType}</p>

        </div>
    )
}

export default PokeInfo;