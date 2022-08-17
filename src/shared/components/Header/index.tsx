import { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IHeader } from 'shared/models';

import { SvgGenerator } from 'shared/components/ui/SvgGenerator';
import './header.scss';

const Header: FC<IHeader> = ({
    previousPage,
    handleClickTitle,
    btnLeft,
    btnRight,
    children,
    btnEvent,
}) => {
    const navigate = useNavigate();
    const getNameLeftBtn = (id = 'chevron-left') => {
        return id.search(/[a-zA-Z]/g) > -1 ? <SvgGenerator id={id} /> : id;
    };
    const getNameRightBtn = (id = 'plus') => {
        return id.search(/[a-zA-Z]/g) > -1 ? <SvgGenerator id={id} /> : id;
    };

    return (
        <header className="add-set__header header">
            {!!previousPage ? (
                <NavLink to={previousPage} className="header__btn">
                    {getNameLeftBtn(btnLeft)}
                </NavLink>
            ) : (
                <button onClick={() => navigate(-1)} className="header__btn">
                    {getNameLeftBtn(btnLeft)}
                </button>
            )}

            <h2 className="header__title" onClick={handleClickTitle}>
                {children}
            </h2>

            <button onClick={btnEvent} className="header__btn">
                {getNameRightBtn(btnRight)}
            </button>
        </header>
    );
};

export default Header;
