import { FC, useState } from 'react';
import { Stars } from 'shared/components/ui/Stars';
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
                    value={option.value}
                    onClick={handleChangeValue}>
                    <div>{option.label}</div>
                    <div>
                        <Stars type={option.value} />
                    </div>
                </button>
            ))}
        </div>
    );
};
