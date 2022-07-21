import React from 'react';

const MyButton = function ({ children, ...props }) {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};
export default MyButton;
