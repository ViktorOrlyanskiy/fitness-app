import React from 'react';
import cl from './MyInput.module.scss';




const MyInput = ({ children, ...props }) => {
    return (
        <div className={cl.item}>
            <label className={cl}>{children}</label>
            <input className={cl} {...props} />
        </div>
    )
}

export default MyInput;