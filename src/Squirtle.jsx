import React, { useState } from 'react';
import SquirtleInfo from './SquirtleInfo'
import axios from 'axios';

function Squirtle(){
    const [squirtle, getSquirtle] = useState([]);

    function squirtleApi(){
            axios.get('https://pokeapi.co/api/v2/pokemon/7').then(res =>{
                getSquirtle(res.data)
            });
    }

    return(
        <div>
            <img className="squirtle-img" onLoad={squirtleApi} src="./images/7.png" alt="Squirtle"/>
            <SquirtleInfo squirtle = {squirtle}  />
        </div>

    )
}

export default Squirtle;