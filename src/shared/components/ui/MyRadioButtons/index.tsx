import { FC, useState } from 'react';
import { getStars } from 'shared/utils/getStars';
import styles from './my-radio-buttons.module.scss';

interface IMyRadioButtons {
    defaultValue?: string;
    options: { label: string; value: string }[];
    onChange: (arg1: string) => void;
}

export const MyRadioButtons: FC<IMyRadioButtons> = ({
    defaultValue = '',
    options,
    onChange,
}) => {
    const [value, setValue] = useState(defaultValue);
    const handleChangeValue = (e: any) => {
        setValue(e.currentTarget.value);
        onChange(e.currentTarget.value);
    };

    return (
        <div className={styles.wrapper}>
            {options.map((option) => (
                <button
                    type="button"
                    className={
                        option.value === value
                            ? `${styles.btn} ${styles.active}`
                            : styles.btn
                    }
                    key={option.value}
                    onClick={(e) => handleChangeValue(e)}
                    value={option.value}>
                    <div>{option.label}</div>
                    <div>{getStars(option.value)}</div>
                </button>
            ))}
        </div>
    );
};
