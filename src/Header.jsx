import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    function reloadPage(){
        window.location.reload();
    }
    return(
        <div className="title">
            <h1 className="title-name">PokeApp</h1>
            <ul>
                <li onClick={reloadPage}><Link  to="/">Learn about a random Pokemon</Link></li>
                <li><Link to="/fav">My Favorite Pokemon</Link></li>
            </ul>
        </div>
    )
}

export default Header;