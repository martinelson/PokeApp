import React, { useState } from 'react';
import PokeInfo from './PokeInfo';
import axios from 'axios';

function Grass(){
    const [num, getNum] = useState();
    const [pokemon, getPokemon] = useState([]);
    function newPokemon(){
        setTimeout(() => {
            const newNum = Math.floor(Math.random()*151)+1;
            const pokeImg = "./images/"+ newNum.toString() + ".png";
            getNum(pokeImg);
            axios.get('https://pokeapi.co/api/v2/pokemon/'+newNum.toString()).then(res => {
                getPokemon(res.data)
            })
        }, 550);
    }
    return(
        <div className="grass-parent">
        <div className="grass-background">
        <img className="grass-other" src="./images/grass.png" alt="Grass"/>
        <img id="grass" className="grass-base" src="./images/grass.png" alt="Grass-Click" onClick={newPokemon}/>
        <img className="grass-other" src="./images/grass.png" alt="Grass"/>
        </div>
        <img className="pokemon" src={num} alt="Pokemon"/>
        <div className="pokeball-bg">
        <div className="pokeball">
        <PokeInfo pokemon = {pokemon} />
        <div className="pokeball__button"></div>
        </div>
        </div>
        </div>

    )
}

export default Grass;