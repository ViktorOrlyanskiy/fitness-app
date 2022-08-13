import React, { FC, InputHTMLAttributes } from 'react';
import styles from './my-input.module.scss';

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    innerRef?: any;
}

const MyInput: FC<MyInputProps> = ({ label, ...props }) => {
    return (
        <div className={styles.item}>
            {label && <label>{label}</label>}
            <input {...props} />
        </div>
    );
};

export { MyInput };
