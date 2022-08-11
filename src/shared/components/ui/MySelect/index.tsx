import { FC, useState, useEffect } from 'react';
import styles from './my-select.module.scss';

const chevron_down = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
    </svg>
);

interface MySelectProps {
    defaultValue?: string;
    options: { label: string; value: string }[];
    onChange: (arg1: string) => void;
}

export const MySelect: FC<MySelectProps> = ({
    defaultValue = '',
    options,
    onChange,
}) => {
    const [active, setActive] = useState(false);
    const [value, setValue] = useState(defaultValue);

    const handleChangeValue = (e: any) => {
        setValue(e.target.dataset.value);
        onChange(e.target.dataset.value);
        setActive(false);
    };

    const handleClickHeader = () => {
        active ? setActive(false) : setActive(true);
    };

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    return (
        <div
            className={
                active ? `${styles.wrapper} ${styles.active}` : styles.wrapper
            }>
            <div className={styles.header} onClick={handleClickHeader}>
                <span className={styles.current} data-value={value}>
                    {value}
                </span>
                <span className={styles.icon}>{chevron_down}</span>
            </div>

            {options.length > 0 && (
                <div className={styles.body}>
                    {options.map((option) => (
                        <div
                            className={styles.item}
                            key={option.value}
                            onClick={(e) => handleChangeValue(e)}
                            data-value={option.value}>
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
