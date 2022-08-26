import { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IHeader } from 'shared/models';

import { SvgGenerator } from 'shared/components/ui/SvgGenerator';
import './header.scss';

const Header: FC<IHeader> = ({
    previousPage,
    handleClickTitle,
    btnLeft = 'chevron-left',
    btnRight,
    children,
    handleBtnRight,
}) => {
    const navigate = useNavigate();

    return (
        <header className="add-set__header header">
            {!!previousPage ? (
                <NavLink to={previousPage} className="header__btn">
                    <SvgGenerator id={btnLeft} />
                </NavLink>
            ) : (
                <button onClick={() => navigate(-1)} className="header__btn">
                    <SvgGenerator id={btnLeft} />
                </button>
            )}

            <h2 className="header__title" onClick={handleClickTitle}>
                {children}
            </h2>

            <button onClick={handleBtnRight} className="header__btn">
                {btnRight && <SvgGenerator id={btnRight} />}
            </button>
        </header>
    );
};

export default Header;
