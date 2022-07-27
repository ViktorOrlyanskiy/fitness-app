import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IFooter } from 'shared/types';
import './footer.scss';

interface FooterProps extends IFooter {}

const Footer: FC<FooterProps> = ({ nextPage, children }) => {
    return (
        <footer className="footer">
            <NavLink to={nextPage} className="footer__btn">
                {children}
            </NavLink>
        </footer>
    );
};

export default Footer;