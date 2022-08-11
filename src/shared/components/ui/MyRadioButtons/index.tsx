import React, { FC, useState, useEffect } from 'react';
import styles from './my-radio-buttons.module.scss';

interface MyRadioButtons {
    defaultValue?: string;
    options: { label: string; value: string }[];
    onChange: (arg1: string) => void;
}

export const MyRadioButtons: FC<MyRadioButtons> = ({
    defaultValue = '',
    options,
    onChange,
}) => {
    const handleChangeValue = (e: any) => {
        onChange(e.target.value);
    };

    return (
        <div className={styles.wrapper}>
            {options.map((option) => (
                <button
                    type="button"
                    className={
                        option.value === defaultValue
                            ? `${styles.btn} ${styles.active}`
                            : styles.btn
                    }
                    key={option.value}
                    onClick={(e) => handleChangeValue(e)}
                    value={option.value}>
                    {option.label}
                </button>
            ))}
        </div>
    );
};
