import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='current-workout'>ТT</NavLink>
            <NavLink to='list-workouts'>CT</NavLink>
        </nav>
    )
}