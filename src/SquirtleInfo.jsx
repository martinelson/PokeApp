import React from 'react';

function SquirtleInfo({ squirtle }){
    var pokemonType = ""
    var pokemonName = ""
    var hp = ""
    var attack = "";
    var defense = "";
    var specialAttack = "";
    var specialDefense = "";
    var speed = "";
    if(squirtle.types){
        const types = squirtle.types
        types.forEach(function(type){
         pokemonType += type.type.name + " ";
        })
        pokemonName = squirtle.name.split('');
        pokemonName[0] = pokemonName[0].toUpperCase();
        pokemonName = pokemonName.join('');
        hp = squirtle.stats[0].base_stat;
        attack = squirtle.stats[1].base_stat;
        defense = squirtle.stats[2].base_stat;
        specialAttack = squirtle.stats[3].base_stat;
        specialDefense = squirtle.stats[4].base_stat;
        speed = squirtle.stats[5].base_stat;
    }

    return(
        <div className="squirtle-stats">
            <h2>{pokemonName}</h2>
            <h3>Number: {squirtle.id}</h3>
            <h3>Height (dm): {squirtle.height}</h3>
            <h3>Weight (hg): {squirtle.weight}</h3>
            <h3>Type: {pokemonType}</h3>
            <br/>
            <h2>Baseline Stats</h2>
            <h3>HP: {hp}</h3>
            <h3>Attack: {attack}</h3>
            <h3>Defense: {defense}</h3>
            <h3>Special Attack: {specialAttack}</h3>
            <h3>Special Defense: {specialDefense}</h3>
            <h3>Speed: {speed}</h3>
        </div>
    )
}

export default SquirtleInfo;