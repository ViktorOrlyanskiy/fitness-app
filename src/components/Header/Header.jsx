import React from 'react';
import { NavLink } from 'react-router-dom';
import { SvgGeneration } from '../UI/SvgGeneration/SvgGeneration'
import './Header.scss';



function Header({ children, ...props }) {

    const getNameLeftBtn = (id = 'chevron-left') => {
        return (id.search(/[a-zA-Z]/g) > -1) ? <SvgGeneration id={id} /> : id
    }
    const getNameReightBtn = (id = 'Готово') => {
        return (id.search(/[a-zA-Z]/g) > -1) ? <SvgGeneration id={id} /> : id
    }

    return (
        <header className='add-set__header header'>
            <NavLink to={props.to} className='header__btn'>{getNameLeftBtn(props.btnLeft)}</NavLink>
            <h2 className='header__title'>{children}</h2>
            <button onClick={props.btnEvent} className='header__btn'>{getNameReightBtn(props.btnReight)}</button>
        </header>
    );
}

export default Header;