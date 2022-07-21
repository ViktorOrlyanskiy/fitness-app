import React from 'react';
import styles from './my-input.module.scss';

const MyInput = ({ children, ...props }) => {
    return (
        <div className={styles.item}>
            <label className={styles}>{children}</label>
            <input className={styles} {...props} />
        </div>
    );
};

export default MyInput;
