import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = ()=>{
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to={'/LoginView'}></NavLink>
                </li>
            </ul>
        </nav>
    )
};

export {Menu}