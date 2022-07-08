import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IHeader } from 'types';
import { useAppDispatch } from 'hooks';

import { SvgGenerator } from 'component/UI/SvgGenerator/SvgGenerator';
import './Header.scss';


interface HeaderProps extends IHeader { }


const Header: FC<HeaderProps> = (
    {
        previousPage,
        handlerClickTitle,
        btnLeft,
        btnRight,
        children,
        btnEvent
    }) => {
    const dispatch = useAppDispatch();

    const getNameLeftBtn = (id = 'chevron-left') => {
        return (id.search(/[a-zA-Z]/g) > -1) ? <SvgGenerator id={id} /> : id
    }
    const getNameReightBtn = (id = 'готово') => {
        return (id.search(/[a-zA-Z]/g) > -1) ? <SvgGenerator id={id} /> : id
    }


    return (
        <header className='add-set__header header'>
            <NavLink to={previousPage} className='header__btn'>
                {getNameLeftBtn(btnLeft)}
            </NavLink>

            <h2
                className='header__title'
                onClick={handlerClickTitle}
            >
                {children}
            </h2>

            <button onClick={btnEvent} className='header__btn'>
                {getNameReightBtn(btnRight)}
            </button>
        </header>
    );
}

export default Header;