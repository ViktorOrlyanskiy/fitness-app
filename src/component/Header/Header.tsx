import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IHeader } from 'types';
import { SvgGenerator } from 'component/UI/SvgGenerator/SvgGenerator';
import './Header.scss';


interface HeaderProps extends IHeader { }


const Header: FC<HeaderProps> = ({ previousPage, btnLeft, btnReight, children, btnEvent }) => {

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

            <h2 className='header__title'>{children}</h2>

            <button onClick={btnEvent} className='header__btn'>
                {getNameReightBtn(btnReight)}
            </button>
        </header>
    );
}

export default Header;