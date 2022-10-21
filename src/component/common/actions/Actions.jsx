import React from 'react';
import {NavLink} from 'react-router-dom';
import HeartImg from '../../../assets/images/heart.png'
import style from './Actions.css'

function Actions () {
    return (
        <div class="action-flex">
            <div class="heart-btn">
                <NavLink to="/favourites"><div class="img-div"></div></NavLink>
            </div>
            <div class="sign-in-btn">SIGN IN</div>
        </div>
    )
}
export default Actions;
