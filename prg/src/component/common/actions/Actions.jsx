import React from 'react';
import {NavLink} from 'react-router-dom';

function Actions () {
    return (
        <section>
            <div>
                <NavLink activeClassName='is-active' to="/favourites">Heart</NavLink>
            </div>
            <div>SIGN IN</div>
        </section>
    )
}
export default Actions;
