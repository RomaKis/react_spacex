import React from 'react';
import {Navbar, Actions} from '../../common';
import {NavLink} from 'react-router-dom';

function Header() {
    return (
        <section >
            <section >
                <section >
                    <NavLink end to="/">LOGO</NavLink>
                </section>
                <section >
                    <Navbar/>
                </section>
                <section>
                    <Actions/>
                </section>
            </section>

        </section>
    )
}

export default Header;
