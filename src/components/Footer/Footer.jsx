import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';


function Footer({ to, children, ...props }) {
    return (
        <footer className="footer">
            <NavLink to={to} className='footer__btn'>{children}</NavLink>
        </footer>
    );
}

export default Footer;