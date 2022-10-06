import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Actions.css'

function Actions () {
    return (
        <section>
            <div>
                <NavLink to="/favourites">Heart</NavLink>
            </div>
            <div>SIGN IN</div>
        </section>
    )
}
export default Actions;
