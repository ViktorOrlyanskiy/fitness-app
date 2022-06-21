import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IFooter } from 'types';
import './Footer.scss';


interface FooterProps extends IFooter { }


const Footer: FC<FooterProps> = ({ to, children }) => {

    return (
        <footer className="footer">
            <NavLink to={to} className='footer__btn'>{children}</NavLink>
        </footer>
    );
}

export default Footer;