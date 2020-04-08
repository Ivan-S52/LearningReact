import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.nav}>
        <ul>
            <li className={s.item}>
                <NavLink to="../Profile/">Profile</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to="../Dialogs/">Dialogs</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to="../News/">News</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to="../Music/">Music</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to="../Settings/">Settings</NavLink>
            </li>
        </ul>
    </nav>
}

export default Navbar;